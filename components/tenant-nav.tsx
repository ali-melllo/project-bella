"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Search, Heart, MessageCircle, User } from "lucide-react"

export function TenantNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/tenant/dashboard", icon: Home, label: "Home" },
    { href: "/explore", icon: Search, label: "Explore" },
    { href: "/tenant/favorites", icon: Heart, label: "Saved" },
    { href: "/chat", icon: MessageCircle, label: "Chat", badge: 2 },
    { href: "/tenant/profile", icon: User, label: "Profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border/50 mobile-only">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const IconComponent = item.icon

          return (
            <Link key={item.href} href={item.href} className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                className={`w-full flex flex-col items-center gap-1 h-auto py-2 px-1 relative neo-button ${
                  isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className={`${isActive ? "scale-110" : ""} transition-transform duration-200`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">{item.label}</span>
                {item.badge && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
