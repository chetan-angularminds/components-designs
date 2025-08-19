"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to implement an AI-enabled lending platform?",
    answer:
      "Implementation timeline typically ranges from 12-16 weeks depending on complexity and integration requirements. Our agile development approach provides working functionality in phases, allowing for early testing and feedback throughout the development process.",
  },
  {
    question: "What kind of ROI can we expect from AI lending automation?",
    answer:
      "Most clients achieve 200-300% ROI within the first year through reduced operational costs, increased approval rates, and improved risk management. Specific ROI depends on current process efficiency, loan volume, and implementation scope.",
  },
  {
    question: "How does the AI ensure fair lending and regulatory compliance?",
    answer:
      "Our AI models are designed with explainable algorithms that provide clear decision rationale. Built-in bias testing, fair lending monitoring, and comprehensive audit trails ensure compliance with all regulatory requirements including ECOA, HMDA, and state regulations.",
  },
  {
    question: "Can the platform integrate with our existing core banking system?",
    answer:
      "Yes, our platform is designed for seamless integration with major core banking systems including FIS, Fiserv, Jack Henry, and others. Standard APIs and custom integration options ensure smooth data flow and operational continuity.",
  },
  {
    question: "What level of customization is available for our specific lending products?",
    answer:
      "The platform offers extensive customization capabilities including custom underwriting rules, pricing algorithms, document requirements, and workflow configurations. All business logic can be tailored to match your specific lending policies and procedures.",
  },
  {
    question: "How secure is the AI lending platform?",
    answer:
      "Enterprise-grade security includes end-to-end encryption, multi-factor authentication, role-based access controls, and comprehensive audit logging. The platform meets or exceeds all banking security standards including SOC2, PCI DSS, and regulatory requirements.",
  },
]

export function FAQSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI-powered lending platform implementation and capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-slate-200 bg-white rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-slate-900 hover:text-orange-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
