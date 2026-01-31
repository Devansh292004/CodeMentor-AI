"use client"
import { useStore } from "@/store/useStore"
import { Card, ProgressBar, LuxuryBadge } from "@/components/ui"
import { Trophy, Flame, Target, Star, Award, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Profile() {
  const { xp, streak, level, completedLessons } = useStore()

  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="h-32 w-32 bg-lv-brown border-2 border-lv-gold flex items-center justify-center text-lv-gold shadow-2xl relative"
        >
          <UserIcon size={56} />
          <div className="absolute -bottom-3 -right-3 h-10 w-10 bg-lv-gold text-lv-brown flex items-center justify-center font-black border-2 border-lv-brown text-xs">
            {level}
          </div>
        </motion.div>
        <div className="text-center">
          <h2 className="text-3xl font-black text-lv-brown uppercase tracking-[0.2em]">Grandmaster</h2>
          <LuxuryBadge className="mt-2">Senior Engineer Tier</LuxuryBadge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <StatCard icon={<Flame className="text-lv-brown" />} label="Commit Streak" value={`${streak} Days`} />
        <StatCard icon={<Trophy className="text-lv-gold" />} label="Engineering XP" value={xp.toLocaleString()} />
        <StatCard icon={<Target className="text-lv-brown" />} label="Lessons Done" value={completedLessons.length.toString()} />
        <StatCard icon={<Star className="text-lv-gold" />} label="Global Rank" value="#124" />
      </div>

      <Card className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
           <h3 className="font-black text-lv-brown uppercase tracking-widest text-xs">Level Progression</h3>
           <span className="text-[10px] font-bold text-lv-gold italic">{1000 - (xp % 1000)} XP to Next Rank</span>
        </div>
        <ProgressBar value={xp % 1000} max={1000} />
      </Card>

      <Card className="flex flex-col gap-8">
        <div className="flex items-center justify-between border-b border-lv-cream pb-4">
          <h3 className="font-black text-lv-brown uppercase tracking-widest text-xs">Mastery Matrix</h3>
          <button className="text-[9px] font-black uppercase tracking-widest text-lv-gold border-b border-lv-gold">Export Profile</button>
        </div>

        <div className="space-y-6">
          <SkillProgress label="Algorithms" value={75} color="bg-lv-brown" />
          <SkillProgress label="Systems Architecture" value={40} color="bg-lv-gold" />
          <SkillProgress label="Machine Learning" value={20} color="bg-lv-brown" />
          <SkillProgress label="Security" value={90} color="bg-lv-gold" />
        </div>
      </Card>

      <div className="flex flex-col gap-6">
         <h3 className="font-black text-lv-brown uppercase tracking-widest text-xs text-center">Mastery Badges</h3>
         <div className="flex justify-center gap-6">
            <BadgeIcon icon={<Award />} label="Early Adopter" />
            <BadgeIcon icon={<ShieldCheck />} label="Security First" />
            <BadgeIcon icon={<Star />} label="Fast Learner" />
         </div>
      </div>
    </div>
  )
}

function UserIcon({ size }: { size: number }) {
  return <Star size={size} fill="currentColor" stroke="none" />
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white border border-lv-cream luxury-shadow text-center">
      <div className="mx-auto">{icon}</div>
      <div>
        <p className="text-[9px] font-black text-lv-gold uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-xl font-black text-lv-brown font-lv">{value}</p>
      </div>
    </div>
  )
}

function SkillProgress({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
        <span className="text-lv-brown/60">{label}</span>
        <span className="text-lv-brown">{value}%</span>
      </div>
      <div className="h-0.5 w-full bg-lv-cream">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className={cn("h-full", color)}
        />
      </div>
    </div>
  )
}

function BadgeIcon({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="h-16 w-16 border border-lv-cream flex items-center justify-center text-lv-brown group-hover:border-lv-gold group-hover:text-lv-gold transition-all">
        {icon}
      </div>
      <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{label}</span>
    </div>
  )
}
