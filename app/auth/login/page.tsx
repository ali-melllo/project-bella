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
import { Mail, Phone, Lock, Sparkles } from "lucide-react"
import Image from "next/image"
import AnimatedBackground from "@/components/magicui/animated-background"
import OTPVerificationPage from "../otp-verification/page"
import { useForm } from "react-hook-form"

type LoginForm = {
  email: string
  remember: boolean
}

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const [showOtpPage, setShowOtpPage] = useState(false)
  const [signInData, setSignInData] = useState<any>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit = (data: LoginForm) => {
    setSignInData(data)
    setShowOtpPage(true)
  }

  return !showOtpPage ? (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-background via-background to-muted/20 relative overflow-hidden flex items-center justify-center p-4">
      <AnimatedBackground />
      <Card className="w-full max-w-md bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative z-10 animate-fade-in-up">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <Image width={50} height={100} className="size-20" alt="bella" src="/bella.avif" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              Welcome Back <Sparkles className="w-5 h-5 text-primary" />
            </CardTitle>
            <CardDescription className="text-base">
              Sign in to continue your journey with BELLA
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <Label htmlFor="email" className="text-sm font-medium">
                {loginMethod === "email" ? "Email Address" : "Phone Number"}
              </Label>
              <Input
                id="email"
                type={loginMethod === "email" ? "email" : "tel"}
                placeholder={loginMethod === "email" ? "you@example.com" : "+1 (555) 123-4567"}
                className="neo-inset border-0 focus-ring"
                {...register("email", {
                  required: "This field is required",
                  pattern:
                    loginMethod === "email"
                      ? {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        }
                      : {
                          value: /^\+?[0-9\s\-()]{7,}$/,
                          message: "Invalid phone number",
                        },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" {...register("remember")} />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full neo-button gradient-primary text-white" size="lg">
              <Lock className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </form>

          {/* Social Login */}
          <div className="space-y-4">
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 mb-2 text-xs text-muted-foreground">
                Or continue with
              </span>
            </div>
            <Button variant="outline" className="!h-10 w-full">
              Google
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
  ) : (
    <OTPVerificationPage isForLogin data={signInData} />
  )
}
