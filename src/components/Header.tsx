"use client"
import React from "react"
import { useStore } from "@/store/useStore"
import { Flame, Trophy, Star } from "lucide-react"

export const Header = () => {
  const { xp, streak, level } = useStore()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <Star size={20} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900">CodeMentor AI</h1>
            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Level {level}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-orange-600">
            <Flame size={18} fill="currentColor" />
            <span className="text-sm font-bold">{streak}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-indigo-600">
            <Trophy size={18} />
            <span className="text-sm font-bold">{xp}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
