"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface SlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
}

export function SlideIn({ children, className, direction = "up", delay = 0, duration = 0.6 }: SlideInProps) {
  return (
    <div
      className={cn(
        "animate-slide-in-up",
        direction === "down" && "animate-slide-in-down",
        direction === "left" && "animate-slide-in-left",
        direction === "right" && "animate-slide-in-right",
        className,
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}
