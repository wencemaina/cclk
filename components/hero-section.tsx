import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Growing Together in <span className="text-primary">Faith & Community</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Join us on a transformative journey of spiritual growth, soul care, and authentic community. Discover your
            purpose and find healing in a safe, welcoming environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Join a Small Group
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
              <Heart className="h-5 w-5" />
              Schedule Soul Care
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
