import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { Word, WordDifficulty } from '@/types/game';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic = 'فیلم و سریال', count = 5, difficulty = 'MEDIUM' } = body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
You are MIMEO, the AI Game Master for the Persian Pantomime & Charades party game.
Generate ${count} creative, hilarious, and playable Persian Pantomime words or situation phrases for the topic: "${topic}".
Difficulty level: ${difficulty}.

Return ONLY a JSON array with this exact structure without markdown code fences:
[
  {
    "text": "کلمه یا عبارت پانتومیم به فارسی",
    "category": "ai_generated",
    "difficulty": "${difficulty}",
    "points": ${difficulty === 'EASY' ? 10 : difficulty === 'MEDIUM' ? 20 : difficulty === 'HARD' ? 35 : 50},
    "hint": "یک راهنمایی کوتاه، هوشمندانه یا طنز برای بازیگر"
  }
]
`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const text = response.text?.trim();
        if (text) {
          const rawWords = JSON.parse(text);
          const words: Word[] = rawWords.map((item: Partial<Word>, idx: number) => ({
            id: `ai_${Date.now()}_${idx}`,
            text: item.text || 'کلمه پانتومیم هوش مصنوعی',
            category: 'ai_generated',
            difficulty: (item.difficulty as WordDifficulty) || 'MEDIUM',
            points: Number(item.points) || 20,
            hint: item.hint || 'راهنمایی اختصاصی میمو',
            isCustomAi: true,
          }));
          return NextResponse.json({ success: true, data: words });
        }
      } catch (err) {
        console.error('Gemini word generation failed, using fallback', err);
      }
    }

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
    ];

    return NextResponse.json({ success: true, data: fallbackWords });
  } catch (error) {
    console.error('Word API Error', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
