"use client"
import React from "react"
import { motion } from "framer-motion"
import { Cpu, Server, Activity, ArrowRight } from "lucide-react"

export const MLOpsVisualizer = () => {
  return (
    <div className="flex flex-col gap-10 p-10 bg-white border border-lv-cream rounded-sm luxury-shadow overflow-hidden relative">
      <div className="flex justify-between items-center relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="h-16 w-16 border-2 border-lv-brown flex items-center justify-center text-lv-brown bg-lv-cream/20">
            <Cpu size={32} />
          </div>
          <span className="text-[8px] font-black uppercase tracking-widest text-lv-brown">Trained Model</span>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 mx-4">
           <motion.div
             animate={{ x: [-20, 20, -20] }}
             transition={{ repeat: Infinity, duration: 3 }}
             className="flex items-center gap-2 text-lv-gold"
           >
             <ArrowRight size={20} />
             <span className="text-[9px] font-bold uppercase tracking-tighter">Quantization</span>
           </motion.div>
           <div className="w-full h-px bg-lv-cream" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="h-16 w-16 border-2 border-lv-gold flex items-center justify-center text-lv-gold bg-lv-brown">
            <Server size={32} />
          </div>
          <span className="text-[8px] font-black uppercase tracking-widest text-lv-gold">Edge Device</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
         {[
           { icon: Activity, label: "Latency", val: "12ms" },
           { icon: Activity, label: "Accuracy", val: "94.2%" },
           { icon: Activity, label: "Power", val: "2.1W" }
         ].map((stat, i) => (
           <div key={i} className="p-3 border border-lv-cream flex flex-col items-center gap-1">
             <stat.icon size={12} className="text-lv-gold" />
             <span className="text-[7px] font-black uppercase opacity-40">{stat.label}</span>
             <span className="text-[10px] font-black text-lv-brown">{stat.val}</span>
           </div>
         ))}
      </div>

      {/* Decorative pulse */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute inset-0 bg-lv-gold pointer-events-none -z-10"
      />
    </div>
  )
}
