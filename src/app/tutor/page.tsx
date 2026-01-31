"use client"
import React, { useState } from "react"
import { Bot, Send, Sparkles } from "lucide-react"
import { Button, Card } from "@/components/ui"
import { motion } from "framer-motion"

export default function GeneralTutor() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm your Socratic CodeMentor. I'm here to help you reason through any software engineering topic. What's on your mind today?" }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    const newMsgs = [...messages, { role: 'user', text: input }]
    setMessages(newMsgs)
    setInput('')

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: "That's a deep topic. To help you explore it, tell me: what's your current understanding of how this works at a low level?"
      }])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[75vh] gap-4 py-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-200">
          <Bot size={28} />
        </div>
        <div>
          <h1 className="text-xl font-black text-gray-900">Socratic Mentor</h1>
          <div className="flex items-center gap-1.5 text-indigo-600">
            <Sparkles size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Always Online</span>
          </div>
        </div>
      </div>

      <Card className="flex-1 overflow-y-auto flex flex-col gap-4 p-6 bg-white/50 backdrop-blur-sm border-gray-100 shadow-inner">
        {messages.map((m, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-4 rounded-3xl ${
              m.role === 'user'
                ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-200'
                : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm font-medium'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </Card>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about DSA, OS, Web Dev..."
          className="flex-1 h-14 bg-white border-2 border-gray-100 rounded-2xl px-6 outline-none focus:border-indigo-600 transition-all shadow-sm"
        />
        <Button onClick={handleSend} className="h-14 w-14 rounded-2xl p-0">
          <Send size={20} />
        </Button>
      </div>
    </div>
  )
}
