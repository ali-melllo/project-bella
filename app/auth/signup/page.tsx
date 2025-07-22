"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { User } from "lucide-react"
import AnimatedBackground from "@/components/magicui/animated-background"
import { toast } from "sonner"
import { useLoginUserMutation } from "@/services/endpoints/admin/admin"
import { setAuthToken } from "@/services/auth/action"

interface SignupFormData {
  fullName: string
  email: string
  phone: string
  terms: boolean
}

export default function SignupPage() {

  const router = useRouter()
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>()

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await loginUser(data).unwrap();
        await setAuthToken(response.data.token);

        localStorage.setItem("userEmail", response.data.admin.email);
        localStorage.setItem("token", response.data.token);
        toast("Account Created Successfully")
        router.push("/auth/otp-verification");
    } catch (error) {
      toast("error")
    } 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-background via-background to-muted/20 flex items-center justify-center p-4">
      <AnimatedBackground />


      <Card className="w-full max-w-md bg-background rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center neo-card">
            <Image width={50} height={100} className="size-full" alt="bella" src="/bella.avif" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Join BELLA</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" type="text" placeholder="John Doe" className="neo-inset" {...register("fullName", { required: true })} />
              {errors.fullName && <p className="text-xs text-red-500">Full name is required.</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="neo-inset" {...register("email", { required: true })} />
              {errors.email && <p className="text-xs text-red-500">Email is required.</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="neo-inset" {...register("phone", { required: true })} />
              {errors.phone && <p className="text-xs text-red-500">Phone number is required.</p>}
            </div>

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
                  {/* Google SVG */}
                  Google
                </Button>
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                {/* <Checkbox id="terms" {...register("terms", { required: true })} /> */}
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </Label>
              </div>
              {errors.terms && <p className="text-xs text-red-500">You must agree to the terms.</p>}

              {/* <div className="flex items-start space-x-2">
                <Checkbox id="marketing" {...register("marketing")} />
                <Label htmlFor="marketing" className="text-sm leading-relaxed">
                  I'd like to receive updates about new features and community events
                </Label>
              </div> */}
            </div>

            {/* Submit */}
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

          {/* Sign In */}
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
