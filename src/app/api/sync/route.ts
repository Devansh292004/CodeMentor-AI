import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { userId, xp, streak, level, completedLessons, adaptiveMetrics } = await req.json()

    // Update user stats
    const user = await prisma.user.upsert({
      where: { id: userId || 'default-user' },
      update: { xp, streak, level, lastActive: new Date() },
      create: {
        id: userId || 'default-user',
        email: 'default@example.com',
        name: 'Default User',
        xp, streak, level
      },
    })

    // Update progress for each lesson
    // For simplicity, we just sync what we got
    for (const lessonId of completedLessons) {
      await prisma.progress.upsert({
        where: { userId_lessonId: { userId: user.id, lessonId } },
        update: {
          mistakes: adaptiveMetrics.mistakesPerLesson[lessonId] || 0,
          timeSpent: adaptiveMetrics.timeSpentPerLesson[lessonId] || 0,
        },
        create: {
          userId: user.id,
          lessonId,
          mistakes: adaptiveMetrics.mistakesPerLesson[lessonId] || 0,
          timeSpent: adaptiveMetrics.timeSpentPerLesson[lessonId] || 0,
        },
      })
    }

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Sync error:', error)
    return NextResponse.json({ success: false, error: 'Failed to sync progress' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId') || 'default-user'

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { progress: true }
  })

  return NextResponse.json(user)
}
