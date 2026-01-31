import { NextResponse } from 'next/server'
import { getSocraticResponse } from '@/lib/socraticEngine'

export async function POST(req: Request) {
  try {
    const { message, lesson } = await req.json()

    // In a real competitive app, this would call an LLM API here.
    // For now, we use our engine but on the server side to demonstrate the architecture.
    const response = getSocraticResponse(message, lesson)

    return NextResponse.json({ response })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
  }
}
