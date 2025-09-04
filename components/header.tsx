"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut, Settings, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Our Mission", href: "/about#mission" },
        { name: "Our Team", href: "/about#team" },
        { name: "Doctrinal Basis", href: "/about#doctrinal-basis" },
        { name: "Annual Report", href: "/about#annual-report" },
        { name: "Governance", href: "/about#governance" },
        { name: "Uncover", href: "/about#uncover" },
        { name: "Jobs", href: "/about#jobs" },
        { name: "Contact Us", href: "/contact" },
      ]
    },
    { name: "Soul Care", href: "/soul-care" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    {
      name: "Support Us",
      href: "/support-us",
      dropdown: [
        { name: "Appeals", href: "/support-us#appeals" },
        { name: "Give", href: "/support-us#give" },
        { name: "Blog", href: "/support-us#blog" },
        { name: "Pray", href: "/support-us#pray" },
        { name: "Publications", href: "/support-us#publications" },
        { name: "Churches", href: "/support-us#churches" },
        { name: "Support Our Staff", href: "/support-us#staff" },
        { name: "Support a Relay Worker", href: "/support-us#relay-worker" },
      ]
    },
  ]

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md",
      isScrolled
        ? "bg-background/95 border-b border-border shadow-sm"
        : "bg-background/80 border-b border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center text-white text-sm font-bold group-hover:shadow-lg transition-all duration-300">
                C
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                CCMWA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href

              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "relative px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ease-in-out gap-1",
                          "hover:bg-muted/50 hover:text-primary",
                          isActive
                            ? "text-primary bg-muted/30"
                            : "text-foreground/80"
                        )}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="mt-2 border border-border/50 shadow-xl rounded-lg"
                      sideOffset={5}
                    >
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="px-3 py-2 text-sm"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ease-in-out",
                    "hover:bg-muted/50 hover:text-primary",
                    "before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300",
                    "hover:before:scale-x-100",
                    isActive
                      ? "text-primary bg-muted/30 before:scale-x-100"
                      : "text-foreground/80"
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 h-10 px-4 bg-muted/20 hover:bg-muted/40 border border-border/50 rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {user.firstName?.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium">{user.firstName}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-2 mt-2 border border-border/50 shadow-xl">
                  <div className="px-2 py-3 border-b border-border/50">
                    <p className="text-sm font-medium text-foreground">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuItem asChild className="mt-2 rounded-md">
                    <Link href="/member-portal" className="flex items-center gap-3 px-3 py-2">
                      <User className="h-4 w-4" />
                      <span>Member Portal</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md">
                    <Link href="/profile" className="flex items-center gap-3 px-3 py-2">
                      <Settings className="h-4 w-4" />
                      <span>Profile Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 text-destructive hover:text-destructive/90 hover:bg-destructive/10 rounded-md cursor-pointer"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="outline"
                className="flex items-center gap-2 h-10 px-6 bg-gradient-to-r from-primary to-primary/80 text-white border-0 rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium"
                asChild
              >
                <Link href="/login">
                  <User className="h-4 w-4" />
                  Member Login
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative h-10 w-10 rounded-full hover:bg-muted/50 transition-all duration-300"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className={cn(
                    "absolute h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out",
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out",
                    isMenuOpen ? "opacity-0" : "translate-y-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out",
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-card/50 backdrop-blur-sm border-t border-border/50">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href

              if (item.dropdown) {
                return (
                  <div key={item.name} className="space-y-2">
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02]",
                        "animate-in slide-in-from-top-2 fade-in",
                        isActive
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      )}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-6 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-base rounded-lg text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02]",
                    "animate-in slide-in-from-top-2 fade-in",
                    isActive
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}

            <div className="pt-4 border-t border-border/50">
              {user ? (
                <div className="space-y-3">
                  <div className="px-4 py-2 bg-muted/30 rounded-xl">
                    <p className="text-sm font-medium text-foreground">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Link
                    href="/member-portal"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    Member Portal
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-3 h-12 bg-transparent hover:bg-destructive/10 text-destructive border-destructive/30 rounded-xl"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  className="w-full flex items-center justify-center gap-3 h-12 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                  asChild
                >
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-5 w-5" />
                    Member Login
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
