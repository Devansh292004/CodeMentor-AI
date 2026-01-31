import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userId, xp, streak, level, completedLessons, adaptiveMetrics } = body

    if (!userId) {
       return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

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

    // Batch update progress for each lesson
    if (completedLessons && Array.isArray(completedLessons)) {
      await Promise.all(completedLessons.map(lessonId =>
        prisma.progress.upsert({
          where: { userId_lessonId: { userId: user.id, lessonId } },
          update: {
            mistakes: adaptiveMetrics?.mistakesPerLesson?.[lessonId] || 0,
            timeSpent: adaptiveMetrics?.timeSpentPerLesson?.[lessonId] || 0,
          },
          create: {
            userId: user.id,
            lessonId,
            mistakes: adaptiveMetrics?.mistakesPerLesson?.[lessonId] || 0,
            timeSpent: adaptiveMetrics?.timeSpentPerLesson?.[lessonId] || 0,
          },
        })
      ))
    }

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Sync error:', error)
    return NextResponse.json({ success: false, error: 'Failed to sync progress' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId') || 'default-user'

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { progress: true }
    })

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, user })
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch progress' }, { status: 500 })
  }
}
