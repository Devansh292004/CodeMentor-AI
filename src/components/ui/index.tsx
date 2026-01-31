import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'luxury' | 'glass'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-lv-brown text-lv-cream hover:opacity-90 shadow-xl shadow-lv-brown/10',
      secondary: 'bg-lv-gold text-lv-brown hover:opacity-90 shadow-xl shadow-lv-gold/20',
      luxury: 'gold-gradient text-lv-brown font-bold tracking-widest uppercase shadow-2xl shadow-lv-gold/30',
      outline: 'border-2 border-lv-brown text-lv-brown hover:bg-lv-brown hover:text-lv-cream',
      ghost: 'text-lv-brown hover:bg-lv-cream',
      glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold',
      md: 'px-6 py-3 text-sm font-bold tracking-wide uppercase',
      lg: 'px-8 py-4 text-base font-black tracking-widest uppercase',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lv-gold disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      "rounded-sm border border-lv-cream bg-white p-8 luxury-shadow",
      className
    )}
  >
    {children}
  </motion.div>
)

export const GlassCard = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
    animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
    className={cn(
      "rounded-sm border border-white/20 bg-white/10 p-8 shadow-2xl",
      className
    )}
  >
    {children}
  </motion.div>
)

export const ProgressBar = ({ value, max = 100, className }: { value: number, max?: number, className?: string }) => (
  <div className={cn("h-1 w-full overflow-hidden bg-lv-cream", className)}>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${(value / max) * 100}%` }}
      transition={{ type: "spring", bounce: 0, duration: 1 }}
      className="h-full bg-lv-gold"
    />
  </div>
)

export const LuxuryBadge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn(
    "px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] border border-lv-gold text-lv-gold rounded-full",
    className
  )}>
    {children}
  </span>
)

export const XPParticle = ({ x, y }: { x: number, y: number }) => (
  <motion.div
    initial={{ x, y, opacity: 1, scale: 1 }}
    animate={{ y: y - 100, opacity: 0, scale: 0.5 }}
    transition={{ duration: 1 }}
    className="fixed z-[999] pointer-events-none text-lv-gold font-black text-xl"
  >
    +50 XP
  </motion.div>
)
