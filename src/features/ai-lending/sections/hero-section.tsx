"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-100">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200" variant="secondary">
              AI-Powered Lending Solutions
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-orange-600 to-amber-600 bg-clip-text text-transparent"
          >
            Transform Lending with Intelligent AI-Powered Platform Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
          >
            Revolutionize your lending operations with cutting-edge artificial intelligence that delivers faster
            decisions, reduced risks, and superior borrower experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 bg-orange-500 hover:bg-orange-600">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              View Our Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
