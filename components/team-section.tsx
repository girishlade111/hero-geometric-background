"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const teamMembers = [
  {
    name: "Moatassem D.",
    role: "CEO",
    avatar: "👨‍💼",
    linkedin: "#",
  },
  {
    name: "M. Rashad",
    role: "CTO",
    avatar: "👨‍💻",
    linkedin: "#",
  },
  {
    name: "Jasmin A.",
    role: "Solutions Architect",
    avatar: "👩‍🎓",
    linkedin: "#",
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
              team
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-900/10 hover:to-pink-900/10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-3xl">
                  {member.avatar}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-6">{member.role}</p>

                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-purple-400 transition-colors group/link"
                >
                  <span className="font-medium">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
