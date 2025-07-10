"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  Search,
  MessageCircle,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap,
  CheckCircle,
  Play,
  Sparkles,
  Globe,
  Heart,
  TrendingUp,
  Building,
  Bot,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { BellaAvatar } from "@/components/bella-avatar"
import { MarqueeReviews } from "@/components/marquee-reviews"
import { ShinyButton } from "@/components/ui/shiny-button"
import { GlowingCard } from "@/components/ui/glowing-card"
import { FloatingTooltip } from "@/components/ui/floating-tooltip"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { useLanguage } from "@/components/language-provider"

export default function LandingPage() {
  const [searchLocation, setSearchLocation] = useState("")
  const { t } = useLanguage()

  const features = [
    {
      icon: Bot,
      title: t("AI Concierge BELLA"),
      description: t("24/7 intelligent assistant for all your tenant needs, from maintenance to payments"),
      gradient: "gradient-soft",
    },
    {
      icon: Users,
      title: t("Smart Community Matching"),
      description: t("Connect with neighbors based on interests, language, and lifestyle preferences"),
      gradient: "gradient-warm",
    },
    {
      icon: Shield,
      title: t("Secure Payments"),
      description: t("Split rent, earn loyalty points, and manage all payments in one place"),
      gradient: "gradient-cool",
    },
    {
      icon: Zap,
      title: t("Service Marketplace"),
      description: t("Book trusted services from cleaning to repairs with verified providers"),
      gradient: "gradient-nature",
    },
    {
      icon: Building,
      title: t("Property Management"),
      description: t("Complete tools for landlords to manage properties, tenants, and finances"),
      gradient: "gradient-primary",
    },
    {
      icon: TrendingUp,
      title: t("Analytics & Insights"),
      description: t("Data-driven insights to optimize occupancy and tenant satisfaction"),
      gradient: "gradient-soft",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: t("Tenant at Sunset Gardens"),
      avatar: "/placeholder.svg?height=60&width=60",
      content: t(
        "BELLA has transformed my living experience. From finding roommates to paying rent, everything is so seamless now.",
      ),
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: t("Property Manager"),
      avatar: "/placeholder.svg?height=60&width=60",
      content: t(
        "Our tenant satisfaction increased by 40% after implementing BELLA. The AI handles most requests automatically.",
      ),
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: t("Student Housing Resident"),
      avatar: "/placeholder.svg?height=60&width=60",
      content: t("I love the community features! I've made so many friends and never miss building events anymore."),
      rating: 5,
    },
  ]

  const stats = [
    { number: 50000, label: t("Happy Tenants"), suffix: "+" },
    { number: 500, label: t("Properties"), suffix: "+" },
    { number: 99.9, label: t("Uptime"), suffix: "%" },
    { number: 4.9, label: t("App Rating"), suffix: "★" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-0 rounded-none">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center magic-glow">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">BELLA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                {t("Features")}
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                {t("How it Works")}
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                {t("Testimonials")}
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                {t("Pricing")}
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <div className="hidden md:flex items-center gap-2">
                <Link href="/auth/login">
                  <Button variant="ghost" className="neo-button">
                    {t("Sign In")}
                  </Button>
                </Link>
                <Link href="/onboarding">
                  <ShinyButton>{t("Get Started")}</ShinyButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="neo-card border-0 px-4 py-2">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t("AI-Powered Real Estate Platform")}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t("Your Smart")}
                  <span className="text-gradient"> {t("Living")} </span>
                  {t("Experience Starts Here")}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    "Meet BELLA - the AI-first platform that transforms real estate through intelligent automation, community connections, and seamless service delivery.",
                  )}
                </p>
              </div>

              {/* Search Bar */}
              <Card className="neo-card p-2">
                <CardContent className="p-0">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder={t("Enter location (e.g., San Francisco, CA)")}
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="pl-10 border-0 bg-transparent focus-ring"
                      />
                    </div>
                    <Link href="/explore">
                      <ShinyButton>
                        <Search className="w-4 h-4 mr-2" />
                        {t("Search")}
                      </ShinyButton>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/explore">
                  <ShinyButton size="lg" className="group">
                    {t("Browse Properties")}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </ShinyButton>
                </Link>
                <Button size="lg" variant="outline" className="neo-button group bg-transparent">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {t("Watch Demo")}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
                {stats.map((stat, index) => (
                  <FloatingTooltip key={index} content={`${stat.label} and growing!`}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </FloatingTooltip>
                ))}
              </div>
            </div>

            <div className="relative">
              <GlowingCard className="max-w-sm mx-auto">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <BellaAvatar size="lg" animated />
                    <div>
                      <h3 className="font-semibold">{t("BELLA")}</h3>
                      <p className="text-sm text-muted-foreground">{t("Your AI Concierge")}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg neo-inset">
                      <p className="text-sm">
                        {t("Hi! I've scheduled your maintenance request for tomorrow at 2 PM.")} 🔧
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary text-primary-foreground ml-8">
                      <p className="text-sm">{t("Perfect! Can you also remind me about the rooftop BBQ?")}</p>
                    </div>
                    <div className="p-3 rounded-lg neo-inset">
                      <p className="text-sm">
                        {t("The BBQ is this Saturday at 6 PM. I've added it to your calendar.")} 🎉
                      </p>
                    </div>
                  </div>
                </CardContent>
              </GlowingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Reviews */}
      <MarqueeReviews testimonials={testimonials} />

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="neo-card border-0 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              {t("Features")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">{t("Everything You Need")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("From AI assistance to community building, BELLA provides a complete real estate platform")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlowingCard key={index} className="group card-hover">
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="neo-card border-0 px-4 py-2">{t("How It Works")}</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">{t("Simple. Smart. Seamless.")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("Get started in minutes and experience the future of real estate")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Tenants */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center lg:text-left">{t("For Tenants")}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 neo-card">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("Search & Filter")}</h4>
                    <p className="text-muted-foreground">
                      {t("Browse verified listings with smart filters for location, price, and amenities.")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 neo-card">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("Connect with BELLA")}</h4>
                    <p className="text-muted-foreground">
                      {t("Get instant assistance from our AI concierge for viewings, applications, and questions.")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 neo-card">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("Move In & Thrive")}</h4>
                    <p className="text-muted-foreground">
                      {t("Complete the rental process and enjoy your new home with built-in community features.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Landlords */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center lg:text-left">{t("For Property Owners")}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 neo-card">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("List Your Property")}</h4>
                    <p className="text-muted-foreground">
                      {t("Upload photos, set your price, and describe your property with AI assistance.")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 neo-card">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("Manage Tenants")}</h4>
                    <p className="text-muted-foreground">
                      {t("Screen applications, manage leases, and communicate with tenants seamlessly.")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 neo-card">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("Optimize & Earn")}</h4>
                    <p className="text-muted-foreground">
                      {t("Use analytics to optimize pricing and maximize your property's potential.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="neo-card border-0 px-4 py-2">{t("Testimonials")}</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">{t("Loved by Thousands")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("See what tenants and property owners are saying about BELLA")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlowingCard key={index} className="card-hover">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="neo-card border-0 px-4 py-2">{t("Pricing")}</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">{t("Simple, Transparent Pricing")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("Choose the plan that works best for you")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tenant Plan */}
            <GlowingCard>
              <CardHeader>
                <CardTitle className="text-xl">{t("For Tenants")}</CardTitle>
                <CardDescription>{t("Perfect for individual residents")}</CardDescription>
                <div className="text-3xl font-bold">{t("Free")}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("AI Concierge BELLA")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Community Matching")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Payment Processing")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Basic Support")}</span>
                  </div>
                </div>
                <Link href="/onboarding">
                  <ShinyButton className="w-full">{t("Get Started")}</ShinyButton>
                </Link>
              </CardContent>
            </GlowingCard>

            {/* Property Plan */}
            <GlowingCard className="border-primary/50 relative border-2">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                {t("Most Popular")}
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">{t("For Property Owners")}</CardTitle>
                <CardDescription>{t("Comprehensive property management")}</CardDescription>
                <div className="text-3xl font-bold">
                  $5
                  <span className="text-lg font-normal text-muted-foreground">
                    /{t("unit")}/{t("month")}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Everything in Tenant plan")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Property Management Dashboard")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Analytics & Insights")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Priority Support")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Custom Integrations")}</span>
                  </div>
                </div>
                <ShinyButton className="w-full">{t("Start Free Trial")}</ShinyButton>
              </CardContent>
            </GlowingCard>

            {/* Enterprise Plan */}
            <GlowingCard>
              <CardHeader>
                <CardTitle className="text-xl">{t("Enterprise")}</CardTitle>
                <CardDescription>{t("For large property portfolios")}</CardDescription>
                <div className="text-3xl font-bold">{t("Custom")}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Everything in Property plan")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("White-label Solution")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("Dedicated Support")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{t("SLA Guarantees")}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full neo-button bg-transparent">
                  {t("Contact Sales")}
                </Button>
              </CardContent>
            </GlowingCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <GlowingCard className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  {t("Ready to Transform Your Real Estate Experience?")}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Join thousands of users who are already enjoying smarter, more connected real estate with BELLA.",
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/onboarding">
                  <ShinyButton size="lg" className="group">
                    {t("Get Started Today")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </ShinyButton>
                </Link>
                <Button size="lg" variant="outline" className="neo-button bg-transparent">
                  {t("Schedule Demo")}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{t("Free to get started")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{t("No setup fees")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{t("Cancel anytime")}</span>
                </div>
              </div>
            </CardContent>
          </GlowingCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-gradient">BELLA</span>
              </div>
              <p className="text-muted-foreground">
                {t(
                  "The AI-first platform transforming real estate through intelligent automation and community connections.",
                )}
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="neo-button">
                  <Globe className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="neo-button">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="neo-button">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">{t("Product")}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#features" className="block hover:text-foreground transition-colors">
                  {t("Features")}
                </a>
                <a href="#pricing" className="block hover:text-foreground transition-colors">
                  {t("Pricing")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Integrations")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("API")}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">{t("Company")}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("About")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Blog")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Careers")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Contact")}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">{t("Support")}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Help Center")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Privacy Policy")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Terms of Service")}
                </a>
                <a href="#" className="block hover:text-foreground transition-colors">
                  {t("Status")}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 BELLA. {t("All rights reserved.")}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>
                {t("Made with")} ❤️ {t("for better living")}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
