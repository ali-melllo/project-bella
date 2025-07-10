"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
}

export function NumberTicker({ value, direction = "up", delay = 0, className }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0)

  useEffect(() => {
    if (!inView) return

    const timer = setTimeout(() => {
      const startValue = direction === "down" ? value : 0
      const endValue = direction === "down" ? 0 : value
      const duration = 2000
      const startTime = Date.now()

      const updateValue = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (endValue - startValue) * easeOutQuart

        setDisplayValue(Math.round(currentValue))

        if (progress < 1) {
          requestAnimationFrame(updateValue)
        }
      }

      updateValue()
    }, delay)

    return () => clearTimeout(timer)
  }, [inView, value, direction, delay])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
