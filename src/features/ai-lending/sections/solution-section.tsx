"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Puzzle, Settings, Shield, Lock } from "lucide-react"

const solutionFeatures = [
  {
    icon: Zap,
    title: "Intelligent Automation Engine",
    description:
      "Advanced machine learning algorithms process loan applications, analyze risk factors, and make instant credit decisions with 85% accuracy while maintaining human oversight for complex cases.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics Platform",
    description:
      "Real-time data processing analyzes 200+ borrower data points, market trends, and economic indicators to predict default probability and optimize lending decisions.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: Puzzle,
    title: "Seamless System Integration",
    description:
      "API-first architecture connects effortlessly with existing core banking systems, CRM platforms, and third-party services without disrupting current operations or requiring system replacements.",
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-violet-50",
  },
  {
    icon: Settings,
    title: "Modular Design Framework",
    description:
      "Customizable platform components adapt to specific business requirements, regulatory frameworks, and market conditions while supporting rapid feature deployment and scaling.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
  },
  {
    icon: Shield,
    title: "Compliance-First Architecture",
    description:
      "Built-in regulatory compliance monitoring ensures adherence to TILA, RESPA, GDPR, and fair lending requirements with automated audit trails and reporting capabilities.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
  },
  {
    icon: Lock,
    title: "Enterprise Security Standards",
    description:
      "End-to-end encryption, multi-factor authentication, and role-based access controls protect sensitive financial data while meeting SOC2 and banking security requirements.",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our AI-Enabled Lending Solution</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Angular Minds delivers comprehensive AI-powered online lending platforms that transform traditional lending
            operations into intelligent, automated systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  rotateY: 10,
                  z: 50,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 },
                }}
                className="group relative transform-gpu"
                style={{ perspective: "1000px" }}
              >
                <div className="absolute inset-0 transform group-hover:rotate-45 transition-transform duration-700 ease-out">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${feature.bgColor} opacity-30 rounded-3xl group-hover:rounded-xl transition-all duration-700`}
                    style={{
                      clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    }}
                  />
                </div>

                <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group-hover:bg-white/90">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ padding: "1px" }}
                  >
                    <div className="w-full h-full bg-white/90 rounded-2xl" />
                  </div>

                  <div className="relative p-8">
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 400 }}
                    >
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-2xl transition-all duration-500`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <feature.icon className="w-10 h-10 text-white relative z-10 group-hover:drop-shadow-lg transition-all duration-300" />
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl scale-125 transition-all duration-700`}
                      />
                    </motion.div>

                    <div className="relative mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-2 origin-left`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 0.7 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    <motion.p
                      className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>

                    <div className="absolute top-4 right-4 flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-60`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
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
