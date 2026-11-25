import { NextResponse } from 'next/server';
import { DEFAULT_GEMINI_TIMEOUT_MS, generateWithGemini } from '@/lib/gemini';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

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

  const prompt = `
You are "Panto", the funny groovy mascot of PantoMix (پانتومیکس - Persian Pantomime party game).
Give a 1-sentence hilarious, short Persian encouraging or celebratory reaction for a player who just ${
    isSuccess ? 'GUESSED CORRECTLY' : 'SKIPPED/FAILED'
  } (Total Score: ${score}, Combo: ${combo}).
Keep it maximum 10 words, energetic, funny, and warm. Output raw Persian text only, no quotes, no markdown.
`;

  const result = await generateWithGemini({
    route: '/api/ai/reaction',
    prompt,
    timeoutMs: DEFAULT_GEMINI_TIMEOUT_MS,
  });

  if (result.ok) {
    const text = result.text.trim().replace(/["`]/g, '');
    if (text) {
      return NextResponse.json({
        success: true,
        source: 'gemini',
        model: result.model,
        reaction: text,
      });
    }
  }

  return NextResponse.json({
    success: true,
    source: 'fallback',
    fallbackReason: result.ok ? 'invalid_response' : result.reason,
    reaction: defaultReaction,
  });
}
