import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Star } from 'lucide-react'

interface FloatingBadgeProps {
  nftImageUrl?: string
  skill: string
  rating?: number
  verified?: boolean
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  nftImageUrl,
  skill,
  rating = 5,
  verified = true
}) => {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -5, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <div className="glass-card p-4 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-3">
          {/* NFT Shield */}
          <motion.div
            className="relative w-12 h-12 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {nftImageUrl ? (
              <img
                src={nftImageUrl}
                alt="NFT Badge"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <Shield className="h-6 w-6 text-white" />
            )}
          </motion.div>

          <div className="flex-1">
            <div className="font-semibold text-sm">{skill}</div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {verified && (
            <motion.div
              className="w-4 h-4 bg-success rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}