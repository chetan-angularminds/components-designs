"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Briefcase, Home, Car, CreditCard } from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Digital Banking & Fintech",
    description:
      "Transform traditional banking operations with AI-powered lending solutions that compete with fintech disruptors. Enable instant personal loans, automated business lending, and intelligent risk management.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-100 to-blue-100",
  },
  {
    icon: Briefcase,
    title: "Commercial & Business Lending",
    description:
      "Streamline complex commercial loan origination with AI-powered cash flow analysis, automated financial statement processing, and predictive business performance modeling for informed lending decisions.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-100 to-indigo-100",
  },
  {
    icon: Home,
    title: "Mortgage & Real Estate",
    description:
      "Revolutionize mortgage lending with intelligent document processing, automated property valuation integration, and AI-powered borrower qualification that accelerates home financing processes.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-100 to-teal-100",
  },
  {
    icon: Car,
    title: "Auto & Equipment Financing",
    description:
      "Optimize vehicle and equipment financing with real-time asset valuation, automated credit decisions, and intelligent pricing strategies that maximize portfolio performance and customer satisfaction.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-100 to-red-100",
  },
  {
    icon: CreditCard,
    title: "Consumer Credit & Personal Loans",
    description:
      "Deploy AI-powered platforms for personal loans, credit cards, and consumer financing that deliver instant decisions while maintaining responsible lending practices and regulatory compliance.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-100 to-blue-100",
  },
]

export function IndustriesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Delivering specialized AI lending solutions across diverse financial sectors with industry-specific
            expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -15, rotateY: 5 }}
              className="group relative perspective-1000"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300`}
              />
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden h-full">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <industry.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-slate-900">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
