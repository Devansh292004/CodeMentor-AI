"use client"
import React, { use } from "react"
import { curriculum } from "@/data/curriculum"
import { LessonEngine } from "@/components/Lesson/LessonEngine"
import { notFound } from "next/navigation"

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const lesson = curriculum
    .flatMap(m => m.courses)
    .flatMap(c => c.lessons)
    .find(l => l.id === id)

  if (!lesson) notFound()

  return (
    <div className="max-w-2xl mx-auto">
      <LessonEngine key={id} lesson={lesson} />
    </div>
  )
}
