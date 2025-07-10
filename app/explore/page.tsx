"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Star,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  Dumbbell,
  Coffee,
  Shield,
  Zap,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"
import Link from "next/link"

export default function ExplorePage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [priceRange, setPriceRange] = useState([1000, 3000])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  const properties = [
    {
      id: 1,
      title: "Modern Studio in Downtown",
      location: "Downtown District",
      price: 1850,
      beds: 0,
      baths: 1,
      sqft: 450,
      rating: 4.8,
      reviews: 124,
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      amenities: ["Wifi", "Gym", "Parking"],
      verified: true,
      available: "Available Now",
    },
    {
      id: 2,
      title: "Cozy 1BR with Garden View",
      location: "Green Valley",
      price: 2200,
      beds: 1,
      baths: 1,
      sqft: 650,
      rating: 4.9,
      reviews: 89,
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      amenities: ["Garden", "Wifi", "Coffee"],
      verified: true,
      available: "Available Mar 15",
    },
    {
      id: 3,
      title: "Luxury 2BR Penthouse",
      location: "Skyline Heights",
      price: 3500,
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.7,
      reviews: 156,
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      amenities: ["Gym", "Parking", "Security"],
      verified: true,
      available: "Available Apr 1",
    },
    {
      id: 4,
      title: "Student-Friendly Shared Space",
      location: "University Area",
      price: 950,
      beds: 1,
      baths: 1,
      sqft: 400,
      rating: 4.6,
      reviews: 67,
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      amenities: ["Wifi", "Study Room", "Coffee"],
      verified: false,
      available: "Available Now",
    },
    {
      id: 5,
      title: "Family 3BR with Balcony",
      location: "Sunset Gardens",
      price: 2800,
      beds: 3,
      baths: 2,
      sqft: 1100,
      rating: 4.8,
      reviews: 203,
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      amenities: ["Balcony", "Parking", "Playground"],
      verified: true,
      available: "Available Now",
    },
    {
      id: 6,
      title: "Tech Hub Micro-Loft",
      location: "Innovation District",
      price: 1650,
      beds: 0,
      baths: 1,
      sqft: 380,
      rating: 4.5,
      reviews: 91,
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      amenities: ["High-Speed Wifi", "Co-working", "Tech Support"],
      verified: true,
      available: "Available Mar 20",
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const nextImage = (propertyId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (propertyId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: any } = {
      Wifi: Wifi,
      "High-Speed Wifi": Wifi,
      Gym: Dumbbell,
      Parking: Car,
      Coffee: Coffee,
      Security: Shield,
      Garden: "🌿",
      Balcony: "🏠",
      Playground: "🎮",
      "Study Room": "📚",
      "Co-working": "💻",
      "Tech Support": Zap,
    }

    const IconComponent = icons[amenity]
    if (typeof IconComponent === "string") {
      return <span className="text-sm">{IconComponent}</span>
    }
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <Wifi className="w-4 h-4" />
  }

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
    const matchesType =
      selectedType === "all" ||
      (selectedType === "studio" && property.beds === 0) ||
      (selectedType === "1br" && property.beds === 1) ||
      (selectedType === "2br" && property.beds === 2) ||
      (selectedType === "3br" && property.beds >= 3)

    return matchesSearch && matchesPrice && matchesType
  })

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

      {/* Desktop Navigation */}
      <div className="desktop-only">
        <DesktopNav />
      </div>

      {/* Main Content */}
      <div className="desktop-only ml-72">
        <DesktopExplore
          properties={filteredProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
          getAmenityIcon={getAmenityIcon}
        />
      </div>

      {/* Mobile Content */}
      <div className="mobile-only">
        <MobileExplore
          properties={filteredProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
          getAmenityIcon={getAmenityIcon}
        />
        <MobileNav />
      </div>
    </div>
  )
}

