"use client"

import { type ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface FloatingTooltipProps {
  children: ReactNode
  content: string
  className?: string
}

export function FloatingTooltip({ children, content, className }: FloatingTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-gray-900 rounded-lg whitespace-nowrap animate-in fade-in-0 slide-in-from-bottom-1 duration-200">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  )
}
