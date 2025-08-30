"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { Calendar, BookOpen, Heart, Download, Users, MessageCircle } from "lucide-react"

export default function MemberPortalPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const quickActions = [
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "View and register for upcoming programs and events",
      href: "/events",
    },
    {
      icon: BookOpen,
      title: "My Programs",
      description: "Track your progress in current discipleship programs",
      href: "/my-programs",
    },
    {
      icon: Heart,
      title: "Schedule Soul Care",
      description: "Book an appointment with our counseling team",
      href: "/soul-care",
    },
    {
      icon: Download,
      title: "Resources",
      description: "Access study materials and downloadable content",
      href: "/resources",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Find and join a small group in your area",
      href: "/programs",
    },
    {
      icon: MessageCircle,
      title: "Prayer Journal",
      description: "Keep track of your prayers and God's faithfulness",
      href: "/prayer-journal",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Welcome back, {user.firstName}!</h1>
            <p className="text-lg text-muted-foreground">
              Continue your faith journey and stay connected with our community.
            </p>
          </div>

          {/* Dashboard Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Member Since</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">
                  {new Date(user.memberSince).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Active Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">{user.programs.length}</p>
                <div className="space-y-1">
                  {user.programs.map((program, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {program}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Prayer Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">{user.prayerRequests}</p>
                <p className="text-sm text-muted-foreground">Active requests</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href={action.href}>Access</a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <CardDescription>Your latest interactions with our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="font-medium">Joined "Life Groups" program</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="font-medium">Submitted prayer request</p>
                    <p className="text-sm text-muted-foreground">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div>
                    <p className="font-medium">Registered for "Foundations of Faith"</p>
                    <p className="text-sm text-muted-foreground">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
