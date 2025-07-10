"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  className?: string
  duration?: number
}

export function WordRotate({ words, className, duration = 2500 }: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return <span className={cn("inline-block transition-all duration-500", className)}>{words[index]}</span>
}
