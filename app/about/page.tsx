import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Shield } from "lucide-react"

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Grace Wanjiku", // Updated to Kenyan name
      role: "Executive Director",
      bio: "With over 15 years in ministry and counseling, Grace leads our vision of holistic spiritual care.",
      image: "/professional-woman-smiling.png",
    },
    {
      name: "Pastor David Kiprotich", // Updated to Kenyan name
      role: "Director of Discipleship",
      bio: "David oversees our small group programs and mentorship initiatives with passion for community building.",
      image: "/professional-man-smiling.png",
    },
    {
      name: "Dr. Mary Njeri", // Updated to Kenyan name
      role: "Clinical Director",
      bio: "Licensed therapist specializing in faith-based counseling and trauma-informed care.",
      image: "/professional-woman-therapist.png",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We approach every person with empathy, understanding, and unconditional love.",
    },
    {
      icon: Users,
      title: "Authentic Community",
      description: "Building genuine relationships where people can be vulnerable and find belonging.",
    },
    {
      icon: BookOpen,
      title: "Biblical Foundation",
      description: "Grounded in Scripture while embracing diverse expressions of faith and spirituality.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Creating spaces where healing can happen without judgment or condemnation.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About CCLK</h1>{" "}
            {/* Updated organization name to CCLK */}
            <p className="text-xl text-muted-foreground text-pretty">
              Founded in 2010, we've been walking alongside individuals and families on their journey of faith, healing,
              and spiritual growth for over a decade.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                CCLK began with a simple vision: to create a place where faith and professional care intersect to{" "}
                {/* Updated organization name to CCLK */}
                bring healing and hope to our community. What started as a small group meeting in a living room has
                grown into a comprehensive ministry serving hundreds of individuals and families.
              </p>
              <p className="leading-relaxed mb-6">
                We believe that spiritual growth and emotional wellness go hand in hand. Our approach combines biblical
                wisdom with evidence-based practices, creating a unique environment where people can address both their
                spiritual questions and emotional needs.
              </p>
              <p className="leading-relaxed">
                Today, we offer a full range of services including small group discipleship, individual and family
                counseling, spiritual direction, and community events. Our team of licensed professionals and trained
                volunteers work together to provide comprehensive care for the whole person.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto w-fit">
                      {leader.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statement of Faith */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Statement of Faith</h2>
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in the transformative power of God's love as revealed through Jesus Christ. We affirm the
                authority of Scripture while embracing the diverse ways people experience and express their faith.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our ministry welcomes people from all backgrounds and stages of their spiritual journey, creating space
                for questions, growth, and authentic relationship with God and others.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
