"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Angular Minds transformed our lending operations completely. The AI-powered platform reduced our processing time from two weeks to under an hour while improving our approval accuracy significantly.",
    author: "Sarah Mitchell",
    title: "VP Technology, Metro Community Bank",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "The implementation was smooth and professional. Angular Minds delivered exactly what they promised – a sophisticated AI lending platform that scales with our business.",
    author: "David Chen",
    title: "CTO, NextGen Financial",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "Working with Angular Minds was exceptional. Their deep understanding of both AI technology and lending regulations gave us confidence throughout the project.",
    author: "Maria Rodriguez",
    title: "Chief Innovation Officer, Summit Credit Union",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "The fraud detection capabilities alone have saved us hundreds of thousands in potential losses. Our customers love the seamless digital experience.",
    author: "James Wilson",
    title: "Risk Management Director, First National Bank",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "Our loan approval rates increased by 35% while maintaining strict risk parameters. The platform has exceeded our performance expectations.",
    author: "Lisa Thompson",
    title: "Chief Lending Officer, Community Trust Bank",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "The AI-powered underwriting has revolutionized our operations. We can now process applications in minutes instead of days.",
    author: "Michael Brown",
    title: "Operations Manager, Regional Credit Union",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(0)

  const getTestimonialAtOffset = (offset: number) => {
    const index = (currentIndex + offset + testimonials.length) % testimonials.length
    return testimonials[index]
  }

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setDirection(1)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setDirection(1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setDirection(-1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-20 overflow-x-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-orange-600">Our Clients</span> Say
          </h2>
          <p className="text-xl text-slate-600">Hear Directly From Our Satisfied Partners</p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white shadow-lg text-black hover:text-amber-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white shadow-lg text-black hover:text-amber-500"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div
            className="relative h-[400px] flex items-center justify-center overflow-visible"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`prev-${currentIndex}`}
                custom={direction}
                initial={{
                  x: direction > 0 ? -400 : 400,
                  scale: 0.5,
                  opacity: 0,
                  rotateY: direction > 0 ? 60 : -60,
                  z: -200,
                }}
                animate={{
                  x: 20, // Reduced from -150 to -100 to bring left card closer
                  scale: 0.8,
                  rotateY: 30,
                  opacity: 0.7,
                  z: -50,
                }}
                exit={{
                  x: direction > 0 ? -600 : 200,
                  scale: 0.4,
                  opacity: 0,
                  rotateY: direction > 0 ? 80 : -20,
                  z: -300,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute left-0 w-72"
              >
                <Card className="bg-white/80 shadow-lg border-0 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={getTestimonialAtOffset(-1).avatar || "/placeholder.svg"}
                        alt={getTestimonialAtOffset(-1).author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{getTestimonialAtOffset(-1).author}</h4>
                        <p className="text-slate-600 text-xs">{getTestimonialAtOffset(-1).title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 mt-4 line-clamp-3">"{getTestimonialAtOffset(-1).quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                key={`current-${currentIndex}`}
                custom={direction}
                initial={{
                  x: direction > 0 ? 400 : -400,
                  scale: 0.7,
                  opacity: 0,
                  rotateY: direction > 0 ? -45 : 45,
                  z: -100,
                }}
                animate={{
                  x: 0,
                  scale: 0.9,
                  rotateY: 0,
                  opacity: 1,
                  z: 0,
                }}
                exit={{
                  x: direction > 0 ? -400 : 400,
                  scale: 0.7,
                  opacity: 0,
                  rotateY: direction > 0 ? 45 : -45,
                  z: -100,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative z-10 w-96"
                whileHover={{ scale: 0.92, y: -5 }}
              >
                <Card className="bg-white shadow-2xl border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
                  <CardContent className="p-8 relative">
                    <Quote className="w-10 h-10 text-orange-400 mb-4" />
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-lg">{testimonials[currentIndex].author}</h4>
                        <p className="text-slate-600 text-sm">{testimonials[currentIndex].title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                key={`next-${currentIndex}`}
                custom={direction}
                initial={{
                  x: direction > 0 ? 600 : -200,
                  scale: 0.5,
                  opacity: 0,
                  rotateY: direction > 0 ? -80 : 20,
                  z: -200,
                }}
                animate={{
                  x: -20, // Reduced from 150 to 100 to bring right card closer
                  scale: 0.8,
                  rotateY: -30,
                  opacity: 0.7,
                  z: -50,
                }}
                exit={{
                  x: direction > 0 ? 400 : -600,
                  scale: 0.4,
                  opacity: 0,
                  rotateY: direction > 0 ? -20 : 80,
                  z: -300,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute right-0 w-72"
              >
                <Card className="bg-white/80 shadow-lg border-0 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={getTestimonialAtOffset(1).avatar || "/placeholder.svg"}
                        alt={getTestimonialAtOffset(1).author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{getTestimonialAtOffset(1).author}</h4>
                        <p className="text-slate-600 text-xs">{getTestimonialAtOffset(1).title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 mt-4 line-clamp-3">"{getTestimonialAtOffset(1).quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
