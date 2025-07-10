"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  delay?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#9c40ff",
  colorTo = "#9c40ff40",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        className,
      )}
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from calc(var(--anchor) * 1deg), transparent 0, var(--color-from) var(--size)deg, var(--color-to) calc(var(--size) * 2deg), transparent calc(var(--size) * 2deg))`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          maskClip: "padding-box, border-box",
          animation: `spin-around calc(var(--duration) * 1s) linear infinite`,
          animationDelay: `calc(var(--delay) * 1s)`,
        }}
      />
    </div>
  )
}
