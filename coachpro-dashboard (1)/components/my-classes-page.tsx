"use client"

import * as React from "react"
import { Users, Clock, TrendingUp, TrendingDown, MoreHorizontal, Eye, Edit, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const classesData = [
  {
    id: 1,
    name: "Mathematics",
    grade: "10A",
    students: 28,
    room: "204",
    schedule: "Mon, Wed, Fri - 10:30 AM",
    attendanceRate: 92.9,
    trend: "up",
    lastClass: "2024-11-08",
    status: "active",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Physics",
    grade: "11B",
    students: 25,
    room: "301",
    schedule: "Tue, Thu - 2:00 PM",
    attendanceRate: 88.0,
    trend: "up",
    lastClass: "2024-11-07",
    status: "active",
    color: "bg-purple-500"
  },
  {
    id: 3,
    name: "Chemistry",
    grade: "10B",
    students: 30,
    room: "205",
    schedule: "Mon, Wed, Fri - 1:00 PM",
    attendanceRate: 83.3,
    trend: "down",
    lastClass: "2024-11-08",
    status: "active",
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "Mathematics",
    grade: "9A",
    students: 32,
    room: "203",
    schedule: "Tue, Thu - 9:00 AM",
    attendanceRate: 78.1,
    trend: "down",
    lastClass: "2024-11-07",
    status: "active",
    color: "bg-blue-500"
  },
  {
    id: 5,
    name: "Physics",
    grade: "10A",
    students: 27,
    room: "301",
    schedule: "Mon, Wed - 11:30 AM",
    attendanceRate: 74.1,
    trend: "down",
    lastClass: "2024-11-08",
    status: "active",
    color: "bg-purple-500"
  },
  {
    id: 6,
    name: "Chemistry",
    grade: "9B",
    students: 29,
    room: "205",
    schedule: "Tue, Thu - 3:00 PM",
    attendanceRate: 65.5,
    trend: "down",
    lastClass: "2024-11-07",
    status: "needs_attention",
    color: "bg-green-500"
  }
]

export function MyClassesPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
          <p className="text-gray-600">Manage your classes and track attendance</p>
        </div>
        <Button 
          className="bg-[#2563eb] hover:bg-[#1d4ed8]"
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'Calendar' }))}
        >
          <Calendar className="mr-2 h-4 w-4" />
          View Schedule
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Classes</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">171</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-gray-900">80.3%</p>
              </div>
              <div className="rounded-full bg-yellow-100 p-3">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Classes Today</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="rounded-full bg-purple-100 p-3">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classesData.map((classItem) => (
          <Card key={classItem.id} className="rounded-2xl border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`h-12 w-12 rounded-xl ${classItem.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{classItem.grade}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900">{classItem.name}</CardTitle>
                    <p className="text-sm text-gray-600">Grade {classItem.grade} • Room {classItem.room}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Class
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Students</span>
                <span className="font-semibold text-gray-900">{classItem.students}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Schedule</span>
                <span className="font-medium text-gray-900">{classItem.schedule}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Attendance Rate</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{classItem.attendanceRate}%</span>
                  {classItem.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Status</span>
                <Badge variant={classItem.status === "active" ? "default" : "destructive"}>
                  {classItem.status === "active" ? "Active" : "Needs Attention"}
                </Badge>
              </div>

              <div className="pt-2">
                <Button 
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8]"
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'Attendance Records' }))}
                >
                  Mark Attendance
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
