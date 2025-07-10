"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false)
      setIsEmailSent(true)
    }, 1500)
  }

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <Card className="w-full max-w-md neo-card">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-2xl flex items-center justify-center neo-card">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
              <CardDescription>We've sent a password reset link to {email}</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Click the link in the email to reset your password. If you don't see it, check your spam folder.
              </p>

              <div className="space-y-2">
                <Button onClick={() => setIsEmailSent(false)} variant="outline" className="w-full neo-button">
                  Try Different Email
                </Button>
                <Link href="/auth/login">
                  <Button variant="ghost" className="w-full">
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Didn't receive the email? Contact{" "}
                <a href="mailto:support@bella.app" className="text-primary hover:underline">
                  support@bella.app
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md neo-card">
        <CardHeader className="text-center space-y-4">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>

          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center neo-card">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <div>
            <CardTitle className="text-2xl font-bold">Forgot Password?</CardTitle>
            <CardDescription>Enter your email address and we'll send you a reset link</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="neo-inset"
                required
              />
            </div>

            <Button type="submit" className="w-full neo-button" disabled={isLoading || !email}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Reset Link
                </>
              )}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