function DesktopExplore({
  properties,
  favorites,
  toggleFavorite,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  currentImageIndex,
  nextImage,
  prevImage,
  getAmenityIcon,
}: any) {
  return (
    <div className="relative z-10 p-8">
      {/* Header */}
      <div className="mb-8">
        <Card className="glass-card border-0 p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Explore Properties</h1>
                <p className="text-muted-foreground">Find your perfect home with BELLA's smart matching</p>
              </div>
              <Badge className="bg-primary/10 text-primary border-0 px-4 py-2">
                {properties.length} Properties Available
              </Badge>
            </div>

            {/* Search and Filters */}
            <div className="grid lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass-card border-0"
                />
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="glass-card border-0">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1br">1 Bedroom</SelectItem>
                  <SelectItem value="2br">2 Bedroom</SelectItem>
                  <SelectItem value="3br">3+ Bedroom</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium whitespace-nowrap">Price Range:</span>
                <div className="flex-1">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    min={500}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="glass-button border-0 bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Properties Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property: any) => (
          <Card
            key={property.id}
            className="glass-card border-0 group hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Image Carousel */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={property.images[currentImageIndex[property.id] || 0]}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Image Navigation */}
              {property.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 glass-button w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => prevImage(property.id, property.images.length)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 glass-button w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => nextImage(property.id, property.images.length)}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 glass-button w-8 h-8"
                onClick={() => toggleFavorite(property.id)}
              >
                <Heart
                  className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                />
              </Button>

              {/* Verified Badge */}
              {property.verified && (
                <Badge className="absolute top-3 left-3 bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}

              {/* Image Indicators */}
              {property.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                  {property.images.map((_: any, index: number) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === (currentImageIndex[property.id] || 0) ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Title and Location */}
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{property.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Price and Details */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    ${property.price.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{property.rating}</span>
                    <span>({property.reviews})</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds === 0 ? "Studio" : `${property.beds} bed`}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
                    <Badge key={index} variant="outline" className="glass-card border-0 text-xs">
                      {getAmenityIcon(amenity)}
                      <span className="ml-1">{amenity}</span>
                    </Badge>
                  ))}
                  {property.amenities.length > 3 && (
                    <Badge variant="outline" className="glass-card border-0 text-xs">
                      +{property.amenities.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between pt-2">
                  <Badge className="bg-green-100 text-green-700 border-0">{property.available}</Badge>
                  <Link href={`/property/${property.id}`}>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="glass-button border-0 bg-transparent">
          Load More Properties
        </Button>
      </div>
    </div>
  )
}

function MobileExplore({
  properties,
  favorites,
  toggleFavorite,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  currentImageIndex,
  nextImage,
  prevImage,
  getAmenityIcon,
}: any) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="relative z-10 pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 glass-card border-0 rounded-none">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Explore</h1>
              <p className="text-sm text-muted-foreground">{properties.length} properties available</p>
            </div>
            <Button variant="ghost" size="sm" className="glass-button" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass-card border-0"
            />
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="space-y-4 p-4 glass-card rounded-xl">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="glass-card border-0">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1br">1 Bedroom</SelectItem>
                  <SelectItem value="2br">2 Bedroom</SelectItem>
                  <SelectItem value="3br">3+ Bedroom</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <span className="text-sm font-medium">Price Range</span>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  min={500}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Properties List */}
        {properties.map((property: any) => (
          <Card key={property.id} className="glass-card border-0 overflow-hidden">
            {/* Image Carousel */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={property.images[currentImageIndex[property.id] || 0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {property.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 glass-button w-8 h-8"
                    onClick={() => prevImage(property.id, property.images.length)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 glass-button w-8 h-8"
                    onClick={() => nextImage(property.id, property.images.length)}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 glass-button w-8 h-8"
                onClick={() => toggleFavorite(property.id)}
              >
                <Heart
                  className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                />
              </Button>

              {/* Verified Badge */}
              {property.verified && (
                <Badge className="absolute top-3 left-3 bg-green-500 text-white border-0 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}

              {/* Image Indicators */}
              {property.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                  {property.images.map((_: any, index: number) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === (currentImageIndex[property.id] || 0) ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Title and Location */}
                <div>
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">
                    ${property.price.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{property.rating}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds === 0 ? "Studio" : `${property.beds} bed`}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {property.amenities.slice(0, 2).map((amenity: string, index: number) => (
                    <Badge key={index} variant="outline" className="glass-card border-0 text-xs">
                      {getAmenityIcon(amenity)}
                      <span className="ml-1">{amenity}</span>
                    </Badge>
                  ))}
                  {property.amenities.length > 2 && (
                    <Badge variant="outline" className="glass-card border-0 text-xs">
                      +{property.amenities.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Availability and Action */}
                <div className="flex items-center justify-between pt-2">
                  <Badge className="bg-green-100 text-green-700 border-0 text-xs">{property.available}</Badge>
                  <Link href={`/property/${property.id}`}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-xs"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="outline" className="glass-button border-0 bg-transparent">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  )
}
