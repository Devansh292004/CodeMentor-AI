"use client"
import React, { useState, useRef, useEffect } from "react"
import { Bot, Send, Sparkles, Loader2, User } from "lucide-react"
import { Button } from "@/components/ui"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function GeneralTutor() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm your Socratic CodeMentor. I'm here to help you reason through any software engineering topic. What's on your mind today?" }
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [thinkingSteps, setThinkingSteps] = useState<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isThinking])

  const handleSend = async () => {
    if (!input.trim() || isThinking) return

    const userMsg = input.trim()
    const newMsgs = [...messages, { role: 'user', text: userMsg }]
    setMessages(newMsgs)
    setInput('')
    setIsThinking(true)
    setThinkingSteps(["Analyzing query...", "Searching knowledge base..."])

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          history: messages.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))
        })
      })

      const data = await res.json()

      if (data.thinkingSteps) {
        for (const step of data.thinkingSteps) {
          setThinkingSteps(prev => [...prev, step])
          await new Promise(r => setTimeout(r, 600))
        }
      }

      setMessages(prev => [...prev, { role: 'bot', text: data.response }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting to my knowledge base. Let's try again in a moment." }])
    } finally {
      setIsThinking(false)
      setThinkingSteps([])
    }
  }

  return (
    <div className="flex flex-col h-[85vh] gap-4 py-4 max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-none bg-lv-brown flex items-center justify-center text-lv-gold shadow-2xl border border-lv-gold/20">
            <Bot size={32} />
          </div>
          <div>
            <h1 className="text-xl font-black text-lv-brown uppercase tracking-widest">Socratic Mentor</h1>
            <div className="flex items-center gap-1.5 text-lv-gold">
              <Sparkles size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">AI Synthesis Active</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Model</span>
            <span className="text-xs font-bold text-lv-brown">CodeMentor-v2 (Socratic)</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto flex flex-col gap-6 p-6 bg-lv-cream/20 border border-lv-cream/50 rounded-none luxury-shadow custom-scrollbar"
      >
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={i}
              className={cn("flex items-start gap-4", m.role === 'user' ? 'flex-row-reverse' : 'flex-row')}
            >
              <div className={cn(
                "h-10 w-10 shrink-0 flex items-center justify-center rounded-none border shadow-sm",
                m.role === 'user' ? "bg-lv-gold border-lv-gold/30 text-lv-brown" : "bg-white border-lv-cream text-lv-gold"
              )}>
                {m.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className={cn(
                "max-w-[80%] p-6 rounded-none luxury-shadow text-sm leading-relaxed",
                m.role === 'user'
                  ? 'bg-lv-brown text-lv-cream font-medium'
                  : 'bg-white text-lv-brown border border-lv-cream font-medium'
              )}>
                {m.text}
              </div>
            </motion.div>
          ))}

          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-4"
            >
              <div className="h-10 w-10 bg-white border border-lv-cream flex items-center justify-center text-lv-gold animate-pulse">
                <Bot size={18} />
              </div>
              <div className="bg-white/50 border border-lv-cream/50 p-6 flex flex-col gap-3 min-w-[200px]">
                <div className="flex items-center gap-3 text-lv-gold">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Thinking...</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {thinkingSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter"
                    >
                      › {step}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about pointers, syscalls, or CPU scheduling..."
          disabled={isThinking}
          className="w-full h-16 bg-white border border-lv-cream rounded-none px-8 pr-20 outline-none focus:border-lv-gold transition-all shadow-xl text-lv-brown font-medium placeholder:text-gray-300"
        />
        <Button
          onClick={handleSend}
          disabled={isThinking || !input.trim()}
          className="absolute right-2 top-2 h-12 w-12 rounded-none p-0 bg-lv-brown text-lv-gold hover:bg-lv-brown/90"
        >
          <Send size={20} />
        </Button>
      </div>

      <p className="text-[9px] text-center text-gray-400 uppercase tracking-[0.2em] mt-2">
        Socratic Guidance Model 2.4 • Low Latency Mode
      </p>
    </div>
  )
}
