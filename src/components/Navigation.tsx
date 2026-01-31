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
    { label: "Tutor", icon: MessageCircle, path: "/tutor" },
    { label: "Profile", icon: User, path: "/profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-lv-cream bg-white/95 px-6 pb-8 pt-4 backdrop-blur-xl sm:bottom-8 sm:left-1/2 sm:w-[90%] sm:max-w-md sm:-translate-x-1/2 sm:rounded-full sm:border sm:px-2 sm:pb-4">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentPath === item.path
          return (
            <Link key={item.path} href={item.path} className="relative py-2 px-4">
              <div className={cn(
                "flex flex-col items-center gap-1.5 transition-all duration-500",
                isActive ? "text-lv-brown scale-110" : "text-gray-300 hover:text-lv-gold"
              )}>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">{item.label}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-x-4 -bottom-1 h-0.5 bg-lv-gold"
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
