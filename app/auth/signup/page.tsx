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
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import AnimatedBackground from "@/components/magicui/animated-background"

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
    <div className="min-h-screen bg-gradient-to-br pt-10 from-background via-background to-muted/20 flex items-center justify-center p-4">
        <AnimatedBackground />


      <Card className="w-full max-w-md bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16  rounded-2xl flex items-center justify-center neo-card">
            <Image
              width={50}
              height={100}
              className="size-full"
              alt={'bella'}
              src={'/bella.avif'}
            />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Join BELLA</CardTitle>
            {/* <CardDescription>Create your tenant experience account</CardDescription> */}
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
            {/* <div className="space-y-2">
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
            </div> */}

            {/* Profile Type */}
            {/* <div className="space-y-2">
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
            </div> */}

            <div className="space-y-4">
              <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 mb-2 text-xs text-muted-foreground">
                  Or Sign Up with
                </span>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-1 gap-3">
                <Button variant="outline" className="!h-10">
                  <svg width="800px" height="800px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>                Google
                </Button>

              </div>

              {/* Biometric Login */}
              {/* <Button variant="outline" className="w-full neo-button">
              <Fingerprint className="w-4 h-4 mr-2" />
              Use Biometric Login
            </Button> */}
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
