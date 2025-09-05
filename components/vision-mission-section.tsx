import { Card, CardContent } from "@/components/ui/card"

export function VisionMissionSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Vision Statement */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vision Statement
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              "Our vision is to see individuals, families, and communities restored through the sufficiency of God's Word—healing emotional wounds, nurturing true mental wellness, and guiding lives toward lasting transformation in Christ Jesus, the source of hope, peace, and love."
            </p>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mission Statement
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              "Our mission is to provide Christ-centered counseling and soul-care rooted in the sufficiency of Scripture. Through discipleship counseling, hope coaching, and biblical support, we nurture mental wellness, restore brokenness, and equip believers for growth and transformation in Christ."
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              At CCMWA, our ministry is guided by these biblical convictions:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full">
                <CardContent className="p-6 text-center">

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Scripture as Foundation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    God's Word is our unchanging authority for soul-care, mental wellness, and discipleship (2 Timothy 3:16–17).
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 text-center">

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Compassionate Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We reflect Christ's love by offering grace-filled, empathetic, and personalized support (Colossians 3:12).
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 text-center">

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Integrity & Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We serve with honesty, professionalism, and a commitment to excellence (Proverbs 11:3).
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 text-center">

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Transformation in Christ</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    True healing flows from the renewing power of the Spirit and Scripture (Romans 12:2).
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 text-center">

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Community & Discipleship</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We equip individuals and families to grow in Christ-centered community (Hebrews 10:24–25).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Closing Scripture Blessing */}
          <div className="text-center bg-primary/5 rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Scripture Blessing
            </h3>
            <blockquote className="text-xl lg:text-2xl text-primary font-medium mb-4 leading-relaxed">
              "And the peace of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus."
            </blockquote>
            <cite className="text-lg text-muted-foreground">
              — Philippians 4:7
            </cite>
          </div>

        </div>
      </div>
    </section>
  )
}