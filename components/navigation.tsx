"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.08]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
            </div>
            <span className="text-white font-semibold text-lg">Growl</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-white/80 hover:text-white transition-colors">
              Process
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#work" className="text-white/80 hover:text-white transition-colors">
              Work
            </a>
            <a href="#plans" className="text-white/80 hover:text-white transition-colors">
              Plans
            </a>
            <a href="#team" className="text-white/80 hover:text-white transition-colors">
              Team
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
              Contact
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              className="text-white border-white/20 hover:border-purple-500 hover:bg-purple-500/10 bg-transparent transition-all duration-300"
            >
              Book a call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/60 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.08] py-4"
          >
            <div className="flex flex-col gap-4">
              <a href="#process" className="text-white/80 hover:text-white transition-colors">
                Process
              </a>
              <a href="#services" className="text-white/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#work" className="text-white/80 hover:text-white transition-colors">
                Work
              </a>
              <a href="#plans" className="text-white/80 hover:text-white transition-colors">
                Plans
              </a>
              <a href="#team" className="text-white/80 hover:text-white transition-colors">
                Team
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                Contact
                <ArrowUpRight size={16} />
              </a>
              <div className="pt-4 border-t border-white/[0.08]">
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:border-purple-500 hover:bg-purple-500/10 bg-transparent w-full justify-start transition-all duration-300"
                >
                  Book a call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
