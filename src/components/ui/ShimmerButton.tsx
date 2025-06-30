import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseClasses = "relative overflow-hidden font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
  
  const variantClasses = {
    primary: "bg-emergency hover:bg-emergency/90 text-white",
    secondary: "bg-trust hover:bg-trust/90 text-white",
    outline: "border-2 border-emergency text-emergency hover:bg-emergency hover:text-white"
  }

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6",
    lg: "py-4 px-8 text-lg"
  }

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}