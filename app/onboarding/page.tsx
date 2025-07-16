"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { BellaAvatar } from "@/components/bella-avatar"
import { ArrowRight, ArrowLeft, Globe, Mail, User, Target, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    language: "",
    email: "",
    password: "",
    nationality: "",
    goals: [] as string[],
    interests: [] as string[],
  })
  const { t, setLanguage } = useLanguage()
  const router = useRouter()

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const nationalities = [
    "United States",
    "Spain",
    "France",
    "Germany",
    "United Kingdom",
    "Canada",
    "Australia",
    "Mexico",
    "Brazil",
    "Argentina",
    "Other",
  ]

  const goals = [
    { id: "rent", label: "Find a place to rent", icon: "🏠" },
    { id: "buy", label: "Buy a property", icon: "🏡" },
    { id: "invest", label: "Real estate investment", icon: "💰" },
    { id: "manage", label: "Manage my properties", icon: "🏢" },
    { id: "community", label: "Connect with neighbors", icon: "👥" },
  ]

  const interests = [
    { id: "fitness", label: "Fitness & Wellness", icon: "💪" },
    { id: "cooking", label: "Cooking & Food", icon: "🍳" },
    { id: "music", label: "Music & Arts", icon: "🎵" },
    { id: "tech", label: "Technology", icon: "💻" },
    { id: "travel", label: "Travel", icon: "✈️" },
    { id: "reading", label: "Reading & Learning", icon: "📚" },
    { id: "gaming", label: "Gaming", icon: "🎮" },
    { id: "outdoors", label: "Outdoor Activities", icon: "🌲" },
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGoalToggle = (goalId: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId) ? prev.goals.filter((g) => g !== goalId) : [...prev.goals, goalId],
    }))
  }

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId],
    }))
  }

  const getBellaMessage = () => {
    switch (currentStep) {
      case 1:
        return "Hi! I'm BELLA, your AI assistant. Let's start by choosing your preferred language."
      case 2:
        return "Great! Now let's create your account. I'll help you through each step."
      case 3:
        return "Tell me where you're from so I can provide location-specific assistance."
      case 4:
        return "What brings you to BELLA? This helps me personalize your experience."
      case 5:
        return "Finally, what are your interests? I'll use this to connect you with like-minded neighbors."
      default:
        return "Welcome to BELLA! Let's get you set up."
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.language !== ""
      case 2:
        return formData.email !== "" && formData.password !== ""
      case 3:
        return formData.nationality !== ""
      case 4:
        return formData.goals.length > 0
      case 5:
        return formData.interests.length > 0
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center p-4">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* BELLA Assistant */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Welcome to <span className="text-gradient">BELLA</span>
              </h1>
              <p className="text-muted-foreground text-lg">Let's personalize your real estate experience</p>
            </div>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BellaAvatar size="lg" animated />
                  <div className="flex-1">
                    <div className="p-4 rounded-lg glass-inset">
                      <p className="text-sm leading-relaxed">{getBellaMessage()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  Step {currentStep} of {totalSteps}
                </span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="glass-card p-1 rounded-full">
                <Progress value={progress} className="h-2 bg-transparent" />
              </div>
            </div>
          </div>

          {/* Onboarding Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {currentStep === 1 && <Globe className="w-5 h-5" />}
                {currentStep === 2 && <Mail className="w-5 h-5" />}
                {currentStep === 3 && <User className="w-5 h-5" />}
                {currentStep === 4 && <Target className="w-5 h-5" />}
                {currentStep === 5 && <CheckCircle className="w-5 h-5" />}
                {currentStep === 1 && "Choose Your Language"}
                {currentStep === 2 && "Create Your Account"}
                {currentStep === 3 && "Tell Us About Yourself"}
                {currentStep === 4 && "What Are Your Goals?"}
                {currentStep === 5 && "Your Interests"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Select your preferred language for the best experience"}
                {currentStep === 2 && "We'll use this to create your personalized profile"}
                {currentStep === 3 && "This helps us provide location-specific features"}
                {currentStep === 4 && "Help us understand what you're looking for"}
                {currentStep === 5 && "We'll use this to connect you with your community"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Language Selection */}
              {currentStep === 1 && (
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, language: lang.code }))
                        setLanguage(lang.code as "en" | "es" | "fr" | "de")
                      }}
                      className={`p-4 rounded-lg border-2 transition-all glass-button ${
                        formData.language === lang.code
                          ? "border-primary bg-primary/10"
                          : "border-transparent hover:border-primary/50"
                      }`}
                    >
                      <div className="text-2xl mb-2">{lang.flag}</div>
                      <div className="font-medium">{lang.name}</div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Account Creation */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="glass-inset focus-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a secure password"
                      value={formData.password}
                      onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                      className="glass-inset focus-ring"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy
                    </Label>
                  </div>
                </div>
              )}

              {/* Step 3: Nationality */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nationality</Label>
                    <Select
                      value={formData.nationality}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, nationality: value }))}
                    >
                      <SelectTrigger className="glass-inset focus-ring">
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent className="glass-card">
                        {nationalities.map((nationality) => (
                          <SelectItem key={nationality} value={nationality}>
                            {nationality}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 4: Goals */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {goals.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => handleGoalToggle(goal.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left glass-button ${
                          formData.goals.includes(goal.id)
                            ? "border-primary bg-primary/10"
                            : "border-transparent hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{goal.icon}</span>
                          <span className="font-medium">{goal.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Select all that apply</p>
                </div>
              )}

              {/* Step 5: Interests */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest.id}
                        onClick={() => handleInterestToggle(interest.id)}
                        className={`p-3 rounded-lg border-2 transition-all text-left glass-button ${
                          formData.interests.includes(interest.id)
                            ? "border-primary bg-primary/10"
                            : "border-transparent hover:border-primary/50"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-xl mb-1">{interest.icon}</div>
                          <div className="text-sm font-medium">{interest.label}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose your interests to connect with like-minded neighbors
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="glass-button bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button onClick={handleNext} disabled={!isStepValid()} className="glass-button">
                  {currentStep === totalSteps ? "Complete Setup" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
