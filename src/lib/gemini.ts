import { GoogleGenAI, ThinkingLevel, type Schema } from '@google/genai';

export type GeminiFallbackReason =
  | 'missing_key'
  | 'timeout'
  | 'invalid_key'
  | 'quota_exceeded'
  | 'model_not_found'
  | 'model_unavailable'
  | 'invalid_argument'
  | 'invalid_response'
  | 'api_error';

export type GeminiGenerateResult =
  | {
      ok: true;
      text: string;
      model: string;
    }
  | {
      ok: false;
      reason: GeminiFallbackReason;
      model?: string;
      statusCode?: number;
    };

const DEFAULT_MODEL_CANDIDATES = [
  'gemini-4-hydrogen',
  'gemini-3.1-flash-lite',
] as const;

function getCandidateModels(): string[] {
  const custom = process.env.GEMINI_MODEL?.trim();
  const list = custom
    ? [custom, ...DEFAULT_MODEL_CANDIDATES]
    : [...DEFAULT_MODEL_CANDIDATES];
  return Array.from(new Set(list));
}

function getErrorStatus(err: unknown): number | undefined {
  if (err && typeof err === 'object' && 'status' in err) {
    const val = (err as { status?: unknown }).status;
    if (typeof val === 'number') return val;
  }
  return undefined;
}

function redactSecrets(text: string): string {
  return text.replace(/AIza[0-9A-Za-z_-]{20,}/g, '[REDACTED_KEY]').slice(0, 260);
}

function classifyGeminiError(err: unknown): GeminiFallbackReason {
  const status = getErrorStatus(err);
  const msg = err instanceof Error ? err.message : String(err);
  const lower = msg.toLowerCase();

  if (
    status === 401 ||
    status === 403 ||
    lower.includes('api_key_invalid') ||
    lower.includes('api key not valid') ||
    lower.includes('api key expired') ||
    lower.includes('permission_denied')
  ) {
    return 'invalid_key';
  }
  if (
    status === 429 ||
    lower.includes('resource_exhausted') ||
    lower.includes('quota')
  ) {
    return 'quota_exceeded';
  }
  if (
    status === 503 ||
    status === 500 ||
    status === 502 ||
    status === 504 ||
    lower.includes('unavailable') ||
    lower.includes('high demand') ||
    lower.includes('overloaded')
  ) {
    return 'model_unavailable';
  }
  if (
    status === 404 ||
    lower.includes('not_found') ||
    lower.includes('is not found') ||
    lower.includes('unsupported model')
  ) {
    return 'model_not_found';
  }
  if (
    status === 400 ||
    lower.includes('invalid_argument')
  ) {
    return 'invalid_argument';
  }
  if (lower.includes('timeout') || lower.includes('aborted')) {
    return 'timeout';
  }
  return 'api_error';
}

export function stripJsonFences(raw: string): string {
  return raw
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
}

export async function generateWithGemini(params: {
  prompt: string;
  timeoutMs: number;
  responseMimeType?: string;
  responseSchema?: Schema;
}): Promise<GeminiGenerateResult> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, reason: 'missing_key' };
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const models = getCandidateModels();
  const startedAt = Date.now();
  let lastReason: GeminiFallbackReason = 'api_error';
  let lastModel: string | undefined;
  let lastStatus: number | undefined;

  for (const model of models) {
    const elapsed = Date.now() - startedAt;
    const remainingMs = params.timeoutMs - elapsed;
    if (remainingMs <= 500) {
      return {
        ok: false,
        reason: 'timeout',
        model: lastModel,
        statusCode: lastStatus,
      };
    }

    lastModel = model;
    const supportsThinkingLevel =
      model.startsWith('gemini-4-') || model.startsWith('gemini-3.');

    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const timeoutPromise = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error('Gemini request timeout')), remainingMs);
      });

      const generatePromise = ai.models.generateContent({
        model,
        contents: params.prompt,
        config: {
          ...(params.responseMimeType ? { responseMimeType: params.responseMimeType } : {}),
          ...(params.responseSchema ? { responseSchema: params.responseSchema } : {}),
          ...(supportsThinkingLevel
            ? { thinkingConfig: { thinkingLevel: ThinkingLevel.LOW } }
            : {}),
        },
      });

      const response = await Promise.race([generatePromise, timeoutPromise]);
      const text = response?.text?.trim();
      if (text) {
        return { ok: true, text, model };
      }

      lastReason = 'invalid_response';
    } catch (err) {
      lastReason = classifyGeminiError(err);
      lastStatus = getErrorStatus(err);
      const errMsg = redactSecrets(err instanceof Error ? err.message : String(err));
      console.error(`[PantoMix][Gemini] model=${model} reason=${lastReason} status=${lastStatus ?? 'none'}: ${errMsg}`);

      // Stop immediately if the API key itself is rejected; otherwise try backup model candidates
      if (lastReason === 'invalid_key') {
        return {
          ok: false,
          reason: lastReason,
          model,
          statusCode: lastStatus,
        };
      }
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  return {
    ok: false,
    reason: lastReason,
    model: lastModel,
    statusCode: lastStatus,
  };
}
