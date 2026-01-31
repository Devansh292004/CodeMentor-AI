"use client"
import React, { useState } from "react"
import { Lesson } from "@/types"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Card, ProgressBar, XPParticle } from "@/components/ui"
import { useStore } from "@/store/useStore"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { CheckCircle2, ChevronRight, MessageSquare, Code2, Brain, Activity, ArrowRightCircle } from "lucide-react"
import { AITutor } from "@/components/AITutor/AITutor"
import { getNextLesson } from "@/data/curriculum"
import { AlgorithmVisualizer } from "@/components/Visualizations/AlgorithmVisualizer"
import { OSVisualizer } from "@/components/Visualizations/OSVisualizer"
import { NNVisualizer } from "@/components/Visualizations/NNVisualizer"
import { LinkedListVisualizer } from "@/components/Visualizations/LinkedListVisualizer"
import { NetworkingVisualizer } from "@/components/Visualizations/NetworkingVisualizer"
import { GraphVisualizer } from "@/components/Visualizations/GraphVisualizer"
import { PipelineVisualizer } from "@/components/Visualizations/PipelineVisualizer"
import { MemoryVisualizer } from "@/components/Visualizations/MemoryVisualizer"
import { MLOpsVisualizer } from "@/components/Visualizations/MLOpsVisualizer"

