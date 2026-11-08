import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { isSuccess = true, score = 0, combo = 1 } = body;

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

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
        });

        const text = response.text?.trim().replace(/["`]/g, '');
        if (text) {
          return NextResponse.json({ success: true, reaction: text });
        }
      } catch (err) {
        console.error('Reaction generation error', err);
      }
    }

    const fallbacksSuccess = [
      'ایول داری! میمو حسابی کیف کرد! 🎭🔥',
      'فوق‌العاده بود! امتیاز درخشان تیم! 🎉',
      `کامبو ${combo} تایی! کی جلوتون رو بگیره؟! ⚡`,
      'استاد پانتومیم خودتی، بقیه اداتم نمی‌تونن دربیارن! 👑',
      'عالی بود! صحنه رو به آتیش کشیدید! 🌟',
    ];

    const fallbacksSkip = [
      'فدای سرت! کلمه بعدی رو با قدرت بزن! 💪',
      'کلمه سختی بود، بعدی صددرصد مال شماست! ⭐',
      'اشکالی نداره، میمو بهتون ایمان داره! 💛',
      'تمرکز کن، راند هنوز تموم نشده! ⏱️',
    ];

    const list = isSuccess ? fallbacksSuccess : fallbacksSkip;
    const reaction = list[Math.floor(Math.random() * list.length)];

    return NextResponse.json({ success: true, reaction });
  } catch (error) {
    console.error('Reaction API Error', error);
    return NextResponse.json({ success: false, reaction: 'عالی بود! ادامه بدید! 🥳' });
  }
}
