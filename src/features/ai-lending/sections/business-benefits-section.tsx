"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Zap, TrendingDown, Shield, Scale, Target, BarChart3, ArrowUpRight } from "lucide-react"

const businessBenefits = [
  {
    icon: DollarSign,
    title: "Increased Revenue Generation",
    description:
      "Boost loan approval rates by 35% through advanced AI risk assessment that identifies creditworthy borrowers missed by traditional scoring methods. Enhanced pricing optimization increases profit margins by 15-25% across all loan products.",
    metric: "+35%",
    metricLabel: "Approval Rate",
  },
  {
    icon: Zap,
    title: "Accelerated Processing Speed",
    description:
      "Reduce loan processing time from weeks to minutes with automated underwriting and decision-making. Faster approvals improve customer satisfaction scores by 40% and reduce application abandonment rates significantly.",
    metric: "60s",
    metricLabel: "Processing Time",
  },
  {
    icon: TrendingDown,
    title: "Reduced Operational Costs",
    description:
      "Achieve 50-70% reduction in manual processing costs through intelligent automation. AI-powered document processing and risk assessment eliminate time-intensive manual tasks while maintaining accuracy and compliance standards.",
    metric: "-70%",
    metricLabel: "Operational Costs",
  },
  {
    icon: Shield,
    title: "Enhanced Risk Management",
    description:
      "Advanced predictive analytics reduce default rates by 20-30% through superior borrower assessment and early warning systems. Real-time portfolio monitoring enables proactive risk mitigation and strategic adjustments.",
    metric: "-30%",
    metricLabel: "Default Rates",
  },
  {
    icon: Scale,
    title: "Streamlined Compliance",
    description:
      "Automated compliance monitoring ensures adherence to evolving regulations including TILA, RESPA, GDPR, and fair lending requirements. Built-in audit trails and reporting capabilities simplify regulatory examinations and reduce compliance costs.",
    metric: "100%",
    metricLabel: "Compliance",
  },
  {
    icon: Target,
    title: "Improved Market Reach",
    description:
      "Expand addressable market by accurately assessing thin-file and non-traditional borrowers through alternative data analysis. AI-powered credit models enable responsible lending to underserved market segments.",
    metric: "+45%",
    metricLabel: "Market Reach",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Comprehensive analytics platform provides actionable insights into market trends, borrower behavior, and portfolio performance. Advanced reporting capabilities support strategic planning and business development initiatives.",
    metric: "200+",
    metricLabel: "Data Points",
  },
  {
    icon: ArrowUpRight,
    title: "Scalable Operations",
    description:
      "Cloud-native architecture scales automatically to handle volume fluctuations without infrastructure investment. Microservices design enables rapid feature deployment and system enhancements to meet evolving business needs.",
    metric: "∞",
    metricLabel: "Scalability",
  },
]

export function BusinessBenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Business Benefits That Matter</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your lending operations with measurable improvements across all key performance indicators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group"
            >
              <Card className="h-full text-center bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <CardHeader className="pb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">{benefit.metric}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{benefit.metricLabel}</div>
                  </div>
                  <CardTitle className="text-lg text-slate-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
