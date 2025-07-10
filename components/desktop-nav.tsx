"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  Search,
  MessageCircle,
  CreditCard,
  Wrench,
  Users,
  Settings,
  User,
  Bell,
  LogOut,
  Sparkles,
  ChevronDown,
  Shield,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { BellaAvatar } from "@/components/bella-avatar"
import { cn } from "@/lib/utils"

export function DesktopNav() {
  const pathname = usePathname()
  const [notifications] = useState(3)

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Search, label: "Explore", href: "/explore" },
    { icon: MessageCircle, label: "Chat", href: "/chat", badge: "AI" },
    { icon: CreditCard, label: "Payments", href: "/payments" },
    { icon: Wrench, label: "Maintenance", href: "/maintenance" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-72 z-40">
      <Card className="h-full glass-card border-0 rounded-none flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">BELLA</h1>
              <p className="text-xs text-muted-foreground">Smart Living Platform</p>
            </div>
          </Link>

          {/* User Profile */}
          <div className="flex items-center gap-3 p-3 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-200">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">Apt 4B • Sunset Gardens</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start h-12 px-4 glass-button group hover:scale-[1.02] transition-all duration-200",
                    isActive && "bg-primary/10 text-primary border-primary/20",
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 mr-3",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && <Badge className="bg-primary/20 text-primary border-0 text-xs">{item.badge}</Badge>}
                  {item.href === "/chat" && <Sparkles className="w-4 h-4 text-primary animate-pulse" />}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* BELLA Assistant */}
        <div className="p-4 border-t border-border/50">
          <Link href="/chat">
            <div className="p-4 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-200 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center gap-3 mb-3">
                <BellaAvatar size="sm" animated />
                <div>
                  <p className="font-semibold text-sm">BELLA Assistant</p>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
                <Sparkles className="w-4 h-4 text-primary animate-pulse ml-auto" />
              </div>
              <p className="text-xs text-muted-foreground">
                "Hi John! Your rent is due in 3 days. Would you like me to process the payment?"
              </p>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border/50 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="glass-button w-8 h-8 relative">
                <Bell className="w-4 h-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary animate-pulse">
                    {notifications}
                  </Badge>
                )}
              </Button>
              <ThemeToggle />
            </div>
            <Button variant="ghost" size="icon" className="glass-button w-8 h-8 text-red-500 hover:text-red-600">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-3 h-3" />
            <span>Secured by BELLA</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
