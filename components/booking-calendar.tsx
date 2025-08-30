"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

interface TimeSlot {
  time: string
  available: boolean
  counselorId: string
}

interface BookingCalendarProps {
  selectedCounselor: string | null
  onTimeSelect: (date: string, time: string) => void
  selectedDateTime: { date: string; time: string } | null
}

export function BookingCalendar({ selectedCounselor, onTimeSelect, selectedDateTime }: BookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Mock availability data - in real app this would come from API
  const getAvailableSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const hours = [9, 10, 11, 13, 14, 15, 16, 17] // 9am-5pm with lunch break

    hours.forEach((hour) => {
      slots.push({
        time: `${hour}:00`,
        available: Math.random() > 0.3, // Random availability for demo
        counselorId: selectedCounselor || "1",
      })
      slots.push({
        time: `${hour}:30`,
        available: Math.random() > 0.4,
        counselorId: selectedCounselor || "1",
      })
    })

    return slots
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const isToday = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isPastDate = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const availableSlots = selectedDate ? getAvailableSlots(selectedDate) : []

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Select Date</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium min-w-[140px] text-center">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentDate).map((date, index) => (
              <div key={index} className="aspect-square">
                {date && (
                  <Button
                    variant={selectedDate?.toDateString() === date.toDateString() ? "default" : "ghost"}
                    className={`w-full h-full p-0 text-sm ${isToday(date) ? "ring-2 ring-primary" : ""} ${
                      isPastDate(date) ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !isPastDate(date) && setSelectedDate(date)}
                    disabled={isPastDate(date)}
                  >
                    {date.getDate()}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedDate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Available Times - {selectedDate.toLocaleDateString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!selectedCounselor ? (
              <p className="text-muted-foreground text-center py-4">
                Please select a counselor first to view available times.
              </p>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {availableSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedDateTime?.date === formatDate(selectedDate) && selectedDateTime?.time === slot.time
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    disabled={!slot.available}
                    onClick={() => slot.available && onTimeSelect(formatDate(selectedDate), slot.time)}
                    className="bg-transparent"
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            )}
            {selectedCounselor && availableSlots.filter((s) => s.available).length === 0 && (
              <p className="text-muted-foreground text-center py-4">
                No available times for this date. Please select another date.
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
