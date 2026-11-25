import { GoogleGenAI, type Schema } from '@google/genai';

export const DEFAULT_GEMINI_MODEL = 'gemini-3.1-flash-lite';
export const DEFAULT_GEMINI_TIMEOUT_MS = 30000;

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
      durationMs: number;
    }
  | {
      ok: false;
      reason: GeminiFallbackReason;
      model: string;
      durationMs: number;
      statusCode?: number;
    };

function getTargetModel(): string {
  const custom = process.env.GEMINI_MODEL?.trim();
  return custom || DEFAULT_GEMINI_MODEL;
}

function getErrorStatus(err: unknown): number | undefined {
  if (err && typeof err === 'object' && 'status' in err) {
    const val = (err as { status?: unknown }).status;
    if (typeof val === 'number') return val;
  }
  return undefined;
}

function redactSecrets(text: string, apiKey?: string): string {
  let sanitized = text;
  if (apiKey && apiKey.length >= 6) {
    sanitized = sanitized.split(apiKey).join('[REDACTED_KEY]');
  }
  return sanitized
    .replace(/AIza[0-9A-Za-z_-]{10,}/g, '[REDACTED_KEY]')
    .replace(/(x-goog-api-key\s*[:=]\s*)[^\s,;]+/gi, '$1[REDACTED_KEY]')
    .replace(/([?&]key=)[^&\s]+/gi, '$1[REDACTED_KEY]')
    .replace(/(Bearer\s+)[A-Za-z0-9._-]+/gi, '$1[REDACTED_TOKEN]')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 300);
}

function classifyGeminiError(err: unknown): GeminiFallbackReason {
  const status = getErrorStatus(err);
  const msg = err instanceof Error ? err.message : String(err);
  const name = err instanceof Error ? err.name.toLowerCase() : '';
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
  if (status === 400 || lower.includes('invalid_argument')) {
    return 'invalid_argument';
  }
  if (
    name === 'aborterror' ||
    lower.includes('timeout') ||
    lower.includes('timed out') ||
    lower.includes('etimedout') ||
    lower.includes('aborted')
  ) {
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
  route?: string;
  prompt: string;
  timeoutMs?: number;
  responseMimeType?: string;
  responseSchema?: Schema;
}): Promise<GeminiGenerateResult> {
  const route = params.route || 'unknown';
  const model = getTargetModel();
  const timeoutMs = Math.max(1000, params.timeoutMs ?? DEFAULT_GEMINI_TIMEOUT_MS);
  const startedAt = Date.now();

  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    const durationMs = Date.now() - startedAt;
    console.warn(
      `[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=none reason=missing_key`
    );
    return { ok: false, reason: 'missing_key', model, durationMs };
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      timeout: timeoutMs,
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      timer = setTimeout(() => {
        const timeoutErr = new Error(`Gemini request timeout after ${timeoutMs}ms`);
        controller.abort(timeoutErr);
        reject(timeoutErr);
      }, timeoutMs);
    });

    const generatePromise = ai.models.generateContent({
      model,
      contents: params.prompt,
      config: {
        abortSignal: controller.signal,
        ...(params.responseMimeType ? { responseMimeType: params.responseMimeType } : {}),
        ...(params.responseSchema ? { responseSchema: params.responseSchema } : {}),
      },
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    const durationMs = Date.now() - startedAt;
    const text = response?.text?.trim();

    if (text) {
      console.info(
        `[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=200 ok=true`
      );
      return { ok: true, text, model, durationMs };
    }

    console.warn(
      `[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=200 reason=invalid_response message="Empty text returned by Gemini"`
    );
    return {
      ok: false,
      reason: 'invalid_response',
      model,
      durationMs,
      statusCode: 200,
    };
  } catch (err) {
    const durationMs = Date.now() - startedAt;
    const reason = classifyGeminiError(err);
    const statusCode = getErrorStatus(err);
    const sanitizedError = redactSecrets(
      err instanceof Error ? err.message : String(err),
      apiKey
    );

    console.error(
      `[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=${statusCode ?? 'none'} reason=${reason} message="${sanitizedError}"`
    );

    return {
      ok: false,
      reason,
      model,
      durationMs,
      statusCode,
    };
  } finally {
    if (timer) clearTimeout(timer);
  }
}
