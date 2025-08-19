"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  Target,
  DollarSign,
  Scale,
  Smartphone,
  AlertTriangle,
  Zap,
  BarChart3,
  Puzzle,
  Settings,
  Shield,
  Lock,
  Bot,
  TrendingUp,
  FileText,
  TrendingDown,
  ArrowUpRight,
  Building2,
  Briefcase,
  Home,
  Car,
  CreditCard,
  Award,
} from "lucide-react"

// Animation hook for scroll-triggered animations
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

function ScrollingContainer({
  children,
  direction = "horizontal",
  speed = 30,
}: {
  children: React.ReactNode[]
  direction?: "horizontal" | "vertical"
  speed?: number
}) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex ${direction === "vertical" ? "flex-col" : ""} gap-6 ${
          isPaused ? "" : direction === "horizontal" ? "animate-scroll-x" : "animate-scroll-y"
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  )
}

// Animated section wrapper
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function AILendingPlatform() {
  const challenges = [
    {
      icon: Clock,
      title: "Slow Manual Underwriting",
      description:
        "Traditional credit assessment takes 7-14 days with manual document review, data verification, and risk analysis, leading to borrower frustration and abandoned applications.",
    },
    {
      icon: Target,
      title: "Limited Risk Assessment",
      description:
        "Conventional credit scoring models miss 45% of creditworthy borrowers by relying solely on FICO scores, resulting in lost revenue opportunities and reduced market penetration.",
    },
    {
      icon: DollarSign,
      title: "High Operational Costs",
      description:
        "Manual loan processing requires extensive human resources, with operational costs consuming 60-70% of lending margins and reducing profitability across all loan products.",
    },
    {
      icon: Scale,
      title: "Compliance Complexity",
      description:
        "Evolving regulations like GDPR, CCPA, and fair lending requirements demand constant system updates, creating compliance risks and increasing administrative overhead.",
    },
    {
      icon: Smartphone,
      title: "Poor Digital Experience",
      description:
        "Borrowers expect instant, mobile-first experiences similar to other financial services, but traditional lending platforms deliver clunky, multi-step processes that drive customer churn.",
    },
    {
      icon: AlertTriangle,
      title: "Fraud Detection Gaps",
      description:
        "Legacy fraud detection systems fail to identify sophisticated application fraud, resulting in 3-5% losses and damaged portfolio performance.",
    },
  ]

  const solutionFeatures = [
    {
      icon: Zap,
      title: "Intelligent Automation Engine",
      description:
        "Advanced machine learning algorithms process loan applications, analyze risk factors, and make instant credit decisions with 85% accuracy while maintaining human oversight for complex cases.",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Platform",
      description:
        "Real-time data processing analyzes 200+ borrower data points, market trends, and economic indicators to predict default probability and optimize lending decisions.",
    },
    {
      icon: Puzzle,
      title: "Seamless System Integration",
      description:
        "API-first architecture connects effortlessly with existing core banking systems, CRM platforms, and third-party services without disrupting current operations or requiring system replacements.",
    },
    {
      icon: Settings,
      title: "Modular Design Framework",
      description:
        "Customizable platform components adapt to specific business requirements, regulatory frameworks, and market conditions while supporting rapid feature deployment and scaling.",
    },
    {
      icon: Shield,
      title: "Compliance-First Architecture",
      description:
        "Built-in regulatory compliance monitoring ensures adherence to TILA, RESPA, GDPR, and fair lending requirements with automated audit trails and reporting capabilities.",
    },
    {
      icon: Lock,
      title: "Enterprise Security Standards",
      description:
        "End-to-end encryption, multi-factor authentication, and role-based access controls protect sensitive financial data while meeting SOC2 and banking security requirements.",
    },
  ]

  const coreFeatures = [
    {
      icon: Bot,
      title: "Intelligent Automated Underwriting",
      description:
        "Advanced machine learning models analyze 200+ data points in real-time, providing instant credit decisions with 85% accuracy. Our AI engine processes applications in under 60 seconds while maintaining strict risk parameters and regulatory compliance requirements.",
    },
    {
      icon: Shield,
      title: "Advanced Fraud Detection",
      description:
        "Multi-layered AI fraud prevention system identifies suspicious patterns, document tampering, and identity theft attempts with 95% accuracy. Real-time monitoring prevents fraudulent applications from entering the approval pipeline, protecting portfolio quality.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Risk Analytics",
      description:
        "Machine learning algorithms analyze borrower behavior patterns, market trends, and economic indicators to predict default probability with exceptional precision. Dynamic risk modeling adjusts to changing market conditions automatically.",
    },
    {
      icon: Zap,
      title: "Real-Time Decision Engine",
      description:
        "Instant automated decisions for 80% of applications based on configurable business rules and AI recommendations. Complex cases are intelligently routed to human underwriters with comprehensive risk assessments and recommendations.",
    },
    {
      icon: Target,
      title: "Dynamic Pricing Optimization",
      description:
        "AI-powered pricing engine calculates optimal interest rates based on risk assessment, market conditions, and competitive analysis. Personalized loan terms maximize profitability while remaining competitive in the marketplace.",
    },
    {
      icon: Smartphone,
      title: "Omnichannel Customer Experience",
      description:
        "Unified borrower journey across web, mobile, and partner channels with real-time application tracking, document upload, and communication tools. Progressive web application ensures consistent experience across all devices.",
    },
    {
      icon: FileText,
      title: "Automated Document Processing",
      description:
        "Optical character recognition and natural language processing extract and verify data from financial documents, tax returns, and bank statements automatically. Smart document classification reduces manual review by 90%.",
    },
    {
      icon: BarChart3,
      title: "Portfolio Management Dashboard",
      description:
        "Comprehensive analytics and reporting tools provide real-time insights into portfolio performance, risk metrics, and operational efficiency. Customizable dashboards deliver actionable intelligence for strategic decision-making.",
    },
  ]

  const businessBenefits = [
    {
      icon: DollarSign,
      title: "Increased Revenue Generation",
      description:
        "Boost loan approval rates by 35% through advanced AI risk assessment that identifies creditworthy borrowers missed by traditional scoring methods. Enhanced pricing optimization increases profit margins by 15-25% across all loan products.",
    },
    {
      icon: Zap,
      title: "Accelerated Processing Speed",
      description:
        "Reduce loan processing time from weeks to minutes with automated underwriting and decision-making. Faster approvals improve customer satisfaction scores by 40% and reduce application abandonment rates significantly.",
    },
    {
      icon: TrendingDown,
      title: "Reduced Operational Costs",
      description:
        "Achieve 50-70% reduction in manual processing costs through intelligent automation. AI-powered document processing and risk assessment eliminate time-intensive manual tasks while maintaining accuracy and compliance standards.",
    },
    {
      icon: Shield,
      title: "Enhanced Risk Management",
      description:
        "Advanced predictive analytics reduce default rates by 20-30% through superior borrower assessment and early warning systems. Real-time portfolio monitoring enables proactive risk mitigation and strategic adjustments.",
    },
    {
      icon: Scale,
      title: "Streamlined Compliance",
      description:
        "Automated compliance monitoring ensures adherence to evolving regulations including TILA, RESPA, GDPR, and fair lending requirements. Built-in audit trails and reporting capabilities simplify regulatory examinations and reduce compliance costs.",
    },
    {
      icon: Target,
      title: "Improved Market Reach",
      description:
        "Expand addressable market by accurately assessing thin-file and non-traditional borrowers through alternative data analysis. AI-powered credit models enable responsible lending to underserved market segments.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description:
        "Comprehensive analytics platform provides actionable insights into market trends, borrower behavior, and portfolio performance. Advanced reporting capabilities support strategic planning and business development initiatives.",
    },
    {
      icon: ArrowUpRight,
      title: "Scalable Operations",
      description:
        "Cloud-native architecture scales automatically to handle volume fluctuations without infrastructure investment. Microservices design enables rapid feature deployment and system enhancements to meet evolving business needs.",
    },
  ]

  const industries = [
    {
      icon: Building2,
      title: "Digital Banking & Fintech",
      description:
        "Transform traditional banking operations with AI-powered lending solutions that compete with fintech disruptors. Enable instant personal loans, automated business lending, and intelligent risk management.",
    },
    {
      icon: Briefcase,
      title: "Commercial & Business Lending",
      description:
        "Streamline complex commercial loan origination with AI-powered cash flow analysis, automated financial statement processing, and predictive business performance modeling for informed lending decisions.",
    },
    {
      icon: Home,
      title: "Mortgage & Real Estate",
      description:
        "Revolutionize mortgage lending with intelligent document processing, automated property valuation integration, and AI-powered borrower qualification that accelerates home financing processes.",
    },
    {
      icon: Car,
      title: "Auto & Equipment Financing",
      description:
        "Optimize vehicle and equipment financing with real-time asset valuation, automated credit decisions, and intelligent pricing strategies that maximize portfolio performance and customer satisfaction.",
    },
    {
      icon: CreditCard,
      title: "Consumer Credit & Personal Loans",
      description:
        "Deploy AI-powered platforms for personal loans, credit cards, and consumer financing that deliver instant decisions while maintaining responsible lending practices and regulatory compliance.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Angular Minds transformed our lending operations completely. The AI-powered platform reduced our processing time from two weeks to under an hour while improving our approval accuracy significantly. Our customers love the seamless digital experience, and we've seen substantial cost savings across all operations.",
      author: "Sarah Mitchell",
      title: "VP Technology, Metro Community Bank",
    },
    {
      quote:
        "The implementation was smooth and professional. Angular Minds delivered exactly what they promised – a sophisticated AI lending platform that scales with our business. The fraud detection capabilities alone have saved us hundreds of thousands in potential losses.",
      author: "David Chen",
      title: "CTO, NextGen Financial",
    },
    {
      quote:
        "Working with Angular Minds was exceptional. Their deep understanding of both AI technology and lending regulations gave us confidence throughout the project. The platform has exceeded our performance expectations and positioning us as a market leader.",
      author: "Maria Rodriguez",
      title: "Chief Innovation Officer, Summit Credit Union",
    },
  ]

  const caseStudies = [
    {
      title: "Regional Bank Transformation",
      description:
        "A mid-size regional bank partnered with Angular Minds to modernize their commercial lending operations. Our AI-enabled platform reduced loan processing time from 21 days to 3 days while increasing approval rates by 28%. The bank achieved $2.3M annual cost savings through automation and improved portfolio performance with 15% reduction in default rates.",
    },
    {
      title: "Fintech Startup Launch",
      description:
        "We developed a complete AI-powered personal lending platform for an emerging fintech company. The platform processed over 50,000 applications in the first year with 92% customer satisfaction scores. Automated underwriting enabled the startup to compete effectively against established players while maintaining healthy profit margins.",
    },
    {
      title: "Credit Union Digital Transformation",
      description:
        "A federal credit union leveraged our AI lending solution to expand small business lending capabilities. The implementation resulted in 300% increase in loan origination volume and 45% improvement in member satisfaction scores. Advanced analytics helped identify new market opportunities and optimize pricing strategies.",
    },
  ]

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

  return (
    <div className="min-h-screen bg-slate-50">
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200" variant="secondary">
              AI-Powered Lending Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-700 bg-clip-text text-transparent">
              Transform Lending with Intelligent AI-Powered Platform Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Revolutionize your lending operations with cutting-edge artificial intelligence that delivers faster
              decisions, reduced risks, and superior borrower experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700">
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Industry Challenges Holding Back Modern Lenders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Traditional lending institutions face mounting pressure to modernize their operations while managing
              increasing regulatory demands and borrower expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                  <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                        <challenge.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our AI-Enabled Lending Solution</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Angular Minds delivers comprehensive AI-powered online lending platforms that transform traditional
              lending operations into intelligent, automated systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`${index === 0 ? "md:col-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}>
                  <Card className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Core Features That Drive Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI-enabled lending platform delivers powerful capabilities designed to optimize every aspect of the
              lending lifecycle.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {coreFeatures.slice(0, 4).map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
                    <Card className="relative bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="space-y-6">
              {coreFeatures.slice(4).map((feature, index) => (
                <AnimatedSection key={index + 4} delay={(index + 4) * 100}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                    <Card className="relative bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Business Benefits That Matter</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your lending operations with measurable improvements across all key performance indicators.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full text-center bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Traditional vs AI-Enabled Lending Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Modernize your lending operations with intelligent automation that delivers superior results across all
              key metrics.
            </p>
          </div>
          <Card className="max-w-5xl mx-auto bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left p-6 font-semibold text-slate-900">Feature</th>
                      <th className="text-left p-6 font-semibold text-slate-600">Traditional Lending</th>
                      <th className="text-left p-6 font-semibold text-emerald-600">AI-Enabled Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Processing Time", "7-14 days manual review", "60 seconds automated decision"],
                      ["Approval Accuracy", "65% (FICO-only scoring)", "85% (200+ data points)"],
                      ["Fraud Detection", "70% manual identification", "95% AI-powered prevention"],
                      ["Operational Cost", "High manual overhead", "50-70% cost reduction"],
                      ["Risk Assessment", "Limited historical data", "Predictive analytics + real-time monitoring"],
                      ["Customer Experience", "Multi-step, paper-heavy", "Seamless digital journey"],
                      ["Compliance Monitoring", "Manual audit processes", "Automated compliance tracking"],
                      ["Portfolio Insights", "Quarterly reports", "Real-time analytics dashboard"],
                    ].map(([feature, traditional, ai], index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="p-6 font-medium text-slate-900">{feature}</td>
                        <td className="p-6 text-slate-600">{traditional}</td>
                        <td className="p-6 text-emerald-600 font-medium">{ai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform" />
                  <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <industry.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">{industry.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Case Studies & Success Stories</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <ScrollingContainer direction="horizontal" speed={40}>
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="min-w-[400px] mx-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-lg leading-relaxed">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
            </ScrollingContainer>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Choose Angular Minds</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Proven AI Expertise",
                description:
                  "Deep expertise in machine learning, natural language processing, and predictive analytics specifically applied to financial services. Our data scientists have developed 100+ successful AI models for lending applications.",
              },
              {
                icon: Lock,
                title: "Security-First Approach",
                description:
                  "Enterprise-grade security architecture with end-to-end encryption, secure API design, and comprehensive compliance frameworks. SOC2 Type II certified development processes ensure maximum data protection.",
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description:
                  "Accelerated development methodology delivers working platforms in 12-16 weeks versus 6-12 months for traditional development. Proven deployment frameworks minimize implementation risks and timeline delays.",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description:
                  "Award-winning development team recognized for innovation in fintech solutions. Strong track record of successful AI implementations across banking, lending, and financial services sectors.",
              },
              {
                icon: Settings,
                title: "Ongoing Support",
                description:
                  "Comprehensive post-deployment support including system monitoring, performance optimization, AI model tuning, and feature enhancements. Dedicated support team ensures maximum platform uptime and performance.",
              },
              {
                icon: TrendingUp,
                title: "Measurable ROI",
                description:
                  "Demonstrated results with average 200-300% ROI within first year of implementation. Detailed analytics and reporting capabilities provide clear visibility into business impact and performance improvements.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`${index % 2 === 1 ? "lg:mt-8" : ""}`}>
                  <Card className="h-full bg-white border-slate-200 hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Client Testimonials</h2>
          </div>
          <div className="max-w-4xl mx-auto h-96 overflow-hidden">
            <ScrollingContainer direction="vertical" speed={25}>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="mb-6 bg-gradient-to-r from-slate-50 to-emerald-50 border-slate-200 shadow-md"
                >
                  <CardContent className="p-8">
                    <blockquote className="text-lg italic mb-6 text-slate-700">"{testimonial.quote}"</blockquote>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ScrollingContainer>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                  <AccordionTrigger className="text-left text-slate-900 hover:text-emerald-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transform Your Lending Operations Today</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Ready to revolutionize your lending business with AI-powered automation? Contact Angular Minds to discover
            how our intelligent lending platform can accelerate your digital transformation and drive measurable
            business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-emerald-600 hover:bg-emerald-50"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
