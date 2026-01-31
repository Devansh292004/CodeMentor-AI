"use client"
import React from "react"
import { Navigation } from "./Navigation"
import { Header } from "./Header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-1 pb-24 pt-4 px-4 max-w-2xl mx-auto w-full">
        {children}
      </main>
      <Navigation />
    </div>
  )
}
