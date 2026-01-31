"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Target, User, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const Navigation = () => {
  const currentPath = usePathname()

  const navItems = [
    { label: "Learn", icon: BookOpen, path: "/" },
    { label: "Practice", icon: Target, path: "/practice" },
    { label: "AI Tutor", icon: MessageCircle, path: "/tutor" },
    { label: "Profile", icon: User, path: "/profile" },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-3xl border border-gray-100 bg-white/90 p-2 shadow-2xl shadow-gray-200/50 backdrop-blur-xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentPath === item.path
          return (
            <Link key={item.path} href={item.path} className="relative py-2 px-4">
              <div className={cn(
                "flex flex-col items-center gap-1 transition-colors duration-300",
                isActive ? "text-indigo-600" : "text-gray-400 hover:text-gray-600"
              )}>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-2xl bg-indigo-50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
