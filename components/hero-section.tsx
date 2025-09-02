"use client"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-gradient-to-b from-primary/5 to-background flex items-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/7579320/pexels-photo-7579320.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="text-primary">Soul-Care. Wellness. Discipleship</span>
          </h1>

          <p className="text-xl text-white mb-8 max-w-3xl mx-auto text-pretty">
            Christ-centered counseling and soul-care rooted in the sufficiency of Scripture, nurturing hope, healing, and transformation in Christ.
          </p>
        </div>
      </div>
    </section>
  )
}
