"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
}

export function FadeIn({ children, className, direction = "up", delay = 0, duration = 0.6 }: FadeInProps) {
  return (
    <div
      className={cn(
        "animate-fade-in-up",
        direction === "down" && "animate-fade-in-down",
        direction === "left" && "animate-fade-in-left",
        direction === "right" && "animate-fade-in-right",
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
