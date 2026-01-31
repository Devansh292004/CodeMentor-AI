"use client"
import React from "react"
import { useStore } from "@/store/useStore"
import { Flame, Trophy, Star } from "lucide-react"

export const Header = () => {
  const { xp, streak, level } = useStore()

  return (
    <header className="sticky top-0 z-50 border-b border-lv-cream bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-none bg-lv-brown text-lv-gold luxury-shadow">
            <Star size={24} fill="currentColor" stroke="none" />
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-[0.2em] text-lv-brown">CodeMentor</h1>
            <p className="text-[10px] font-bold text-lv-gold uppercase tracking-widest">Master Level {level}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-lv-brown opacity-80">
            <Flame size={18} fill="currentColor" stroke="none" />
            <span className="text-xs font-black tracking-widest">{streak}</span>
          </div>
          <div className="flex items-center gap-1.5 text-lv-gold">
            <Trophy size={18} />
            <span className="text-xs font-black tracking-widest">{xp}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
