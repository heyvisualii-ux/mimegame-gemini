import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { AiGameRecommendation, GameModeId } from '@/types/game';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { playerCount = 4, ageRange = '۱۸ تا ۳۵', groupType = 'FRIENDS', minutes = 30, mood = 'FUNNY' } = body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
You are "Panto" (پانتو), the groovy, comedic 70s-style mascot and AI Game Master for "PantoMix" (پانتومیکس - Persian Pantomime Party Game).
Analyze this Iranian party setup:
- Player Count: ${playerCount}
- Age Range: ${ageRange}
- Group Type: ${groupType} (FRIENDS, FAMILY, WORK, or KIDS)
- Available Time: ${minutes} minutes
- Group Mood: ${mood} (FUNNY, COMPETITIVE, ENERGETIC, or CHILL)

Return ONLY a valid JSON object matching this schema without markdown fences:
{
  "recommendedModeTitle": "عنوان فارسی مد پیشنهادی",
  "recommendedModeId": "TEAM_BATTLE",
  "mimeoGreeting": "پیام پرانرژی، طنز و خودمانی پانتو به زبان فارسی به بازی‌کنندگان",
  "suggestedCategoryIds": ["cinema", "funny", "proverbs"],
  "targetRounds": 3,
  "roundTimerSeconds": 90,
  "funTip": "یک نکته طنز، داوری یا توصیه پانتومیم به فارسی"
}
Note: "recommendedModeId" must be one of: "CLASSIC", "SPEED_CHALLENGE", "TEAM_BATTLE", "AI_CHALLENGE", "FAMILY", "PARTY_EXTREME".
        `;

        const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3500));
        const generatePromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const response = await Promise.race([generatePromise, timeoutPromise]);

        if (response && 'text' in response && response.text) {
          const text = response.text.trim();
          const parsed: AiGameRecommendation = JSON.parse(text);
          return NextResponse.json({ success: true, data: parsed });
        }
      } catch (err) {
        console.error('Gemini API call failed, using smart fallback', err);
      }
    }

    // Smart Fallback
    const fallback: AiGameRecommendation = getFallbackRecommendation(groupType, playerCount);
    return NextResponse.json({ success: true, data: fallback });
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
