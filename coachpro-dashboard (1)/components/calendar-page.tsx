"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Plus, Clock, Users, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const calendarEvents = [
  {
    id: 1,
    title: "Mathematics 10A",
    time: "10:30 AM - 11:15 AM",
    room: "Room 204",
    students: 28,
    type: "class",
    status: "scheduled",
    date: "2024-11-11"
  },
  {
    id: 2,
    title: "Chemistry 10B",
    time: "1:00 PM - 1:45 PM",
    room: "Room 205",
    students: 30,
    type: "class",
    status: "scheduled",
    date: "2024-11-11"
  },
  {
    id: 3,
    title: "Physics 11B",
    time: "2:00 PM - 2:45 PM",
    room: "Room 301",
    students: 25,
    type: "class",
    status: "scheduled",
    date: "2024-11-11"
  },
  {
    id: 4,
    title: "Parent-Teacher Conference",
    time: "4:00 PM - 6:00 PM",
    room: "Conference Room",
    students: null,
    type: "meeting",
    status: "scheduled",
    date: "2024-11-12"
  },
  {
    id: 5,
    title: "Mathematics 9A",
    time: "9:00 AM - 9:45 AM",
    room: "Room 203",
    students: 32,
    type: "class",
    status: "completed",
    date: "2024-11-08"
  }
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const currentDate = new Date(2024, 10, 11) // November 11, 2024

export function CalendarPage() {
  const [selectedDate, setSelectedDate] = React.useState(currentDate)
  const [viewMode, setViewMode] = React.useState<'month' | 'week' | 'day'>('week')

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
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return calendarEvents.filter(event => event.date === dateString)
  }

  const days = getDaysInMonth(selectedDate)

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600">Schedule and track your classes</p>
        </div>
        <div className="flex space-x-2">
          <div className="flex rounded-lg border border-gray-200 bg-white">
            <Button
              variant={viewMode === 'day' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('day')}
              className="rounded-r-none"
            >
              Day
            </Button>
            <Button
              variant={viewMode === 'week' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('week')}
              className="rounded-none"
            >
              Week
            </Button>
            <Button
              variant={viewMode === 'month' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('month')}
              className="rounded-l-none"
            >
              Month
            </Button>
          </div>
          <Button 
            className="bg-[#2563eb] hover:bg-[#1d4ed8]"
            onClick={() => alert('Add Event modal would open here')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Calendar */}
        <Card className="lg:col-span-3 rounded-2xl border-0 bg-white shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedDate(new Date())}
                >
                  Today
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {viewMode === 'month' && (
              <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map(day => (
                  <div key={day} className="p-2 text-center text-sm font-semibold text-gray-600">
                    {day}
                  </div>
                ))}
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-[100px] border border-gray-100 p-2 ${
                      day ? 'bg-white hover:bg-gray-50 cursor-pointer' : 'bg-gray-50'
                    } ${
                      day && day.toDateString() === new Date().toDateString() 
                        ? 'bg-blue-50 border-blue-200' 
                        : ''
                    }`}
                  >
                    {day && (
                      <>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {day.getDate()}
                        </div>
                        <div className="space-y-1">
                          {getEventsForDate(day).slice(0, 2).map(event => (
                            <div
                              key={event.id}
                              className={`text-xs p-1 rounded truncate ${
                                event.type === 'class' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {getEventsForDate(day).length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{getEventsForDate(day).length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            {viewMode === 'week' && (
              <div className="space-y-4">
                <div className="grid grid-cols-8 gap-4">
                  <div className="text-sm font-semibold text-gray-600">Time</div>
                  {daysOfWeek.slice(1, 6).map(day => (
                    <div key={day} className="text-sm font-semibold text-gray-600 text-center">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Time slots */}
                {Array.from({ length: 9 }, (_, i) => i + 8).map(hour => (
                  <div key={hour} className="grid grid-cols-8 gap-4 border-t border-gray-100 py-2">
                    <div className="text-sm text-gray-500">
                      {hour}:00 {hour < 12 ? 'AM' : 'PM'}
                    </div>
                    {daysOfWeek.slice(1, 6).map((day, dayIndex) => {
                      const currentDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - selectedDate.getDay() + dayIndex + 1)
                      const events = getEventsForDate(currentDay).filter(event => {
                        const eventHour = parseInt(event.time.split(':')[0])
                        return eventHour === hour
                      })
                      
                      return (
                        <div key={day} className="min-h-[60px] relative">
                          {events.map(event => (
                            <div
                              key={event.id}
                              className={`absolute inset-0 p-2 rounded-lg text-xs ${
                                event.type === 'class' 
                                  ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                                  : 'bg-green-100 text-green-800 border border-green-200'
                              }`}
                            >
                              <div className="font-semibold truncate">{event.title}</div>
                              <div className="text-xs opacity-75">{event.room}</div>
                            </div>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {calendarEvents
              .filter(event => event.date === currentDate.toISOString().split('T')[0])
              .map(event => (
                <div key={event.id} className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{event.room}</span>
                      </div>
                      {event.students && (
                        <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{event.students} students</span>
                        </div>
                      )}
                    </div>
                    <Badge variant={event.status === 'completed' ? 'default' : 'secondary'}>
                      {event.status}
                    </Badge>
                  </div>
                  {event.type === 'class' && event.status === 'scheduled' && (
                    <Button 
                      size="sm" 
                      className="w-full mt-3 bg-[#2563eb] hover:bg-[#1d4ed8]"
                      onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'Attendance Records' }))}
                    >
                      Mark Attendance
                    </Button>
                  )}
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
