"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Briefcase, Calendar, Star, StarOff, Filter, X, Grid, List, Euro, Sparkles, Map, Bot, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { JobDetailModal } from "@/components/job-detail-modal"
import { FixedAIAssistant } from "@/components/fixed-ai-assistant"

// Mock job data
const jobsData = [
  {
    id: 1,
    title: "House Cleaner",
    company: "Shiny Homes",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Tehran",
    remote: false,
    salary: "60,000–90,000 Toman/hour",
    type: "Full-time",
    postedDate: "3 days ago",
    category: ["Cleaning", "Deep Clean", "Disinfection"],
  },
  {
    id: 2,
    title: "Plumber",
    company: "PipeFix",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Karaj",
    remote: false,
    salary: "100,000–150,000 Toman/hour",
    type: "Full-time",
    postedDate: "1 week ago",
    category: ["Plumbing", "Leak Fix", "Water Pipes"],
  },
  {
    id: 3,
    title: "Electrician",
    company: "SafeWires",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Shiraz",
    remote: false,
    salary: "120,000–180,000 Toman/hour",
    type: "Full-time",
    postedDate: "2 days ago",
    category: ["Electrical", "Wiring", "Repair"],
  },
  {
    id: 4,
    title: "Gardener",
    company: "Green Leaf",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Tabriz",
    remote: false,
    salary: "80,000–110,000 Toman/hour",
    type: "Full-time",
    postedDate: "5 days ago",
    category: ["Gardening", "Landscaping", "Lawn Care"],
  },
  {
    id: 5,
    title: "Painter",
    company: "ColorPro",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Mashhad",
    remote: false,
    salary: "90,000–130,000 Toman/hour",
    type: "Full-time",
    postedDate: "1 day ago",
    category: ["Painting", "Interior", "Walls"],
  },
  {
    id: 6,
    title: "AC Repair Technician",
    company: "CoolFix",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Tehran",
    remote: false,
    salary: "150,000–200,000 Toman/hour",
    type: "Full-time",
    postedDate: "4 days ago",
    category: ["AC", "Installation", "Cooling"],
  },
  {
    id: 7,
    title: "Pest Control Expert",
    company: "BugAway",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Qom",
    remote: false,
    salary: "110,000–140,000 Toman/hour",
    type: "Full-time",
    postedDate: "2 weeks ago",
    category: ["Pest Control", "Insects", "Rodents"],
  },
  {
    id: 8,
    title: "Babysitter",
    company: "CareNest",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Isfahan",
    remote: false,
    salary: "50,000–80,000 Toman/hour",
    type: "Part-time",
    postedDate: "3 days ago",
    category: ["Childcare", "Babysitting", "Evening Care"],
  },
];


// Location options
const locations = ["Tehran", "Karaj", "Shiraz", "Mashhad", "Tabriz", "Isfahan", "Qom", "All Locations"];

// Job types
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

