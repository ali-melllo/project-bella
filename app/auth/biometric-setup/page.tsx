"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Fingerprint, Smartphone, Shield, Check, X } from "lucide-react"

export default function BiometricSetupPage() {
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSetupBiometric = async () => {
    setIsLoading(true)
    // Simulate biometric setup
    setTimeout(() => {
      setIsSetupComplete(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleSkip = () => {
    router.push("/dashboard")
  }

  const handleContinue = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md neo-card">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center neo-card">
            {isSetupComplete ? (
              <Check className="w-8 h-8 text-green-500" />
            ) : (
              <Fingerprint className="w-8 h-8 text-primary" />
            )}
          </div>

          <div>
            <CardTitle className="text-2xl font-bold">
              {isSetupComplete ? "Setup Complete!" : "Secure Your Account"}
            </CardTitle>
            <CardDescription>
              {isSetupComplete
                ? "Biometric authentication has been enabled for your account"
                : "Enable biometric login for quick and secure access"}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {!isSetupComplete ? (
            <>
              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg neo-card">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Enhanced Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Your biometric data stays on your device and never leaves it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg neo-card">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Quick Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Sign in instantly with Face ID, Touch ID, or fingerprint
                    </p>
                  </div>
                </div>
              </div>

              {/* Setup Button */}
              <Button onClick={handleSetupBiometric} className="w-full neo-button" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Setting up...
                  </div>
                ) : (
                  <>
                    <Fingerprint className="w-4 h-4 mr-2" />
                    Enable Biometric Login
                  </>
                )}
              </Button>

              {/* Skip Option */}
              <Button variant="ghost" onClick={handleSkip} className="w-full" disabled={isLoading}>
                <X className="w-4 h-4 mr-2" />
                Skip for Now
              </Button>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center space-y-4">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Biometric authentication is now active
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    You can now use your fingerprint or face to sign in
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <Button onClick={handleContinue} className="w-full neo-button">
                <Check className="w-4 h-4 mr-2" />
                Continue to BELLA
              </Button>
            </>
          )}

          {/* Privacy Note */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Your biometric data is encrypted and stored securely on your device only
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
