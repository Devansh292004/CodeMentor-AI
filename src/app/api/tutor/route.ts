import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getSocraticResponse } from '@/lib/socraticEngine'
import { fetchLatestResearch } from '@/lib/knowledge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key',
})

export async function POST(req: Request) {
  try {
    const { message, lesson, history = [] } = await req.json()

    const research = await fetchLatestResearch(lesson.title);
    const researchContext = research.map(r => `${r.title}: ${r.summary}`).join("\n");

    const systemPrompt = `
      You are CodeMentor, a world-class Socratic software engineering tutor.
      You have access to a vast knowledge base of computer science research and documentation.

      CURRENT LESSON: ${lesson.title}
      CONTEXT: ${lesson.content}
      LATEST RESEARCH: ${researchContext}

      PHILOSOPHY:
      - You act as a personal mentor, not a solution generator.
      - Use the Socratic method: Answer with a question that leads to deeper insight.
      - Explain things line-by-line using physical world analogies (e.g., memory as a warehouse).
      - Reference latest research or industry standards (e.g., "In the Linux Kernel, this is handled by...").

      RULES:
      1. NEVER provide a direct code solution.
      2. If asked for code, explain the LOGIC and ask how the student would implement it.
      3. Maintain a luxury, encouraging, and highly professional tone.
      4. Use formatting (bolding, lists) to make complex topics readable.
    `;

    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'dummy-key') {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: message }
        ],
        temperature: 0.7,
      });

      const responseText = completion.choices[0].message.content;

      // Simulate multi-stage reasoning/search steps for "20/10" feel
      const thinkingSteps = [
        "Analyzing conceptual gap...",
        "Querying internal SE research database...",
        "Synthesizing Socratic guidance..."
      ];

      return NextResponse.json({
        response: responseText,
        thinkingSteps
      })
    }

    // Advanced Socratic Fallback with "Thinking" simulation
    const thinkingSteps = [
      "Scanning local knowledge graphs...",
      "Identifying mental models...",
      "Formulating pedagogical prompt..."
    ];

    const fallbackResponse = getSocraticResponse(message, lesson)

    // Artificial delay to simulate "Thinking"
    await new Promise(r => setTimeout(r, 1500));

    return NextResponse.json({
      response: fallbackResponse,
      thinkingSteps
    })

  } catch (error) {
    console.error("AI Tutor Error:", error);
    return NextResponse.json({ error: 'System overload. Please try again.' }, { status: 500 })
  }
}
