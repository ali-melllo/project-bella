"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Camera,
  Bell,
  Shield,
  Home,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  Edit,
  Save,
  ArrowLeft,
  Settings,
  Heart,
  Users,
  Coffee,
  Music,
  BookOpen,
  Dumbbell,
  Gamepad2,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    sms: false,
    community: true,
    maintenance: true,
    payments: true,
  })

  const interests = [
    { id: "cooking", label: "Cooking", icon: Coffee, selected: true },
    { id: "fitness", label: "Fitness", icon: Dumbbell, selected: true },
    { id: "music", label: "Music", icon: Music, selected: false },
    { id: "reading", label: "Reading", icon: BookOpen, selected: true },
    { id: "gaming", label: "Gaming", icon: Gamepad2, selected: false },
    { id: "socializing", label: "Socializing", icon: Users, selected: true },
  ]

  const [selectedInterests, setSelectedInterests] = useState(
    interests.filter((interest) => interest.selected).map((interest) => interest.id),
  )

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId],
    )
  }

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
                <h1 className="text-xl font-bold">Profile & Settings</h1>
                <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="neo-button hidden md:flex"
              >
                {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 pb-20 lg:pb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 neo-card">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              {/* Profile Header */}
              <Card className="neo-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                      <Avatar className="w-24 h-24 neo-card">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback className="text-2xl">JD</AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full neo-button">
                          <Camera className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-2">
                      <div>
                        <h2 className="text-2xl font-bold">John Doe</h2>
                        <p className="text-muted-foreground">Apt 4B • Sunset Gardens</p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <Badge variant="secondary">Silver Member</Badge>
                        <Badge variant="outline">2,450 Points</Badge>
                        <Badge variant="outline">Verified</Badge>
                      </div>
                    </div>

                    <div className="flex md:hidden">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                        className="neo-button"
                      >
                        {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                        {isEditing ? "Save" : "Edit"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue="John"
                        disabled={!isEditing}
                        className={isEditing ? "neo-inset" : "neo-card"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        defaultValue="Doe"
                        disabled={!isEditing}
                        className={isEditing ? "neo-inset" : "neo-card"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      disabled={!isEditing}
                      className={isEditing ? "neo-inset" : "neo-card"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      disabled={!isEditing}
                      className={isEditing ? "neo-inset" : "neo-card"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell your neighbors about yourself..."
                      defaultValue="Love cooking and hosting dinner parties! Always up for a good book recommendation."
                      disabled={!isEditing}
                      className={isEditing ? "neo-inset" : "neo-card"}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Lease Information */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Lease Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Unit Number</Label>
                      <div className="p-3 rounded-lg neo-card text-sm">Apt 4B</div>
                    </div>
                    <div className="space-y-2">
                      <Label>Building</Label>
                      <div className="p-3 rounded-lg neo-card text-sm">Sunset Gardens</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Lease Start</Label>
                      <div className="p-3 rounded-lg neo-card text-sm">January 1, 2024</div>
                    </div>
                    <div className="space-y-2">
                      <Label>Lease End</Label>
                      <div className="p-3 rounded-lg neo-card text-sm">December 31, 2024</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Monthly Rent</Label>
                      <div className="p-3 rounded-lg neo-card text-sm font-semibold">$1,850</div>
                    </div>
                    <div className="space-y-2">
                      <Label>Next Renewal</Label>
                      <div className="p-3 rounded-lg neo-card text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>10 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Interests & Hobbies
                  </CardTitle>
                  <CardDescription>Help neighbors find common interests with you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map((interest) => {
                      const isSelected = selectedInterests.includes(interest.id)
                      return (
                        <button
                          key={interest.id}
                          onClick={() => isEditing && toggleInterest(interest.id)}
                          disabled={!isEditing}
                          className={`p-3 rounded-lg border transition-all neo-button ${
                            isSelected
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          } ${!isEditing ? "cursor-default" : ""}`}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <interest.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{interest.label}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              {/* Language & Region */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Language & Region
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Primary Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger className="neo-inset">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Time Zone</Label>
                      <Select defaultValue="pst">
                        <SelectTrigger className="neo-inset">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pst">Pacific Standard Time</SelectItem>
                          <SelectItem value="mst">Mountain Standard Time</SelectItem>
                          <SelectItem value="cst">Central Standard Time</SelectItem>
                          <SelectItem value="est">Eastern Standard Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Privacy Settings
                  </CardTitle>
                  <CardDescription>Control what information is visible to your neighbors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label htmlFor="show-profile" className="font-medium">
                        Show Profile to Neighbors
                      </Label>
                      <p className="text-sm text-muted-foreground">Allow neighbors to see your profile and interests</p>
                    </div>
                    <Switch id="show-profile" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label htmlFor="show-unit" className="font-medium">
                        Show Unit Number
                      </Label>
                      <p className="text-sm text-muted-foreground">Display your apartment number to neighbors</p>
                    </div>
                    <Switch id="show-unit" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label htmlFor="show-contact" className="font-medium">
                        Allow Direct Messages
                      </Label>
                      <p className="text-sm text-muted-foreground">Let neighbors send you direct messages</p>
                    </div>
                    <Switch id="show-contact" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label htmlFor="show-events" className="font-medium">
                        Show Event Attendance
                      </Label>
                      <p className="text-sm text-muted-foreground">Display which events you're attending</p>
                    </div>
                    <Switch id="show-events" />
                  </div>
                </CardContent>
              </Card>

              {/* Community Preferences */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Community Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Preferred Event Types</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Social Events",
                        "Fitness Classes",
                        "Book Clubs",
                        "Food & Cooking",
                        "Game Nights",
                        "Workshops",
                      ].map((eventType) => (
                        <div key={eventType} className="flex items-center space-x-2">
                          <input type="checkbox" id={eventType} defaultChecked className="rounded" />
                          <Label htmlFor={eventType} className="text-sm">
                            {eventType}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Matching Preferences</Label>
                    <Select defaultValue="similar">
                      <SelectTrigger className="neo-inset">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="similar">Similar interests and lifestyle</SelectItem>
                        <SelectItem value="diverse">Diverse backgrounds and interests</SelectItem>
                        <SelectItem value="age">Similar age group</SelectItem>
                        <SelectItem value="language">Same language speakers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Choose how you want to receive updates and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Notification Channels */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Notification Channels</h3>

                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="push-notifications" className="font-medium">
                            Push Notifications
                          </Label>
                          <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                        </div>
                      </div>
                      <Switch
                        id="push-notifications"
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="email-notifications" className="font-medium">
                            Email Notifications
                          </Label>
                          <p className="text-sm text-muted-foreground">Receive updates via email</p>
                        </div>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="sms-notifications" className="font-medium">
                            SMS Notifications
                          </Label>
                          <p className="text-sm text-muted-foreground">Receive urgent alerts via text</p>
                        </div>
                      </div>
                      <Switch
                        id="sms-notifications"
                        checked={notifications.sms}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Notification Types */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Notification Types</h3>

                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div>
                        <Label htmlFor="community-notifications" className="font-medium">
                          Community Updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          New events, neighbor matches, and community posts
                        </p>
                      </div>
                      <Switch
                        id="community-notifications"
                        checked={notifications.community}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, community: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div>
                        <Label htmlFor="maintenance-notifications" className="font-medium">
                          Maintenance Updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Request status, technician updates, and completions
                        </p>
                      </div>
                      <Switch
                        id="maintenance-notifications"
                        checked={notifications.maintenance}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, maintenance: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div>
                        <Label htmlFor="payment-notifications" className="font-medium">
                          Payment Reminders
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Rent due dates, payment confirmations, and receipts
                        </p>
                      </div>
                      <Switch
                        id="payment-notifications"
                        checked={notifications.payments}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, payments: checked })}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Quiet Hours */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Quiet Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Set times when you don't want to receive non-urgent notifications
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Start Time</Label>
                        <Input type="time" defaultValue="22:00" className="neo-inset" />
                      </div>
                      <div className="space-y-2">
                        <Label>End Time</Label>
                        <Input type="time" defaultValue="08:00" className="neo-inset" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              {/* Password & Authentication */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Password & Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Current Password</Label>
                    <Input type="password" placeholder="Enter current password" className="neo-inset" />
                  </div>

                  <div className="space-y-2">
                    <Label>New Password</Label>
                    <Input type="password" placeholder="Enter new password" className="neo-inset" />
                  </div>

                  <div className="space-y-2">
                    <Label>Confirm New Password</Label>
                    <Input type="password" placeholder="Confirm new password" className="neo-inset" />
                  </div>

                  <Button className="neo-button">Update Password</Button>
                </CardContent>
              </Card>

              {/* Two-Factor Authentication */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label className="font-medium">SMS Authentication</Label>
                      <p className="text-sm text-muted-foreground">Receive codes via text message</p>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Enabled
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label className="font-medium">Authenticator App</Label>
                      <p className="text-sm text-muted-foreground">Use Google Authenticator or similar apps</p>
                    </div>
                    <Button variant="outline" size="sm" className="neo-button">
                      Setup
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div>
                      <Label className="font-medium">Biometric Login</Label>
                      <p className="text-sm text-muted-foreground">Face ID, Touch ID, or fingerprint</p>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Active
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Connected Devices */}
              <Card className="neo-card">
                <CardHeader>
                  <CardTitle>Connected Devices</CardTitle>
                  <CardDescription>Manage devices that have access to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">iPhone 15 Pro</p>
                        <p className="text-sm text-muted-foreground">Current device • Last active now</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">MacBook Pro</p>
                        <p className="text-sm text-muted-foreground">Chrome • Last active 2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="neo-button">
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card className="neo-card border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-red-200 dark:border-red-800">
                    <div>
                      <Label className="font-medium text-red-600 dark:text-red-400">Export Account Data</Label>
                      <p className="text-sm text-muted-foreground">Download all your account data</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400"
                    >
                      Export
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-red-200 dark:border-red-800">
                    <div>
                      <Label className="font-medium text-red-600 dark:text-red-400">Delete Account</Label>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
