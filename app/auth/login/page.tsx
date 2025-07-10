"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Phone, Lock, Fingerprint, ArrowLeft, Sparkles, Chrome, Apple } from "lucide-react"
import { BellaAvatar } from "@/components/bella-avatar"
import { FloatingShapes } from "@/components/floating-shapes"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden flex items-center justify-center p-4">
      <FloatingShapes />

      {/* Back button */}
      <div className="absolute top-4 left-4 z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="neo-button">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* Theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md neo-card-lg relative z-10 animate-fade-in-up">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <BellaAvatar size={64} animated />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              Welcome Back
              <Sparkles className="w-5 h-5 text-primary" />
            </CardTitle>
            <CardDescription className="text-base">Sign in to continue your journey with BELLA</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Login Method Toggle */}
            <div className="flex rounded-xl p-1 neo-inset">
              <button
                type="button"
                onClick={() => setLoginMethod("email")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  loginMethod === "email"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("phone")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  loginMethod === "phone"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Phone className="w-4 h-4" />
                Phone
              </button>
            </div>

            {/* Email/Phone Input */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-sm font-medium">
                {loginMethod === "email" ? "Email Address" : "Phone Number"}
              </Label>
              <Input
                id="contact"
                type={loginMethod === "email" ? "email" : "tel"}
                placeholder={loginMethod === "email" ? "you@example.com" : "+1 (555) 123-4567"}
                className="neo-inset border-0 focus-ring"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="neo-inset border-0 pr-10 focus-ring"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full neo-button gradient-primary text-white"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Sign In
                </>
              )}
            </Button>

            {/* Magic Link */}
            <Button type="button" variant="outline" className="w-full neo-button">
              <Sparkles className="w-4 h-4 mr-2" />
              Send Magic Link
            </Button>
          </form>

          <div className="space-y-4">
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                Or continue with
              </span>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="neo-button">
                <Chrome className="w-4 h-4 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="neo-button">
                <Apple className="w-4 h-4 mr-2" />
                Apple
              </Button>
            </div>

            {/* Biometric Login */}
            <Button variant="outline" className="w-full neo-button">
              <Fingerprint className="w-4 h-4 mr-2" />
              Use Biometric Login
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
