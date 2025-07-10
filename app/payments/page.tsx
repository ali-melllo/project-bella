"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CreditCard,
  DollarSign,
  Calendar,
  Download,
  Star,
  Gift,
  TrendingUp,
  Users,
  ArrowLeft,
  Plus,
  Check,
  Clock,
  AlertCircle,
  Crown,
  Award,
  Target,
  Zap,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("pay-rent")
  const [autoPayEnabled, setAutoPayEnabled] = useState(true)
  const [splitPayment, setSplitPayment] = useState(false)

  const paymentMethods = [
    { id: 1, type: "Bank Account", last4: "4567", isDefault: true },
    { id: 2, type: "Credit Card", last4: "8901", isDefault: false },
    { id: 3, type: "Debit Card", last4: "2345", isDefault: false },
  ]

  const transactions = [
    { id: 1, date: "Mar 1, 2024", amount: "$1,850", type: "Rent Payment", status: "Completed" },
    { id: 2, date: "Feb 1, 2024", amount: "$1,850", type: "Rent Payment", status: "Completed" },
    { id: 3, date: "Jan 1, 2024", amount: "$1,850", type: "Rent Payment", status: "Completed" },
    { id: 4, date: "Dec 15, 2023", amount: "$75", type: "Late Fee", status: "Completed" },
    { id: 5, date: "Dec 1, 2023", amount: "$1,850", type: "Rent Payment", status: "Completed" },
  ]

  const loyaltyTiers = [
    { name: "Bronze", points: 0, color: "bg-amber-600", benefits: ["Basic support", "Monthly newsletter"] },
    {
      name: "Silver",
      points: 1000,
      color: "bg-gray-400",
      benefits: ["Priority support", "Event discounts", "Referral bonuses"],
    },
    {
      name: "Gold",
      points: 3000,
      color: "bg-yellow-500",
      benefits: ["Premium support", "Free events", "Upgrade priority", "Exclusive perks"],
    },
    {
      name: "Platinum",
      points: 5000,
      color: "bg-purple-500",
      benefits: ["VIP support", "All perks included", "Premium housing access"],
    },
  ]

  const currentPoints = 2450
  const currentTier = loyaltyTiers.find(
    (tier) =>
      currentPoints >= tier.points &&
      currentPoints < (loyaltyTiers[loyaltyTiers.indexOf(tier) + 1]?.points || Number.POSITIVE_INFINITY),
  )
  const nextTier = loyaltyTiers[loyaltyTiers.indexOf(currentTier!) + 1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="neo-button">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Payments & Loyalty</h1>
              <p className="text-sm text-muted-foreground">Manage payments and rewards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 neo-card">
            <TabsTrigger value="pay-rent">Pay Rent</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="loyalty">Loyalty</TabsTrigger>
          </TabsList>

          {/* Pay Rent Tab */}
          <TabsContent value="pay-rent" className="space-y-6">
            {/* Current Rent Due */}
            <Card className="neo-card border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-orange-500" />
                      Rent Due
                    </CardTitle>
                    <CardDescription>Due March 31, 2024</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-orange-500 text-orange-500">
                    <Clock className="w-3 h-3 mr-1" />3 days left
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">$1,850.00</div>

                {/* Split Payment Option */}
                <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                  <div>
                    <Label htmlFor="split-payment" className="font-medium">
                      Split with roommates
                    </Label>
                    <p className="text-sm text-muted-foreground">Share payment with other tenants</p>
                  </div>
                  <Switch id="split-payment" checked={splitPayment} onCheckedChange={setSplitPayment} />
                </div>

                {splitPayment && (
                  <Card className="neo-inset">
                    <CardContent className="p-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Your share:</span>
                        <span className="font-semibold">$925.00</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Roommate share:</span>
                        <span>$925.00</span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Payment Method Selection */}
                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-3 rounded-lg neo-card">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{method.type}</p>
                          <p className="text-sm text-muted-foreground">****{method.last4}</p>
                        </div>
                      </div>
                      {method.isDefault && <Badge variant="secondary">Default</Badge>}
                    </div>
                  ))}
                  <Button variant="outline" className="w-full neo-button">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>

                {/* Auto Pay Setting */}
                <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                  <div>
                    <Label htmlFor="auto-pay" className="font-medium">
                      Auto Pay
                    </Label>
                    <p className="text-sm text-muted-foreground">Automatically pay rent each month</p>
                  </div>
                  <Switch id="auto-pay" checked={autoPayEnabled} onCheckedChange={setAutoPayEnabled} />
                </div>

                {/* Pay Button */}
                <Button className="w-full neo-button" size="lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay ${splitPayment ? "925.00" : "1,850.00"}
                </Button>

                {/* Loyalty Points Earned */}
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Earn 185 loyalty points with this payment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Transaction History</h2>
              <Button variant="outline" size="sm" className="neo-button">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            {transactions.map((transaction) => (
              <Card key={transaction.id} className="neo-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                        {transaction.type === "Rent Payment" ? (
                          <DollarSign className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.type}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{transaction.amount}</p>
                      <Badge variant="outline" className="text-xs">
                        <Check className="w-3 h-3 mr-1" />
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Loyalty Tab */}
          <TabsContent value="loyalty" className="space-y-6">
            {/* Current Status */}
            <Card className="neo-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  Loyalty Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{currentPoints.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                  </div>
                  <Badge className={`${currentTier?.color} text-white`}>{currentTier?.name}</Badge>
                </div>

                {nextTier && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to {nextTier.name}</span>
                      <span>{nextTier.points - currentPoints} points needed</span>
                    </div>
                    <Progress value={(currentPoints / nextTier.points) * 100} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tier Benefits */}
            <Card className="neo-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  Your Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentTier?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ways to Earn Points */}
            <Card className="neo-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Earn More Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Rent Payments</p>
                      <p className="text-sm text-muted-foreground">1 point per $10</p>
                    </div>
                  </div>
                  <Badge variant="outline">+185/month</Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Referrals</p>
                      <p className="text-sm text-muted-foreground">Refer new tenants</p>
                    </div>
                  </div>
                  <Badge variant="outline">+500 each</Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg neo-card">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Event Attendance</p>
                      <p className="text-sm text-muted-foreground">Join community events</p>
                    </div>
                  </div>
                  <Badge variant="outline">+50 each</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Referral Tracker */}
            <Card className="neo-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Referral Progress
                </CardTitle>
                <CardDescription>Refer friends and earn bonus points</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-lg neo-card">
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Referred</p>
                  </div>
                  <div className="p-3 rounded-lg neo-card">
                    <p className="text-2xl font-bold">1</p>
                    <p className="text-sm text-muted-foreground">Moved In</p>
                  </div>
                  <div className="p-3 rounded-lg neo-card">
                    <p className="text-2xl font-bold">500</p>
                    <p className="text-sm text-muted-foreground">Points Earned</p>
                  </div>
                </div>

                <Button className="w-full neo-button">
                  <Users className="w-4 h-4 mr-2" />
                  Invite Friends
                </Button>
              </CardContent>
            </Card>

            {/* Upgrade Path */}
            <Card className="neo-card border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-500" />
                  Premium Housing Access
                </CardTitle>
                <CardDescription>Reach Platinum status for exclusive housing upgrades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {5000 - currentPoints} points away from premium housing access
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Platinum</span>
                    <span>{currentPoints}/5000</span>
                  </div>
                  <Progress value={(currentPoints / 5000) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <MobileNav />
    </div>
  )
}
