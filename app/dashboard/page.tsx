"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  MessageCircle,
  CreditCard,
  Wrench,
  Calendar,
  Star,
  TrendingUp,
  Gift,
  Bell,
  ChevronRight,
  DollarSign,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Plus,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"
import { BellaAvatar } from "@/components/bella-avatar"
import Link from "next/link"

export default function DashboardPage() {
  const [notifications] = useState([
    { id: 1, title: "Rent due in 3 days", type: "warning", time: "2h ago" },
    { id: 2, title: "Maintenance completed", type: "success", time: "1d ago" },
    { id: 3, title: "New community event", type: "info", time: "2d ago" },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-only">
        <DesktopNav />
      </div>

      {/* Main Content */}
      <div className="desktop-only ml-72">
        <DesktopDashboard notifications={notifications} />
      </div>

      {/* Mobile Content */}
      <div className="mobile-only">
        <MobileDashboard notifications={notifications} />
        <MobileNav />
      </div>
    </div>
  )
}

function DesktopDashboard({ notifications }: { notifications: any[] }) {
  return (
    <div className="relative z-10 p-8">
      {/* Header */}
      <div className="mb-8">
        <Card className="glass-card border-0 p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold text-lg">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">Good morning, John! ☀️</h1>
                  <p className="text-muted-foreground">Apt 4B • Sunset Gardens • Beautiful day ahead</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="glass-button relative">
                  <Bell className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary">
                      {notifications.length}
                    </Badge>
                  )}
                </Button>
                <Link href="/chat">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Chat with BELLA
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="glass-card border-0 p-4 group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-200 glass-card border-0">
                    <Clock className="w-3 h-3 mr-1" />3 days
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rent Due</p>
                  <p className="text-2xl font-bold">$1,850</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 p-4 group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 glass-card border-0">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +150
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Loyalty Points</p>
                  <p className="text-2xl font-bold">2,450</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 p-4 group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200 glass-card border-0">
                    Active
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Open Requests</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 p-4 group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="outline" className="text-purple-600 border-purple-200 glass-card border-0">
                    This week
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Events</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: MessageCircle, label: "Chat BELLA", href: "/chat", color: "from-purple-500 to-pink-500" },
                  { icon: CreditCard, label: "Pay Rent", href: "/payments", color: "from-green-500 to-emerald-600" },
                  { icon: Wrench, label: "Request Repair", href: "/maintenance", color: "from-orange-500 to-red-500" },
                  { icon: Calendar, label: "Join Event", href: "/community", color: "from-purple-500 to-pink-500" },
                ].map((action, index) => (
                  <Link key={index} href={action.href}>
                    <Button
                      variant="ghost"
                      className="h-auto p-4 flex flex-col items-center gap-3 glass-button group hover:scale-105 transition-all duration-300 w-full"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium">{action.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Conversations */}
          <Card className="glass-card border-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Conversations</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary glass-button">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-200">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Maintenance Request</p>
                  <p className="text-sm text-muted-foreground">Kitchen faucet is leaking...</p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">Active</Badge>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-200">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Rent Payment</p>
                  <p className="text-sm text-muted-foreground">Payment confirmed for March</p>
                </div>
                <Badge variant="outline" className="glass-card border-0">
                  Resolved
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Community Highlights */}
          <Card className="glass-card border-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Community</CardTitle>
              <Link href="/community">
                <Button variant="ghost" size="sm" className="text-primary glass-button">
                  Explore
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-pink-500 to-rose-500 text-white">SM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">Sarah M. (Apt 2A)</p>
                  <p className="text-sm text-muted-foreground">95% match • Loves cooking</p>
                </div>
                <Button size="sm" variant="outline" className="glass-button border-0 bg-transparent">
                  Connect
                </Button>
              </div>

              <div className="p-4 rounded-xl glass-card">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium">Rooftop BBQ</span>
                  <Badge className="bg-primary/10 text-primary border-0">Tomorrow</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Join us for a community BBQ on the rooftop garden. RSVP by tonight!
                </p>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                  <Plus className="w-4 h-4 mr-2" />
                  RSVP
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loyalty Progress */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-primary" />
                Loyalty Progress
              </CardTitle>
              <CardDescription>You're 550 points away from Gold status!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Silver</span>
                  <span>Gold</span>
                </div>
                <Progress value={82} className="h-3" />
                <p className="text-xs text-muted-foreground">2,450 / 3,000 points</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl glass-card text-center group hover:scale-105 transition-all duration-200">
                  <p className="text-sm font-medium">Referral Bonus</p>
                  <p className="text-xs text-muted-foreground">+200 points</p>
                </div>
                <div className="p-3 rounded-xl glass-card text-center group hover:scale-105 transition-all duration-200">
                  <p className="text-sm font-medium">Event Attendance</p>
                  <p className="text-xs text-muted-foreground">+50 points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MobileDashboard({ notifications }: { notifications: any[] }) {
  return (
    <div className="relative z-10 pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 glass-card border-0 rounded-none">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-lg">Good morning, John! ☀️</h1>
              <p className="text-sm text-muted-foreground">Apt 4B • Sunset Gardens</p>
            </div>
          </div>
          <div className="relative">
            <Button variant="ghost" size="icon" className="glass-button">
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary animate-pulse">
                  {notifications.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Welcome Banner */}
        <Card className="glass-card border-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Welcome Home!
                  <Sparkles className="w-5 h-5" />
                </h2>
                <p className="text-muted-foreground mb-4">Everything looks great today. BELLA is here to help!</p>
                <Link href="/chat">
                  <Button variant="secondary" size="sm" className="glass-button border-0">
                    Chat with BELLA
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <BellaAvatar size="lg" animated />
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="glass-card border-0 group hover:scale-105 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="text-orange-600 border-orange-200 glass-card border-0 text-xs">
                  3 days
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Rent Due</p>
                <p className="text-xl font-bold">$1,850</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 group hover:scale-105 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="text-green-600 border-green-200 glass-card border-0 text-xs">
                  +150
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Points</p>
                <p className="text-xl font-bold">2,450</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MessageCircle, label: "Chat BELLA", href: "/chat", color: "from-purple-500 to-pink-500" },
                { icon: CreditCard, label: "Pay Rent", href: "/payments", color: "from-green-500 to-emerald-600" },
                { icon: Wrench, label: "Request Repair", href: "/maintenance", color: "from-orange-500 to-red-500" },
                { icon: Calendar, label: "Join Event", href: "/community", color: "from-purple-500 to-pink-500" },
              ].map((action, index) => (
                <Link key={index} href={action.href}>
                  <Button
                    variant="ghost"
                    className="h-auto p-4 flex flex-col items-center gap-2 glass-button group hover:scale-105 transition-all duration-300 w-full"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium">{action.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary glass-button">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl glass-card">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Maintenance Request</p>
                <p className="text-xs text-muted-foreground">Kitchen faucet is leaking...</p>
              </div>
              <Badge className="bg-green-100 text-green-700 border-0 text-xs">Active</Badge>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl glass-card">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Rent Payment</p>
                <p className="text-xs text-muted-foreground">Payment confirmed for March</p>
              </div>
              <Badge variant="outline" className="glass-card border-0 text-xs">
                Resolved
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Community Preview */}
        <Card className="glass-card border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Community</CardTitle>
            <Link href="/community">
              <Button variant="ghost" size="sm" className="text-primary glass-button">
                Explore
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Rooftop BBQ</span>
                <Badge className="bg-primary/10 text-primary border-0 text-xs">Tomorrow</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Join us for a community BBQ on the rooftop garden. RSVP by tonight!
              </p>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-xs">
                <Plus className="w-3 h-3 mr-1" />
                RSVP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
