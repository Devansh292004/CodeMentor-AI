"use client"
import React from "react"
import { curriculum } from "@/data/curriculum"
import { SkillNode } from "@/components/SkillNode"
import { useStore } from "@/store/useStore"
import { motion } from "framer-motion"
import { Award, Zap, BookOpen, Star } from "lucide-react"

export default function Home() {
  const { completedLessons } = useStore()

  return (
    <div className="flex flex-col gap-24 py-16 max-w-2xl mx-auto px-4 relative">
      {/* Background Decorative Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2000px] bg-[radial-gradient(circle_at_center,_var(--lv-gold)_0%,_transparent_70%)] opacity-10" />
      </div>

      <header className="text-center space-y-4">
         <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="inline-flex items-center gap-2 px-6 py-2 bg-lv-brown text-lv-gold text-[10px] font-black uppercase tracking-[0.4em] luxury-shadow mb-4"
         >
            <Star size={12} fill="currentColor" />
            Software Engineering Path
         </motion.div>
         <h1 className="text-5xl font-black text-lv-brown tracking-tighter uppercase leading-none">CodeMentor AI</h1>
         <p className="text-gray-400 font-serif italic text-lg uppercase tracking-widest">Mastery through Socratic Guidance</p>
      </header>

      <div className="flex flex-col gap-32">
        {curriculum.map((module, mIdx) => (
          <section key={module.id} className="relative flex flex-col items-center">
            {/* Module Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-sm mb-16 p-8 bg-white border border-lv-cream luxury-shadow relative group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-lv-brown text-lv-gold flex items-center justify-center shadow-2xl">
                 <Award size={24} />
              </div>
              <p className="text-[9px] font-black text-lv-gold uppercase tracking-[0.3em] mb-1">Module {mIdx + 1}</p>
              <h2 className="text-2xl font-black text-lv-brown uppercase tracking-tight">{module.title}</h2>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Zap size={64} className="text-lv-gold" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-y-16 items-center">
              {module.courses.map((course) => (
                <div key={course.id} className="flex flex-col items-center gap-12">
                   {/* Course Header */}
                   <div className="text-center space-y-1 opacity-60">
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{course.title}</span>
                   </div>

                   {/* Lessons grid in a staggered layout */}
                   <div className="flex flex-col items-center gap-16">
                      {course.lessons.map((lesson, lIdx, all) => {
                         // Simple completion check
                         const isCompleted = completedLessons.includes(lesson.id);

                         return (
                           <React.Fragment key={lesson.id}>
                              <SkillNode
                                id={lesson.id}
                                title={lesson.title}
                                type="lesson"
                                isCompleted={isCompleted}
                                isLocked={false} // Demo mode: everything accessible but styled
                                delay={lIdx * 0.1}
                                clickable={true}
                              />
                              {lIdx < all.length - 1 && (
                                <div className="h-12 w-0.5 bg-lv-cream" />
                              )}
                           </React.Fragment>
                         )
                      })}
                   </div>
                </div>
              ))}
            </div>

            {/* Path connection to next module */}
            {mIdx < curriculum.length - 1 && (
              <div className="mt-24 flex flex-col items-center gap-4">
                 <div className="h-1 w-1 rounded-full bg-lv-gold" />
                 <div className="h-1 w-1 rounded-full bg-lv-gold opacity-60" />
                 <div className="h-1 w-1 rounded-full bg-lv-gold opacity-30" />
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="text-center py-24">
         <BookOpen className="mx-auto text-lv-gold/30 mb-4" size={48} />
         <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">The End of the Beginning</p>
      </footer>
    </div>
  )
}
