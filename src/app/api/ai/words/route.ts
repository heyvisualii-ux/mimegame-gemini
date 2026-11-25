import { NextResponse } from 'next/server';
import { Type } from '@google/genai';
import { Word, WordDifficulty } from '@/types/game';
import {
  DEFAULT_GEMINI_TIMEOUT_MS,
  generateWithGemini,
  stripJsonFences,
} from '@/lib/gemini';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { topic = 'فیلم و سریال', count = 5, difficulty = 'MEDIUM' } = body;
    const safeCount = Math.min(20, Math.max(1, Number(count) || 5));

    const prompt = `
You are "Panto" (پانتو), the groovy, comedic 70s AI Game Master for PantoMix (پانتومیکس - Persian Pantomime & Charades party game).
Generate ${safeCount} creative, hilarious, and playable Persian Pantomime words or situation phrases for the topic: "${topic}".
Difficulty level: ${difficulty}.

Return ONLY a JSON array of ${safeCount} objects matching the requested schema.
Points guide: EASY=10, MEDIUM=20, HARD=35, EXTREME=50.
`;

    const result = await generateWithGemini({
      route: '/api/ai/words',
      prompt,
      timeoutMs: DEFAULT_GEMINI_TIMEOUT_MS,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            text: {
              type: Type.STRING,
              description: 'کلمه یا عبارت پانتومیم به فارسی',
            },
            difficulty: {
              type: Type.STRING,
              description: 'EASY, MEDIUM, HARD, or EXTREME',
            },
            points: {
              type: Type.NUMBER,
              description: 'امتیاز کلمه',
            },
            hint: {
              type: Type.STRING,
              description: 'یک راهنمایی کوتاه، هوشمندانه یا طنز برای بازیگر',
            },
          },
          required: ['text', 'hint'],
        },
      },
    });

    if (result.ok) {
      try {
        const rawWords = JSON.parse(stripJsonFences(result.text));
        if (Array.isArray(rawWords) && rawWords.length > 0) {
          const defaultPoints =
            difficulty === 'EASY' ? 10 : difficulty === 'MEDIUM' ? 20 : difficulty === 'HARD' ? 35 : 50;
          const words: Word[] = rawWords.map((item: Partial<Word>, idx: number) => ({
            id: `ai_${Date.now()}_${idx}`,
            text: item.text || 'کلمه پانتومیم هوش مصنوعی',
            category: 'ai_generated',
            difficulty: (item.difficulty as WordDifficulty) || (difficulty as WordDifficulty),
            points: Number(item.points) || defaultPoints,
            hint: item.hint || 'راهنمایی اختصاصی پانتو',
            isCustomAi: true,
          }));
          return NextResponse.json({
            success: true,
            source: 'gemini',
            model: result.model,
            data: words,
          });
        }
      } catch (parseErr) {
        const parseMsg = parseErr instanceof Error ? parseErr.message : String(parseErr);
        console.error(
          `[PantoMix][Gemini] route=/api/ai/words model=${result.model} durationMs=${result.durationMs} status=200 reason=invalid_response message="Invalid JSON: ${parseMsg}"`
        );
      }
    }

    const fallbackReason = result.ok ? 'invalid_response' : result.reason;

    // Dynamic Fallback Words
    const fallbackWords: Word[] = [
      {
        id: `ai_fallback_1_${Date.now()}`,
        text: `ربات هوش مصنوعی در حال رقصیدن سنتی ایرانی (${topic})`,
        category: 'ai_generated',
        difficulty: difficulty as WordDifficulty,
        points: 25,
        hint: 'حرکات مکانیکی دست هم‌زمان با بشکن زدن',
        isCustomAi: true,
      },
      {
        id: `ai_fallback_2_${Date.now()}`,
        text: `فضانوردی که کلاه ایمنی‌اش را گم کرده (${topic})`,
        category: 'ai_generated',
        difficulty: difficulty as WordDifficulty,
        points: 30,
        hint: 'نگه داشتن نفس و چشم گرد کردن در فضا',
        isCustomAi: true,
      },
      {
        id: `ai_fallback_3_${Date.now()}`,
        text: `آشپز معروفی که غذای بیش از حد تند درست کرده (${topic})`,
        category: 'ai_generated',
        difficulty: difficulty as WordDifficulty,
        points: 20,
        hint: 'آتش گرفتن زبان و باد زدن با دستمال',
        isCustomAi: true,
      },
      {
        id: `ai_fallback_4_${Date.now()}`,
        text: `تلاش برای بستن چمدان پر از سوغاتی (${topic})`,
        category: 'ai_generated',
        difficulty: difficulty as WordDifficulty,
        points: 20,
        hint: 'پریدن و نشستن با تمام وزن روی چمدان',
        isCustomAi: true,
      },
      {
        id: `ai_fallback_5_${Date.now()}`,
        text: `خواننده‌ای که متن ترانه را در کنسرت فراموش کرده (${topic})`,
        category: 'ai_generated',
        difficulty: difficulty as WordDifficulty,
        points: 35,
        hint: 'گرفتن میکروفن به سمت تماشاچی‌ها تا آنها بخوانند',
        isCustomAi: true,
      },
    ].slice(0, safeCount);

    return NextResponse.json({
      success: true,
      source: 'fallback',
      fallbackReason,
      data: fallbackWords,
    });
  } catch (error) {
    console.error('Word API Error', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
