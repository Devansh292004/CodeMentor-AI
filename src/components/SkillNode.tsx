"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, Lock, Play } from "lucide-react"
import Link from "next/link"

interface SkillNodeProps {
  id: string;
  title: string;
  isLocked: boolean;
  isCompleted: boolean;
  type: 'module' | 'course' | 'lesson';
  delay?: number;
  clickable?: boolean;
}

export const SkillNode = ({ id, title, isLocked, isCompleted, type, delay = 0, clickable = true }: SkillNodeProps) => {
  const size = type === 'module' ? 'h-24 w-24' : 'h-16 w-16'

  const content = (
    <div
      className={cn(
        "group relative flex items-center justify-center transition-all duration-500 luxury-shadow preserve-3d",
        size,
        isLocked ? "bg-lv-cream cursor-not-allowed border border-lv-cream" :
        isCompleted ? "bg-lv-brown border-2 border-lv-gold shadow-[0_15px_30px_-10px_rgba(197,160,89,0.5)]" : "bg-white border-2 border-lv-cream hover:border-lv-gold hover:scale-105",
        !clickable && "cursor-default hover:scale-100"
      )}
    >
      {isLocked ? (
        <Lock className="text-gray-300" size={type === 'module' ? 32 : 18} />
      ) : isCompleted ? (
        <Check className="text-lv-gold" size={type === 'module' ? 36 : 22} strokeWidth={3} />
      ) : (
        <Play className="text-lv-brown group-hover:text-lv-gold ml-1 transition-colors" fill="currentColor" size={type === 'module' ? 32 : 18} />
      )}

      {/* Decorative Ring for Active Node */}
      {!isLocked && !isCompleted && clickable && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute -inset-2 border border-lv-gold/30 rounded-full border-dashed"
        />
      )}
    </div>
  )

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotateY: 90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      whileHover={clickable ? { y: -5, transition: { duration: 0.2 } } : {}}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      className="flex flex-col items-center gap-4 perspective-1000"
    >
      {clickable && !isLocked ? (
        <Link href={`/lesson/${id}`}>
          {content}
        </Link>
      ) : (
        content
      )}
      <span className={cn(
        "text-center text-[10px] font-black uppercase tracking-[0.2em] max-w-[120px] leading-relaxed drop-shadow-sm",
        isLocked ? "text-gray-300" : "text-lv-brown"
      )}>
        {title}
      </span>
    </motion.div>
  )
}
