"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedBeamProps {
  className?: string
  duration?: number
  delay?: number
}

export function AnimatedBeam({ className, duration = 3, delay = 0 }: AnimatedBeamProps) {
  return (
    <motion.div
      className={cn("absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent", className)}
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "linear",
      }}
    />
  )
}
