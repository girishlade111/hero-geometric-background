"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useMemo } from "react"

function ScatteredDots() {
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
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
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-violet-500/20 rounded-full blur-3xl"
      />
    </div>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20" />

      <ScatteredDots />
      <CentralGlow />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">touch</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Office */}
              <div>
                <h3 className="text-white/60 text-sm uppercase tracking-wider mb-4">Office</h3>
                <div className="text-white/90 text-lg leading-relaxed">
                  71-75 Shelton St,
                  <br />
                  London,
                  <br />
                  United Kingdom
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-white/60 text-sm uppercase tracking-wider mb-4">Email</h3>
                <motion.a
                  href="mailto:contact@growl.ai"
                  className="group inline-flex items-center gap-3 text-white text-2xl md:text-3xl font-medium hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  contact@growl.ai
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-white/60 text-sm uppercase tracking-wider mb-4">Phone</h3>
                <motion.a
                  href="tel:+201008027634"
                  className="group inline-flex items-center gap-3 text-white text-2xl md:text-3xl font-medium hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  +20 100 802 7634
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white/90 text-sm mb-3">
                      First Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white/90 text-sm mb-3">
                      Last Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white/90 text-sm mb-3">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/90 text-sm mb-3">
                      Phone
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+31 (0) 20 343 9223"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/90 text-sm mb-3">
                    Message (We reply within 24 hours. SUN-THU, 9:00-17:00 GMT+2)
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Purple dot indicator */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold tracking-wide hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
