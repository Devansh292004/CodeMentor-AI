"use client"
import React, { useState } from "react"
import { Lesson } from "@/types"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Card, ProgressBar } from "@/components/ui"
import { useStore } from "@/store/useStore"
import { useRouter } from "next/navigation"
import { CheckCircle2, ChevronRight, MessageSquare, Code2, Brain, Activity } from "lucide-react"
import { AITutor } from "@/components/AITutor/AITutor"
import { AlgorithmVisualizer } from "@/components/Visualizations/AlgorithmVisualizer"
import { OSVisualizer } from "@/components/Visualizations/OSVisualizer"
import { NNVisualizer } from "@/components/Visualizations/NNVisualizer"
import { LinkedListVisualizer } from "@/components/Visualizations/LinkedListVisualizer"
import { NetworkingVisualizer } from "@/components/Visualizations/NetworkingVisualizer"

export const LessonEngine = ({ lesson }: { lesson: Lesson }) => {
  const [step, setStep] = useState(0) // 0: Theory, 1: Practice/Quiz, 2: Reflection
  const [mistakes] = useState(0)
  const [startTime] = useState(() => Date.now())
  const [isAITutorOpen, setIsAITutorOpen] = useState(false)
  const { completeLesson, getLessonDifficulty } = useStore()
  const difficulty = getLessonDifficulty(lesson.id)
  const router = useRouter()

  // Adaptive content modification
  const getAdaptivePractice = () => {
    if (difficulty === 'easy') {
      return {
        prompt: "Let's start simple. Fill in the missing piece below.",
        snippet: lesson.codeSnippet?.replace(/=/g, " ___ ") || lesson.codeSnippet
      }
    }
    if (difficulty === 'hard') {
      return {
        prompt: "Expert challenge: Rewrite this logic from scratch for maximum efficiency.",
        snippet: ""
      }
    }
    return {
      prompt: "Fix the code below to produce the expected output.",
      snippet: lesson.codeSnippet
    }
  }

  const adaptivePractice = getAdaptivePractice()

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      completeLesson(lesson.id, mistakes, timeSpent)
      router.push("/")
    }
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto py-4">
      <div className="flex items-center gap-4 px-2">
        <ProgressBar value={((step + 1) / 3) * 100} className="flex-1" />
        <span className="text-xs font-bold text-gray-400">{step + 1}/3</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="flex flex-col gap-6"
        >
          {step === 0 && (
            <Card className="flex flex-col gap-4 min-h-[400px]">
              <div className="flex items-center gap-2 text-indigo-600">
                <Brain size={20} />
                <h2 className="text-lg font-bold">Theory: {lesson.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{lesson.content}</p>
              {lesson.codeSnippet && (
                <div className="mt-4 rounded-2xl bg-slate-900 p-6 font-mono text-sm text-indigo-300 shadow-2xl">
                  <pre>{lesson.codeSnippet}</pre>
                </div>
              )}
            </Card>
          )}

          {step === 1 && (
            <Card className="flex flex-col gap-6 min-h-[400px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-600">
                  {lesson.type === 'visualization' ? <Activity size={20} /> : <Code2 size={20} />}
                  <h2 className="text-lg font-bold">{lesson.type === 'visualization' ? "Interactive Visualization" : "Practice Challenge"}</h2>
                </div>
                <div className="rounded-full px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase text-gray-500">
                  {difficulty} Mode
                </div>
              </div>

              {lesson.type === 'visualization' ? (
                <div className="flex flex-col gap-4">
                  {lesson.visualizationId === 'array-viz' && <AlgorithmVisualizer />}
                  {lesson.visualizationId === 'cpu-scheduler' && <OSVisualizer />}
                  {lesson.visualizationId === 'perceptron-viz' && <NNVisualizer />}
                  {lesson.visualizationId === 'linked-list-viz' && <LinkedListVisualizer />}
                  {lesson.visualizationId === 'tcp-stack-viz' && <NetworkingVisualizer />}
                  <p className="text-[10px] text-lv-gold font-black uppercase tracking-widest mt-6 text-center opacity-60">Interactive Visualization Active</p>
                </div>
              ) : lesson.type === 'coding' ? (
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 font-medium italic">{adaptivePractice.prompt}</p>
                  <div className="rounded-none bg-lv-dark p-8 font-mono text-sm text-lv-gold luxury-shadow">
                    <textarea
                      className="w-full bg-transparent outline-none resize-none border-l border-lv-gold/30 pl-4"
                      rows={8}
                      defaultValue={adaptivePractice.snippet}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                   <p className="text-gray-600 font-medium">Which of the following best describes this concept?</p>
                   {['Option A', 'Option B', 'Option C'].map((opt, i) => (
                     <button key={i} className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all font-medium">
                       {opt}
                     </button>
                   ))}
                </div>
              )}
            </Card>
          )}

          {step === 2 && (
            <Card className="flex flex-col gap-6 min-h-[400px] items-center justify-center text-center">
              <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Great Job!</h2>
              <p className="text-gray-500 max-w-sm">You&apos;ve mastered {lesson.title}. Take a moment to reflect on what you learned.</p>
              <textarea
                className="w-full mt-4 p-4 rounded-2xl border-2 border-gray-100 focus:border-indigo-600 outline-none text-gray-700"
                placeholder="Explain what you learned in 2-3 sentences..."
                rows={3}
              />
            </Card>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1 gap-2"
          onClick={() => setIsAITutorOpen(true)}
        >
          <MessageSquare size={20} />
          Ask AI Tutor
        </Button>
        <Button
          className="flex-1 gap-2"
          onClick={handleNext}
        >
          {step === 2 ? "Finish" : "Continue"}
          <ChevronRight size={20} />
        </Button>
      </div>

      <AITutor
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        lessonContext={lesson}
      />
    </div>
  )
}
