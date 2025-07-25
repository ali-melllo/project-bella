"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Bot,
  ChevronDown,
  Globe,
  LogIn,
  Menu,
  Moon,
  Sun,
  User,
  Home,
  Briefcase,
  Building2,
  Users,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { setUser } from "@/lib/store/slices/userSlice"
import { useDispatch } from "react-redux"

// Language options
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

// Navigation items
const navigationItems = [
  //   { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Housing", href: "/houses", icon: Building2 },
  { name: "Chat", href: "/chat", icon: Users },
  { name: "Browse", href: "/explore", icon: HelpCircle },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [token, setToken] = useState<string>("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false) // For demo purposes
  const { theme, setTheme } = useTheme()

  const user = useSelector((state: RootState) => state.user || []);
  const dispatch = useDispatch();
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    if (user.email && user.fullName) {
      setIsAuthenticated(true);
      setEmail(user.email);
      setFullName(user.fullName);
    }
  }, [user])


  const handleLogOut = () => {
    localStorage.removeItem("user")
    dispatch(setUser({
      id: "",
      fullName: "",
      email: "",
      avatar: ""
    }));
    setIsAuthenticated(false)
    setFullName("")
    setEmail("")
    setToken("")
    router.replace("/")
  }


  if (!mounted) return null

  console.log(user)
  return (
    <motion.header
      className={`fixed top-0 z-[1000] left-0 right-0   ${isScrolled ? "bg-transparent" : "backdrop-blur-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "}  transition-all duration-300 ease-in-out`}
    >
      <motion.div
        className={cn(
          "mx-auto md:px-6 !py-2 transition-all md:py-5 duration-500 ease-in-out",
          isScrolled
            ? "max-w-7xl md:mt-2 bg-background/95 backdrop-blur-lg shadow-lg border border-border/50 rounded-2xl"
            : "max-w-full",
        )}

        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group gap-2">
            <motion.div
              className="size-14 bg-transparent p-1 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                width={50}
                height={100}
                className="size-full"
                alt={'bella'}
                src={'/bella.avif'}
              />
            </motion.div>
            <span className="md:text-2xl font-bold text-muted-foreground">
              Bella AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-base text-muted-foreground hover:text-foreground  ${path === item.href ? "bg-muted hover:bg-muted" : "hover:bg-muted/50"} transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center justify-end">
            {/* Language Selector */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="hidden bg-background px-3 hover:bg-muted [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] !outline-none md:flex items-center space-x-1">
                  <Globe className="w-5 h-5 stroke-foreground" />
                  <ChevronDown className="w-4 h-4 stroke-foreground opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mr-5 mt-7">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang)}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {currentLanguage.code === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"
                      />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* Theme Toggle */}
            <Button
              size="default"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative hidden md:block mx-1 bg-transparent hover:bg-transparent shadow-none opacity-70 hover:opacity-100 transition-all duration-200"
            >
              <Sun
                className={cn(
                  "w-5 h-5 stroke-foreground absolute transition-all",
                  theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
                )}
              />
              <Moon
                className={cn(
                  "w-5 h-5 stroke-foreground transition-all",
                  theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
                )}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Authentication */}
            {isAuthenticated ? (
              <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex flex-col space-y-0.5">
                      <p className="text-sm font-medium">{fullName}</p>
                      <p className="text-xs text-muted-foreground">{email}</p>
                    </div>

                    <Avatar className="size-10 cursor-pointer">
                      <AvatarFallback className="bg-gradient-to-br from-primary/75 to-primary text-white">
                        {fullName.charAt(0)}{fullName.charAt(1)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-5">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-0.5">
                      <p className="text-sm font-medium">{fullName}</p>
                      <p className="text-xs text-muted-foreground">{email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogOut}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                // onClick={toggleAuth}
                href="/auth/login"
                className="bg-gradient-to-r flex items-center gap-2 rounded-lg px-3 py-2 from-orange-600 to-pink-600 text-white text-sm"
              >
                <LogIn className="w-4 h-4 mr-1" />
                Sign In
              </Link>
            )}

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] px-0 py-5">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Bella AI
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-2 px-2">
                  {navigationItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                        <span>{item.name}</span>
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-4 mt-4 border-t border-border">
                    {/* <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-sm text-muted-foreground">Language</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                            <span className="text-base">{currentLanguage.flag}</span>
                            <span className="text-sm">{currentLanguage.name}</span>
                            <ChevronDown className="w-4 h-4 opacity-50" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          {languages.map((lang) => (
                            <DropdownMenuItem
                              key={lang.code}
                              onClick={() => setCurrentLanguage(lang)}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <span className="text-base">{lang.flag}</span>
                              <span>{lang.name}</span>
                              {currentLanguage.code === lang.code && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"
                                />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div> */}

                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-sm text-muted-foreground">Theme</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="relative"
                      >
                        {theme === "dark" ? (
                          <div className="flex items-center">
                            <Moon className="w-4 h-4 mr-1" />
                            <span>Dark</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Sun className="w-4 h-4 mr-1" />
                            <span>Light</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border">
                    {isAuthenticated ? (
                      <div className="px-4 py-2 space-y-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                              {fullName.charAt(0)}{fullName.charAt(1)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{fullName}</p>
                            <p className="text-xs text-muted-foreground">{email}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full flex items-center justify-center"
                          onClick={handleLogOut}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign out
                        </Button>
                      </div>
                    ) : (
                      <div className="px-4 py-2">
                        <Button
                          onClick={() => router.push("/auth/login")}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        >
                          <LogIn className="w-4 h-4 mr-2" />
                          Sign In
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
