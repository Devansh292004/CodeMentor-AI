"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui"
import { Lesson } from "@/types"

export const AITutor = ({ isOpen, onClose, lessonContext }: {
  isOpen: boolean,
  onClose: () => void,
  lessonContext: Lesson
}) => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: `Hi! I'm your CodeMentor. I see you're learning about "${lessonContext.title}". How can I help you understand this better? Remember, I won't give you the answer, but I'll guide you there!` }
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [thinkingStep, setThinkingStep] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    const newMessages = [...messages, { role: 'user', text: input }]
    setMessages(newMessages)
    setInput('')
    setIsThinking(true)

    // Socratic response logic via Server API
    const fetchAIResponse = async () => {
      try {
        const res = await fetch('/api/tutor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: input,
            lesson: lessonContext,
            history: messages.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))
          }),
        });
        const data = await res.json();

        if (data.thinkingSteps) {
          for (const step of data.thinkingSteps) {
             setThinkingStep(step)
             await new Promise(r => setTimeout(r, 600))
          }
        }

        setMessages(prev => [...prev, {
          role: 'bot',
          text: data.response
        }]);
      } catch {
        setMessages(prev => [...prev, {
          role: 'bot',
          text: "I'm having trouble connecting to my knowledge base. Let's try again in a moment!"
        }]);
      } finally {
        setIsThinking(false)
        setThinkingStep("")
      }
    };

    fetchAIResponse();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/20 backdrop-blur-sm p-4 sm:items-center">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="w-full max-w-xl h-[80vh] bg-white rounded-t-[40px] sm:rounded-[40px] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b flex items-center justify-between bg-indigo-600 text-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Socratic AI Tutor</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Adaptive Learning Mode</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-sm transition-all duration-500 luxury-shadow ${
                    m.role === 'user'
                      ? 'bg-lv-brown text-lv-cream'
                      : 'bg-lv-cream/30 text-lv-brown border border-lv-cream font-medium'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isThinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3 text-lv-gold"
                >
                  <div className="flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>•</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>•</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>•</motion.span>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] italic">{thinkingStep || "Thinking..."}</span>
                </motion.div>
              )}
            </div>

            <div className="p-6 border-t bg-gray-50 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 bg-white border border-gray-200 rounded-2xl px-4 outline-none focus:border-indigo-600 transition-colors"
              />
              <Button onClick={handleSend} className="h-12 w-12 rounded-2xl p-0">
                <Send size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
