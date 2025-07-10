"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesTextProps {
  text: string
  className?: string
  sparklesCount?: number
}

export function SparklesText({ text, className, sparklesCount = 5 }: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newSparkles = Array.from({ length: sparklesCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setSparkles(newSparkles)
  }, [sparklesCount])

  return (
    <span className={cn("relative inline-block", className)}>
      {text}
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}
    </span>
  )
}
