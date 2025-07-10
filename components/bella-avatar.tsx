"use client"

import { cn } from "@/lib/utils"

interface BellaAvatarProps {
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
}

export function BellaAvatar({ size = "md", animated = false, className }: BellaAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center avatar-glow",
        sizeClasses[size],
        animated && "animate-pulse-slow",
        className,
      )}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Face */}
        <circle cx="50" cy="45" r="35" fill="#F3E8FF" stroke="#A855F7" strokeWidth="2" />

        {/* Hair */}
        <path d="M20 35 Q25 15 50 20 Q75 15 80 35 Q75 25 50 25 Q25 25 20 35" fill="#E879F9" />

        {/* Eyes */}
        <circle cx="40" cy="40" r="3" fill="#1F2937" />
        <circle cx="60" cy="40" r="3" fill="#1F2937" />
        <circle cx="41" cy="39" r="1" fill="#FFFFFF" />
        <circle cx="61" cy="39" r="1" fill="#FFFFFF" />

        {/* Glasses */}
        <circle cx="40" cy="40" r="8" fill="none" stroke="#A855F7" strokeWidth="2" />
        <circle cx="60" cy="40" r="8" fill="none" stroke="#A855F7" strokeWidth="2" />
        <line x1="48" y1="40" x2="52" y2="40" stroke="#A855F7" strokeWidth="2" />

        {/* Nose */}
        <ellipse cx="50" cy="48" rx="2" ry="3" fill="#F3E8FF" />

        {/* Mouth */}
        <path d="M45 55 Q50 60 55 55" stroke="#A855F7" strokeWidth="2" fill="none" />

        {/* Cheeks */}
        <circle cx="35" cy="50" r="4" fill="#F9A8D4" opacity="0.6" />
        <circle cx="65" cy="50" r="4" fill="#F9A8D4" opacity="0.6" />

        {/* Earrings */}
        <circle cx="25" cy="45" r="2" fill="#A855F7" />
        <circle cx="75" cy="45" r="2" fill="#A855F7" />
      </svg>

      {animated && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse" />
      )}
    </div>
  )
}
