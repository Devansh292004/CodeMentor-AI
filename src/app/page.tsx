"use client"
import { curriculum } from "@/data/curriculum"
import { SkillNode } from "@/components/SkillNode"
import { useStore } from "@/store/useStore"

export default function Home() {
  const { completedLessons } = useStore()

  return (
    <div className="flex flex-col gap-12 py-8">
      {curriculum.map((module, mIdx) => (
        <section key={module.id} className="flex flex-col items-center gap-8">
          <div className="relative flex flex-col items-center">
            <SkillNode
              id={module.id}
              title={module.title}
              type="module"
              isCompleted={module.courses.every(c => c.lessons.every(l => completedLessons.includes(l.id)))}
              isLocked={mIdx > 0 && !curriculum[mIdx-1].courses.every(c => c.lessons.every(l => completedLessons.includes(l.id)))}
              delay={mIdx * 0.1}
            />

            {/* Connection Line to next module */}
            {mIdx < curriculum.length - 1 && (
              <div className="h-12 w-1 bg-gray-200 mt-8 rounded-full" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-12">
            {module.courses.flatMap(course => course.lessons).map((lesson, lIdx, allLessons) => {
              const isFirstLessonOfFirstModule = mIdx === 0 && lIdx === 0;
              const isLocked = !isFirstLessonOfFirstModule &&
                             (lIdx > 0 ? !completedLessons.includes(allLessons[lIdx-1].id) :
                             (mIdx > 0 ? !curriculum[mIdx-1].courses.every(c => c.lessons.every(l => completedLessons.includes(l.id))) : false));

              return (
                <SkillNode
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  type="lesson"
                  isCompleted={completedLessons.includes(lesson.id)}
                  isLocked={isLocked}
                  delay={(mIdx * 0.2) + (lIdx * 0.05)}
                />
              )
            })}
          </div>
        </section>
      ))}

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-indigo-50 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] h-[40%] w-[40%] rounded-full bg-emerald-50 blur-[120px]" />
      </div>
    </div>
  )
}
