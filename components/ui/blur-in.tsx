"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface BlurInProps {
  children: React.ReactNode
  className?: string
  variant?: "blur" | "scale"
  duration?: number
  delay?: number
}

export function BlurIn({ children, className, variant = "blur", duration = 1, delay = 0 }: BlurInProps) {
  return (
    <div
      className={cn("animate-blur-in", variant === "scale" && "animate-scale-in", className)}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
