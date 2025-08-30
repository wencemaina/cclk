"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookingCalendar } from "./booking-calendar"
import { CheckCircle, User, Calendar, MessageSquare } from "lucide-react"

interface Counselor {
  id: string
  name: string
  title: string
  specialties: string[]
  credentials: string
  image: string
}

interface BookingFormProps {
  counselors: Counselor[]
}

export function BookingForm({ counselors }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null)
  const [selectedDateTime, setSelectedDateTime] = useState<{ date: string; time: string } | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sessionType: "",
    concerns: "",
    previousCounseling: "",
    emergencyContact: "",
    insurance: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

  const sessionTypes = [
    { value: "individual", label: "Individual Counseling", duration: "50 minutes" },
    { value: "couples", label: "Couples Counseling", duration: "75 minutes" },
    { value: "family", label: "Family Therapy", duration: "60 minutes" },
    { value: "spiritual", label: "Spiritual Direction", duration: "60 minutes" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleTimeSelect = (date: string, time: string) => {
    setSelectedDateTime({ date, time })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setBookingComplete(true)
  }

  const selectedCounselorData = counselors.find((c) => c.id === selectedCounselor)

  if (bookingComplete) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Appointment Booked Successfully!</h2>
          <div className="space-y-2 text-muted-foreground mb-6">
            <p>Your appointment has been scheduled with {selectedCounselorData?.name}</p>
            <p>Date: {selectedDateTime && new Date(selectedDateTime.date).toLocaleDateString()}</p>
            <p>Time: {selectedDateTime?.time}</p>
            <p>Session Type: {sessionTypes.find((s) => s.value === formData.sessionType)?.label}</p>
          </div>
          <Alert className="mb-6">
            <AlertDescription>
              You will receive a confirmation email shortly with appointment details and intake forms to complete before
              your session.
            </AlertDescription>
          </Alert>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => (window.location.href = "/member-portal")}>View My Appointments</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Book Another Appointment
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 4 && <div className={`w-12 h-0.5 mx-2 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Select Counselor */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Step 1: Select a Counselor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {counselors.map((counselor) => (
                <Card
                  key={counselor.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedCounselor === counselor.id ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedCounselor(counselor.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={counselor.image || "/placeholder.svg"}
                        alt={counselor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{counselor.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{counselor.title}</p>
                        <p className="text-xs text-muted-foreground mb-3">{counselor.credentials}</p>
                        <div className="flex flex-wrap gap-1">
                          {counselor.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={() => setStep(2)} disabled={!selectedCounselor}>
                Next: Select Date & Time
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Step 2: Select Date & Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BookingCalendar
              selectedCounselor={selectedCounselor}
              onTimeSelect={handleTimeSelect}
              selectedDateTime={selectedDateTime}
            />
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back: Select Counselor
              </Button>
              <Button onClick={() => setStep(3)} disabled={!selectedDateTime}>
                Next: Session Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Session Details */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Step 3: Session Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="sessionType">Session Type</Label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-input rounded-md bg-background"
                required
              >
                <option value="">Select session type</option>
                {sessionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label} ({type.duration})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="concerns">Primary Concerns</Label>
              <Textarea
                id="concerns"
                name="concerns"
                value={formData.concerns}
                onChange={handleInputChange}
                placeholder="Please describe what you'd like to work on in counseling..."
                rows={4}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="previousCounseling">Previous Counseling Experience</Label>
              <Textarea
                id="previousCounseling"
                name="previousCounseling"
                value={formData.previousCounseling}
                onChange={handleInputChange}
                placeholder="Have you been in counseling before? If so, please briefly describe..."
                rows={3}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="specialRequests">Special Requests or Accommodations</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any special accommodations or requests for your session..."
                rows={2}
                className="mt-1"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back: Select Date & Time
              </Button>
              <Button onClick={() => setStep(4)} disabled={!formData.sessionType || !formData.concerns}>
                Next: Contact Information
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Contact Information & Confirmation */}
      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 4: Contact Information & Confirmation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                <Input
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  placeholder="Name and phone number"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="insurance">Insurance Information (Optional)</Label>
                <Input
                  id="insurance"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  placeholder="Insurance provider and policy number"
                  className="mt-1"
                />
              </div>

              {/* Booking Summary */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-lg">Appointment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Counselor:</span>
                    <span className="font-medium">{selectedCounselorData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">
                      {selectedDateTime && new Date(selectedDateTime.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{selectedDateTime?.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Type:</span>
                    <span className="font-medium">
                      {sessionTypes.find((s) => s.value === formData.sessionType)?.label}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="consent" required className="mt-1" />
                <Label htmlFor="consent" className="text-sm leading-relaxed">
                  I understand that this appointment is subject to our cancellation policy and that I will receive
                  intake forms to complete before my session. I consent to receiving appointment reminders via email and
                  text.
                </Label>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(3)}>
                  Back: Session Details
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Booking Appointment..." : "Book Appointment"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
