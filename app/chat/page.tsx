"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Send,
  Mic,
  MicOff,
  Paperclip,
  MoreVertical,
  ArrowLeft,
  Phone,
  Video,
  User,
  Clock,
  CheckCircle2,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"
import { BellaAvatar } from "@/components/bella-avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "bella"
  timestamp: Date
  type: "text" | "quick-reply" | "confirmation" | "image"
  status?: "sending" | "sent" | "delivered" | "read"
  quickReplies?: string[]
  confirmationData?: {
    title: string
    description: string
    amount?: string
    action: string
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi John! I'm BELLA, your AI concierge. How can I help you today?",
      sender: "bella",
      timestamp: new Date(Date.now() - 300000),
      type: "quick-reply",
      quickReplies: ["Pay rent", "Request repair", "Ask about events", "General question"],
    },
    {
      id: "2",
      content: "I need to report a maintenance issue",
      sender: "user",
      timestamp: new Date(Date.now() - 240000),
      type: "text",
      status: "read",
    },
    {
      id: "3",
      content: "I'd be happy to help you with that! What type of maintenance issue are you experiencing?",
      sender: "bella",
      timestamp: new Date(Date.now() - 180000),
      type: "quick-reply",
      quickReplies: ["Plumbing", "Electrical", "HVAC", "Appliance", "Other"],
    },
    {
      id: "4",
      content: "Plumbing",
      sender: "user",
      timestamp: new Date(Date.now() - 120000),
      type: "text",
      status: "read",
    },
    {
      id: "5",
      content:
        "Got it! Can you describe the plumbing issue in more detail? For example, is it a leak, clog, or something else?",
      sender: "bella",
      timestamp: new Date(Date.now() - 60000),
      type: "text",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
      type: "text",
      status: "sending",
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate BELLA response
    setTimeout(() => {
      setIsTyping(false)
      const bellaResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I understand you're having a plumbing issue. I'll create a maintenance request for you right away. Would you like to schedule a preferred time for the repair?",
        sender: "bella",
        timestamp: new Date(),
        type: "confirmation",
        confirmationData: {
          title: "Maintenance Request",
          description: "Plumbing issue reported",
          action: "Schedule Repair",
        },
      }
      setMessages((prev) => [...prev, bellaResponse])
    }, 2000)
  }

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: reply,
      sender: "user",
      timestamp: new Date(),
      type: "text",
      status: "sending",
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate response based on quick reply
    setTimeout(() => {
      setIsTyping(false)
      let response = "Thanks for that information! How else can I help you?"

      if (reply === "Pay rent") {
        response =
          "I can help you pay your rent. Your current balance is $1,850 due on March 31st. Would you like to proceed with payment?"
      } else if (reply === "Request repair") {
        response = "I'll help you submit a maintenance request. What type of issue are you experiencing?"
      }

      const bellaResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "bella",
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, bellaResponse])
    }, 1500)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Implement voice recording logic
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "sending":
        return <Clock className="w-3 h-3 text-muted-foreground" />
      case "sent":
      case "delivered":
        return <CheckCircle2 className="w-3 h-3 text-muted-foreground" />
      case "read":
        return <CheckCircle2 className="w-3 h-3 text-primary" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="neo-button">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Avatar className="w-10 h-10 neo-card">
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <BellaAvatar className="w-6 h-6" />
              </div>
            </Avatar>
            <div>
              <h1 className="font-semibold">BELLA</h1>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="neo-button">
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="neo-button">
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="neo-button">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <Avatar className="w-8 h-8 neo-card">
                {message.sender === "bella" ? (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <BellaAvatar className="w-4 h-4" />
                  </div>
                ) : (
                  <>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </>
                )}
              </Avatar>

              <div className={`space-y-1 ${message.sender === "user" ? "items-end" : "items-start"} flex flex-col`}>
                <Card className={`neo-card ${message.sender === "user" ? "bg-primary text-primary-foreground" : ""}`}>
                  <CardContent className="p-3">
                    <p className="text-sm">{message.content}</p>

                    {message.type === "quick-reply" && message.quickReplies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs neo-button"
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}

                    {message.type === "confirmation" && message.confirmationData && (
                      <div className="mt-3 p-3 rounded-lg bg-muted/50 neo-inset">
                        <h4 className="font-medium text-sm">{message.confirmationData.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{message.confirmationData.description}</p>
                        {message.confirmationData.amount && (
                          <p className="text-sm font-semibold mt-2">{message.confirmationData.amount}</p>
                        )}
                        <Button size="sm" className="mt-3 neo-button">
                          {message.confirmationData.action}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div
                  className={`flex items-center gap-1 text-xs text-muted-foreground ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <span>{formatTime(message.timestamp)}</span>
                  {message.sender === "user" && getStatusIcon(message.status)}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2 max-w-[80%]">
              <Avatar className="w-8 h-8 neo-card">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <BellaAvatar className="w-4 h-4" />
                </div>
              </Avatar>
              <Card className="neo-card">
                <CardContent className="p-3">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">BELLA is typing...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-lg border-t border-border/50 p-4 pb-20">
        <div className="flex items-end gap-2">
          <Button variant="ghost" size="icon" className="neo-button">
            <Paperclip className="w-5 h-5" />
          </Button>

          <div className="flex-1 relative">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="neo-inset pr-12"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 neo-button"
              disabled={!newMessage.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`neo-button ${isRecording ? "bg-red-500 text-white" : ""}`}
            onClick={toggleRecording}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </Button>
        </div>

        {/* Offline indicator */}
        <div className="mt-2 text-center">
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
            Connected
          </Badge>
        </div>
      </div>

      <MobileNav />
    </div>
  )
}
