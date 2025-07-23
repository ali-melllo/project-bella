"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Building,
  Users,
  Wrench,
  DollarSign,
  Clock,
  MessageSquare,
  Send,
  Filter,
  Download,
  Plus,
  Search,
  BarChart3,
  PieChart,
  Calendar,
  Star,
  ArrowUp,
  ArrowDown,
} from "lucide-react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { title: "Total Units", value: "156", change: "+2", trend: "up", icon: Building },
    { title: "Occupied Units", value: "142", change: "91%", trend: "up", icon: Users },
    { title: "Active Requests", value: "23", change: "-5", trend: "down", icon: Wrench },
    { title: "Monthly Revenue", value: "$284K", change: "+12%", trend: "up", icon: DollarSign },
  ]

  const recentRequests = [
    {
      id: "REQ-156",
      tenant: "Sarah Chen",
      unit: "4B",
      type: "Plumbing",
      priority: "High",
      status: "In Progress",
      created: "2 hours ago",
    },
    {
      id: "REQ-155",
      tenant: "Mike Johnson",
      unit: "2A",
      type: "HVAC",
      priority: "Medium",
      status: "Scheduled",
      created: "4 hours ago",
    },
    {
      id: "REQ-154",
      tenant: "Emma Wilson",
      unit: "6C",
      type: "Electrical",
      priority: "Low",
      status: "Completed",
      created: "1 day ago",
    },
  ]

  const tenants = [
    {
      id: 1,
      name: "John Doe",
      unit: "4B",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      leaseEnd: "Dec 31, 2024",
      rentStatus: "Paid",
      loyaltyPoints: 2450,
    },
    {
      id: 2,
      name: "Sarah Chen",
      unit: "2A",
      email: "sarah.chen@example.com",
      phone: "+1 (555) 234-5678",
      leaseEnd: "Mar 15, 2025",
      rentStatus: "Due",
      loyaltyPoints: 1890,
    },
    {
      id: 3,
      name: "Mike Johnson",
      unit: "6C",
      email: "mike.johnson@example.com",
      phone: "+1 (555) 345-6789",
      leaseEnd: "Jun 30, 2024",
      rentStatus: "Paid",
      loyaltyPoints: 3200,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-24 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Property Management</h1>
            <p className="text-muted-foreground">Sunset Gardens • 156 Units</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button variant="outline" className="neo-button">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button className="neo-button">
              <Plus className="w-4 h-4 mr-2" />
              Add Tenant
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 neo-card">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="neo-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {stat.trend === "up" ? (
                          <ArrowUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="neo-card">
              <CardHeader>
                <CardTitle>Recent Maintenance Requests</CardTitle>
                <CardDescription>Latest requests from tenants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/20 rounded-full flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {request.tenant} • Unit {request.unit}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • {request.created}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={request.status === "Completed" ? "default" : "secondary"}
                        className={
                          request.status === "In Progress"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400"
                            : request.status === "Completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400"
                              : ""
                        }
                      >
                        {request.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{request.priority} Priority</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="neo-card">
              <CardHeader>
                <CardTitle>Occupancy Overview</CardTitle>
                <CardDescription>Current building occupancy status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Occupied Units</span>
                    <span className="text-sm text-muted-foreground">142/156</span>
                  </div>
                  <Progress value={91} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg neo-card">
                    <p className="text-2xl font-bold text-green-600">14</p>
                    <p className="text-sm text-muted-foreground">Available</p>
                  </div>
                  <div className="text-center p-3 rounded-lg neo-card">
                    <p className="text-2xl font-bold text-blue-600">8</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average Rent</span>
                    <span className="font-semibold">$1,850</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Renewal Rate</span>
                    <span className="font-semibold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg. Lease Length</span>
                    <span className="font-semibold">14 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tenants Tab */}
        <TabsContent value="tenants" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Tenant Management</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search tenants..." className="pl-10 neo-inset" />
              </div>
              <Button variant="outline" className="neo-button">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <Card className="neo-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border/50">
                    <tr>
                      <th className="text-left p-4 font-medium">Tenant</th>
                      <th className="text-left p-4 font-medium">Unit</th>
                      <th className="text-left p-4 font-medium">Contact</th>
                      <th className="text-left p-4 font-medium">Lease End</th>
                      <th className="text-left p-4 font-medium">Rent Status</th>
                      <th className="text-left p-4 font-medium">Loyalty Points</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenants.map((tenant) => (
                      <tr key={tenant.id} className="border-b border-border/50 hover:bg-muted/20">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" />
                              <AvatarFallback>
                                {tenant.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{tenant.name}</p>
                              <p className="text-sm text-muted-foreground">ID: {tenant.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{tenant.unit}</Badge>
                        </td>
                        <td className="p-4">
                          <div className="text-sm">
                            <p>{tenant.email}</p>
                            <p className="text-muted-foreground">{tenant.phone}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">{tenant.leaseEnd}</span>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant={tenant.rentStatus === "Paid" ? "default" : "destructive"}
                            className={
                              tenant.rentStatus === "Paid"
                                ? "bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400"
                                : ""
                            }
                          >
                            {tenant.rentStatus}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">{tenant.loyaltyPoints.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" className="neo-button">
                              View
                            </Button>
                            <Button size="sm" variant="outline" className="neo-button">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Requests Tab */}
        <TabsContent value="requests" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Maintenance Requests</h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40 neo-inset">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Requests</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="neo-button">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {recentRequests.map((request) => (
              <Card key={request.id} className="neo-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Request #{request.id}</h3>
                      <p className="text-muted-foreground">
                        {request.tenant} • Unit {request.unit}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={request.priority === "High" ? "destructive" : "secondary"}
                        className={
                          request.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/20 dark:text-yellow-400"
                            : request.priority === "Low"
                              ? "bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400"
                              : ""
                        }
                      >
                        {request.priority}
                      </Badge>
                      <Badge
                        variant={request.status === "Completed" ? "default" : "secondary"}
                        className={
                          request.status === "In Progress"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400"
                            : request.status === "Completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400"
                              : ""
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{request.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Created {request.created}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Due: Tomorrow 2PM</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>TM</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Assigned to Mike Johnson</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="neo-button">
                        View Details
                      </Button>
                      <Button size="sm" className="neo-button">
                        Update Status
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Analytics & Insights</h2>
            <Select defaultValue="30days">
              <SelectTrigger className="w-40 neo-inset">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="neo-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Request Volume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 45, 78, 52, 89, 67, 43].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-primary/20 rounded-t" style={{ height: `${height}%` }}></div>
                      <span className="text-xs text-muted-foreground">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="neo-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Request Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Plumbing</span>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">HVAC</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Electrical</span>
                    </div>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Other</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="neo-card">
              <CardHeader>
                <CardTitle>Tenant Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">4.8</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 156 reviews</p>
                </div>
              </CardContent>
            </Card>

            <Card className="neo-card">
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">2.4h</div>
                  <p className="text-sm text-muted-foreground">Average response time</p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <ArrowDown className="w-4 h-4" />
                    <span className="text-sm">15% faster</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="neo-card">
              <CardHeader>
                <CardTitle>Resolution Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">94%</div>
                  <p className="text-sm text-muted-foreground">First-time resolution</p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-sm">+3% this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Broadcast Messages</h2>
            <Button className="neo-button">
              <Plus className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>

          <Card className="neo-card">
            <CardHeader>
              <CardTitle>Send Broadcast Message</CardTitle>
              <CardDescription>Send announcements to all tenants or specific groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Recipients</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="neo-inset">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tenants</SelectItem>
                      <SelectItem value="floor">Specific Floor</SelectItem>
                      <SelectItem value="unit-type">Unit Type</SelectItem>
                      <SelectItem value="custom">Custom Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <Select defaultValue="normal">
                    <SelectTrigger className="neo-inset">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Priority</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Message subject..." className="neo-inset" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Type your message here..." className="neo-inset min-h-[120px]" />
              </div>

              <div className="flex items-center gap-4">
                <Button className="neo-button">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="neo-button">
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-lg neo-card">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Building Maintenance Notice</h4>
                    <Badge variant="outline">Sent to All</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    The elevator will be under maintenance this Saturday from 9 AM to 2 PM. Please use the stairs during
                    this time.
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Sent 2 days ago</span>
                    <span>156 recipients</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg neo-card">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Community BBQ Event</h4>
                    <Badge variant="outline">Sent to All</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Join us for a community BBQ this Saturday at 6 PM on the rooftop garden. Food and drinks provided!
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Sent 1 week ago</span>
                    <span>156 recipients • 45 RSVPs</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg neo-card">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Rent Payment Reminder</h4>
                    <Badge variant="outline">Sent to 23 tenants</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Friendly reminder that rent is due in 3 days. You can pay easily through the BELLA app.
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Sent 1 week ago</span>
                    <span>23 recipients • 18 paid</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
