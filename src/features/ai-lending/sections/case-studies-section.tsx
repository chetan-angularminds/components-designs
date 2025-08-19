"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign } from "lucide-react"

const caseStudies = [
  {
    title: "Regional Bank Transformation",
    description:
      "A mid-size regional bank partnered with Angular Minds to modernize their commercial lending operations. Our AI-enabled platform reduced loan processing time from 21 days to 3 days while increasing approval rates by 28%.",
    results: [
      { icon: TrendingUp, label: "Processing Time", value: "21 days → 3 days" },
      { icon: Users, label: "Approval Rate", value: "+28%" },
      { icon: DollarSign, label: "Annual Savings", value: "$2.3M" },
    ],
    category: "Commercial Banking",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Fintech Startup Launch",
    description:
      "We developed a complete AI-powered personal lending platform for an emerging fintech company. The platform processed over 50,000 applications in the first year with 92% customer satisfaction scores.",
    results: [
      { icon: Users, label: "Applications", value: "50,000+" },
      { icon: TrendingUp, label: "Satisfaction", value: "92%" },
      { icon: DollarSign, label: "Market Position", value: "Top 10%" },
    ],
    category: "Fintech",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Credit Union Digital Transformation",
    description:
      "A federal credit union leveraged our AI lending solution to expand small business lending capabilities. The implementation resulted in 300% increase in loan origination volume and 45% improvement in member satisfaction scores.",
    results: [
      { icon: TrendingUp, label: "Loan Volume", value: "+300%" },
      { icon: Users, label: "Member Satisfaction", value: "+45%" },
      { icon: DollarSign, label: "Revenue Growth", value: "+180%" },
    ],
    category: "Credit Union",
    color: "from-purple-500 to-pink-500",
  },
]

export function CaseStudiesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Case Studies & Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real clients who transformed their lending operations with our AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      {study.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 mb-4">{study.title}</CardTitle>
                  <p className="text-slate-600 leading-relaxed">{study.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: resultIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center`}
                        >
                          <result.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-600">{result.label}</div>
                          <div className="font-semibold text-slate-900">{result.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
