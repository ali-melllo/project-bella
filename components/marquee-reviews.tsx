"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Review {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

interface MarqueeReviewsProps {
  testimonials: Review[]
  className?: string
}

export function MarqueeReviews({ testimonials, className }: MarqueeReviewsProps) {
  return (
    <section className={cn("py-12 bg-muted/10 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-lg font-semibold text-muted-foreground">
          Trusted by thousands of users worldwide
        </h3>
      </div>

      <div className="relative">
        <div className="flex animate-marquee space-x-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={index} className="neo-card border-0 w-80 flex-shrink-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
