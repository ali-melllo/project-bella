"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ShinyButtonProps {
  children: ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
}

export function ShinyButton({ children, className, size = "default", onClick }: ShinyButtonProps) {
  return (
    <Button
      onClick={onClick}
      size={size}
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 magic-glow",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
