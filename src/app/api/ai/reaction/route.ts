import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { isSuccess = true, score = 0, combo = 1 } = body;

  const fallbacksSuccess = [
    'ایول داری! پانتو حسابی کیف کرد! 🎭🔥',
    'فوق‌العاده بود! امتیاز درخشان تیم! 🎉',
    `کامبو ${combo} تایی! کی جلوتون رو بگیره؟! ⚡`,
    'استاد پانتومیم خودتی، بقیه اداتم نمی‌تونن دربیارن! 👑',
    'عالی بود! صحنه رو به آتیش کشیدید! 🌟',
  ];

  const fallbacksSkip = [
    'فدای سرت! کلمه بعدی رو با قدرت بزن! 💪',
    'کلمه سختی بود، بعدی صددرصد مال شماست! ⭐',
    'اشکالی نداره، پانتو بهتون ایمان داره! 💛',
    'تمرکز کن، راند هنوز تموم نشده! ⏱️',
  ];

  const list = isSuccess ? fallbacksSuccess : fallbacksSkip;
  const defaultReaction = list[Math.floor(Math.random() * list.length)];

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
You are "Panto", the funny groovy mascot of PantoMix (پانتومیکس - Persian Pantomime party game).
Give a 1-sentence hilarious, short Persian encouraging or celebratory reaction for a player who just ${
        isSuccess ? 'GUESSED CORRECTLY' : 'SKIPPED/FAILED'
      } (Total Score: ${score}, Combo: ${combo}).
Keep it maximum 10 words, energetic, funny, and warm. Output raw Persian text only, no quotes, no markdown.
`;

      const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 2500));
      const generatePromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      const response = await Promise.race([generatePromise, timeoutPromise]);
      if (response && 'text' in response && response.text) {
        const text = response.text.trim().replace(/["`]/g, '');
        if (text) {
          return NextResponse.json({ success: true, reaction: text });
        }
      }
    } catch (err) {
      console.error('Reaction generation error', err);
    }
  }

  return NextResponse.json({ success: true, reaction: defaultReaction });
}
