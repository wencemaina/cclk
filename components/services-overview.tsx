import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Calendar, ArrowRight } from "lucide-react"

export function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Can Support You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeking spiritual growth, emotional healing, or community connection, we're here to walk
            alongside you.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Discipleship Programs</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Small groups, mentorship, and Bible studies designed to deepen your faith and build lasting
                relationships.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  Weekly Small Groups
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  One-on-One Mentorship
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  Bible Study Courses
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  Leadership Development
                </div>
              </div>
              <Button size="lg" className="flex items-center gap-2">
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-20 w-20 text-primary mx-auto mb-4 opacity-20" />
                  <div className="text-sm text-muted-foreground">Growing Together in Faith</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-20 w-20 text-primary mx-auto mb-4 opacity-20" />
                <div className="text-sm text-muted-foreground">Healing & Restoration</div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ml-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Soul Care Services</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Professional counseling, spiritual direction, and crisis support in a faith-centered environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Individual Counseling</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Spiritual Direction</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Crisis Support</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Grief & Loss Care</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
              </div>
              <Button size="lg" className="flex items-center gap-2 ml-auto">
                Get Support
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-20 w-20 text-primary mx-auto mb-4 opacity-20" />
                <div className="text-sm text-muted-foreground">Building Community</div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ml-auto">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Community & Events</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Workshops, retreats, and fellowship opportunities to connect with others on the same journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Monthly Workshops</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Seasonal Retreats</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Fellowship Events</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-end text-muted-foreground">
                  <span>Service Projects</span>
                  <div className="w-2 h-2 bg-accent rounded-full ml-3 flex-shrink-0" />
                </div>
              </div>
              <Button size="lg" className="flex items-center gap-2 ml-auto">
                View Events
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
