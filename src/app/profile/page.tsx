"use client"
import { useStore } from "@/store/useStore"
import { Card, ProgressBar } from "@/components/ui"
import { Trophy, Flame, Target, Star } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Profile() {
  const { xp, streak, level, completedLessons } = useStore()

  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex items-center gap-6">
        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
          <UserIcon size={48} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-gray-900">Future Engineer</h2>
          <p className="font-bold text-indigo-600 uppercase tracking-widest text-xs">Level {level} Explorer</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={<Flame className="text-orange-500" />} label="Streak" value={`${streak} Days`} />
        <StatCard icon={<Trophy className="text-yellow-500" />} label="Total XP" value={xp.toLocaleString()} />
        <StatCard icon={<Target className="text-emerald-500" />} label="Lessons" value={completedLessons.length.toString()} />
        <StatCard icon={<Star className="text-purple-500" />} label="Rank" value="Novice" />
      </div>

      <Card className="flex flex-col gap-4">
        <h3 className="font-bold text-gray-900">Next Level Progress</h3>
        <ProgressBar value={xp % 1000} max={1000} />
        <p className="text-xs text-gray-500 text-center font-medium">{1000 - (xp % 1000)} XP until Level {level + 1}</p>
      </Card>

      <Card className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Skill Mastery</h3>
          <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Export PDF</button>
        </div>

        <div className="space-y-4">
          <SkillProgress label="Data Structures" value={75} color="bg-indigo-500" />
          <SkillProgress label="Operating Systems" value={40} color="bg-emerald-500" />
          <SkillProgress label="AI & Machine Learning" value={20} color="bg-orange-500" />
          <SkillProgress label="Web Development" value={90} color="bg-purple-500" />
        </div>
      </Card>

      <div className="rounded-[32px] bg-slate-900 p-8 text-white relative overflow-hidden">
        <h3 className="text-xl font-black mb-2 relative z-10">Weak Topic Alert</h3>
        <p className="text-slate-400 text-sm mb-6 relative z-10">We&apos;ve noticed you&apos;re struggling with <span className="text-orange-400 font-bold underline">Recursion</span>. Let&apos;s tackle it together!</p>
        <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-xs relative z-10 hover:bg-indigo-50 transition-colors">Start Review</button>
        <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>
    </div>
  )
}

function UserIcon({ size }: { size: number }) {
  return <Star size={size} fill="white" />
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="rounded-xl bg-gray-50 p-2">{icon}</div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-lg font-black text-gray-900">{value}</p>
      </div>
    </Card>
  )
}

function SkillProgress({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
        <span className="text-gray-500">{label}</span>
        <span className="text-gray-900">{value}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  )
}
