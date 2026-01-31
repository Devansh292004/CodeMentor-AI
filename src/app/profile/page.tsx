"use client"
import React from "react"
import { useStore } from "@/store/useStore"
import { Button, Card } from "@/components/ui"
import { User, Trophy, Flame, Star, BookOpen, Clock, Settings, LogOut, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function Profile() {
  const { xp, streak, level, completedLessons } = useStore()

  const stats = [
    { label: "Total XP", value: xp, icon: Trophy, color: "text-lv-gold" },
    { label: "Day Streak", value: streak, icon: Flame, color: "text-orange-500" },
    { label: "Master Level", value: level, icon: Star, color: "text-lv-brown" },
    { label: "Lessons Done", value: completedLessons.length, icon: BookOpen, color: "text-blue-500" },
  ]

  return (
    <div className="flex flex-col gap-8 py-8 max-w-2xl mx-auto px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-32 w-32 rounded-none bg-lv-brown flex items-center justify-center text-lv-gold border-4 border-lv-gold shadow-2xl relative z-10">
            <User size={64} strokeWidth={1.5} />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-lv-gold/20 border-dashed rounded-full"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-black text-lv-brown uppercase tracking-[0.2em]">Senior Engineer</h1>
          <p className="text-xs font-bold text-lv-gold uppercase tracking-widest mt-1">Status: High Achiever</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="flex flex-col items-center justify-center p-6 text-center bg-white/50 border-lv-cream">
            <stat.icon className={stat.color} size={24} />
            <span className="text-2xl font-black text-lv-brown mt-2">{stat.value}</span>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">{stat.label}</span>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[10px] font-black text-lv-brown uppercase tracking-[0.3em] mb-2 px-2">Achievements</h3>
        <Card className="flex flex-col gap-6 p-8">
           <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-lv-cream flex items-center justify-center text-lv-gold shadow-inner border border-lv-gold/10">
                 <ShieldCheck size={32} />
              </div>
              <div className="flex-1">
                 <h4 className="text-sm font-black text-lv-brown uppercase tracking-widest">Socratic Sage</h4>
                 <p className="text-xs text-gray-400 font-medium">Ask 50 questions to the AI Tutor.</p>
                 <div className="w-full h-1.5 bg-lv-cream mt-3">
                    <div className="w-[65%] h-full bg-lv-gold" />
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-6 grayscale opacity-40">
              <div className="h-16 w-16 bg-lv-cream flex items-center justify-center text-lv-gold shadow-inner border border-lv-gold/10">
                 <Clock size={32} />
              </div>
              <div className="flex-1">
                 <h4 className="text-sm font-black text-lv-brown uppercase tracking-widest">Late Night Grinder</h4>
                 <p className="text-xs text-gray-400 font-medium">Complete 5 lessons after midnight.</p>
                 <div className="w-full h-1.5 bg-lv-cream mt-3">
                    <div className="w-[0%] h-full bg-lv-gold" />
                 </div>
              </div>
           </div>
        </Card>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <Button variant="outline" className="w-full justify-between h-14 group">
          <div className="flex items-center gap-3">
             <Settings size={18} className="group-hover:rotate-90 transition-transform" />
             <span className="text-xs font-black uppercase tracking-widest">Settings</span>
          </div>
          <div className="w-2 h-2 bg-lv-gold rounded-full" />
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 h-14 text-red-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={18} />
          <span className="text-xs font-black uppercase tracking-widest">Sign Out</span>
        </Button>
      </div>
    </div>
  )
}
