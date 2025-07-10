"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Search, MessageCircle, CreditCard, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    { icon: Search, label: "Explore", href: "/explore" },
    { icon: MessageCircle, label: "Chat", href: "/chat", badge: "AI" },
    { icon: CreditCard, label: "Payments", href: "/payments" },
    { icon: User, label: "Profile", href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-0 rounded-none border-t border-border/50">
      <nav className="flex items-center justify-around p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className="flex-1">
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-14 flex flex-col items-center justify-center gap-1 glass-button relative group hover:scale-105 transition-all duration-200",
                  isActive && "text-primary",
                )}
              >
                <div className="relative">
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  {item.badge && (
                    <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center text-xs bg-primary border-0">
                      {item.badge}
                    </Badge>
                  )}
                  {item.href === "/chat" && (
                    <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary animate-pulse" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
                )}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
