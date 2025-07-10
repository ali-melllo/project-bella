"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export function GlowingCard({ children, className }: GlowingCardProps) {
  return (
    <Card
      className={cn(
        "neo-card border-0 relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-transparent before:to-pink-500/10",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className,
      )}
    >
      {children}
    </Card>
  )
}
