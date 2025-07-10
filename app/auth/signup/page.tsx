"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, User, Users, GraduationCap, Heart } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [profileType, setProfileType] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate signup
    setTimeout(() => {
      router.push("/auth/otp-verification")
    }, 1500)
  }

  const profileTypes = [
    { value: "family", label: "Family", icon: Heart, description: "Living with family members" },
    { value: "solo", label: "Solo", icon: User, description: "Living independently" },
    { value: "student", label: "Student", icon: GraduationCap, description: "Student housing" },
    { value: "shared", label: "Shared", icon: Users, description: "Shared living space" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md neo-card">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center neo-card">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Join BELLA</CardTitle>
            <CardDescription>Create your tenant experience account</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" type="text" placeholder="John Doe" className="neo-inset" required />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="neo-inset" required />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="neo-inset" required />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="neo-inset pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Profile Type */}
            <div className="space-y-2">
              <Label htmlFor="profileType">Living Situation</Label>
              <Select value={profileType} onValueChange={setProfileType} required>
                <SelectTrigger className="neo-inset">
                  <SelectValue placeholder="Select your living situation" />
                </SelectTrigger>
                <SelectContent>
                  {profileTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <type.icon className="w-4 h-4" />
                        <div>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-xs text-muted-foreground">{type.description}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Terms and Privacy */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing" className="text-sm leading-relaxed">
                  I'd like to receive updates about new features and community events
                </Label>
              </div>
            </div>

            {/* Sign Up Button */}
            <Button type="submit" className="w-full neo-button" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </div>
              ) : (
                <>
                  <User className="w-4 h-4 mr-2" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
