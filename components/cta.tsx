"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTA() {
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
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-white/80 text-sm">Ready to get started?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Your AI Journey
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> Today</span>
          </h2>

          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Join thousands of teams already using Growl AI to automate their workflows and boost productivity. Get
            started with our free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white/[0.2] text-white hover:bg-white/[0.05] px-8 py-3 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-white/40 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}
