"use client"

import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useEffect, useState, Suspense, useMemo } from "react"
import dynamic from "next/dynamic"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const Bear3D = dynamic(() => import("../3d-bear"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse" />
  ),
})

function TypeWriter({ text, delay = 0, speed = 80 }: { text: string; delay?: number; speed?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex >= text.length) {
      setIsComplete(true)
      return
    }

    const timer = setTimeout(
      () => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex((prev) => prev + 1)
      },
      delay + currentIndex * speed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return (
    <span className="relative">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, rotateX: -90, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              textShadow: [
                "0 0 0px rgba(168, 85, 247, 0)",
                "0 0 20px rgba(168, 85, 247, 0.8)",
                "0 0 0px rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block text-white font-semibold drop-shadow-lg"
            style={{
              transformOrigin: "center bottom",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
      {!isComplete && (
        <motion.span
          animate={{
            opacity: [1, 0],
            scaleY: [1, 0.8, 1],
            backgroundColor: ["rgba(168, 85, 247, 1)", "rgba(236, 72, 153, 1)", "rgba(168, 85, 247, 1)"],
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="inline-block w-0.5 h-[1em] ml-1 rounded-full shadow-lg shadow-purple-500/50"
        />
      )}
    </span>
  )
}

function ScatteredDots() {
  const dots = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
        size: 0.5 + Math.random() * 1.5,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: dot.delay,
            ease: "easeInOut",
          }}
          className="absolute bg-white rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
        />
      ))}
    </div>
  )
}

function CentralGlow() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-96 h-96 bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-violet-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/40 to-purple-400/40 rounded-full blur-2xl"
      />
    </div>
  )
}

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ")

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotateX: -45,
              filter: "blur(8px)",
              scale: 0.8,
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
            },
          }}
          whileHover={{
            scale: 1.05,
            color: "#e879f9",
            textShadow: "0 0 20px rgba(232, 121, 249, 0.6)",
            transition: { duration: 0.2 },
          }}
          className="inline-block mr-2 cursor-default text-white font-medium drop-shadow-md"
          style={{ transformOrigin: "center bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

function GlitchText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="relative inline-block"
    >
      <motion.span
        animate={{
          textShadow: ["0 0 0 transparent", "2px 0 0 #ff0080, -2px 0 0 #00ffff", "0 0 0 transparent"],
        }}
        transition={{
          duration: 0.1,
          repeat: 3,
          delay: delay + 1,
          repeatDelay: 2,
        }}
        className="relative z-10 text-white font-bold drop-shadow-xl"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-purple-400 opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: 2,
          delay: delay + 1.2,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  )
}

export default function HeroGeometric({
  badge = "🐻 Introducing Growl AI",
  title1 = "Creating AI solutions",
  subtitle = "We craft workflow automations and bespoke AI solutions for forward-thinking companies.",
}: {
  badge?: string
  title1?: string
  subtitle?: string
}) {
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
      scale: 0.95,
      rotateX: -15,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    }),
  }

  return (
    <div
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black",
        inter.className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20" />

      <ScatteredDots />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 z-10">
        <Suspense
          fallback={
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"
            />
          }
        >
          <Bear3D />
        </Suspense>
      </div>

      <CentralGlow />

      <div className="relative z-20 container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-8">
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
                backgroundColor: "rgba(168, 85, 247, 0.15)",
              }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-6 transition-all duration-300"
            >
              <span className="text-sm text-purple-200 font-semibold drop-shadow-md">
                <AnimatedText text={badge} delay={0.8} />
              </span>
            </motion.div>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              {title1.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4 cursor-default"
                  whileHover={{
                    scale: 1.1,
                    color: "#e879f9",
                    textShadow: "0 0 30px rgba(232, 121, 249, 0.8)",
                    filter: "drop-shadow(0 0 20px rgba(232, 121, 249, 0.6))",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <GlitchText text={word} delay={1.2 + index * 0.2} />
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-lg sm:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
              <AnimatedText text={subtitle} delay={4} />
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium text-lg transition-all duration-300 min-w-[160px] shadow-lg shadow-purple-500/25 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Our services</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 text-white rounded-lg font-medium backdrop-blur-sm transition-all duration-300 text-lg min-w-[160px] hover:border-purple-500 group flex items-center gap-2"
            >
              Book a call
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="group-hover:text-purple-400 transition-colors"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
