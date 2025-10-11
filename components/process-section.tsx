"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MessageSquare, Github, Slack, Figma, Chrome, Database, Zap, BarChart3 } from "lucide-react"
import { useState } from "react"

const processSteps = [
  {
    number: "01",
    title: "Subscribe",
    description:
      "Choose your preferred plan to cancel or pause at anytime you like. So you're as flexible as your business' needs.",
    visual: "subscription",
    metrics: ["Speed", "Security", "Accuracy"],
  },
  {
    number: "02",
    title: "Request",
    description:
      "Start requesting the workflow automations and AI applications you need, your developers are right there to transform your ideas into reality.",
    visual: "icons",
    icons: [Github, Slack, Figma, Chrome, Database, Zap, BarChart3, MessageSquare],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our developers swiftly begin building your custom solutions, prioritizing speed without compromising on quality.",
    visual: "code",
    codeLines: [
      "FeatureSection | from 'nextjs-template'",
      "const App = () => {",
      "  return (",
      "    <div>",
      "      <FeatureSection />",
      "    </div>",
      "  )",
      "}",
    ],
  },
  {
    number: "04",
    title: "Test & optimise",
    description:
      "You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
    visual: "metrics",
    metrics: ["Speed", "Security", "Accuracy"],
  },
  {
    number: "05",
    title: "Become an industry leader",
    description:
      "Continue requesting as many workflow automations and AI applications as you wish, and transform your organisation into a worldwide industry leader.",
    visual: "globe",
  },
]

export default function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">process</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={index === 2 || index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="p-6 bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden backdrop-blur-sm h-full">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Visual Content Area */}
                  <div className="mb-6 h-32 flex items-center justify-center">
                    {step.visual === "subscription" && (
                      <div className="w-full max-w-xs bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-white text-sm">Subscription</span>
                          </div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex gap-2">
                          <div className="px-3 py-1 bg-gray-800 rounded text-xs text-white">Basic</div>
                          <div className="px-3 py-1 bg-purple-600 rounded text-xs text-white">Custom</div>
                        </div>
                      </div>
                    )}

                    {step.visual === "icons" && (
                      <div className="grid grid-cols-4 gap-3 w-full max-w-xs">
                        {step.icons?.slice(0, 8).map((Icon, i) => (
                          <motion.div
                            key={i}
                            className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center border border-purple-500/20"
                            animate={{
                              scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <Icon className="w-4 h-4 text-purple-300" />
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {step.visual === "code" && (
                      <div className="w-full max-w-xs bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 font-mono text-xs">
                        {step.codeLines?.map((line, i) => (
                          <motion.div
                            key={i}
                            className="text-gray-300 mb-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {line}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {step.visual === "metrics" && (
                      <div className="w-full max-w-xs space-y-3">
                        {step.metrics?.map((metric, i) => (
                          <div key={i} className="space-y-1">
                            <div className="text-white text-sm">{metric}</div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${70 + i * 10}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.visual === "globe" && (
                      <motion.div
                        className="w-24 h-24 rounded-full border-2 border-purple-500/30 relative overflow-hidden"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                          <div className="absolute inset-2 border border-purple-400/40 rounded-full">
                            <div className="absolute inset-2 border border-purple-300/30 rounded-full">
                              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Step Number and Title */}
                  <div className="mb-4">
                    <span className="text-purple-400 text-sm font-medium">{step.number}.</span>
                    <h3 className="text-xl font-semibold text-white mt-1">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
