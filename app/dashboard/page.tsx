"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  Calendar,
  CreditCard,
  Bell,
  Star,
  Users,
  Wrench,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle,
  DollarSign,
  Gift,
  Zap,
} from "lucide-react"
import { BellaAvatar } from "@/components/bella-avatar"
import { useLanguage } from "@/components/language-provider"
import { DesktopNav } from "@/components/desktop-nav"
import { TenantNav } from "@/components/tenant-nav"
import { GlowingCard } from "@/components/ui/glowing-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingTooltip } from "@/components/ui/floating-tooltip"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const { t } = useLanguage()

  const quickActions = [
    { icon: CreditCard, label: t("Pay Rent"), color: "bg-green-500", href: "/payments" },
    { icon: Wrench, label: t("Request Maintenance"), color: "bg-blue-500", href: "/maintenance" },
    { icon: Users, label: t("Community"), color: "bg-purple-500", href: "/community" },
    { icon: MessageCircle, label: t("Chat with BELLA"), color: "bg-pink-500", href: "/chat" },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "payment",
      title: t("Rent Payment Processed"),
      description: t("December rent payment of $1,200 was successfully processed"),
      time: "2 hours ago",
      icon: CreditCard,
      status: "success",
    },
    {
      id: 2,
      type: "maintenance",
      title: t("Maintenance Request Update"),
      description: t("Your kitchen faucet repair has been scheduled for tomorrow at 2 PM"),
      time: "5 hours ago",
      icon: Wrench,
      status: "pending",
    },
    {
      id: 3,
      type: "community",
      title: t("New Community Event"),
      description: t("Rooftop BBQ this Saturday at 6 PM - RSVP now!"),
      time: "1 day ago",
      icon: Users,
      status: "info",
    },
    {
      id: 4,
      type: "message",
      title: t("Message from Property Manager"),
      description: t("Building maintenance scheduled for this weekend"),
      time: "2 days ago",
      icon: MessageCircle,
      status: "info",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: t("Rooftop BBQ"),
      date: "Dec 16",
      time: "6:00 PM",
      attendees: 24,
      location: t("Rooftop Terrace"),
    },
    {
      id: 2,
      title: t("Yoga Class"),
      date: "Dec 18",
      time: "7:00 AM",
      attendees: 12,
      location: t("Community Room"),
    },
    {
      id: 3,
      title: t("Book Club"),
      date: "Dec 20",
      time: "7:30 PM",
      attendees: 8,
      location: t("Library"),
    },
  ]

  const loyaltyStats = {
    points: 2450,
    level: "Gold",
    nextLevel: "Platinum",
    pointsToNext: 550,
    progress: 82,
  }

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

      <div className="flex">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <DesktopNav />
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          {/* Header */}
          <header className="glass-header sticky top-0 z-40 border-b border-white/10">
            <div className="flex items-center justify-between h-16 px-4 lg:px-8">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gradient">{t("Dashboard")}</h1>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="glass-button relative">
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    3
                  </Badge>
                </Button>
                <Avatar className="w-8 h-8 avatar-glow">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 lg:p-8 space-y-8 relative z-10">
            {/* Welcome Section */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <GlowingCard className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <BellaAvatar size="lg" animated />
                      <div className="flex-1 space-y-2">
                        <h2 className="text-xl font-semibold">{t("Good morning, John!")} ☀️</h2>
                        <p className="text-muted-foreground">
                          {t(
                            "You have 2 pending maintenance requests and 1 upcoming community event. Your rent payment for December is due in 5 days.",
                          )}
                        </p>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="glass-button">
                            {t("View Details")}
                          </Button>
                          <Button size="sm" variant="outline" className="glass-button bg-transparent">
                            {t("Ask BELLA")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </GlowingCard>
              </div>

              <GlowingCard className="glass-panel-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Gift className="w-5 h-5" />
                    {t("Loyalty Program")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter value={loyaltyStats.points} />
                    </div>
                    <p className="text-sm text-muted-foreground">{t("Points")}</p>
                    <Badge className="mt-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                      {loyaltyStats.level} {t("Member")}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        {t("Progress to")} {loyaltyStats.nextLevel}
                      </span>
                      <span>
                        {loyaltyStats.pointsToNext} {t("points to go")}
                      </span>
                    </div>
                    <div className="glass-card p-1 rounded-full">
                      <Progress value={loyaltyStats.progress} className="h-2 bg-transparent" />
                    </div>
                  </div>
                </CardContent>
              </GlowingCard>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("Quick Actions")}</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <FloatingTooltip key={index} content={`${action.label} - Click to access`}>
                    <GlowingCard className="glass-interactive cursor-pointer group">
                      <CardContent className="p-6 text-center space-y-3">
                        <div
                          className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                        >
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-medium">{action.label}</p>
                      </CardContent>
                    </GlowingCard>
                  </FloatingTooltip>
                ))}
              </div>
            </div>

            {/* Main Dashboard Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <div className="glass-card p-1 rounded-lg w-fit">
                <TabsList className="bg-transparent">
                  <TabsTrigger
                    value="overview"
                    className="glass-button data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {t("Overview")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="activity"
                    className="glass-button data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {t("Activity")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="community"
                    className="glass-button data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {t("Community")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="analytics"
                    className="glass-button data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {t("Analytics")}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Summary Cards */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <GlowingCard className="glass-card">
                        <CardContent className="p-4 text-center">
                          <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold">$1,200</div>
                          <p className="text-sm text-muted-foreground">{t("Monthly Rent")}</p>
                        </CardContent>
                      </GlowingCard>
                      <GlowingCard className="glass-card">
                        <CardContent className="p-4 text-center">
                          <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold">2</div>
                          <p className="text-sm text-muted-foreground">{t("Active Requests")}</p>
                        </CardContent>
                      </GlowingCard>
                      <GlowingCard className="glass-card">
                        <CardContent className="p-4 text-center">
                          <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold">156</div>
                          <p className="text-sm text-muted-foreground">{t("Neighbors")}</p>
                        </CardContent>
                      </GlowingCard>
                    </div>

                    {/* Recent Activity */}
                    <GlowingCard className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          {t("Recent Activity")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg glass-inset">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                activity.status === "success"
                                  ? "bg-green-100 text-green-600"
                                  : activity.status === "pending"
                                    ? "bg-yellow-100 text-yellow-600"
                                    : "bg-blue-100 text-blue-600"
                              }`}
                            >
                              <activity.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">{activity.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </GlowingCard>
                  </div>

                  {/* Upcoming Events */}
                  <div className="space-y-6">
                    <GlowingCard className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          {t("Upcoming Events")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {upcomingEvents.map((event) => (
                          <div key={event.id} className="p-3 rounded-lg glass-inset space-y-2">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{event.title}</h4>
                              <Badge variant="outline" className="glass-button bg-transparent">
                                {event.date}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {event.attendees}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {event.location}
                            </div>
                          </div>
                        ))}
                        <Button className="w-full glass-button bg-transparent" variant="outline">
                          {t("View All Events")}
                        </Button>
                      </CardContent>
                    </GlowingCard>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <GlowingCard className="glass-card">
                  <CardHeader>
                    <CardTitle>{t("Activity History")}</CardTitle>
                    <CardDescription>{t("Your complete activity timeline")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 p-4 rounded-lg glass-inset">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.status === "success"
                              ? "bg-green-100 text-green-600"
                              : activity.status === "pending"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          <activity.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{activity.title}</h4>
                            <span className="text-sm text-muted-foreground">{activity.time}</span>
                          </div>
                          <p className="text-muted-foreground mt-1">{activity.description}</p>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="glass-button bg-transparent">
                              {t("View Details")}
                            </Button>
                            {activity.type === "maintenance" && (
                              <Button size="sm" variant="outline" className="glass-button bg-transparent">
                                {t("Track Status")}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </GlowingCard>
              </TabsContent>

              <TabsContent value="community" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <GlowingCard className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        {t("Community Stats")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-lg glass-inset">
                          <div className="text-2xl font-bold text-primary">156</div>
                          <p className="text-sm text-muted-foreground">{t("Total Neighbors")}</p>
                        </div>
                        <div className="text-center p-3 rounded-lg glass-inset">
                          <div className="text-2xl font-bold text-primary">24</div>
                          <p className="text-sm text-muted-foreground">{t("Active This Week")}</p>
                        </div>
                        <div className="text-center p-3 rounded-lg glass-inset">
                          <div className="text-2xl font-bold text-primary">8</div>
                          <p className="text-sm text-muted-foreground">{t("Upcoming Events")}</p>
                        </div>
                        <div className="text-center p-3 rounded-lg glass-inset">
                          <div className="text-2xl font-bold text-primary">92%</div>
                          <p className="text-sm text-muted-foreground">{t("Satisfaction")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </GlowingCard>

                  <GlowingCard className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        {t("Your Connections")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg glass-inset">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} />
                            <AvatarFallback>U{i}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">Neighbor {i}</p>
                            <p className="text-sm text-muted-foreground">Apt {100 + i}</p>
                          </div>
                          <Button size="sm" variant="outline" className="glass-button bg-transparent">
                            {t("Message")}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </GlowingCard>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <GlowingCard className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        {t("Your Insights")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{t("Community Engagement")}</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="glass-card p-1 rounded-full">
                          <Progress value={85} className="h-2 bg-transparent" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{t("Payment History")}</span>
                          <span className="text-sm font-medium">100%</span>
                        </div>
                        <div className="glass-card p-1 rounded-full">
                          <Progress value={100} className="h-2 bg-transparent" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{t("Service Usage")}</span>
                          <span className="text-sm font-medium">72%</span>
                        </div>
                        <div className="glass-card p-1 rounded-full">
                          <Progress value={72} className="h-2 bg-transparent" />
                        </div>
                      </div>
                    </CardContent>
                  </GlowingCard>

                  <GlowingCard className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        {t("Recommendations")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 rounded-lg glass-inset">
                        <h4 className="font-medium mb-1">{t("Join Fitness Group")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("Based on your interests, you might enjoy our morning yoga sessions.")}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg glass-inset">
                        <h4 className="font-medium mb-1">{t("Set Up Auto-Pay")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("Never miss a payment and earn extra loyalty points.")}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg glass-inset">
                        <h4 className="font-medium mb-1">{t("Book Cleaning Service")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("Popular service in your building with 4.9★ rating.")}
                        </p>
                      </div>
                    </CardContent>
                  </GlowingCard>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <TenantNav />
      </div>
    </div>
  )
}
