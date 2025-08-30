"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { PrayerRequestForm } from "@/components/prayer-request-form"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 712 345 678", // Updated to Kenyan phone format
      description: "Monday - Friday, 9 AM - 5 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@cclk.org", // Updated email domain to CCLK
      description: "We respond within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+254 712 345 678", // Updated to Kenyan phone format
      description: "Quick questions and prayer requests",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ngong Road, Karen, Nairobi, Kenya", // Updated to Kenyan address
      description: "Open for appointments and events",
    },
  ]

  const staff = [
    {
      name: "Dr. Grace Wanjiku", // Updated to Kenyan name
      role: "Executive Director",
      email: "grace@cclk.org", // Updated email domain to CCLK
      phone: "+254 712 345 678 ext. 101", // Updated to Kenyan phone format
    },
    {
      name: "Pastor David Kiprotich", // Updated to Kenyan name
      role: "Director of Discipleship",
      email: "david@cclk.org", // Updated email domain to CCLK
      phone: "+254 712 345 678 ext. 102", // Updated to Kenyan phone format
    },
    {
      name: "Dr. Mary Njeri", // Updated to Kenyan name
      role: "Clinical Director",
      email: "mary@cclk.org", // Updated email domain to CCLK
      phone: "+254 712 345 678 ext. 103", // Updated to Kenyan phone format
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              We're here to support you on your journey. Reach out with questions, prayer requests, or to learn more
              about our programs.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <Card key={index} className="text-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="font-medium text-foreground mb-1">{method.details}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <PrayerRequestForm />
            </div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Staff Directory</h2>
            <div className="space-y-6">
              {staff.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                        <p className="text-muted-foreground mb-2">{member.role}</p>
                      </div>
                      <div className="space-y-1 md:text-right">
                        <p className="text-sm">
                          <Mail className="h-4 w-4 inline mr-2" />
                          {member.email}
                        </p>
                        <p className="text-sm">
                          <Phone className="h-4 w-4 inline mr-2" />
                          {member.phone}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Office Hours</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">General Office</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Counseling Services</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
