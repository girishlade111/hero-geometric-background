"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function AIAutomationSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const highlightedWords = [
    { text: "AI Automation", color: "from-purple-400 to-pink-400" },
    { text: "AI-driven", color: "from-violet-400 to-purple-400" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % highlightedWords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Animated dots background */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Central glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" variants={wordVariants}>
            <span className="text-white">We're a </span>
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              AI Automation
            </motion.span>
          </motion.h2>

          <motion.div className="flex items-center justify-center gap-4 mt-4" variants={wordVariants}>
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">Agency</span>
            <motion.span
              className="text-4xl md:text-5xl"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.div className="mt-8 flex items-center justify-center gap-4" variants={wordVariants}>
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Turning businesses into </span>
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
              industry leaders
            </motion.span>
            <motion.span
              className="text-3xl md:text-4xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
