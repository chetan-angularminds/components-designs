"use client"

import { HeroSection } from "./sections/hero-section"
import { ChallengesSection } from "./sections/challenges-section"
import { SolutionSection } from "./sections/solution-section"
import { CoreFeaturesSection } from "./sections/core-features-section"
import { BusinessBenefitsSection } from "./sections/business-benefits-section"
import { ComparisonSection } from "./sections/comparison-section"
import { IndustriesSection } from "./sections/industries-section"
import { CaseStudiesSection } from "./sections/case-studies-section"
import { WhyChooseSection } from "./sections/why-choose-section"
import { TestimonialsSection } from "./sections/testimonials-section"
import { FAQSection } from "./sections/faq-section"
import { CTASection } from "./sections/cta-section"

export function AILendingPlatform() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <CoreFeaturesSection />
      <BusinessBenefitsSection />
      <ComparisonSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
