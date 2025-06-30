import React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonCardProps {
  className?: string
  lines?: number
  showAvatar?: boolean
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  className,
  lines = 3,
  showAvatar = false
}) => {
  return (
    <div className={cn("glass-card p-6 animate-pulse", className)}>
      {showAvatar && (
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24" />
            <div className="h-3 bg-gray-300 rounded w-16" />
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 bg-gray-300 rounded",
              i === lines - 1 ? "w-3/4" : "w-full"
            )}
          />
        ))}
      </div>
    </div>
  )
}