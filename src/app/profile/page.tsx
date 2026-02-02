"use client"
import React, { useState, useEffect } from "react"
import { useStore } from "@/store/useStore"
import { Card } from "@/components/ui"
import { User, Trophy, Flame, Star, BookOpen, ShieldCheck, Target, TrendingUp, Award, Zap, Edit2, Check, X, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Profile() {
  const { xp, streak, level, completedLessons, adaptiveMetrics } = useStore()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState("Elite Developer")
  const [email, setEmail] = useState("senior@codementor.ai")
  const [isSaving, setIsSaving] = useState(false)

  // Load real user data if available
  useEffect(() => {
    const fetchUser = async () => {
       try {
          const res = await fetch('/api/sync?userId=default-user')
          const data = await res.json()
          if (data.success && data.user) {
             setName(data.user.name || "Elite Developer")
             setEmail(data.user.email || "senior@codementor.ai")
          }
       } catch (e) { console.error(e) }
    }
    fetchUser()
  }, [])

  const handleSave = async () => {
     setIsSaving(true)
     try {
        const res = await fetch('/api/user/update', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ userId: 'default-user', name, email })
        })
        if (res.ok) setIsEditing(false)
     } catch (e) { console.error(e) }
     finally { setIsSaving(false) }
  }

  const totalMistakes = Object.values(adaptiveMetrics.mistakesPerLesson).reduce((a, b) => a + b, 0)
  const totalTime = Object.values(adaptiveMetrics.timeSpentPerLesson).reduce((a, b) => a + b, 0)

  const subjects = [
    { name: "Fundamentals", progress: 85, color: "bg-lv-gold" },
    { name: "DSA", progress: 45, color: "bg-lv-brown" },
    { name: "OS", progress: 30, color: "bg-lv-gold" },
    { name: "Machine Learning", progress: 10, color: "bg-lv-brown" }
  ]

  return (
    <div className="flex flex-col gap-8 py-8 max-w-4xl mx-auto px-4">
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 border-b border-lv-cream pb-12">
        <div className="relative group">
          <div className="h-40 w-40 rounded-none bg-lv-brown flex items-center justify-center text-lv-gold border-4 border-lv-gold shadow-2xl relative z-10 overflow-hidden">
            <User size={80} strokeWidth={1} />
            <div className="absolute inset-0 bg-lv-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border border-lv-gold/10 border-dashed rounded-full pointer-events-none"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {isEditing ? (
              <div className="flex flex-col gap-2 flex-1">
                <input
                   value={name}
                   onChange={e => setName(e.target.value)}
                   className="text-4xl font-black text-lv-brown uppercase tracking-tighter bg-lv-cream/20 border-b-2 border-lv-gold outline-none px-2"
                />
                <input
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   className="text-sm font-bold text-gray-400 bg-transparent border-b border-lv-cream outline-none px-2"
                />
              </div>
            ) : (
              <h1 className="text-4xl font-black text-lv-brown uppercase tracking-tighter">{name}</h1>
            )}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-4 py-1 bg-lv-brown text-lv-gold text-[10px] font-black uppercase tracking-widest">Master Level {level}</span>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                disabled={isSaving}
                className="p-2 hover:bg-lv-cream transition-colors rounded-full text-lv-brown"
              >
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : isEditing ? <Check size={16} /> : <Edit2 size={16} />}
              </button>
              {isEditing && (
                <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-red-50 text-red-500 rounded-full">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-400 font-serif italic text-lg">&quot;The only way to go fast is to go well.&quot; — Robert C. Martin</p>
          <div className="flex items-center justify-center md:justify-start gap-8 pt-4">
             <div className="flex flex-col items-center md:items-start">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Current XP</span>
                <span className="text-xl font-black text-lv-brown tracking-widest">{xp}</span>
             </div>
             <div className="flex flex-col items-center md:items-start">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Day Streak</span>
                <div className="flex items-center gap-1.5 text-orange-500">
                   <Flame size={18} fill="currentColor" />
                   <span className="text-xl font-black tracking-widest">{streak}</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Real Stats Column */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <section className="space-y-6">
            <div className="flex items-center gap-2">
               <TrendingUp size={20} className="text-lv-gold" />
               <h3 className="text-sm font-black uppercase tracking-[0.3em] text-lv-brown">Subject Mastery</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
               {subjects.map((sub) => (
                 <div key={sub.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-black uppercase text-lv-brown">{sub.name}</span>
                       <span className="text-[10px] font-bold text-gray-400">{sub.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-lv-cream">
                       <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${sub.progress}%` }}
                          className={cn("h-full", sub.color)}
                        />
                    </div>
                 </div>
               ))}
            </div>
          </section>

          <section className="space-y-6">
             <div className="flex items-center gap-2">
                <Award size={20} className="text-lv-gold" />
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-lv-brown">Recent Milestones</h3>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white border-lv-cream flex items-center gap-4">
                   <div className="h-10 w-10 bg-lv-cream flex items-center justify-center text-lv-gold">
                      <BookOpen size={20} />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase">Lessons</p>
                      <p className="text-sm font-black text-lv-brown">{completedLessons.length} Completed</p>
                   </div>
                </Card>
                <Card className="p-6 bg-white border-lv-cream flex items-center gap-4">
                   <div className="h-10 w-10 bg-lv-cream flex items-center justify-center text-lv-gold">
                      <ShieldCheck size={20} />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase">Accuracy</p>
                      <p className="text-sm font-black text-lv-brown">{(100 - (totalMistakes / (completedLessons.length || 1) * 10)).toFixed(1)}%</p>
                   </div>
                </Card>
             </div>
          </section>
        </div>

        {/* Badges Column */}
        <div className="flex flex-col gap-6">
           <h3 className="text-[10px] font-black text-lv-brown uppercase tracking-[0.3em] px-2">Earning Badges</h3>
           <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Socratic Sage", icon: Star, unlocked: completedLessons.length > 5 },
                { name: "Code Ninja", icon: Target, unlocked: xp > 500 },
                { name: "OS Veteran", icon: Trophy, unlocked: false },
                { name: "ML Pioneer", icon: Zap, unlocked: false }
              ].map((badge) => (
                <div
                  key={badge.name}
                  className={cn(
                    "aspect-square flex flex-col items-center justify-center gap-3 border transition-all duration-700",
                    badge.unlocked ? "bg-lv-brown border-lv-gold shadow-lg" : "bg-lv-cream/20 border-lv-cream grayscale opacity-40"
                  )}
                >
                  <badge.icon size={24} className={badge.unlocked ? "text-lv-gold" : "text-gray-400"} />
                  <span className={cn("text-[8px] font-black uppercase text-center tracking-widest", badge.unlocked ? "text-lv-gold" : "text-gray-400")}>
                    {badge.name}
                  </span>
                </div>
              ))}
           </div>

           <Card className="mt-4 p-6 bg-lv-gold text-lv-brown text-center luxury-shadow">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-2">Total Learning Time</p>
              <p className="text-3xl font-black italic">{(totalTime / 3600).toFixed(1)}h</p>
           </Card>
        </div>
      </div>
    </div>
  )
}
