"use client"
import React from "react"
import { motion } from "framer-motion"
import { GitCommit, Package, ShieldCheck, CloudUpload, CheckCircle2 } from "lucide-react"

export const PipelineVisualizer = () => {
  const stages = [
    { icon: GitCommit, label: "Commit" },
    { icon: Package, label: "Build" },
    { icon: ShieldCheck, label: "Test" },
    { icon: CloudUpload, label: "Deploy" },
  ]

  return (
    <div className="flex flex-col gap-10 p-10 bg-lv-dark rounded-sm luxury-shadow overflow-hidden relative">
      <div className="flex items-center justify-between relative z-10">
        {stages.map((Stage, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-3">
              <motion.div
                animate={{
                  boxShadow: ["0 0 0px #c5a059", "0 0 20px #c5a059", "0 0 0px #c5a059"]
                }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                className="h-14 w-14 border border-lv-gold flex items-center justify-center text-lv-gold bg-lv-brown"
              >
                <Stage.icon size={24} />
              </motion.div>
              <span className="text-[8px] font-black uppercase text-lv-gold tracking-[0.2em]">{Stage.label}</span>
            </div>
            {i < stages.length - 1 && (
              <div className="flex-1 h-px bg-lv-gold/20 relative mx-2">
                 <motion.div
                   animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.5 }}
                   className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-lv-gold"
                 />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center gap-3 px-6 py-3 border border-emerald-500/30 bg-emerald-500/5 rounded-full"
         >
           <CheckCircle2 size={16} className="text-emerald-500" />
           <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Production: v2.4.1 stable</span>
         </motion.div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    </div>
  )
}
