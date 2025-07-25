"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Star,
  Shield,
  Zap,
  Users,
  Heart,
  MessageCircle,
  Search,
  MapPin,
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  Menu,
  X,
  Wifi,
  Car,
  Dumbbell,
  Coffee,
  Leaf,
  Twitter,
  Github,
  Linkedin,
  Bot,
  Home,
  MessageCircleIcon,
  Settings,
} from "lucide-react"
import { SparklesText } from "@/components/ui/sparkles-text"
import { WordRotate } from "@/components/ui/word-rotate"
import { NumberTicker } from "@/components/ui/number-ticker"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { Meteors } from "@/components/ui/meteors"
import { DotPattern } from "@/components/ui/dot-pattern"
import { GridPattern } from "@/components/ui/grid-pattern"
import { RetroGrid } from "@/components/ui/retro-grid"
import { Marquee } from "@/components/ui/marquee"
import { BlurIn } from "@/components/ui/blur-in"
import { FadeIn } from "@/components/ui/fade-in"
import { SlideIn } from "@/components/ui/slide-in"
import { BorderBeam } from "@/components/ui/border-beam"
import { BellaAvatar } from "@/components/bella-avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { FloatingAssistant } from "@/components/floating-assistant"
import { FloatingShapes } from "@/components/floating-shapes"
import Link from "next/link"
import { SiteHeader } from "./ui/header"
import { FlickeringGrid } from "./magicui/flickering-grid"
import AnimatedBackground from "./magicui/animated-background"
import { AnimatedShinyText } from "./magicui/animated-shiny-text"
import { HeroAnimatedBeam } from "./magicui/hero-animated-beams"
import Image from "next/image"
import { ReviewsPage } from "./reviews"
import { FixedAIAssistant } from "./fixed-ai-assistant"

const features = [
  {
    icon: Search,
    title: "Smart Property Search",
    description: "AI-powered search to find your perfect home with advanced filters and personalized recommendations.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All properties are verified by our team to ensure authenticity and quality standards.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Chat directly with property owners and get instant responses to your queries.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Create wishlists and save properties you love for easy comparison and future reference.",
  },
  {
    icon: MapPin,
    title: "Location Insights",
    description: "Get detailed neighborhood information, amenities, and transportation options.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book property viewings and schedule visits with just a few clicks.",
  },
]

