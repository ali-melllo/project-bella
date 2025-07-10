"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BellaAvatar } from "@/components/bella-avatar"
import { MessageCircle, X, Minimize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const welcomeMessages = [
    t("Hi! I'm BELLA, your AI assistant. How can I help you today?"),
    t("Need help finding the perfect property? I'm here to assist!"),
    t("Have questions about payments or maintenance? Just ask!"),
  ]

  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    if (showWelcome && !isOpen) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [showWelcome, isOpen, welcomeMessages.length])

  return (
    <div className="fixed bottom-4 right-4 z-50 mobile-only">
      {/* Welcome Message Bubble */}
      {showWelcome && !isOpen && (
        <div className="mb-4 mr-16 max-w-xs">
          <Card className="neo-card border-0 animate-in slide-in-from-bottom-2">
            <CardContent className="p-3">
              <p className="text-sm">{welcomeMessages[currentMessage]}</p>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-b border-border/50" />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="mb-4 w-80 h-96">
          <Card className="neo-card border-0 h-full flex flex-col animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <BellaAvatar size="sm" animated />
                <div>
                  <h3 className="font-semibold text-sm">{t("BELLA")}</h3>
                  <p className="text-xs text-muted-foreground">{t("AI Assistant")}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={() => setIsMinimized(true)}>
                  <Minimize2 className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={() => setIsOpen(false)}>
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-y-auto custom-scrollbar">
              <div className="flex gap-2">
                <BellaAvatar size="sm" />
                <div className="p-2 rounded-lg neo-inset max-w-xs">
                  <p className="text-sm">
                    {t("Hello! I'm BELLA, your AI real estate assistant. I can help you with:")}
                  </p>
                </div>
              </div>

              <div className="ml-10 space-y-2">
                <div className="p-2 rounded-lg neo-inset text-xs">🏠 {t("Finding properties")}</div>
                <div className="p-2 rounded-lg neo-inset text-xs">💳 {t("Payment assistance")}</div>
                <div className="p-2 rounded-lg neo-inset text-xs">🔧 {t("Maintenance requests")}</div>
                <div className="p-2 rounded-lg neo-inset text-xs">👥 {t("Community features")}</div>
              </div>

              <div className="flex gap-2">
                <BellaAvatar size="sm" />
                <div className="p-2 rounded-lg neo-inset max-w-xs">
                  <p className="text-sm">{t("What would you like to know?")}</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t("Type your message...")}
                  className="flex-1 px-3 py-2 text-sm rounded-lg neo-inset border-0 focus-ring"
                />
                <Button size="sm" className="neo-button">
                  {t("Send")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Minimized State */}
      {isOpen && isMinimized && (
        <div className="mb-4">
          <Button onClick={() => setIsMinimized(false)} className="neo-button p-2 rounded-full">
            <BellaAvatar size="sm" />
          </Button>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowWelcome(false)
          setIsMinimized(false)
        }}
        className={cn("neo-button p-4 rounded-full shadow-lg", isOpen ? "bg-primary text-primary-foreground" : "")}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            {showWelcome && <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />}
          </div>
        )}
      </Button>
    </div>
  )
}
