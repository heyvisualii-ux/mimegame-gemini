import { NextResponse } from 'next/server';
import { Type } from '@google/genai';
import { AiGameRecommendation, GameModeId } from '@/types/game';
import { generateWithGemini, stripJsonFences } from '@/lib/gemini';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      playerCount = 4,
      ageRange = '۱۸ تا ۳۵',
      groupType = 'FRIENDS',
      minutes = 30,
      mood = 'FUNNY',
    } = body;

    const prompt = `
You are "Panto" (پانتو), the groovy, comedic 70s-style mascot and AI Game Master for "PantoMix" (پانتومیکس - Persian Pantomime Party Game).
Analyze this Iranian party setup:
- Player Count: ${playerCount}
- Age Range: ${ageRange}
- Group Type: ${groupType} (FRIENDS, FAMILY, WORK, or KIDS)
- Available Time: ${minutes} minutes
- Group Mood: ${mood} (FUNNY, COMPETITIVE, ENERGETIC, or CHILL)

Return ONLY a valid JSON object matching the schema.
"recommendedModeId" must be one of: "CLASSIC", "SPEED_CHALLENGE", "TEAM_BATTLE", "AI_CHALLENGE", "FAMILY", "PARTY_EXTREME".
"suggestedCategoryIds" should use relevant IDs from: ["cinema", "funny", "proverbs", "animals", "objects", "jobs", "sports"].
`;

    const result = await generateWithGemini({
      prompt,
      timeoutMs: 11000,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendedModeTitle: { type: Type.STRING },
          recommendedModeId: { type: Type.STRING },
          mimeoGreeting: { type: Type.STRING },
          suggestedCategoryIds: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          targetRounds: { type: Type.NUMBER },
          roundTimerSeconds: { type: Type.NUMBER },
          funTip: { type: Type.STRING },
        },
        required: [
          'recommendedModeTitle',
          'recommendedModeId',
          'mimeoGreeting',
          'suggestedCategoryIds',
          'targetRounds',
          'roundTimerSeconds',
          'funTip',
        ],
      },
    });

    if (result.ok) {
      try {
        const parsed: AiGameRecommendation = JSON.parse(stripJsonFences(result.text));
        if (parsed && parsed.recommendedModeTitle && parsed.mimeoGreeting) {
          return NextResponse.json({
            success: true,
            source: 'gemini',
            model: result.model,
            data: parsed,
          });
        }
      } catch (parseErr) {
        console.error('[PantoMix][Gemini] Invalid JSON from /api/ai/recommend:', parseErr);
      }
    }

    const fallbackReason = result.ok ? 'invalid_response' : result.reason;
    const fallback: AiGameRecommendation = getFallbackRecommendation(groupType, playerCount);
    return NextResponse.json({
      success: true,
      source: 'fallback',
      fallbackReason,
      data: fallback,
    });
  } catch (error) {
    console.error('API Error', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

function getFallbackRecommendation(groupType: string, playerCount: number): AiGameRecommendation {
  if (groupType === 'FAMILY' || groupType === 'KIDS') {
    return {
      recommendedModeTitle: 'بازی خانوادگی صمیمی 👨‍👩‍👧‍👦',
      recommendedModeId: 'FAMILY' as GameModeId,
      mimeoGreeting: `سلام به جمع ${playerCount} نفره پرمحبت! پانتو کلمات شاد و پرخنده‌ای آماده کرده تا همه سنین حسابی لذت ببرن!`,
      suggestedCategoryIds: ['animals', 'objects', 'funny'],
      targetRounds: 3,
      roundTimerSeconds: 120,
      funTip: 'کوچک‌ترها هم می‌تونن داور بشن یا با بزرگ‌ترها تیم مشترک تشکیل بدن!',
    };
  }

  if (groupType === 'WORK') {
    return {
      recommendedModeTitle: 'رقابت حماسی تیم همکاران 💼',
      recommendedModeId: 'TEAM_BATTLE' as GameModeId,
      mimeoGreeting: 'وقت شکستن یخ جلسه و نشون دادن استعدادهای پنهان بازیگری همکارانه! آماده‌اید رقبا رو مات کنید؟',
      suggestedCategoryIds: ['jobs', 'cinema', 'proverbs'],
      targetRounds: 4,
      roundTimerSeconds: 90,
      funTip: 'استفاده از حرکات دست و نگاه‌های معنادار مجازه، اما لب زدن اکیداً ممنوع!',
    };
  }

  return {
    recommendedModeTitle: 'پارتی اکستریم پانتومیم 🔥',
    recommendedModeId: 'PARTY_EXTREME' as GameModeId,
    mimeoGreeting: `سلام رفقا! پانتو اینجاست تا جمع ${playerCount} نفره‌تون رو با چالش‌های غیرمنتظره به آتیش بکشه!`,
    suggestedCategoryIds: ['cinema', 'funny', 'proverbs'],
    targetRounds: 4,
    roundTimerSeconds: 90,
    funTip: 'قبل از شروع، حتماً عضلات صورت و دست‌هاتون رو خوب گرم کنید که قراره حسابی بخندیم!',
  };
}
