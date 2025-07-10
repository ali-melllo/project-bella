"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  Bell,
  Shield,
  Smartphone,
  Globe,
  Download,
  Trash2,
  ArrowLeft,
  Volume2,
  VolumeX,
  Database,
  HelpCircle,
  FileText,
  Mail,
  Phone,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    sms: false,
    sound: true,
    vibration: true,
  })

  const [privacy, setPrivacy] = useState({
    analytics: true,
    crashReports: true,
    marketing: false,
  })

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
                <h1 className="text-xl font-bold">Settings</h1>
                <p className="text-sm text-muted-foreground">Manage your app preferences</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="p-4 pb-20 lg:pb-4 space-y-6">
          {/* App Settings */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                App Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div>
                  <Label htmlFor="dark-mode" className="font-medium">
                    Dark Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                </div>
                <ThemeToggle />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div>
                  <Label htmlFor="offline-mode" className="font-medium">
                    Offline Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">Cache data for offline access</p>
                </div>
                <Switch id="offline-mode" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div>
                  <Label htmlFor="auto-sync" className="font-medium">
                    Auto Sync
                  </Label>
                  <p className="text-sm text-muted-foreground">Automatically sync data when connected</p>
                </div>
                <Switch id="auto-sync" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="neo-inset">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>Control how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <Separator />

              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div className="flex items-center gap-3">
                  {notifications.sound ? (
                    <Volume2 className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div>
                    <Label htmlFor="notification-sound" className="font-medium">
                      Notification Sound
                    </Label>
                    <p className="text-sm text-muted-foreground">Play sound for notifications</p>
                  </div>
                </div>
                <Switch
                  id="notification-sound"
                  checked={notifications.sound}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, sound: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <Label htmlFor="vibration" className="font-medium">
                      Vibration
                    </Label>
                    <p className="text-sm text-muted-foreground">Vibrate for notifications</p>
                  </div>
                </div>
                <Switch
                  id="vibration"
                  checked={notifications.vibration}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, vibration: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div>
                  <Label htmlFor="analytics" className="font-medium">
                    Analytics
                  </Label>
                  <p className="text-sm text-muted-foreground">Help improve the app with usage analytics</p>
                </div>
                <Switch
                  id="analytics"
                  checked={privacy.analytics}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, analytics: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div>
                  <Label htmlFor="crash-reports" className="font-medium">
                    Crash Reports
                  </Label>
                  <p className="text-sm text-muted-foreground">Automatically send crash reports</p>
                </div>
                <Switch
                  id="crash-reports"
                  checked={privacy.crashReports}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, crashReports: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                <div>
                  <Label htmlFor="marketing" className="font-medium">
                    Marketing Communications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive promotional emails and updates</p>
                </div>
                <Switch
                  id="marketing"
                  checked={privacy.marketing}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, marketing: checked })}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start neo-button">
                  <Download className="w-4 h-4 mr-2" />
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full justify-start neo-button">
                  <FileText className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Button>
                <Button variant="outline" className="w-full justify-start neo-button">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Storage & Data */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Storage & Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">App Cache</span>
                  <span className="text-sm text-muted-foreground">24.5 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Downloaded Images</span>
                  <span className="text-sm text-muted-foreground">156.2 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Offline Data</span>
                  <span className="text-sm text-muted-foreground">8.9 MB</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start neo-button">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cache
                </Button>
                <Button variant="outline" className="w-full justify-start neo-button">
                  <Download className="w-4 h-4 mr-2" />
                  Download Offline Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support & Help */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Support & Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start neo-button">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help Center
              </Button>
              <Button variant="outline" className="w-full justify-start neo-button">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" className="w-full justify-start neo-button">
                <FileText className="w-4 h-4 mr-2" />
                Report a Bug
              </Button>
              <Button variant="outline" className="w-full justify-start neo-button">
                <Globe className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            </CardContent>
          </Card>

          {/* App Info */}
          <Card className="neo-card">
            <CardHeader>
              <CardTitle>App Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Version</span>
                <span className="text-sm">2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Build</span>
                <span className="text-sm">2024.03.15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Last Updated</span>
                <span className="text-sm">March 15, 2024</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  )
}
