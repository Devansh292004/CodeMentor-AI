"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Database, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui"

export const MemoryVisualizer = () => {
  const [stack, setStack] = useState(['main()', 'x: 5', 'ptr: 0x1'])
  const [heap] = useState([{ addr: '0x1', val: 'obj{}' }])

  const pushStack = () => {
    if (stack.length > 5) return
    setStack([...stack, `fn_${stack.length}()`])
  }

  const popStack = () => {
    if (stack.length <= 1) return
    setStack(stack.slice(0, -1))
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-white border border-lv-cream rounded-sm luxury-shadow min-h-[300px]">
      <div className="flex flex-col gap-4">
        <h4 className="text-[10px] font-black uppercase text-lv-brown tracking-widest text-center border-b border-lv-cream pb-2">Stack (LIFO)</h4>
        <div className="flex flex-col-reverse gap-2 flex-1 justify-end">
          <AnimatePresence>
            {stack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-3 bg-lv-brown text-lv-cream text-[10px] font-bold text-center border border-lv-gold"
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm" className="flex-1" onClick={popStack}><Trash2 size={12} /></Button>
           <Button variant="secondary" size="sm" className="flex-1" onClick={pushStack}><Plus size={12} /></Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-[10px] font-black uppercase text-lv-gold tracking-widest text-center border-b border-lv-cream pb-2">Heap (Dynamic)</h4>
        <div className="flex flex-wrap gap-3 content-start">
          {heap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="h-12 w-12 border border-lv-gold bg-lv-cream/30 flex flex-col items-center justify-center"
            >
              <Database size={14} className="text-lv-brown opacity-50" />
              <span className="text-[7px] font-black">{item.addr}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
