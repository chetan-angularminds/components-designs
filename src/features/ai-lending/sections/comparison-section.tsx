"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Processing Time",
    traditional: { value: "7-14 days manual review", isGood: false },
    ai: { value: "60 seconds automated decision", isGood: true },
  },
  {
    feature: "Approval Accuracy",
    traditional: { value: "65% (FICO-only scoring)", isGood: false },
    ai: { value: "85% (200+ data points)", isGood: true },
  },
  {
    feature: "Fraud Detection",
    traditional: { value: "70% manual identification", isGood: false },
    ai: { value: "95% AI-powered prevention", isGood: true },
  },
  {
    feature: "Operational Cost",
    traditional: { value: "High manual overhead", isGood: false },
    ai: { value: "50-70% cost reduction", isGood: true },
  },
  {
    feature: "Risk Assessment",
    traditional: { value: "Limited historical data", isGood: false },
    ai: { value: "Predictive analytics + real-time monitoring", isGood: true },
  },
  {
    feature: "Customer Experience",
    traditional: { value: "Multi-step, paper-heavy", isGood: false },
    ai: { value: "Seamless digital journey", isGood: true },
  },
  {
    feature: "Compliance Monitoring",
    traditional: { value: "Manual audit processes", isGood: false },
    ai: { value: "Automated compliance tracking", isGood: true },
  },
  {
    feature: "Portfolio Insights",
    traditional: { value: "Quarterly reports", isGood: false },
    ai: { value: "Real-time analytics dashboard", isGood: true },
  },
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Traditional vs AI-Enabled Lending Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Modernize your lending operations with intelligent automation that delivers superior results across all key
            metrics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-50 to-emerald-50 border-b border-slate-200">
                      <th className="text-left p-6 font-semibold text-slate-900 w-1/3">Feature</th>
                      <th className="text-left p-6 font-semibold text-slate-600 w-1/3">Traditional Lending</th>
                      <th className="text-left p-6 font-semibold text-emerald-600 w-1/3">AI-Enabled Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="p-6 font-medium text-slate-900">{row.feature}</td>
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                              <X className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-slate-600">{row.traditional.value}</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-emerald-500" />
                            </div>
                            <span className="text-emerald-600 font-medium">{row.ai.value}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
