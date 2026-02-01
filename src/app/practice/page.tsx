"use client"
import React, { useState } from "react"
import { practiceQuestions } from "@/data/practice_questions"
import { Button, Card, LuxuryBadge, ProgressBar, XPParticle } from "@/components/ui"
import { Target, Zap, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { useStore } from "@/store/useStore"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Practice() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null)
  const [userCode, setUserCode] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [particles, setParticles] = useState<{ id: number, x: number, y: number }[]>([])
  const { addXP } = useStore()

  const question = practiceQuestions[currentIdx]

  const handleCheck = () => {
    let correct = false
    if (question.type === 'multiple-choice') {
      correct = selectedOpt === question.correctIndex
    } else {
      correct = userCode.includes(question.solution || "")
    }

    setIsCorrect(correct)
    setShowResult(true)
    if (correct) {
      const gain = 50
      addXP(gain)
      setParticles([{ id: Date.now(), x: window.innerWidth / 2, y: window.innerHeight / 2 }])
    }
  }

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % practiceQuestions.length)
    setSelectedOpt(null)
    setUserCode(question.initialCode || "")
    setShowResult(false)
    setIsCorrect(false)
  }

  return (
    <div className="flex flex-col gap-8 py-8 max-w-2xl mx-auto px-4">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="h-20 w-20 rounded-none bg-lv-brown flex items-center justify-center text-lv-gold shadow-2xl">
          <Target size={40} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-lv-brown uppercase tracking-widest">Mastery Lab</h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">Question {currentIdx + 1} of {practiceQuestions.length}</p>
        </div>
      </div>

      <ProgressBar value={((currentIdx + 1) / practiceQuestions.length) * 100} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card className="p-8 flex flex-col gap-6 border border-lv-cream bg-white luxury-shadow">
            <div className="flex items-center justify-between">
              <LuxuryBadge>{question.topic}</LuxuryBadge>
              <div className="flex items-center gap-1 text-lv-gold">
                <Zap size={14} fill="currentColor" />
                <span className="text-[10px] font-black uppercase">50 XP</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-lv-brown leading-tight">{question.question}</h2>

            {question.type === 'multiple-choice' ? (
              <div className="flex flex-col gap-3">
                {question.options?.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => !showResult && setSelectedOpt(i)}
                    className={cn(
                      "w-full p-4 text-left border-2 transition-all font-bold uppercase text-[10px] tracking-widest",
                      selectedOpt === i ? "border-lv-brown bg-lv-cream/20" : "border-lv-cream",
                      showResult && i === question.correctIndex ? "bg-emerald-50 border-emerald-500 text-emerald-700" :
                      showResult && selectedOpt === i && i !== question.correctIndex ? "bg-red-50 border-red-500 text-red-700" : ""
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="bg-lv-dark p-6 rounded-none luxury-shadow font-mono text-xs">
                  <textarea
                    className="w-full bg-transparent text-lv-gold outline-none resize-none border-l border-lv-gold/30 pl-4"
                    rows={6}
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    disabled={showResult}
                    placeholder="# Write your solution here..."
                  />
                </div>
              </div>
            )}

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "p-4 flex flex-col gap-2",
                  isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                )}
              >
                <div className="flex items-center gap-2">
                  {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                  <span className="font-black uppercase tracking-widest text-xs">{isCorrect ? "Immaculate!" : "Not Quite"}</span>
                </div>
                <p className="text-[10px] font-medium leading-relaxed">{question.explanation}</p>
              </motion.div>
            )}

            {!showResult ? (
              <Button
                onClick={handleCheck}
                disabled={question.type === 'multiple-choice' ? selectedOpt === null : !userCode.trim()}
                className="h-14"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNext} className="h-14 gap-2">
                Continue <ArrowRight size={18} />
              </Button>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {particles.map(p => (
        <XPParticle key={p.id} x={p.x} y={p.y} />
      ))}
    </div>
  )
}
