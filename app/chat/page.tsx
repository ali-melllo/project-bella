"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send,
  Mic,
  Smile,
  Paperclip,
  Home,
  Building2,
  Briefcase,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { TypingAnimation } from "@/components/magicui/text-animation"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"

type Message = {
  role: "assistant" | "user";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])

  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const sampleQuestions = [
    "How do I apply for housing benefit?",
    "Where can I find a job in the Netherlands?",
    "What documents do I need for BSN registration?",
    "How do I open a Dutch bank account?",
  ]

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const newMessage = {
      role: "user" as const,
      content: inputValue,
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/prompt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputValue, currentPage: "chat" }),
      });
      const data = await response.json();
      const formattedBotResponse = {
        role: "assistant" as const,
        content:
          data.data.response,
      }

      setMessages((prev) => [...prev, formattedBotResponse])
      setIsTyping(false)
    } catch (err) {
      setIsTyping(false)
    }
  }

  return (
    <div className="min-h-screen  flex flex-col">

      {/* Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 px-4" ref={scrollAreaRef}>
          <div className="md:max-w-4xl mx-auto pt-16 md:pt-20 pb-48 py-6 space-y-6">
            {/* Welcome Message */}
            {messages.length === 0 &&
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 md:mt-32"
              >
                <div className="size-20 bg-background rounded-3xl  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <radialGradient
                      id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                      cx="11.087"
                      cy="7.022"
                      r="47.612"
                      gradientTransform="matrix(1 0 0 -1 0 50)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#1292ff"></stop>
                      <stop offset=".079" stopColor="#2982ff"></stop>
                      <stop offset=".23" stopColor="#4e69ff"></stop>
                      <stop offset=".351" stopColor="#6559ff"></stop>
                      <stop offset=".428" stopColor="#6d53ff"></stop>
                      <stop offset=".754" stopColor="#df47aa"></stop>
                      <stop offset=".946" stopColor="#ff6257"></stop>
                    </radialGradient>
                    <path
                      fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                      d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
                    />
                    <path
                      d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                      opacity=".05"
                    />
                    <path
                      d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                      opacity=".07"
                    />
                    <path
                      fill="#ffffff"
                      d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold mb-2">Welcome to Bella AI</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  I'm here to help you navigate life in the Netherlands. Ask me anything about housing, jobs, government
                  services, or integration.
                </p>

                {/* Sample Questions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl  mx-auto">
                  {sampleQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setInputValue(question)}
                      className="p-3 text-left font-bold bg-muted/50 hover:bg-muted/80 rounded-lg border border-border/50 hover:border-border transition-all duration-200 text-sm"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </motion.div>}

            {/* Messages */}

            <div className="space-y-4 pb-32 pt-16">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <Card
                    className={cn(
                      "max-w-[80%] p-4 shadow-md rounded-[35px] font-bold",
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-tr-none text-white border-0"
                        : "bg-background rounded-tl-none [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                    )}
                  >
                    {(index === messages.length - 1 && message.role === "assistant") ?
                      <TypingAnimation duration={20} className="text-sm leading-relaxed">
                        {message.content}
                      </TypingAnimation>
                      :
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    }
                  </Card>
                </motion.div>
              ))}

              {/* Enhanced Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-center w-full "
                  >
                    <div><AnimatedShinyText className="font-semibold">Thinking ...</AnimatedShinyText></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollArea>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-2 md:inset-x-1/4 bottom-2 md:bottom-4 backdrop-blur-md rounded-3xl pl-0 md:pl-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] flex p-4"
        >
          <div className=" mx-auto w-full">
            <div className="flex items-start space-x-3">
              {/* Quick Actions */}
              <div className="hidden md:flex flex-col space-y-2">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Paperclip className="w-4 h-4" />
                </Button>
              </div>

              {/* Input Field */}
              <div className="flex-1 relative">
                <div className="relative">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything about life in the Netherlands..."
                    className="pr-20 w-full py-6 text-base rounded-2xl border-border/50 bg-background backdrop-blur-sm !outline-none focus:bg-background transition-all duration-200"
                  />

                  {/* Input Actions */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Smile className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Quick Service Buttons */}
                <div className="md:flex hidden flex-wrap gap-2 mt-3">
                  {[
                    { icon: Home, label: "Housing", color: "from-teal-500 to-teal-600" },
                    { icon: Building2, label: "Government", color: "from-blue-500 to-blue-600" },
                    { icon: Briefcase, label: "Jobs", color: "from-purple-500 to-purple-600" },
                    { icon: Users, label: "Social", color: "from-indigo-500 to-indigo-600" },
                  ].map((service, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:scale-105 transition-transform duration-200 bg-muted/50 hover:bg-muted/80"
                      onClick={() => setInputValue(`Tell me about ${service.label.toLowerCase()} services`)}
                    >
                      <service.icon className="w-3 h-3 mr-1" />
                      {service.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Send Button */}
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="size-6 stroke-white" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
