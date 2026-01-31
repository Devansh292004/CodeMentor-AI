"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, ArrowRight, Trash2 } from "lucide-react"
import { Button } from "@/components/ui"

export const LinkedListVisualizer = () => {
  const [nodes, setNodes] = useState([10, 20, 30])

  const addNode = () => {
    if (nodes.length >= 5) return
    setNodes([...nodes, Math.floor(Math.random() * 99) + 1])
  }

  const removeNode = () => {
    if (nodes.length <= 1) return
    setNodes(nodes.slice(0, -1))
  }

  return (
    <div className="flex flex-col gap-8 p-8 bg-white border border-lv-cream rounded-sm luxury-shadow">
      <div className="flex items-center justify-center gap-4 flex-wrap min-h-[100px]">
        <AnimatePresence>
          {nodes.map((val, i) => (
            <React.Fragment key={`${i}-${val}`}>
              <motion.div
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="h-14 w-14 border-2 border-lv-brown flex items-center justify-center font-black text-lv-brown bg-lv-cream/20">
                  {val}
                </div>
                <span className="text-[8px] font-bold mt-1 text-lv-gold tracking-widest">0x{val}AF</span>
              </motion.div>
              {i < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lv-gold"
                >
                  <ArrowRight size={24} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
          <motion.div className="flex flex-col items-center">
             <div className="h-14 w-14 border-2 border-dashed border-gray-300 flex items-center justify-center font-bold text-gray-300 italic text-xs">
               NULL
             </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline" size="sm" onClick={removeNode}>
          <Trash2 size={14} className="mr-2" /> Pop
        </Button>
        <Button variant="secondary" size="sm" onClick={addNode}>
          <Plus size={14} className="mr-2" /> Push
        </Button>
      </div>
    </div>
  )
}
