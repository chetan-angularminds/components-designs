"use client"

import { motion } from "framer-motion"
import { Clock, Target, DollarSign, Scale, Smartphone, AlertTriangle } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    title: "Slow Manual Underwriting",
    description:
      "Traditional credit assessment takes 7-14 days with manual document review, data verification, and risk analysis, leading to borrower frustration and abandoned applications.",
    color: "from-red-500 to-orange-500",
    bgColor: "from-red-100 to-orange-100",
  },
  {
    icon: Target,
    title: "Limited Risk Assessment",
    description:
      "Conventional credit scoring models miss 45% of creditworthy borrowers by relying solely on FICO scores, resulting in lost revenue opportunities and reduced market penetration.",
    color: "from-amber-500 to-yellow-500",
    bgColor: "from-amber-100 to-yellow-100",
  },
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description:
      "Manual loan processing requires extensive human resources, with operational costs consuming 60-70% of lending margins and reducing profitability across all loan products.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-100 to-red-100",
  },
  {
    icon: Scale,
    title: "Compliance Complexity",
    description:
      "Evolving regulations like GDPR, CCPA, and fair lending requirements demand constant system updates, creating compliance risks and increasing administrative overhead.",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-100 to-pink-100",
  },
  {
    icon: Smartphone,
    title: "Poor Digital Experience",
    description:
      "Borrowers expect instant, mobile-first experiences similar to other financial services, but traditional lending platforms deliver clunky, multi-step processes that drive customer churn.",
    color: "from-red-600 to-orange-600",
    bgColor: "from-red-100 to-orange-100",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection Gaps",
    description:
      "Legacy fraud detection systems fail to identify sophisticated application fraud, resulting in 3-5% losses and damaged portfolio performance.",
    color: "from-orange-600 to-amber-600",
    bgColor: "from-orange-100 to-amber-100",
  },
]

export function ChallengesSection() {
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
            Industry Challenges Holding Back Modern Lenders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Traditional lending institutions face mounting pressure to modernize their operations while managing
            increasing regulatory demands and borrower expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-full blur-xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-xl" />
          </div>

          {/* Hexagonal grid layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {challenges.map((challenge, index) => {
              const isEven = index % 2 === 0
              const isMiddleRow = Math.floor(index / 3) === 1

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 8,
                    z: 50,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 },
                  }}
                  className={`group relative transform-gpu h-full ${
                    isMiddleRow && !isEven ? "lg:translate-y-8" : ""
                  } ${isEven ? "lg:translate-x-4" : "lg:-translate-x-4"}`}
                  style={{ perspective: "1000px" }}
                >
                  {/* Hexagonal background */}
                  <div className="absolute inset-0 transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${challenge.bgColor} opacity-20 rounded-3xl`}
                      style={{
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}
                    />
                  </div>

                  {/* Main card */}
                  <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group-hover:bg-white h-full flex flex-col">
                    {/* Gradient border effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${challenge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      style={{ padding: "2px" }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </div>

                    <div className="relative p-8 flex-1 flex flex-col">
                      {/* Floating icon */}
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${challenge.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-300`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${challenge.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-md scale-110 transition-all duration-500`}
                          />
                          <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-45 translate-x-8 group-hover:translate-x-0 transition-transform duration-500" />
                          <challenge.icon className="w-10 h-10 text-white relative z-10 group-hover:drop-shadow-lg transition-all duration-300" />
                        </div>
                        {/* Enhanced icon shadow */}
                        <div
                          className={`absolute top-2 left-2 w-20 h-20 bg-gradient-to-br ${challenge.color} rounded-2xl opacity-20 blur-sm -z-10 group-hover:opacity-40 group-hover:blur-lg transition-all duration-500`}
                        />
                      </div>

                      {/* Title with animated underline */}
                      <div className="relative mb-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                          {challenge.title}
                        </h3>
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${challenge.color} rounded-full mt-2`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>

                      {/* Description with reveal animation */}
                      <motion.p
                        className="text-slate-600 leading-relaxed text-sm flex-1"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {challenge.description}
                      </motion.p>

                      {/* Decorative corner element */}
                      <div
                        className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${challenge.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${challenge.color} rounded-full opacity-0 group-hover:opacity-60`}
                        style={{
                          top: `${20 + i * 25}%`,
                          right: `${10 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
