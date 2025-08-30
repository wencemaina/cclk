"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FormHandler } from "@/lib/form-handler"
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "footer" | "inline"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setSubmitResult(null)

    const result = await FormHandler.subscribeNewsletter({ email })
    setSubmitResult(result)
    setIsSubmitting(false)

    if (result.success) {
      setEmail("")
    }
  }

  if (variant === "footer") {
    return (
      <div className={`space-y-4 ${className}`}>
        <h4 className="text-lg font-semibold">Stay Connected</h4>
        <p className="text-primary-foreground/80 text-sm">Get updates on programs, events, and resources.</p>
        {submitResult && (
          <Alert
            className={`${submitResult.success ? "border-green-200 bg-green-50/10" : "border-red-200 bg-red-50/10"}`}
          >
            <div className="flex items-center gap-2">
              {submitResult.success ? (
                <CheckCircle className="h-4 w-4 text-green-400" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-400" />
              )}
              <AlertDescription className={`text-sm ${submitResult.success ? "text-green-200" : "text-red-200"}`}>
                {submitResult.message}
              </AlertDescription>
            </div>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            required
          />
          <Button variant="secondary" size="sm" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`${className}`}>
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
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="flex items-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {submitResult && (
        <Alert className={`${submitResult.success ? "border-green-200 bg-green-50" : ""}`}>
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
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
        </Button>
      </form>
    </div>
  )
}
