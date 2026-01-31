"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cpu } from "lucide-react"

export const OSVisualizer = () => {
  const [processes] = useState([
    { id: 'P1', color: 'bg-indigo-500', progress: 0 },
    { id: 'P2', color: 'bg-emerald-500', progress: 0 },
    { id: 'P3', color: 'bg-orange-500', progress: 0 },
  ])
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % processes.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [processes.length])

  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-900 rounded-[40px] text-white overflow-hidden relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-2xl bg-indigo-500 flex items-center justify-center">
          <Cpu size={24} />
        </div>
        <div>
          <h3 className="font-bold">CPU Scheduler</h3>
          <p className="text-xs text-indigo-300 uppercase tracking-widest font-bold">Round Robin Simulation</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {processes.map((p, i) => (
          <div key={p.id} className="flex items-center gap-4">
            <span className="w-8 font-mono text-xs opacity-50">{p.id}</span>
            <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={activeIdx === i ? { x: ["-100%", "100%"] } : { x: "-100%" }}
                transition={{ duration: 2, repeat: activeIdx === i ? Infinity : 0, ease: "linear" }}
                className={`h-full w-1/4 ${p.color} blur-[2px]`}
              />
            </div>
            {activeIdx === i && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-[10px] font-medium text-white/50 leading-relaxed">
          The CPU is currently executing <span className="text-indigo-400 font-bold">{processes[activeIdx].id}</span>.
          In Round Robin scheduling, each process gets a small fixed time slice (quantum).
        </p>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </div>
  )
}
