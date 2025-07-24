"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  MessageSquare,
  MapPin,
  Clock,
  Heart,
  Share2,
  Search,
  Filter,
  Plus,
  ArrowLeft,
  UserPlus,
  Coffee,
  Music,
  Gamepad2,
  BookOpen,
  Dumbbell,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discover")

  const matches = [
    {
      id: 1,
      name: "Sarah Martinez",
      apartment: "Apt 2A",
      image: "/placeholder.svg?height=80&width=80",
      matchPercentage: 95,
      interests: ["Cooking", "Yoga", "Books"],
      languages: ["English", "Spanish"],
      bio: "Love trying new recipes and hosting dinner parties!",
      isOnline: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      apartment: "Apt 5B",
      image: "/placeholder.svg?height=80&width=80",
      matchPercentage: 88,
      interests: ["Gaming", "Tech", "Coffee"],
      languages: ["English", "Mandarin"],
      bio: "Software engineer who loves board games and good coffee.",
      isOnline: false,
    },
    {
      id: 3,
      name: "Emma Johnson",
      apartment: "Apt 1C",
      image: "/placeholder.svg?height=80&width=80",
      matchPercentage: 82,
      interests: ["Fitness", "Music", "Travel"],
      languages: ["English", "French"],
      bio: "Fitness enthusiast and music lover. Always up for adventures!",
      isOnline: true,
    },
  ]

  const events = [
    {
      id: 1,
      title: "Rooftop BBQ & Social",
      date: "Tomorrow, 6:00 PM",
      location: "Rooftop Garden",
      attendees: 12,
      maxAttendees: 20,
      image: "/placeholder.svg?height=120&width=200",
      description: "Join us for a community BBQ with games and music!",
      isRSVPed: false,
      tags: ["Food", "Social", "Outdoor"],
    },
    {
      id: 2,
      title: "Book Club Meeting",
      date: "Friday, 7:30 PM",
      location: "Community Room",
      attendees: 8,
      maxAttendees: 15,
      image: "/placeholder.svg?height=120&width=200",
      description: 'Discussing "The Seven Husbands of Evelyn Hugo"',
      isRSVPed: true,
      tags: ["Books", "Discussion", "Indoor"],
    },
    {
      id: 3,
      title: "Morning Yoga Session",
      date: "Saturday, 8:00 AM",
      location: "Fitness Center",
      attendees: 6,
      maxAttendees: 12,
      image: "/placeholder.svg?height=120&width=200",
      description: "Start your weekend with mindful movement and meditation.",
      isRSVPed: false,
      tags: ["Fitness", "Wellness", "Morning"],
    },
  ]

  const posts = [
    {
      id: 1,
      author: "Alex Rivera",
      apartment: "Apt 3A",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Does anyone have a good recommendation for a local vet? My cat needs a checkup.",
      timestamp: "2 hours ago",
      likes: 5,
      comments: 3,
      isLiked: false,
    },
    {
      id: 2,
      author: "Lisa Park",
      apartment: "Apt 4C",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Lost my keys somewhere in the building. If anyone finds a set with a blue keychain, please let me know!",
      timestamp: "4 hours ago",
      likes: 8,
      comments: 2,
      isLiked: true,
    },
    {
      id: 3,
      author: "David Kim",
      apartment: "Apt 6A",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "The sunset view from the rooftop tonight was absolutely stunning! 🌅",
      timestamp: "1 day ago",
      likes: 15,
      comments: 7,
      isLiked: false,
    },
  ]

  const interestIcons = {
    Cooking: Coffee,
    Yoga: Dumbbell,
    Books: BookOpen,
    Gaming: Gamepad2,
    Tech: Users,
    Coffee: Coffee,
    Fitness: Dumbbell,
    Music: Music,
    Travel: MapPin,
  }

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
              <h1 className="text-xl font-bold">Community</h1>
              <p className="text-sm text-muted-foreground">Connect with your neighbors</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="neo-button">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 neo-card">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="bulletin">Bulletin</TabsTrigger>
            <TabsTrigger value="chats">Chats</TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-6">
            {/* Profile Setup Prompt */}
            <Card className="neo-card border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Complete Your Profile</h3>
                    <p className="text-sm text-muted-foreground">
                      Add interests and preferences to find better matches
                    </p>
                  </div>
                  <Button size="sm" className="neo-button">
                    Setup
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Smart Matches */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Smart Matches</h2>
                <Button variant="ghost" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {matches.map((match) => (
                <Card key={match.id} className="neo-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16 neo-card">
                          <AvatarImage src={match.image || "/placeholder.svg"} />
                          <AvatarFallback>
                            {match.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {match.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-background rounded-full"></div>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{match.name}</h3>
                            <p className="text-sm text-muted-foreground">{match.apartment}</p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400"
                          >
                            {match.matchPercentage}% match
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground">{match.bio}</p>

                        <div className="flex flex-wrap gap-1">
                          {match.interests.slice(0, 3).map((interest) => {
                            const IconComponent = interestIcons[interest as keyof typeof interestIcons] || Users
                            return (
                              <Badge key={interest} variant="outline" className="text-xs">
                                <IconComponent className="w-3 h-3 mr-1" />
                                {interest}
                              </Badge>
                            )
                          })}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="w-auto md:w-28 neo-button">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Connect
                          </Button>
                          <Button size="sm" variant="outline" className="neo-button">
                            <UserPlus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <Button size="sm" className="neo-button">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>

            {events.map((event) => (
              <Card key={event.id} className="neo-card">
                <CardContent className="p-0">
                  <div className="aspect-video w-full bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      {event.isRSVPed && (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400">
                          RSVP'd
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground">{event.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {event.attendees}/{event.maxAttendees} attending
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="neo-button">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="neo-button" variant={event.isRSVPed ? "outline" : "default"}>
                          {event.isRSVPed ? "Cancel RSVP" : "RSVP"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Bulletin Tab */}
          <TabsContent value="bulletin" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Community Board</h2>
              <Button size="sm" className="neo-button">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Create Post */}
            <Card className="neo-card">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input placeholder="Share something with your neighbors..." className="neo-inset" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id} className="neo-card">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{post.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {post.apartment} • {post.timestamp}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm">{post.content}</p>

                  <div className="flex items-center gap-4 pt-2">
                    <Button variant="ghost" size="sm" className={`neo-button ${post.isLiked ? "text-red-500" : ""}`}>
                      <Heart className={`w-4 h-4 mr-2 ${post.isLiked ? "fill-current" : ""}`} />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="neo-button">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="neo-button">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Chats Tab */}
          <TabsContent value="chats" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Community Chats</h2>
              <Button size="sm" className="neo-button">
                <Plus className="w-4 h-4 mr-2" />
                New Chat
              </Button>
            </div>

            {/* Language-based Chats */}
            <div className="space-y-3">
              <h3 className="font-medium text-muted-foreground">Language Groups</h3>

              <Card className="neo-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
                        <span className="text-lg">🇺🇸</span>
                      </div>
                      <div>
                        <h4 className="font-medium">English Speakers</h4>
                        <p className="text-sm text-muted-foreground">24 members • 3 new messages</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="neo-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center">
                        <span className="text-lg">🇪🇸</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Spanish Speakers</h4>
                        <p className="text-sm text-muted-foreground">8 members • 1 new message</p>
                      </div>
                    </div>
                    <Badge variant="outline">Join</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interest-based Chats */}
            <div className="space-y-3">
              <h3 className="font-medium text-muted-foreground">Interest Groups</h3>

              <Card className="neo-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                        <Dumbbell className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Fitness Enthusiasts</h4>
                        <p className="text-sm text-muted-foreground">12 members • 5 new messages</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Joined</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="neo-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/20 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Book Club</h4>
                        <p className="text-sm text-muted-foreground">15 members • 2 new messages</p>
                      </div>
                    </div>
                    <Badge variant="outline">Join</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <MobileNav />
    </div>
  )
}
