"use client"

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"


export default function AnimatedBackground() {

    const [mounted, setMounted] = useState(false)

 
  
    useEffect(() => {
      setMounted(true);
    }, [])
  
  if (!mounted) return null


  return (
    <div className="fixed inset-0 blur dark:blur-md md:blur-md dark:md:blur-xl overflow-hidden pointer-events-none">
{/* Floating particles */}
{[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute z-10 size-5 md:size-10 bg-gradient-to-r from-primary to-primary/40 rounded-full "
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -100, 0],
      opacity: [0.4, 0.2, 0.4],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Number.POSITIVE_INFINITY,
      delay: Math.random() * 2,
    }}
  />
))}
</div>
  )
}

