import { AiGameRecommendation, Word, WordDifficulty } from '@/types/game';

const DEFAULT_TIMEOUT_MS = 12000;
const REACTION_TIMEOUT_MS = 4000;

function getApiBaseUrl(): string {
  // Inside Capacitor WebView pointing to the production Next.js server,
  // relative '/api/...' resolves directly against the configured server.url.
  return process.env.NEXT_PUBLIC_API_BASE_URL || '';
}

async function postJsonWithTimeout<T>(
  path: string,
  payload: Record<string, unknown>,
  timeoutMs: number
): Promise<T> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    throw new Error('اینترنت متصل نیست. لطفاً اتصال خود را بررسی کنید و دوباره تلاش نمایید.');
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${getApiBaseUrl()}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`خطای سرور (${res.status}). لطفاً دوباره تلاش کنید.`);
    }

    return (await res.json()) as T;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('زمان پاسخ‌گویی سرور به پایان رسید. لطفاً اتصال اینترنت را بررسی کنید.');
    }
    if (error instanceof TypeError) {
      throw new Error('خطا در برقراری ارتباط با سرور پانتومیکس.');
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function requestAiRecommendation(params: {
  playerCount: number;
  groupType: string;
  mood: string;
  minutes: number;
}): Promise<AiGameRecommendation> {
  const response = await postJsonWithTimeout<{
    success: boolean;
    data?: AiGameRecommendation;
    error?: string;
  }>('/api/ai/recommend', params, DEFAULT_TIMEOUT_MS);

  if (!response.success || !response.data) {
    throw new Error(response.error || 'پاسخ معتبری از هوش مصنوعی دریافت نشد.');
  }
  return response.data;
}

export async function requestAiWords(params: {
  topic: string;
  count?: number;
  difficulty?: WordDifficulty;
}): Promise<Word[]> {
  const response = await postJsonWithTimeout<{
    success: boolean;
    data?: Word[];
    error?: string;
  }>(
    '/api/ai/words',
    {
      topic: params.topic,
      count: params.count ?? 5,
      difficulty: params.difficulty ?? 'MEDIUM',
    },
    DEFAULT_TIMEOUT_MS
  );

  if (!response.success || !response.data) {
    throw new Error(response.error || 'تولید کلمات با خطا مواجه شد.');
  }
  return response.data;
}

export async function requestAiReaction(params: {
  isSuccess: boolean;
  score: number;
  combo: number;
}): Promise<string | null> {
  try {
    const response = await postJsonWithTimeout<{
      success: boolean;
      reaction?: string;
    }>('/api/ai/reaction', params, REACTION_TIMEOUT_MS);
    return response.success && response.reaction ? response.reaction : null;
  } catch {
    return null;
  }
}
