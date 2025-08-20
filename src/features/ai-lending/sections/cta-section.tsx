"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transform Your Lending Operations Today</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Ready to revolutionize your lending business with AI-powered automation? Contact Angular Minds to discover
            how our intelligent lending platform can accelerate your digital transformation and drive measurable
            business results.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-emerald-600 hover:bg-emerald-50 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-700 bg-transparent group"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="absolute top-10 left-0 w-20 h-20 bg-white/10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-16 h-16 bg-emerald-300/20 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/4 right-10 w-8 h-8 bg-teal-200/15 rounded-full"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/7 left-10 w-12 h-12 bg-white/8 rounded-full"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-36 w-6 h-6 bg-emerald-200/20 rounded-full"
          animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-30 w-10 h-10 bg-slate-200/12 rounded-full"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.div
          className="absolute top-1/7 left-32 w-7 h-7 bg-teal-300/18 rounded-full"
          animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
          transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.div
          className="absolute top-1/6 right-40 w-9 h-9 bg-white/12 rounded-full"
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.2 }}
        />
      </div>
    </section>
  )
}
