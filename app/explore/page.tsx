"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Heart,
  Star,
  MapPin,
  Bed,
  Bath,
  Car,
  Wifi,
  Dumbbell,
  Coffee,
  Shield,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
  SlidersHorizontal,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { DesktopNav } from "@/components/desktop-nav"
import { TenantNav } from "@/components/tenant-nav"
import { GlowingCard } from "@/components/ui/glowing-card"
import { FloatingTooltip } from "@/components/ui/floating-tooltip"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([800, 3000])
  const [bedrooms, setBedrooms] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const { t } = useLanguage()

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      address: "123 Main St, Downtown",
      price: 2400,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      amenities: ["Wifi", "Gym", "Parking"],
      rating: 4.8,
      reviews: 24,
      verified: true,
      owner: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
        properties: 12,
      },
      features: ["Pet Friendly", "Furnished", "Balcony"],
    },
    {
      id: 2,
      title: "Cozy Studio Apartment",
      address: "456 Oak Ave, Midtown",
      price: 1800,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      amenities: ["Wifi", "Laundry", "Coffee"],
      rating: 4.6,
      reviews: 18,
      verified: true,
      owner: {
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.7,
        properties: 8,
      },
      features: ["Recently Renovated", "City View"],
    },
    {
      id: 3,
      title: "Luxury Penthouse Suite",
      address: "789 Hill St, Uptown",
      price: 4200,
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2100,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      amenities: ["Wifi", "Gym", "Pool", "Concierge"],
      rating: 4.9,
      reviews: 31,
      verified: true,
      owner: {
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5.0,
        properties: 5,
      },
      features: ["Rooftop Access", "Smart Home", "Premium Finishes"],
    },
    {
      id: 4,
      title: "Student Housing Complex",
      address: "321 University Blvd, Campus",
      price: 1200,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 500,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      amenities: ["Wifi", "Study Room", "Gym"],
      rating: 4.4,
      reviews: 42,
      verified: true,
      owner: {
        name: "Campus Living LLC",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.5,
        properties: 25,
      },
      features: ["Student Friendly", "All Utilities Included", "Study Spaces"],
    },
  ]

  const amenityIcons = {
    Wifi: Wifi,
    Gym: Dumbbell,
    Coffee: Coffee,
    Parking: Car,
    Pool: "🏊",
    Laundry: "🧺",
    Concierge: Shield,
    "Study Room": "📚",
  }

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  const PropertyCard = ({ property }: { property: (typeof properties)[0] }) => (
    <GlowingCard className="glass-card overflow-hidden group card-hover">
      <div className="relative">
        <img src={property.images[0] || "/placeholder.svg"} alt={property.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 flex gap-2">
          <FloatingTooltip content={favorites.includes(property.id) ? "Remove from favorites" : "Add to favorites"}>
            <Button
              size="icon"
              variant="ghost"
              className={`glass-button w-8 h-8 ${favorites.includes(property.id) ? "text-red-500" : "text-white"}`}
              onClick={() => toggleFavorite(property.id)}
            >
              <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-current" : ""}`} />
            </Button>
          </FloatingTooltip>
          {property.verified && (
            <Badge className="bg-green-500 text-white">
              <Shield className="w-3 h-3 mr-1" />
              {t("Verified")}
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge className="glass-card text-white font-bold">${property.price.toLocaleString()}/mo</Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{property.title}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {property.address}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            {property.bedrooms} {t("bed")}
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {property.bathrooms} {t("bath")}
          </div>
          <div className="text-muted-foreground">{property.sqft} sqft</div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{property.rating}</span>
            <span className="text-sm text-muted-foreground">({property.reviews})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {property.amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
            return (
              <Badge key={amenity} variant="outline" className="glass-button bg-transparent text-xs">
                {typeof Icon === "string" ? Icon : <Icon className="w-3 h-3 mr-1" />}
                {amenity}
              </Badge>
            )
          })}
          {property.amenities.length > 3 && (
            <Badge variant="outline" className="glass-button bg-transparent text-xs">
              +{property.amenities.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={property.owner.avatar || "/placeholder.svg"} />
              <AvatarFallback>{property.owner.name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{property.owner.name}</p>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {property.owner.rating}
              </div>
            </div>
          </div>
          <Button size="sm" className="glass-button">
            {t("View Details")}
          </Button>
        </div>
      </CardContent>
    </GlowingCard>
  )

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
                <h1 className="text-2xl font-bold text-gradient">{t("Explore Properties")}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="glass-button bg-transparent"
                >
                  {viewMode === "grid" ? <List className="w-4 h-4" /> : <Grid3X3 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="glass-button bg-transparent lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {t("Filters")}
                </Button>
              </div>
            </div>
          </header>

          <div className="flex">
            {/* Filters Sidebar */}
            <div
              className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-80 glass-surface border-r border-white/10 p-6 space-y-6 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar`}
            >
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{t("Search & Filter")}</h3>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder={t("Search by location, property name...")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 glass-inset focus-ring"
                  />
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t("Price Range")}</label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000}
                      min={500}
                      step={100}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("Bedrooms")}</label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger className="glass-inset focus-ring">
                      <SelectValue placeholder={t("Any")} />
                    </SelectTrigger>
                    <SelectContent className="glass-card">
                      <SelectItem value="any">{t("Any")}</SelectItem>
                      <SelectItem value="studio">{t("Studio")}</SelectItem>
                      <SelectItem value="1">1 {t("Bedroom")}</SelectItem>
                      <SelectItem value="2">2 {t("Bedrooms")}</SelectItem>
                      <SelectItem value="3">3+ {t("Bedrooms")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("Property Type")}</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="glass-inset focus-ring">
                      <SelectValue placeholder={t("All Types")} />
                    </SelectTrigger>
                    <SelectContent className="glass-card">
                      <SelectItem value="all">{t("All Types")}</SelectItem>
                      <SelectItem value="apartment">{t("Apartment")}</SelectItem>
                      <SelectItem value="house">{t("House")}</SelectItem>
                      <SelectItem value="condo">{t("Condo")}</SelectItem>
                      <SelectItem value="studio">{t("Studio")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t("Amenities")}</label>
                  <div className="space-y-2">
                    {["Wifi", "Gym", "Parking", "Pool", "Laundry", "Pet Friendly"].map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox id={amenity} className="glass-button" />
                        <label htmlFor={amenity} className="text-sm">
                          {t(amenity)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button variant="outline" className="w-full glass-button bg-transparent">
                  {t("Clear All Filters")}
                </Button>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="flex-1 p-6 space-y-6 relative z-10">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {properties.length} {t("Properties Found")}
                  </h2>
                  <p className="text-muted-foreground">{t("Showing results for your search criteria")}</p>
                </div>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-48 glass-inset focus-ring">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass-card">
                    <SelectItem value="recommended">{t("Recommended")}</SelectItem>
                    <SelectItem value="price-low">{t("Price: Low to High")}</SelectItem>
                    <SelectItem value="price-high">{t("Price: High to Low")}</SelectItem>
                    <SelectItem value="newest">{t("Newest First")}</SelectItem>
                    <SelectItem value="rating">{t("Highest Rated")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Properties */}
              <div
                className={`grid gap-6 ${
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                }`}
              >
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-8">
                <Button variant="outline" size="icon" className="glass-button bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "outline"}
                      size="icon"
                      className={page === 1 ? "glass-button" : "glass-button bg-transparent"}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button variant="outline" size="icon" className="glass-button bg-transparent">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <TenantNav />
      </div>
    </div>
  )
}
