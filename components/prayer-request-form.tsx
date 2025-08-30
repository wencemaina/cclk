"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FormHandler, type PrayerRequestData } from "@/lib/form-handler"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function PrayerRequestForm() {
  const [formData, setFormData] = useState<PrayerRequestData>({
    name: "",
    email: "",
    requestType: "",
    request: "",
    isPrivate: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const result = await FormHandler.submitPrayerRequest(formData)
    setSubmitResult(result)
    setIsSubmitting(false)

    if (result.success) {
      setFormData({
        name: "",
        email: "",
        requestType: "",
        request: "",
        isPrivate: false,
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Prayer Request</CardTitle>
      </CardHeader>
      <CardContent>
        {submitResult && (
          <Alert className={`mb-4 ${submitResult.success ? "border-green-200 bg-green-50" : ""}`}>
            <div className="flex items-center gap-2">
              {submitResult.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-destructive" />
              )}
              <AlertDescription className={submitResult.success ? "text-green-800" : ""}>
                {submitResult.message}
              </AlertDescription>
            </div>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name (Optional)" value={formData.name} onChange={handleInputChange} />
          <Input
            name="email"
            type="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">Prayer Request Type:</label>
            <select
              name="requestType"
              value={formData.requestType}
              onChange={handleInputChange}
              className="w-full p-2 border border-input rounded-md bg-background"
              required
            >
              <option value="">Select type</option>
              <option value="personal">Personal Prayer</option>
              <option value="family">Family Prayer</option>
              <option value="health">Health & Healing</option>
              <option value="guidance">Guidance & Direction</option>
              <option value="thanksgiving">Thanksgiving</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Textarea
            name="request"
            placeholder="Share your prayer request..."
            rows={5}
            value={formData.request}
            onChange={handleInputChange}
            required
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="private"
              name="isPrivate"
              checked={formData.isPrivate}
              onChange={handleInputChange}
              className="rounded"
            />
            <label htmlFor="private" className="text-sm text-muted-foreground">
              Keep this request private (not shared with prayer team)
            </label>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Prayer Request...
              </>
            ) : (
              "Submit Prayer Request"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
