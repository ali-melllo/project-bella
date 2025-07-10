"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    Features: "Features",
    "How it Works": "How it Works",
    Testimonials: "Testimonials",
    Pricing: "Pricing",
    "Sign In": "Sign In",
    "Get Started": "Get Started",

    // Hero Section
    "AI-Powered Real Estate Platform": "AI-Powered Real Estate Platform",
    "Your Smart": "Your Smart",
    Living: "Living",
    "Experience Starts Here": "Experience Starts Here",
    "Meet BELLA - the AI-first platform that transforms real estate through intelligent automation, community connections, and seamless service delivery.":
      "Meet BELLA - the AI-first platform that transforms real estate through intelligent automation, community connections, and seamless service delivery.",
    "Enter location (e.g., San Francisco, CA)": "Enter location (e.g., San Francisco, CA)",
    Search: "Search",
    "Browse Properties": "Browse Properties",
    "Watch Demo": "Watch Demo",

    // Stats
    "Happy Tenants": "Happy Tenants",
    Properties: "Properties",
    Uptime: "Uptime",
    "App Rating": "App Rating",

    // BELLA
    BELLA: "BELLA",
    "Your AI Concierge": "Your AI Concierge",
    "Hi! I've scheduled your maintenance request for tomorrow at 2 PM.":
      "Hi! I've scheduled your maintenance request for tomorrow at 2 PM.",
    "Perfect! Can you also remind me about the rooftop BBQ?": "Perfect! Can you also remind me about the rooftop BBQ?",
    "The BBQ is this Saturday at 6 PM. I've added it to your calendar.":
      "The BBQ is this Saturday at 6 PM. I've added it to your calendar.",

    // Features
    "AI Concierge BELLA": "AI Concierge BELLA",
    "24/7 intelligent assistant for all your tenant needs, from maintenance to payments":
      "24/7 intelligent assistant for all your tenant needs, from maintenance to payments",
    "Smart Community Matching": "Smart Community Matching",
    "Connect with neighbors based on interests, language, and lifestyle preferences":
      "Connect with neighbors based on interests, language, and lifestyle preferences",
    "Secure Payments": "Secure Payments",
    "Split rent, earn loyalty points, and manage all payments in one place":
      "Split rent, earn loyalty points, and manage all payments in one place",
    "Service Marketplace": "Service Marketplace",
    "Book trusted services from cleaning to repairs with verified providers":
      "Book trusted services from cleaning to repairs with verified providers",
    "Property Management": "Property Management",
    "Complete tools for landlords to manage properties, tenants, and finances":
      "Complete tools for landlords to manage properties, tenants, and finances",
    "Analytics & Insights": "Analytics & Insights",
    "Data-driven insights to optimize occupancy and tenant satisfaction":
      "Data-driven insights to optimize occupancy and tenant satisfaction",
    "Everything You Need": "Everything You Need",
    "From AI assistance to community building, BELLA provides a complete real estate platform":
      "From AI assistance to community building, BELLA provides a complete real estate platform",

    // How it Works
    "Simple. Smart. Seamless.": "Simple. Smart. Seamless.",
    "Get started in minutes and experience the future of real estate":
      "Get started in minutes and experience the future of real estate",
    "For Tenants": "For Tenants",
    "For Property Owners": "For Property Owners",
    "Search & Filter": "Search & Filter",
    "Browse verified listings with smart filters for location, price, and amenities.":
      "Browse verified listings with smart filters for location, price, and amenities.",
    "Connect with BELLA": "Connect with BELLA",
    "Get instant assistance from our AI concierge for viewings, applications, and questions.":
      "Get instant assistance from our AI concierge for viewings, applications, and questions.",
    "Move In & Thrive": "Move In & Thrive",
    "Complete the rental process and enjoy your new home with built-in community features.":
      "Complete the rental process and enjoy your new home with built-in community features.",
    "List Your Property": "List Your Property",
    "Upload photos, set your price, and describe your property with AI assistance.":
      "Upload photos, set your price, and describe your property with AI assistance.",
    "Manage Tenants": "Manage Tenants",
    "Screen applications, manage leases, and communicate with tenants seamlessly.":
      "Screen applications, manage leases, and communicate with tenants seamlessly.",
    "Optimize & Earn": "Optimize & Earn",
    "Use analytics to optimize pricing and maximize your property's potential.":
      "Use analytics to optimize pricing and maximize your property's potential.",

    // Testimonials
    "Loved by Thousands": "Loved by Thousands",
    "See what tenants and property owners are saying about BELLA":
      "See what tenants and property owners are saying about BELLA",
    "Tenant at Sunset Gardens": "Tenant at Sunset Gardens",
    "Property Manager": "Property Manager",
    "Student Housing Resident": "Student Housing Resident",
    "BELLA has transformed my living experience. From finding roommates to paying rent, everything is so seamless now.":
      "BELLA has transformed my living experience. From finding roommates to paying rent, everything is so seamless now.",
    "Our tenant satisfaction increased by 40% after implementing BELLA. The AI handles most requests automatically.":
      "Our tenant satisfaction increased by 40% after implementing BELLA. The AI handles most requests automatically.",
    "I love the community features! I've made so many friends and never miss building events anymore.":
      "I love the community features! I've made so many friends and never miss building events anymore.",

    // Pricing
    "Simple, Transparent Pricing": "Simple, Transparent Pricing",
    "Choose the plan that works best for you": "Choose the plan that works best for you",
    "For Tenants": "For Tenants",
    "Perfect for individual residents": "Perfect for individual residents",
    Free: "Free",
    "AI Concierge BELLA": "AI Concierge BELLA",
    "Community Matching": "Community Matching",
    "Payment Processing": "Payment Processing",
    "Basic Support": "Basic Support",
    "For Property Owners": "For Property Owners",
    "Comprehensive property management": "Comprehensive property management",
    unit: "unit",
    month: "month",
    "Most Popular": "Most Popular",
    "Everything in Tenant plan": "Everything in Tenant plan",
    "Property Management Dashboard": "Property Management Dashboard",
    "Analytics & Insights": "Analytics & Insights",
    "Priority Support": "Priority Support",
    "Custom Integrations": "Custom Integrations",
    "Start Free Trial": "Start Free Trial",
    Enterprise: "Enterprise",
    "For large property portfolios": "For large property portfolios",
    Custom: "Custom",
    "Everything in Property plan": "Everything in Property plan",
    "White-label Solution": "White-label Solution",
    "Dedicated Support": "Dedicated Support",
    "SLA Guarantees": "SLA Guarantees",
    "Contact Sales": "Contact Sales",

    // CTA
    "Ready to Transform Your Real Estate Experience?": "Ready to Transform Your Real Estate Experience?",
    "Join thousands of users who are already enjoying smarter, more connected real estate with BELLA.":
      "Join thousands of users who are already enjoying smarter, more connected real estate with BELLA.",
    "Get Started Today": "Get Started Today",
    "Schedule Demo": "Schedule Demo",
    "Free to get started": "Free to get started",
    "No setup fees": "No setup fees",
    "Cancel anytime": "Cancel anytime",

    // Footer
    "The AI-first platform transforming real estate through intelligent automation and community connections.":
      "The AI-first platform transforming real estate through intelligent automation and community connections.",
    Product: "Product",
    Integrations: "Integrations",
    API: "API",
    Company: "Company",
    About: "About",
    Blog: "Blog",
    Careers: "Careers",
    Contact: "Contact",
    Support: "Support",
    "Help Center": "Help Center",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    Status: "Status",
    "All rights reserved.": "All rights reserved.",
    "Made with": "Made with",
    "for better living": "for better living",

    // Assistant
    "AI Assistant": "AI Assistant",
    "Hello! I'm BELLA, your AI real estate assistant. I can help you with:":
      "Hello! I'm BELLA, your AI real estate assistant. I can help you with:",
    "Finding properties": "Finding properties",
    "Payment assistance": "Payment assistance",
    "Maintenance requests": "Maintenance requests",
    "Community features": "Community features",
    "What would you like to know?": "What would you like to know?",
    "Type your message...": "Type your message...",
    Send: "Send",
    "Hi! I'm BELLA, your AI assistant. How can I help you today?":
      "Hi! I'm BELLA, your AI assistant. How can I help you today?",
    "Need help finding the perfect property? I'm here to assist!":
      "Need help finding the perfect property? I'm here to assist!",
    "Have questions about payments or maintenance? Just ask!":
      "Have questions about payments or maintenance? Just ask!",
  },
  es: {
    // Navigation
    Features: "Características",
    "How it Works": "Cómo Funciona",
    Testimonials: "Testimonios",
    Pricing: "Precios",
    "Sign In": "Iniciar Sesión",
    "Get Started": "Comenzar",

    // Hero Section
    "AI-Powered Real Estate Platform": "Plataforma Inmobiliaria con IA",
    "Your Smart": "Tu",
    Living: "Vida",
    "Experience Starts Here": "Inteligente Comienza Aquí",
    "Meet BELLA - the AI-first platform that transforms real estate through intelligent automation, community connections, and seamless service delivery.":
      "Conoce BELLA - la plataforma con IA que transforma el sector inmobiliario a través de automatización inteligente, conexiones comunitarias y entrega de servicios sin problemas.",
    "Enter location (e.g., San Francisco, CA)": "Ingresa ubicación (ej. Madrid, España)",
    Search: "Buscar",
    "Browse Properties": "Explorar Propiedades",
    "Watch Demo": "Ver Demo",

    // Stats
    "Happy Tenants": "Inquilinos Felices",
    Properties: "Propiedades",
    Uptime: "Tiempo Activo",
    "App Rating": "Calificación App",

    // BELLA
    BELLA: "BELLA",
    "Your AI Concierge": "Tu Conserje IA",
    "Hi! I've scheduled your maintenance request for tomorrow at 2 PM.":
      "¡Hola! He programado tu solicitud de mantenimiento para mañana a las 2 PM.",
    "Perfect! Can you also remind me about the rooftop BBQ?":
      "¡Perfecto! ¿También puedes recordarme sobre la barbacoa en la azotea?",
    "The BBQ is this Saturday at 6 PM. I've added it to your calendar.":
      "La barbacoa es este sábado a las 6 PM. Lo he añadido a tu calendario.",

    // Features
    "AI Concierge BELLA": "Conserje IA BELLA",
    "24/7 intelligent assistant for all your tenant needs, from maintenance to payments":
      "Asistente inteligente 24/7 para todas tus necesidades como inquilino, desde mantenimiento hasta pagos",
    "Smart Community Matching": "Emparejamiento Inteligente de Comunidad",
    "Connect with neighbors based on interests, language, and lifestyle preferences":
      "Conecta con vecinos basado en intereses, idioma y preferencias de estilo de vida",
    "Secure Payments": "Pagos Seguros",
    "Split rent, earn loyalty points, and manage all payments in one place":
      "Divide el alquiler, gana puntos de lealtad y gestiona todos los pagos en un lugar",
    "Service Marketplace": "Mercado de Servicios",
    "Book trusted services from cleaning to repairs with verified providers":
      "Reserva servicios confiables desde limpieza hasta reparaciones con proveedores verificados",
    "Property Management": "Gestión de Propiedades",
    "Complete tools for landlords to manage properties, tenants, and finances":
      "Herramientas completas para propietarios para gestionar propiedades, inquilinos y finanzas",
    "Analytics & Insights": "Análisis y Perspectivas",
    "Data-driven insights to optimize occupancy and tenant satisfaction":
      "Perspectivas basadas en datos para optimizar ocupación y satisfacción del inquilino",
    "Everything You Need": "Todo Lo Que Necesitas",
    "From AI assistance to community building, BELLA provides a complete real estate platform":
      "Desde asistencia IA hasta construcción de comunidad, BELLA proporciona una plataforma inmobiliaria completa",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en")

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
