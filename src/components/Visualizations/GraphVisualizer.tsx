"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Play, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui"

export const GraphVisualizer = () => {
  const [visited, setVisited] = useState<number[]>([])
  const [active, setActive] = useState<number | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const nodes = [
    { id: 0, x: 100, y: 50 },
    { id: 1, x: 50, y: 150 },
    { id: 2, x: 150, y: 150 },
    { id: 3, x: 25, y: 250 },
    { id: 4, x: 75, y: 250 },
    { id: 5, x: 125, y: 250 },
    { id: 6, x: 175, y: 250 },
  ]

  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]
  ]

  const runBFS = async () => {
    setIsRunning(true)
    setVisited([])
    const queue = [0]
    const seen = [0]

    while (queue.length > 0) {
      const curr = queue.shift()!
      setActive(curr)
      await new Promise(r => setTimeout(r, 800))
      setVisited(prev => [...prev, curr])

      const neighbors = edges.filter(e => e[0] === curr).map(e => e[1])
      for (const n of neighbors) {
        if (!seen.includes(n)) {
          seen.push(n)
          queue.push(n)
        }
      }
    }
    setActive(null)
    setIsRunning(false)
  }

  return (
    <div className="flex flex-col gap-6 p-8 bg-white border border-lv-cream rounded-sm luxury-shadow relative overflow-hidden">
      <svg width="200" height="300" className="mx-auto overflow-visible">
        {edges.map(([u, v], i) => (
          <line
            key={i}
            x1={nodes[u].x} y1={nodes[u].y}
            x2={nodes[v].x} y2={nodes[v].y}
            stroke="#f4eade"
            strokeWidth="2"
          />
        ))}
        {nodes.map((n) => (
          <motion.g key={n.id}>
            <circle
              cx={n.x} cy={n.y} r="15"
              fill={active === n.id ? "#c5a059" : visited.includes(n.id) ? "#2d1e17" : "white"}
              stroke="#2d1e17"
              strokeWidth="2"
              className="transition-colors duration-300"
            />
            <text
              x={n.x} y={n.y}
              textAnchor="middle"
              dy=".3em"
              fontSize="10"
              fontWeight="bold"
              fill={active === n.id || visited.includes(n.id) ? "white" : "#2d1e17"}
            >
              {n.id}
            </text>
          </motion.g>
        ))}
      </svg>

      <div className="flex justify-center gap-4">
        <Button variant="outline" size="sm" onClick={() => setVisited([])} disabled={isRunning}>
          <RotateCcw size={14} className="mr-2" /> Reset
        </Button>
        <Button size="sm" onClick={runBFS} disabled={isRunning}>
          <Play size={14} className="mr-2" /> Run BFS
        </Button>
      </div>
    </div>
  )
}