const amenities = [
  { icon: Wifi, name: "High-Speed WiFi", description: "Fiber optic internet" },
  { icon: Car, name: "Parking", description: "Dedicated parking space" },
  { icon: Dumbbell, name: "Fitness Center", description: "24/7 gym access" },
  { icon: Coffee, name: "Co-working Space", description: "Professional workspace" },
  { icon: Leaf, name: "Garden Area", description: "Green outdoor space" },
  { icon: Shield, name: "Security", description: "24/7 security system" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    content:
      "Found my dream apartment in just 2 days! The platform is incredibly user-friendly and the verification process gave me confidence.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    content:
      "The direct communication feature saved me so much time. I could chat with multiple landlords simultaneously.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "Graphic Designer",
    content:
      "Love the neighborhood insights! It helped me choose the perfect location close to cafes and art galleries.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "David Kim",
    role: "Teacher",
    content: "The booking system is seamless. Scheduled 5 viewings in one afternoon and found my place the same week.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for casual property seekers",
    features: ["Browse unlimited properties", "Save up to 10 favorites", "Basic search filters", "Standard support"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99/month",
    description: "Best for serious house hunters",
    features: [
      "Everything in Basic",
      "Unlimited favorites",
      "Advanced AI search",
      "Priority support",
      "Exclusive listings",
      "Virtual tours",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$19.99/month",
    description: "For real estate professionals",
    features: [
      "Everything in Premium",
      "Analytics dashboard",
      "Lead management",
      "Custom branding",
      "API access",
      "Dedicated account manager",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "How does the verification process work?",
    answer:
      "We verify all properties through document checks, physical inspections, and owner verification to ensure authenticity and quality.",
  },
  {
    question: "Is there a fee for tenants?",
    answer:
      "Basic browsing and searching is completely free. Premium features are available with our subscription plans.",
  },
  {
    question: "How quickly can I schedule a viewing?",
    answer: "Most viewings can be scheduled within 24-48 hours. Many landlords offer same-day viewing slots.",
  },
  {
    question: "What if I have issues with a property?",
    answer: "We provide 24/7 support and have a dedicated resolution team to help with any property-related concerns.",
  },
  {
    question: "Can I list my property for free?",
    answer:
      "Yes! Property owners can list their first property for free. Additional listings and premium features are available with our plans.",
  },
]


export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const footerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])



  const footerTextOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const footerTextScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])




  return (

    <>

      <div className="fixed z-50 bottom-7 right-7 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-2xl">
        <FixedAIAssistant showBubble={false}/>
      </div>

      <section className="relative min-h-screen w-full flex z-20 items-center overflow-x-hidden md:pt-16 mb-20 px-3 md:px-20">

        <div className="w-full absolute flex justify-center right-0 top-24 z-20">
          <Badge
            variant="secondary"
            className="md:px-8 flex justify-center w-auto mx-auto items-center py-2  rounded-3xl text-xs md:text-base font-medium bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
          >
            <AnimatedShinyText>AI-Powered Living Platform</AnimatedShinyText>
          </Badge>
        </div>




        <div className="absolute inset-0 z-0 flex w-[100vw] size-full">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop&crop=focalpoint&auto=format&q=80"
            alt="Bella"
            width={2000}
            height={2000}
            className="object-cover size-full "
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        <div className="flex justify-start items-center relative z-10">
          <div className="w-full  text-white">
            <BlurIn className="flex font-extrabold items-center text-2xl md:text-7xl mx-auto">
              <h1 className="my-6 text-nowrap">Find Your Perfect</h1>

              <span
                className="text-primary min-w-[6ch] overflow-hidden text-start ml-2"
              // style={{ display: "inline-block" }}
              >
                <WordRotate
                  duration={1500}
                  words={["Home", "Service", "Living", "Event"]}
                  className="inline-block"
                />
              </span>
            </BlurIn>

            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base text-gray-300 mb-8 text-balance">
                Discover verified properties, connect with trusted landlords, and find your ideal living space with
                our AI-powered platform.
              </p>
            </FadeIn>

            <SlideIn delay={0.4}>
              <div className="grid grid-cols-2 gap-4 w-full md:w-7/12">
                <Link href="/explore">
                  <Button
                    size="lg"
                    className="bg-primary  rounded-xl h-14 w-full text-white border-0 text-xs md:text-lg px-8 py-4"
                  >
                    Explore Properties
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="lg" className="rounded-xl h-14 w-full  font-medium text-foreground text-xs md:text-lg px-8 py-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                    List Your Property
                    <Home className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/explore">
                  <Button
                    size="lg"
                    className="bg-primary rounded-xl h-14 w-full  text-white border-0 text-xs md:text-lg px-8 py-4"
                  >
                    Chat With Bella Ai
                    <MessageCircleIcon className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="lg" className="rounded-xl h-14 w-full  font-medium text-foreground text-xs md:text-lg px-8 py-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                    Publish Your Service
                    <Settings className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </SlideIn>

            <div className="mt-12 flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 60}.jpg`}
                      alt={`Happy customer ${i}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 md:mt-0">
                <div className="text-yellow-400 flex text-2xl">{"★★★★★"}</div>
                <p className="text-sm text-gray-300">Trusted by 10,000+ happy clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

        <div className="absolute inset-y-0 right-0 h-full w-[30em] bg-gradient-to-l from-background via-background/50 to-transparent"></div>
      </section>

      <div className="min-h-screen max-w-7xl mx-auto  relative overflow-hidden">
        <AnimatedBackground />
        {/* Hero Section */}
        <section className=" relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] max-w-4xl mx-auto">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 p-5 rounded-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    <NumberTicker value={10000} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Properties</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    <NumberTicker value={50000} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Happy Tenants</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    <NumberTicker value={500} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Cities</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4.9</div>
                  <p className="text-gray-600 dark:text-gray-300">Rating</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* <Meteors number={20} /> */}
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-sm mb-4">
                  Features
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-foreground">Everything You Need</h2>
                <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Powerful features designed to make your property search effortless and enjoyable.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] card-hover h-full relative overflow-hidden">
                    <BorderBeam size={250} duration={12} delay={index * 2} />
                    <CardHeader className="flex flex-row !items-center">
                      <div className="w-12 h-12 glass-button rounded-lg flex items-center justify-center">
                        <feature.icon className="size-10 stroke-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          {/* <GridPattern className="opacity-20" /> */}
        </section>

        {/* Amenities Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-sm mb-4">
                  Amenities
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-foreground">Premium Living Experience</h2>
                <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Enjoy world-class amenities designed for modern living.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="size-10 stroke-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{amenity.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-sm mb-4">
                  Testimonials
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-foreground">What Our Users Say</h2>
                <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join thousands of satisfied users who found their perfect home with BELLA.
                </p>
              </motion.div>
            </div>

            <ReviewsPage />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="glass-card mb-4">
                  Pricing
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-foreground">Choose Your Plan</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Flexible pricing options to suit your needs, from casual browsing to professional use.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] flex flex-col relative ${plan.popular ? "ring-2 scale-105 ring-primary" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-gradient my-4">{plan.price}</div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 h-80  flex flex-col justify-between ">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                      <Button
                        className={`w-full mt-auto glass-button`}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="glass-card mb-4">
                  FAQ
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-foreground">Frequently Asked Questions</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Get answers to common questions about our platform and services.
                </p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card">
                    <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                        <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </CardHeader>
                    {openFaq === index && (
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="glass-card mb-4">
                  Contact
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-foreground">Get In Touch</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input className="glass-inset" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input className="glass-inset" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input className="glass-inset" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input className="glass-inset" placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea className="glass-inset" rows={4} placeholder="Tell us more about your inquiry..." />
                    </div>
                    <Button className="w-full text-white border-0">Send Message</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass-button rounded-lg flex items-center justify-center">
                        <Phone className="size-10 stroke-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass-button rounded-lg flex items-center justify-center">
                        <Mail className="size-10 stroke-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">hello@bella.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass-button rounded-lg flex items-center justify-center">
                        <MapPin className="size-10 stroke-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Innovation Drive
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass-button rounded-lg flex items-center justify-center">
                        <Calendar className="size-10 stroke-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer ref={footerRef} className="py-16 px-4 border-t border-border/50  relative overflow-hidden">

          {/* Large Bella AI Text */}
          <motion.div
            className="absolute inset-x-0 bottom-48 md:bottom-32 h-48 flex items-center justify-center pointer-events-none"
            style={{ opacity: footerTextOpacity, scale: footerTextScale }}
          >
            <FlickeringGrid
              className="absolute inset-0 z-0 [mask-image:radial-gradient(150px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
              squareSize={5}
              gridGap={6}
              color="#60A5FA"
              maxOpacity={0.8}
              flickerChance={0.1}
            // height={800}
            // width={800}
            />
            <div className="absolute h-20 w-full top-0 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute h-20 w-full bottom-0 bg-gradient-to-t from-background to-transparent" />

            <h2
              className="text-6xl md:text-8xl z-50 lg:text-9xl font-bold bg-gradient-to-br from-primary to-primary/75 bg-clip-text text-transparent"
              style={{
                textShadow: "4px 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              Bella AI
            </h2>



          </motion.div>

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Image
                      width={50}
                      height={100}
                      className="size-full"
                      alt={'bella'}
                      src={'/bella.avif'}
                    />
                  </div>
                  <span className="text-xl font-bold">
                    Bella AI
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Your trusted AI companion for house services in a new place. Built with ❤️ for global citizens.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Government Help
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Housing Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Job Discovery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Social Matching
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      API Docs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 mt-64 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 Bella AI. All rights reserved</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
