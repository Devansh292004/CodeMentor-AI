"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Star, ArrowRight } from "lucide-react"
import { Button, Card } from "@/components/ui"
import { useStore } from "@/store/useStore"

export const LevelUpModal = () => {
  const { level, showLevelUp, dismissLevelUp } = useStore()

  return (
    <AnimatePresence>
      {showLevelUp && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-lv-dark/80 backdrop-blur-md"
            onClick={dismissLevelUp}
          />
          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 20, opacity: 0 }}
            className="relative w-full max-w-sm"
          >
            <Card className="p-12 flex flex-col items-center text-center gap-6 border-2 border-lv-gold bg-white luxury-shadow overflow-hidden">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 -z-10 opacity-10">
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-lv-gold rounded-full border-dashed"
                 />
              </div>

              <div className="h-24 w-24 rounded-none bg-lv-brown text-lv-gold flex items-center justify-center shadow-2xl relative">
                <Trophy size={48} />
                <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute -top-2 -right-2 bg-lv-gold text-lv-brown p-1"
                >
                   <Star size={16} fill="currentColor" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-lv-gold uppercase tracking-[0.4em]">Promotion Unlocked</p>
                <h2 className="text-4xl font-black text-lv-brown uppercase tracking-tighter">Level {level}</h2>
              </div>

              <p className="text-gray-400 font-serif italic text-sm">
                &quot;Your capacity to handle complexity has grown. New modules have been unlocked in your path.&quot;
              </p>

              <Button onClick={dismissLevelUp} className="w-full h-14 gap-2 text-sm">
                Continue Journey <ArrowRight size={18} />
              </Button>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
