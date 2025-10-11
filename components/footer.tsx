"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black py-16 relative overflow-hidden">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-60" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's talk.
          </motion.h2>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:hello@growl.ai"
              className="text-2xl md:text-3xl lg:text-4xl text-white hover:text-purple-400 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
              }}
            >
              hello@growl.ai
            </motion.a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mb-12" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <motion.nav
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { name: "Process", href: "#process" },
              { name: "Services", href: "#services" },
              { name: "Work", href: "#work" },
              { name: "Plans", href: "#plans" },
              { name: "Team", href: "#team" },
              { name: "Contact", href: "#contact", hasArrow: true },
              { name: "404", href: "#404" },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-white hover:text-purple-400 transition-all duration-300 text-lg flex items-center gap-2"
                whileHover={{
                  x: 8,
                  color: "#a855f7",
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.4)",
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {link.name}
                {link.hasArrow && (
                  <motion.span className="text-purple-400" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    →
                  </motion.span>
                )}
              </motion.a>
            ))}
          </motion.nav>

          <motion.p
            className="text-gray-400 text-sm lg:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            All Rights reserved - Growl
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
