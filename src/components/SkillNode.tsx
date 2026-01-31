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
}

export const SkillNode = ({ id, title, isLocked, isCompleted, type, delay = 0 }: SkillNodeProps) => {
  const size = type === 'module' ? 'h-24 w-24' : 'h-16 w-16'

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      className="flex flex-col items-center gap-3"
    >
      <Link
        href={isLocked ? "#" : `/lesson/${id}`}
        className={cn(
          "group relative flex items-center justify-center rounded-full transition-all duration-300",
          size,
          isLocked ? "bg-gray-200 cursor-not-allowed" :
          isCompleted ? "bg-emerald-500 shadow-lg shadow-emerald-200" : "bg-indigo-600 shadow-lg shadow-indigo-200 hover:scale-110"
        )}
      >
        {isLocked ? (
          <Lock className="text-gray-400" size={type === 'module' ? 32 : 20} />
        ) : isCompleted ? (
          <Check className="text-white" size={type === 'module' ? 40 : 24} strokeWidth={3} />
        ) : (
          <Play className="text-white ml-1" fill="white" size={type === 'module' ? 32 : 20} />
        )}

        {/* Outer Ring for Active Node */}
        {!isLocked && !isCompleted && (
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full border-4 border-indigo-400"
          />
        )}
      </Link>
      <span className={cn(
        "text-center text-xs font-bold uppercase tracking-wide max-w-[100px]",
        isLocked ? "text-gray-400" : "text-gray-700"
      )}>
        {title}
      </span>
    </motion.div>
  )
}
