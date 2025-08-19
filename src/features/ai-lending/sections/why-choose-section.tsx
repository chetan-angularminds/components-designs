"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lock, Zap, Award, Settings, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Proven AI Expertise",
    description:
      "Deep expertise in machine learning, natural language processing, and predictive analytics specifically applied to financial services. Our data scientists have developed 100+ successful AI models for lending applications.",
    stat: "100+",
    statLabel: "AI Models",
  },
  {
    icon: Lock,
    title: "Security-First Approach",
    description:
      "Enterprise-grade security architecture with end-to-end encryption, secure API design, and comprehensive compliance frameworks. SOC2 Type II certified development processes ensure maximum data protection.",
    stat: "SOC2",
    statLabel: "Certified",
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description:
      "Accelerated development methodology delivers working platforms in 12-16 weeks versus 6-12 months for traditional development. Proven deployment frameworks minimize implementation risks and timeline delays.",
    stat: "12-16",
    statLabel: "Weeks",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Award-winning development team recognized for innovation in fintech solutions. Strong track record of successful AI implementations across banking, lending, and financial services sectors.",
    stat: "15+",
    statLabel: "Awards",
  },
  {
    icon: Settings,
    title: "Ongoing Support",
    description:
      "Comprehensive post-deployment support including system monitoring, performance optimization, AI model tuning, and feature enhancements. Dedicated support team ensures maximum platform uptime and performance.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Demonstrated results with average 200-300% ROI within first year of implementation. Detailed analytics and reporting capabilities provide clear visibility into business impact and performance improvements.",
    stat: "300%",
    statLabel: "ROI",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Choose Angular Minds</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Partner with industry leaders who deliver proven results through cutting-edge AI technology and unmatched
            expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className={`${index % 2 === 1 ? "lg:mt-8" : ""} group`}
            >
              <Card className="h-full bg-white border-slate-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-bl-full opacity-50" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <reason.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-700">{reason.stat}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{reason.statLabel}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
