"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, Zap, Shield, Workflow, BarChart3, Users } from "lucide-react"
import { useState, useMemo } from "react"

function ScatteredDots() {
  const dots = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
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
            opacity: [0, 0.6, 0],
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
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-violet-500/20 rounded-full blur-3xl"
      />
    </div>
  )
}

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced machine learning algorithms that adapt to your workflow and optimize processes automatically.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process complex tasks in seconds with our optimized infrastructure and cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description: "Connect with your existing tools and platforms through our comprehensive API ecosystem.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain deep insights with real-time analytics and customizable reporting dashboards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together efficiently with built-in collaboration tools and shared workspaces.",
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="features" className="py-20 relative overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {"Powerful Features for".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
                  },
                }}
                style={{ display: "inline-block", transformOrigin: "center bottom" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}{" "}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Modern Teams
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-white/60 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Everything you need to streamline your workflow and boost productivity with AI-driven solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="perspective-1000"
            >
              <Card className="p-6 bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={
                    hoveredIndex === index
                      ? {
                          background: [
                            "linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
                            "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))",
                            "linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative z-10">
                  <motion.div className="mb-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"
                      animate={
                        hoveredIndex === index
                          ? {
                              boxShadow: [
                                "0 0 20px rgba(168, 85, 247, 0.3)",
                                "0 0 30px rgba(236, 72, 153, 0.3)",
                                "0 0 20px rgba(168, 85, 247, 0.3)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <motion.div
                        animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <feature.icon className="w-6 h-6 text-purple-300" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-white mb-3"
                    animate={
                      hoveredIndex === index
                        ? {
                            backgroundImage: [
                              "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
                              "linear-gradient(90deg, #c084fc 0%, #f472b6 50%, #ffffff 100%)",
                              "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
                            ],
                          }
                        : {}
                    }
                    style={{
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: hoveredIndex === index ? "transparent" : "white",
                    }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/60 leading-relaxed"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={
                    hoveredIndex === index
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
