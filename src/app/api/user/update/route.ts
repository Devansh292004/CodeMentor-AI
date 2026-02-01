import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { userId, name, email } = await req.json()

    if (!userId) {
       return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email },
    })

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json({ success: false, error: 'Failed to update profile' }, { status: 500 })
  }
}
