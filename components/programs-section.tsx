import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart, ArrowRight } from "lucide-react"

export function ProgramsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover transformative programs designed to strengthen your faith journey and build meaningful connections
            within our community.
          </p>
        </div>

        <div className="space-y-24">
          {/* Bible Study Groups - Left aligned */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Bible Study Groups</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join weekly small group studies that dive deep into Scripture with fellow believers in an intimate,
                supportive environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  Weekly meetings
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  Small group format
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  All skill levels welcome
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  Interactive discussions
                </div>
              </div>
              <Button size="lg" className="flex items-center gap-2">
                Join a Group
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-20 w-20 text-primary mx-auto mb-4 opacity-20" />
                  <div className="text-sm text-muted-foreground">Growing in God's Word</div>
                </div>
              </div>
            </div>
          </div>

          {/* Discipleship Training - Right aligned */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-20 w-20 text-primary mx-auto mb-4 opacity-20" />
                <div className="text-sm text-muted-foreground">Equipping Leaders</div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ml-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Discipleship Training</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Comprehensive training programs designed to equip believers for ministry and spiritual leadership in
                their communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>12-week intensive</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Mentorship included</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Certificate program</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Practical ministry</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
              </div>
              <Button size="lg" className="flex items-center gap-2 ml-auto">
                Start Training
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Life Groups - Right aligned */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-20 w-20 text-primary mx-auto mb-4 opacity-20" />
                <div className="text-sm text-muted-foreground">Life Together</div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ml-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Life Groups</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with others through life-stage specific groups that provide support, fellowship, and spiritual
                growth opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Age-specific groups</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Social activities</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Prayer support</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Community service</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
              </div>
              <Button size="lg" className="flex items-center gap-2 ml-auto">
                Find Your Group
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/programs" className="flex items-center gap-2">
              Explore All Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
