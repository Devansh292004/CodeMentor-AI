"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui"
import { Play, RotateCcw } from "lucide-react"

export const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90])
  const [comparing, setComparing] = useState<number[]>([])
  const [isSorting, setIsSorting] = useState(false)

  const bubbleSort = async () => {
    setIsSorting(true)
    const arr = [...array]
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setComparing([j, j + 1])
        await new Promise(r => setTimeout(r, 600))
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          setArray([...arr])
        }
      }
    }
    setComparing([])
    setIsSorting(false)
  }

  const reset = () => {
    setArray([64, 34, 25, 12, 22, 11, 90])
    setComparing([])
  }

  return (
    <div className="flex flex-col gap-6 p-6 bg-slate-50 rounded-3xl border border-gray-100">
      <div className="flex items-end justify-center gap-2 h-48">
        {array.map((val, i) => (
          <motion.div
            key={i}
            layout
            className={`w-8 rounded-t-lg transition-colors ${
              comparing.includes(i) ? 'bg-orange-500' : 'bg-indigo-600'
            }`}
            style={{ height: `${(val / 100) * 100}%` }}
          >
            <div className="text-[10px] text-white text-center font-bold mt-1">{val}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline" size="sm" onClick={reset} disabled={isSorting}>
          <RotateCcw size={16} className="mr-2" /> Reset
        </Button>
        <Button size="sm" onClick={bubbleSort} disabled={isSorting}>
          <Play size={16} className="mr-2" /> Start Bubble Sort
        </Button>
      </div>
    </div>
  )
}
