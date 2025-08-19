"use client"

import { motion } from "framer-motion"
import { Bot, Shield, TrendingUp, Zap, Target, Smartphone, FileText, BarChart3 } from "lucide-react"

const coreFeatures = [
  {
    icon: Bot,
    title: "Intelligent Automated Underwriting",
    description:
      "Advanced machine learning models analyze 200+ data points in real-time, providing instant credit decisions with 85% accuracy. Our AI engine processes applications in under 60 seconds while maintaining strict risk parameters and regulatory compliance requirements.",
    color: "from-blue-500 to-indigo-500",
    accent: "from-blue-100 to-indigo-100",
  },
  {
    icon: Shield,
    title: "Advanced Fraud Detection",
    description:
      "Multi-layered AI fraud prevention system identifies suspicious patterns, document tampering, and identity theft attempts with 95% accuracy. Real-time monitoring prevents fraudulent applications from entering the approval pipeline, protecting portfolio quality.",
    color: "from-emerald-500 to-teal-500",
    accent: "from-emerald-100 to-teal-100",
  },
  {
    icon: TrendingUp,
    title: "Predictive Risk Analytics",
    description:
      "Machine learning algorithms analyze borrower behavior patterns, market trends, and economic indicators to predict default probability with exceptional precision. Dynamic risk modeling adjusts to changing market conditions automatically.",
    color: "from-purple-500 to-pink-500",
    accent: "from-purple-100 to-pink-100",
  },
  {
    icon: Zap,
    title: "Real-Time Decision Engine",
    description:
      "Instant automated decisions for 80% of applications based on configurable business rules and AI recommendations. Complex cases are intelligently routed to human underwriters with comprehensive risk assessments and recommendations.",
    color: "from-orange-500 to-red-500",
    accent: "from-orange-100 to-red-100",
  },
  {
    icon: Target,
    title: "Dynamic Pricing Optimization",
    description:
      "AI-powered pricing engine calculates optimal interest rates based on risk assessment, market conditions, and competitive analysis. Personalized loan terms maximize profitability while remaining competitive in the marketplace.",
    color: "from-cyan-500 to-blue-500",
    accent: "from-cyan-100 to-blue-100",
  },
  {
    icon: Smartphone,
    title: "Omnichannel Customer Experience",
    description:
      "Unified borrower journey across web, mobile, and partner channels with real-time application tracking, document upload, and communication tools. Progressive web application ensures consistent experience across all devices.",
    color: "from-green-500 to-emerald-500",
    accent: "from-green-100 to-emerald-100",
  },
  {
    icon: FileText,
    title: "Automated Document Processing",
    description:
      "Optical character recognition and natural language processing extract and verify data from financial documents, tax returns, and bank statements automatically. Smart document classification reduces manual review by 90%.",
    color: "from-violet-500 to-purple-500",
    accent: "from-violet-100 to-purple-100",
  },
  {
    icon: BarChart3,
    title: "Portfolio Management Dashboard",
    description:
      "Comprehensive analytics and reporting tools provide real-time insights into portfolio performance, risk metrics, and operational efficiency. Customizable dashboards deliver actionable intelligence for strategic decision-making.",
    color: "from-rose-500 to-pink-500",
    accent: "from-rose-100 to-pink-100",
  },
]

export function CoreFeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/10 to-teal-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Core Features That Drive Results</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI-enabled lending platform delivers powerful capabilities designed to optimize every aspect of the
            lending lifecycle.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  rotateX: 10,
                  transition: { duration: 0.4, type: "spring", stiffness: 400 },
                }}
                className={`group relative transform-gpu h-full ${
                  index < 4 ? "lg:col-span-1" : "lg:col-span-1"
                } ${index === 0 || index === 7 ? "md:col-span-2 lg:col-span-2" : ""}`}
                style={{ perspective: "1000px" }}
              >
                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-30 rounded-3xl blur-sm transition-all duration-700`}
                  />
                </div>

                <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group-hover:bg-white group-hover:border-white/40 h-full flex flex-col">
                  <div className="relative p-6 flex-1 flex flex-col">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.3, type: "spring", stiffness: 500 },
                      }}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-xl transition-all duration-500`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <feature.icon className="w-8 h-8 text-white relative z-10 group-hover:drop-shadow-lg transition-all duration-300" />
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg scale-150 transition-all duration-700`}
                      />
                    </motion.div>

                    <div className="relative mb-3">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 line-clamp-2">
                        {feature.title}
                      </h3>
                      <motion.div
                        className={`h-0.5 bg-gradient-to-r ${feature.color} rounded-full mt-2 origin-left`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 0.6 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    <motion.p
                      className="text-slate-600 leading-relaxed text-sm line-clamp-4 group-hover:text-slate-700 transition-colors duration-300 flex-1"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>

                    <div className="absolute top-2 right-2 flex flex-col space-y-1">
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-60`}
                          animate={{
                            x: [0, 5, 0],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
