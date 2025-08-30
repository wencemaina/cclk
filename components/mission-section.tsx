export function MissionSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Mission</h2>

        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that every person is created with inherent worth and purpose. Our mission is to create a safe,
            nurturing environment where individuals can explore their faith, find healing for their souls, and build
            authentic relationships that last a lifetime.
          </p>

          <div className="bg-primary/5 rounded-lg p-8 border-l-4 border-primary">
            <blockquote className="text-xl font-medium text-foreground italic mb-4">
              "He heals the brokenhearted and binds up their wounds."
            </blockquote>
            <cite className="text-muted-foreground">— Psalm 147:3</cite>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Faith</h3>
              <p className="text-muted-foreground">Grounded in biblical truth and centered on Christ's love</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">Building authentic relationships and supporting one another</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Healing</h3>
              <p className="text-muted-foreground">Providing professional care for emotional and spiritual wellness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
