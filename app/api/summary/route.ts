import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { auditData } = await request.json();

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a SaaS cost optimization expert for Credex. Analyze this AI tool spending data: ${JSON.stringify(auditData)}. Give 3 bullet points: 1. Total monthly waste found with dollar amount 2. Top 2 savings opportunities with specific dollar amounts 3. One quick win action to take today. Keep under 60 words.`
          }]
        }]
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Gemini API error');
    
    const summary = data.candidates[0].content.parts[0].text;
    return NextResponse.json({ summary });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}