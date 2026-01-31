import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getSocraticResponse } from '@/lib/socraticEngine'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key',
})

export async function POST(req: Request) {
  try {
    const { message, lesson } = await req.json()

    const systemPrompt = `
      You are CodeMentor, a world-class Socratic software engineering tutor.
      Topic: ${lesson.title}
      Context: ${lesson.content}

      RULES:
      1. NEVER give the full code solution.
      2. Ask thought-provoking questions that lead the student to the answer.
      3. Explain concepts line-by-line if requested, but use analogies.
      4. If the student is stuck, provide a small hint about the physical memory or logic flow.
      5. Keep responses concise and encouraging.
      6. Adapt your difficulty based on the student's reasoning.
    `;

    if (process.env.OPENAI_API_KEY) {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
      });
      return NextResponse.json({ response: completion.choices[0].message.content })
    }

    // Advanced Socratic Fallback Engine
    const fallbackResponse = getSocraticResponse(message, lesson)
    return NextResponse.json({ response: fallbackResponse })

  } catch {
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
  }
}
