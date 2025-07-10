"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Wrench,
  Plus,
  ArrowLeft,
  Camera,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Phone,
  MessageCircle,
  Upload,
  Zap,
  Droplets,
  Thermometer,
  Lightbulb,
  Home,
  Shield,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"
import Link from "next/link"

export default function MaintenancePage() {
  const [activeTab, setActiveTab] = useState("request")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedUrgency, setSelectedUrgency] = useState("")

  const categories = [
    { value: "plumbing", label: "Plumbing", icon: Droplets, color: "bg-blue-500" },
    { value: "electrical", label: "Electrical", icon: Zap, color: "bg-yellow-500" },
    { value: "hvac", label: "HVAC", icon: Thermometer, color: "bg-green-500" },
    { value: "appliance", label: "Appliance", icon: Home, color: "bg-purple-500" },
    { value: "lighting", label: "Lighting", icon: Lightbulb, color: "bg-orange-500" },
    { value: "security", label: "Security", icon: Shield, color: "bg-red-500" },
  ]

  const urgencyLevels = [
    { value: "low", label: "Low Priority", description: "Can wait a few days", color: "bg-green-500" },
    { value: "medium", label: "Medium Priority", description: "Should be fixed this week", color: "bg-yellow-500" },
    { value: "high", label: "High Priority", description: "Needs attention soon", color: "bg-orange-500" },
    { value: "emergency", label: "Emergency", description: "Immediate attention required", color: "bg-red-500" },
  ]

  const activeRequests = [
    {
      id: "REQ-001",
      title: "Kitchen Faucet Leak",
      category: "Plumbing",
      status: "In Progress",
      priority: "Medium",
      createdAt: "2 days ago",
      technician: "Mike Johnson",
      estimatedCompletion: "Today, 3:00 PM",
      progress: 75,
    },
    {
      id: "REQ-002",
      title: "AC Not Cooling",
      category: "HVAC",
      status: "Scheduled",
      priority: "High",
      createdAt: "1 day ago",
      technician: "Sarah Chen",
      estimatedCompletion: "Tomorrow, 10:00 AM",
      progress: 25,
    },
  ]

  const services = [
    {
      id: 1,
      name: "Premium Cleaning Service",
      provider: "CleanPro",
      rating: 4.9,
      reviews: 156,
      price: "$80-120",
      image: "/placeholder.svg?height=120&width=200",
      description: "Deep cleaning for apartments including kitchen, bathroom, and living areas",
      features: ["Eco-friendly products", "Insured & bonded", "Same-day booking"],
    },
    {
      id: 2,
      name: "Moving & Packing Help",
      provider: "MoveEasy",
      rating: 4.8,
      reviews: 89,
      price: "$100-200",
      image: "/placeholder.svg?height=120&width=200",
      description: "Professional movers for local and long-distance moves",
      features: ["Licensed movers", "Packing supplies", "Insurance included"],
    },
    {
      id: 3,
      name: "Handyman Services",
      provider: "FixIt Pro",
      rating: 4.7,
      reviews: 203,
      price: "$60-150",
      image: "/placeholder.svg?height=120&width=200",
      description: "General repairs, furniture assembly, and home improvements",
      features: ["Background checked", "Tool included", "Satisfaction guarantee"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <DesktopNav />
      </div>

      <div className="lg:ml-64">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="lg:hidden">
                <Button variant="ghost" size="icon" className="neo-button">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Maintenance & Services</h1>
                <p className="text-sm text-muted-foreground">Request repairs and book services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 pb-20 lg:pb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 neo-card">
              <TabsTrigger value="request">New Request</TabsTrigger>
              <TabsTrigger value="track">Track Requests</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            {/* New Request Tab */}
            <TabsContent value="request" className="space-y-6">
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    Submit Maintenance Request
                  </CardTitle>
                  <CardDescription>Describe your issue and we'll get it fixed quickly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Selection */}
                  <div className="space-y-3">
                    <Label>Issue Category</Label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          onClick={() => setSelectedCategory(category.value)}
                          className={`p-4 rounded-lg border transition-all neo-button ${
                            selectedCategory === category.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium">{category.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Issue Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Describe the Issue</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide details about the problem..."
                      className="neo-inset min-h-[100px]"
                    />
                  </div>

                  {/* Priority Level */}
                  <div className="space-y-3">
                    <Label>Priority Level</Label>
                    <div className="grid gap-3">
                      {urgencyLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() => setSelectedUrgency(level.value)}
                          className={`p-3 rounded-lg border transition-all neo-button text-left ${
                            selectedUrgency === level.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 ${level.color} rounded-full`}></div>
                            <div>
                              <p className="font-medium">{level.label}</p>
                              <p className="text-sm text-muted-foreground">{level.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <Label>Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center neo-inset">
                      <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload photos to help us understand the issue
                      </p>
                      <Button variant="outline" size="sm" className="neo-button">
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Preferred Schedule */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Input type="date" className="neo-inset" />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Select>
                        <SelectTrigger className="neo-inset">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full neo-button" size="lg">
                    <Plus className="w-4 h-4 mr-2" />
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Track Requests Tab */}
            <TabsContent value="track" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Active Requests</h2>
                <Badge variant="secondary">{activeRequests.length} active</Badge>
              </div>

              {activeRequests.map((request) => (
                <Card key={request.id} className="neo-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{request.title}</h3>
                        <p className="text-sm text-muted-foreground">Request #{request.id}</p>
                      </div>
                      <Badge
                        variant={request.status === "In Progress" ? "default" : "secondary"}
                        className={
                          request.status === "In Progress"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400"
                            : ""
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-muted-foreground" />
                        <span>{request.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-muted-foreground" />
                        <span>{request.priority} Priority</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>Created {request.createdAt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>ETA: {request.estimatedCompletion}</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{request.progress}%</span>
                      </div>
                      <Progress value={request.progress} className="h-2" />
                    </div>

                    {/* Technician Info */}
                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>
                            {request.technician
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{request.technician}</p>
                          <p className="text-sm text-muted-foreground">Assigned Technician</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="neo-button">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="neo-button">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Request History */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle>Recent Completed Requests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bathroom Light Fixture</p>
                        <p className="text-sm text-muted-foreground">Completed 3 days ago</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="neo-button">
                      Rate Service
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Dishwasher Repair</p>
                        <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Service Marketplace</h2>
                <Button variant="outline" size="sm" className="neo-button">
                  View All Categories
                </Button>
              </div>

              {services.map((service) => (
                <Card key={service.id} className="neo-card">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      <div className="md:w-48 h-48 md:h-auto">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>

                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">by {service.provider}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary">{service.price}</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{service.rating}</span>
                              <span className="text-sm text-muted-foreground">({service.reviews})</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground">{service.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 neo-button">Book Service</Button>
                          <Button variant="outline" className="neo-button">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  )
}
