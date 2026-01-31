"use client"
import React, { useState, useCallback } from "react"
import { getAllLessons } from "@/data/curriculum"
import { Button, Card, LuxuryBadge } from "@/components/ui"
import { Target, Zap, Trophy, ArrowRight, RefreshCcw } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Lesson } from "@/types"

export default function Practice() {
  const [randomLesson, setRandomLesson] = useState<Lesson>(() => {
    const all = getAllLessons()
    return all[Math.floor(Math.random() * all.length)]
  })

  const pickRandom = useCallback(() => {
    const all = getAllLessons()
    const random = all[Math.floor(Math.random() * all.length)]
    setRandomLesson(random)
  }, [])

  return (
    <div className="flex flex-col gap-8 py-8 max-w-2xl mx-auto px-4">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="h-20 w-20 rounded-none bg-lv-gold flex items-center justify-center text-lv-brown shadow-2xl">
          <Target size={40} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-lv-brown uppercase tracking-widest">Practice Lab</h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">Sharpen your skills with randomized challenges</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {randomLesson && (
          <motion.div
            key={randomLesson.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Card className="p-10 flex flex-col gap-8 border-2 border-lv-gold/20 bg-white luxury-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={120} className="text-lv-gold" />
              </div>

              <div className="flex items-center gap-3">
                <LuxuryBadge>Daily Challenge</LuxuryBadge>
                <span className="text-[10px] font-black text-lv-gold uppercase tracking-widest">Earn 2x XP</span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-lv-brown uppercase tracking-tight mb-2">{randomLesson.title}</h2>
                <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                  {randomLesson.content.substring(0, 120)}...
                </p>
              </div>

              <div className="flex items-center gap-6 border-t border-lv-cream pt-8">
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Subject</span>
                    <span className="text-xs font-bold text-lv-brown uppercase">Computing Systems</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Reward</span>
                    <div className="flex items-center gap-1 text-lv-gold">
                       <Trophy size={12} />
                       <span className="text-xs font-bold uppercase">100 XP</span>
                    </div>
                 </div>
              </div>

              <div className="flex gap-4 mt-4">
                <Link href={`/lesson/${randomLesson.id}`} className="flex-1">
                  <Button className="w-full gap-2 h-14">
                    Start Challenge
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Button variant="outline" onClick={pickRandom} className="h-14 px-6">
                  <RefreshCcw size={20} />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-4">
         <div className="p-6 bg-lv-brown text-lv-cream flex flex-col gap-2">
            <span className="text-[9px] font-black text-lv-gold uppercase tracking-widest">Global Rank</span>
            <span className="text-xl font-black italic">#1,242</span>
         </div>
         <div className="p-6 bg-lv-cream text-lv-brown border border-lv-gold/30 flex flex-col gap-2">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Accuracy</span>
            <span className="text-xl font-black italic">94.2%</span>
         </div>
      </div>
    </div>
  )
}