export const LessonEngine = ({ lesson }: { lesson: Lesson }) => {
  const [step, setStep] = useState(0) // 0: Theory, 1: Practice/Quiz, 2: Reflection
  const [mistakes, setMistakes] = useState(0)
  const [userCode, setUserCode] = useState(lesson.codeSnippet || "")
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [particles, setParticles] = useState<{ id: number, x: number, y: number }[]>([])
  const [startTime] = useState(() => Date.now())
  const [isAITutorOpen, setIsAITutorOpen] = useState(false)
  const { completeLesson, getLessonDifficulty, addXP } = useStore()
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

  const checkAnswer = () => {
    let correct = false
    if (lesson.type === 'coding') {
       if (userCode.includes(lesson.solution || "")) {
         correct = true
       } else {
         setMistakes(prev => prev + 1)
       }
    } else if (lesson.type === 'quiz') {
       if (selectedQuiz === lesson.quizOptions?.[0].correctIndex) {
         correct = true
       } else {
         setMistakes(prev => prev + 1)
       }
    } else if (lesson.type === 'visualization') {
       correct = true
    }

    if (correct) {
      setIsCorrect(true)
      addXP(20)
      setParticles([{ id: Date.now(), x: window.innerWidth / 2, y: window.innerHeight / 2 }])
    }

    setShowFeedback(true)
  }

  const handleNext = () => {
    if (step === 1 && !isCorrect) {
      checkAnswer()
      return
    }

    if (step < 2) {
      setStep(step + 1)
      setIsCorrect(false)
      setShowFeedback(false)
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
            <Card className="flex flex-col gap-4 min-h-[60vh]">
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
            <Card className="flex flex-col gap-6 min-h-[60vh]">
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
                  {lesson.visualizationId === 'graph-traversal' && <GraphVisualizer />}
                  {lesson.visualizationId === 'cicd-viz' && <PipelineVisualizer />}
                  {lesson.visualizationId === 'memory-viz' && <MemoryVisualizer />}
                  {lesson.visualizationId === 'mlops-viz' && <MLOpsVisualizer />}
                  {lesson.visualizationId === 'sql-join-viz' && (
                    <div className="h-64 flex items-center justify-center bg-lv-cream/20 border-2 border-dashed border-lv-gold/30">
                      <div className="text-center">
                        <div className="flex justify-center -space-x-4 mb-4">
                          <div className="w-20 h-20 rounded-full border-4 border-lv-gold bg-lv-brown/10 backdrop-blur-sm" />
                          <div className="w-20 h-20 rounded-full border-4 border-lv-gold bg-lv-gold/20 backdrop-blur-sm" />
                        </div>
                        <p className="text-[10px] font-black text-lv-gold uppercase tracking-widest">Relational Join Visualizer</p>
                      </div>
                    </div>
                  )}
                  {lesson.visualizationId === 'eda-plot-viz' && (
                    <div className="h-64 flex flex-col items-center justify-center bg-lv-cream/20 border-2 border-dashed border-lv-gold/30 gap-4">
                       <div className="flex items-end gap-1 h-32">
                          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              className="w-4 bg-lv-gold"
                            />
                          ))}
                       </div>
                       <p className="text-[10px] font-black text-lv-gold uppercase tracking-widest">Statistical Distribution Active</p>
                    </div>
                  )}
                  <p className="text-[10px] text-lv-gold font-black uppercase tracking-widest mt-6 text-center opacity-60">Interactive Visualization Active</p>
                </div>
              ) : lesson.type === 'coding' ? (
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 font-medium italic">{adaptivePractice.prompt}</p>
                  <div className={cn(
                    "rounded-none p-8 font-mono text-sm luxury-shadow transition-all duration-500",
                    isCorrect ? "bg-emerald-900 text-emerald-400" : showFeedback ? "bg-red-900 text-red-400" : "bg-lv-dark text-lv-gold"
                  )}>
                    <textarea
                      className="w-full bg-transparent outline-none resize-none border-l border-lv-gold/30 pl-4"
                      rows={8}
                      value={userCode}
                      onChange={(e) => setUserCode(e.target.value)}
                      disabled={isCorrect}
                    />
                  </div>
                  {showFeedback && !isCorrect && <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Hint: Check your syntax or logic!</p>}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                   <p className="text-gray-600 font-medium">{lesson.quizOptions?.[0].question || "Select the correct answer:"}</p>
                   {lesson.quizOptions?.[0].options.map((opt, i) => (
                     <button
                       key={i}
                       onClick={() => !isCorrect && setSelectedQuiz(i)}
                       className={cn(
                        "w-full text-left p-6 border-2 transition-all font-bold uppercase text-[10px] tracking-widest",
                        selectedQuiz === i ? "border-lv-brown bg-lv-cream/20" : "border-lv-cream",
                        isCorrect && i === lesson.quizOptions?.[0].correctIndex ? "bg-emerald-50 border-emerald-500 text-emerald-700" :
                        showFeedback && selectedQuiz === i && i !== lesson.quizOptions?.[0].correctIndex ? "bg-red-50 border-red-500 text-red-700" : ""
                      )}>
                       {opt}
                     </button>
                   ))}
                   {showFeedback && <p className="text-[10px] font-bold text-gray-500 mt-2">{isCorrect ? lesson.quizOptions?.[0].explanation : "Try again!"}</p>}
                </div>
              )}
            </Card>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-6">
              <Card className="flex flex-col gap-6 items-center justify-center text-center py-12">
                <div className="h-20 w-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-2xl font-black text-lv-brown uppercase tracking-widest">Mastered!</h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest max-w-xs">You have completed {lesson.title} with {mistakes} mistakes.</p>
                <textarea
                  className="w-full mt-8 p-6 border border-lv-cream outline-none text-gray-700 font-medium italic"
                  placeholder="Explain what you learned in 2-3 sentences..."
                  rows={3}
                />
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 bg-lv-brown text-lv-cream luxury-shadow flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lv-gold mb-1">Adaptive Recommendation</p>
                  <h4 className="text-sm font-black uppercase tracking-widest">
                    {getNextLesson(lesson.id, mistakes === 0 ? 'good' : mistakes > 3 ? 'bad' : 'neutral').title}
                  </h4>
                </div>
                <ArrowRightCircle size={24} className="text-lv-gold" />
              </motion.div>
            </div>
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
          variant={step === 1 && !isCorrect ? "secondary" : "primary"}
          className="flex-1 gap-2"
          onClick={handleNext}
        >
          {step === 1 && !isCorrect ? "Check Answer" : step === 2 ? "Finish" : "Continue"}
          <ChevronRight size={20} />
        </Button>
      </div>

      <AITutor
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        lessonContext={lesson}
      />

      {particles.map(p => (
        <XPParticle key={p.id} x={p.x} y={p.y} />
      ))}
    </div>
  )
}
