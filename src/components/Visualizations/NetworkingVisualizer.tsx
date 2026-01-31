"use client"
import React from "react"
import { motion } from "framer-motion"
import { Shield, Send, Globe } from "lucide-react"

export const NetworkingVisualizer = () => {
  return (
    <div className="flex flex-col gap-10 p-8 bg-lv-dark rounded-sm luxury-shadow overflow-hidden relative min-h-[350px]">
      <div className="flex justify-between items-center relative z-10 px-4">
        <div className="flex flex-col items-center gap-2">
           <div className="h-16 w-16 border border-lv-gold flex items-center justify-center text-lv-gold bg-lv-brown">
             <Globe size={28} />
           </div>
           <span className="text-[10px] font-black uppercase text-lv-gold tracking-widest">Client</span>
        </div>

        <div className="flex-1 flex justify-center relative">
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="h-10 w-16 bg-lv-gold/20 border border-lv-gold flex flex-col items-center justify-center gap-1"
          >
            <div className="h-1 w-full bg-lv-gold/50" />
            <span className="text-[8px] font-black text-lv-gold uppercase">TCP Packet</span>
            <div className="h-1 w-full bg-lv-gold/50" />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-2">
           <div className="h-16 w-16 border border-lv-gold flex items-center justify-center text-lv-gold bg-lv-brown shadow-[0_0_20px_rgba(197,160,89,0.2)]">
             <Shield size={28} />
           </div>
           <span className="text-[10px] font-black uppercase text-lv-gold tracking-widest">Server</span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
         {[
           { layer: 'Application', detail: 'HTTPS / Request Payload' },
           { layer: 'Transport', detail: 'TCP Port 443 / Handshake' },
           { layer: 'Network', detail: 'IP Address Routing' },
           { layer: 'Link', detail: 'Ethernet Frame / MAC' }
         ].map((item, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="flex justify-between items-center p-3 border border-lv-gold/10 bg-white/5"
           >
             <span className="text-[10px] font-black uppercase tracking-widest text-lv-gold">{item.layer}</span>
             <span className="text-[10px] font-medium text-lv-cream/60 italic">{item.detail}</span>
           </motion.div>
         ))}
      </div>

      {/* Background Decorative Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-px w-full bg-white mb-4" />
        ))}
      </div>
    </div>
  )
}