// Job categories
const categories = [
  "Cleaning",
  "Plumbing",
  "Electrical",
  "Gardening",
  "Painting",
  "AC",
  "Pest Control",
  "Childcare",
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [salaryRange, setSalaryRange] = useState([40000, 90000])
  const [remoteOnly, setRemoteOnly] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favoriteJobs, setFavoriteJobs] = useState<number[]>([])
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState(jobsData)
  const [isLoading, setIsLoading] = useState(true)


  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isJobDetailOpen, setIsJobDetailOpen] = useState(false)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter jobs based on selected filters
  useEffect(() => {
    let filtered = jobsData

    // Search term filter
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.category.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Location filter
    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter((job) => job.location === selectedLocation)
    }

    // Job type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((job) => selectedTypes.includes(job.type))
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((job) => job.category.some((cat) => selectedCategories.includes(cat)))
    }

    // Remote only filter
    if (remoteOnly) {
      filtered = filtered.filter((job) => job.remote)
    }

    // Salary range filter
    filtered = filtered.filter((job) => {
      const minSalary = Number.parseInt(job.salary.split("–")[0].replace(/[^0-9]/g, ""))
      return minSalary >= salaryRange[0] && minSalary <= salaryRange[1]
    })

    setFilteredJobs(filtered)
  }, [searchTerm, selectedLocation, selectedTypes, selectedCategories, remoteOnly, salaryRange])

  const toggleJobType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleFavorite = (id: number) => {
    setFavoriteJobs((prev) => (prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]))
  }

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedLocation("All Locations")
    setSelectedTypes([])
    setSelectedCategories([])
    setSalaryRange([40000, 90000])
    setRemoteOnly(false)
  }

  // Format salary for display
  const formatSalary = (value: number) => {
    return `€${Math.round(value / 1000)}k`
  }

  const handleJobClick = (job: any) => {
    setSelectedJob(job)
    setIsJobDetailOpen(true)
  }

  // Skeleton loader for job cards
  const JobCardSkeleton = () => (
    <Card className="bg-card/50 p-3 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="w-2/3 h-6 bg-muted/70 rounded animate-pulse"></div>
          <div className="w-8 h-8 bg-muted/70 rounded-full animate-pulse"></div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 bg-muted/70 rounded-full animate-pulse"></div>
          <div className="w-1/3 h-4 bg-muted/70 rounded animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-muted/70 rounded animate-pulse"></div>
            <div className="w-1/2 h-4 bg-muted/70 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-muted/70 rounded animate-pulse"></div>
            <div className="w-1/3 h-4 bg-muted/70 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-muted/70 rounded animate-pulse"></div>
            <div className="w-2/5 h-4 bg-muted/70 rounded animate-pulse"></div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-2">
            <div className="w-16 h-6 bg-muted/70 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-muted/70 rounded animate-pulse"></div>
          </div>
          <div className="w-20 h-8 bg-muted/70 rounded animate-pulse"></div>
        </div>
      </CardFooter>
    </Card>
  )


  return (
    <div className="min-h-screen pt-20 md:pt-24 max-w-7xl mx-auto ">
      {/* Header */}


      <div className=" mx-auto px-4 md:px-0 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <Card className="sticky top-24 bg-card/50 backdrop-blur-sm border border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
                    Reset
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Location Filter */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Remote Only Toggle */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="remote-toggle" className="text-sm font-medium">
                    Remote Only
                  </Label>
                  <Switch id="remote-toggle" checked={remoteOnly} onCheckedChange={setRemoteOnly} />
                </div>

                <Separator />

                {/* Job Type Filter */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Job Type</Label>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleJobType(type)}
                        />
                        <Label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Salary Range Filter */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Salary Range</Label>
                    <span className="text-xs text-muted-foreground">
                      {formatSalary(salaryRange[0])} - {formatSalary(salaryRange[1])}
                    </span>
                  </div>
                  <Slider
                    defaultValue={salaryRange}
                    min={30000}
                    max={100000}
                    step={5000}
                    value={salaryRange}
                    onValueChange={setSalaryRange}
                    className="mt-2"
                  />
                </div>

                <Separator />

                {/* Categories Filter */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Categories</Label>
                  <ScrollArea className="h-40">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`category-${category}`} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed left-0 top-0 bottom-0 w-3/4 max-w-xs bg-background border-r border-border p-4 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={() => setIsMobileFilterOpen(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Location Filter */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Remote Only Toggle */}
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mobile-remote-toggle" className="text-sm font-medium">
                        Remote Only
                      </Label>
                      <Switch id="mobile-remote-toggle" checked={remoteOnly} onCheckedChange={setRemoteOnly} />
                    </div>

                    <Separator />

                    {/* Job Type Filter */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Job Type</Label>
                      <div className="space-y-2">
                        {jobTypes.map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={`mobile-type-${type}`}
                              checked={selectedTypes.includes(type)}
                              onCheckedChange={() => toggleJobType(type)}
                            />
                            <Label htmlFor={`mobile-type-${type}`} className="text-sm">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Salary Range Filter */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium">Salary Range</Label>
                        <span className="text-xs text-muted-foreground">
                          {formatSalary(salaryRange[0])} - {formatSalary(salaryRange[1])}
                        </span>
                      </div>
                      <Slider
                        defaultValue={salaryRange}
                        min={30000}
                        max={100000}
                        step={5000}
                        value={salaryRange}
                        onValueChange={setSalaryRange}
                        className="mt-2"
                      />
                    </div>

                    <Separator />

                    {/* Categories Filter */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Categories</Label>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`mobile-category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                            />
                            <Label htmlFor={`mobile-category-${category}`} className="text-sm">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-4">
                      <Button onClick={resetFilters} variant="outline" className="flex-1">
                        Reset
                      </Button>
                      <Button onClick={() => setIsMobileFilterOpen(false)} className="flex-1">
                        Apply
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and View Controls */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search jobs, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-card/50 backdrop-blur-sm border-border/50"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="h-10 w-10"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="h-10 w-10"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedTypes.length > 0 ||
                selectedCategories.length > 0 ||
                selectedLocation !== "All Locations" ||
                remoteOnly) && (
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation !== "All Locations" && (
                      <Badge variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                        {selectedLocation}
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedLocation("All Locations")} />
                      </Badge>
                    )}
                    {remoteOnly && (
                      <Badge variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                        Remote Only
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setRemoteOnly(false)} />
                      </Badge>
                    )}
                    {selectedTypes.map((type) => (
                      <Badge key={type} variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                        {type}
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => toggleJobType(type)} />
                      </Badge>
                    ))}
                    {selectedCategories.map((category) => (
                      <Badge key={category} variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                        {category}
                        <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => toggleCategory(category)} />
                      </Badge>
                    ))}
                    <Button variant="ghost" size="sm" onClick={resetFilters} className="h-6 text-xs">
                      Clear All
                    </Button>
                  </div>
                )}
            </div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
              </p>
            </div>

            {/* Job Cards */}
            {isLoading ? (
              <div
                className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                  }`}
              >
                {[...Array(6)].map((_, index) => (
                  <JobCardSkeleton key={index} />
                ))}
              </div>
            ) : filteredJobs.length > 0 ? (
              <div
                className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                  }`}
              >
                <AnimatePresence>
                  {filteredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card
                        className={`bg-card/50 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 ${viewMode === "list" ? "flex flex-col md:flex-row md:items-center" : ""
                          }`}
                      >
                        <div className={viewMode === "list" ? "flex-1" : ""}>
                          <CardHeader className={`pb-2 ${viewMode === "list" ? "md:py-4" : ""}`}>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => toggleFavorite(job.id)}
                              >
                                {favoriteJobs.includes(job.id) ? (
                                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ) : (
                                  <StarOff className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className={`pb-2 ${viewMode === "list" ? "md:py-4" : ""}`}>
                            <div className="flex items-center justify-between space-x-2 mb-3">
                              <div className="flex items-center gap-2">

                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
                                  <AvatarFallback>{job.company[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium text-xs line-clamp-1">{job.company}</span>
                              </div>

                              <div className="ml-auto">
                                <div className="relative rounded-2xl justify-center flex items-center gap-1 border dark:text-purple-400 font-medium text-purple-500 bg-background text-xs px-3 py-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                                  <Sparkles size={15} />
                                  <p className="text-primary text-nowrap font-bold">%87</p>
                                  AI Matched
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>
                                  {job.location} {job.remote && "(Remote available)"}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Euro className="w-4 h-4" />
                                <span>{job.salary}</span>
                              </div>
                              <div className="flex justify-between items-center space-x-2 text-sm text-muted-foreground">

                                <Calendar className="w-4 h-4" />
                                <span>Posted {job.postedDate}</span>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                        <CardFooter className={`${viewMode === "list" ? "md:border-l md:pl-6 md:pr-4 md:py-4" : ""}`}>
                          <div
                            className={`flex ${viewMode === "list"
                              ? "flex-col md:flex-row md:items-center md:space-x-4"
                              : "justify-between items-center w-full"
                              }`}
                          >
                            <div className="flex flex-wrap gap-2 mb-3 md:mb-0">
                              {job.category.slice(0, 2).map((cat) => (
                                <Badge key={cat} variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                                  {cat}
                                </Badge>
                              ))}
                              {job.category.length > 2 && <Badge variant="outline">+{job.category.length - 2}</Badge>}
                            </div>
                            <Button
                              onClick={() => {
                                handleJobClick(job)
                              }}
                              className="text-white bg-gradient-to-r px-5 h-8 from-primary to-primary/50"
                            >
                              Apply
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search term to find more jobs
                </p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="w-full max-w-xs">
                  Load More Jobs
                </Button>
              </div>
            )}

            {/* AI Chat Fixed Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="fixed bottom-6 right-6 z-40"
            >
              <div className="flex flex-col gap-3">
                <Button className="size-14 shadow-2xl rounded-full bg-gradient-to-r from-primary to-primary/50 ml-3 mb-5 transition-all duration-200 group">
                  <Link href={'/map'}>
                    <Map className="stroke-white" />
                  </Link>
                </Button>

                <FixedAIAssistant />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <JobDetailModal job={selectedJob} isOpen={isJobDetailOpen} onClose={() => setIsJobDetailOpen(false)} />

    </div>
  )
}


