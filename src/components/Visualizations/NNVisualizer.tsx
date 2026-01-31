"use client"
import React from "react"
import { motion } from "framer-motion"

export const NNVisualizer = () => {
  const layers = [3, 4, 4, 2]

  return (
    <div className="flex items-center justify-center gap-12 p-8 bg-slate-900 rounded-[40px] overflow-hidden min-h-[300px]">
      {layers.map((count, lIdx) => (
        <div key={lIdx} className="flex flex-col gap-4">
          {Array.from({ length: count }).map((_, nIdx) => (
            <div key={nIdx} className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: ["#4f46e5", "#818cf8", "#4f46e5"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (lIdx * 0.5) + (nIdx * 0.1)
                }}
                className="h-4 w-4 rounded-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
              />

              {/* Connections to next layer */}
              {lIdx < layers.length - 1 && Array.from({ length: layers[lIdx+1] }).map((_, nextIdx) => (
                 <svg key={nextIdx} className="absolute top-2 left-2 w-24 h-48 -z-10 pointer-events-none opacity-20">
                   <line
                     x1="0" y1="0"
                     x2="100%" y2={`${(nextIdx - nIdx) * 30}px`}
                     stroke="white"
                     strokeWidth="1"
                   />
                 </svg>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
