import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30',
      secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/30',
      outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
      ghost: 'text-gray-600 hover:bg-gray-100',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-bold',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50',
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

export const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export const ProgressBar = ({ value, max = 100, className }: { value: number, max?: number, className?: string }) => (
  <div className={cn("h-3 w-full overflow-hidden rounded-full bg-gray-100", className)}>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${(value / max) * 100}%` }}
      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
    />
  </div>
)
