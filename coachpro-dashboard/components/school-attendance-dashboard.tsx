"use client"

import * as React from "react"
import { BarChart3, Calendar, ClipboardList, Home, MessageCircle, FileText, Users, Settings, ExternalLink, ArrowRight, Clock, UserCheck, AlertTriangle, TrendingUp } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const navigationItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "My Classes", icon: Users, active: false },
  { label: "Students", icon: UserCheck, active: false },
  { label: "Attendance Records", icon: ClipboardList, active: false },
  { label: "Reports", icon: FileText, active: false },
  { label: "Calendar", icon: Calendar, active: false },
  { label: "Messages", icon: MessageCircle, active: false },
  { label: "Settings", icon: Settings, active: false },
]

const classPerformanceData = [
  { position: 1, name: "Mathematics 10A", students: 28, present: 26, rate: 92.9, status: "excellent" },
  { position: 2, name: "Physics 11B", students: 25, present: 22, rate: 88.0, status: "good" },
  { position: 3, name: "Chemistry 10B", students: 30, present: 25, rate: 83.3, status: "good" },
  { position: 4, name: "Mathematics 9A", students: 32, present: 25, rate: 78.1, status: "average" },
  { position: 5, name: "Physics 10A", students: 27, present: 20, rate: 74.1, status: "average" },
  { position: 6, name: "Chemistry 9B", students: 29, present: 19, rate: 65.5, status: "concern" },
]

const metricsData = [
  { title: "Overall Attendance", value: "87.2%", icon: TrendingUp, trend: "+2.1%" },
  { title: "Total Students", value: "171", icon: Users, trend: "+3" },
  { title: "Classes Today", value: "6", icon: Clock, trend: "0" },
  { title: "Absent Students", value: "22", icon: AlertTriangle, trend: "-5" },
]

function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">EduTrack</h2>
              <p className="text-sm text-gray-600">Attendance System</p>
            </div>
            <SidebarMenu className="space-y-2 p-4">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.active}
                    className={`w-full justify-start rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      item.active
                        ? "bg-[#2563eb] text-white shadow-lg"
                        : "text-gray-600 hover:bg-[#f1f5f9] hover:text-[#2563eb]"
                    }`}
                  >
                    <a href="#" className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export function SchoolAttendanceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex-1 space-y-6 p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Ms. Johnson👋</h1>
                <p className="text-gray-600">Monday, November 11, 2024</p>
              </div>
              <Avatar className="h-12 w-12 ring-2 ring-white shadow-lg">
                <AvatarImage src="/teacher-profile.png" alt="Ms. Johnson" />
                <AvatarFallback className="bg-[#2563eb] text-white">MJ</AvatarFallback>
              </Avatar>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Next Class */}
              <Card className="lg:col-span-2 rounded-2xl border-0 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">Next Class</CardTitle>
                      <p className="text-sm text-gray-600">Period 3, 10:30 AM - 11:15 AM, Room 204</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#2563eb] hover:bg-[#f1f5f9]">
                      View Schedule <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center">
                          <span className="text-white font-bold text-lg">10A</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">Mathematics</h3>
                          <p className="text-sm text-gray-600">Grade 10 - Section A</p>
                          <p className="text-sm text-gray-500">28 students enrolled</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
                        Mark Attendance
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Last marked: Nov 8, 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Today's Attendance Summary */}
              <Card className="rounded-2xl border-0 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">Today's Summary</CardTitle>
                    <Button variant="ghost" size="sm" className="text-[#2563eb] hover:bg-[#f1f5f9]">
                      View Details <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">149</div>
                      <div className="text-xs text-gray-600">Present</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">22</div>
                      <div className="text-xs text-gray-600">Absent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">5</div>
                      <div className="text-xs text-gray-600">Late</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-3 overflow-hidden rounded-full bg-gray-200">
                      <div className="bg-green-500 w-[84.7%]"></div>
                      <div className="bg-red-500 w-[12.5%]"></div>
                      <div className="bg-yellow-500 w-[2.8%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>176 total students</span>
                      <span>84.7% attendance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Class Performance */}
              <Card className="lg:col-span-2 rounded-2xl border-0 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">Class Attendance Performance</CardTitle>
                    <Button variant="ghost" size="sm" className="text-[#2563eb] hover:bg-[#f1f5f9]">
                      View All Classes <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="text-xs font-semibold text-gray-600">CLASS</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-600 text-center">STUDENTS</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-600 text-center">PRESENT</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-600 text-center">RATE</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-600 text-center">STATUS</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classPerformanceData.map((classData) => (
                        <TableRow key={classData.position} className="border-gray-100">
                          <TableCell className="font-medium">
                            <div className="flex items-center space-x-3">
                              <span className={`flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${
                                classData.position === 1 ? 'bg-[#2563eb] text-white' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {classData.position}
                              </span>
                              <span className="text-gray-900">{classData.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center text-gray-600">{classData.students}</TableCell>
                          <TableCell className="text-center text-gray-600">{classData.present}</TableCell>
                          <TableCell className="text-center font-semibold text-gray-900">{classData.rate}%</TableCell>
                          <TableCell className="text-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              classData.status === 'excellent' ? 'bg-green-100 text-green-800' :
                              classData.status === 'good' ? 'bg-blue-100 text-blue-800' :
                              classData.status === 'average' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {classData.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Metrics Cards */}
              <div className="space-y-4">
                {metricsData.map((metric, index) => (
                  <Card key={index} className="rounded-2xl border-0 bg-white shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{metric.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                          <p className={`text-xs ${
                            metric.trend.startsWith('+') ? 'text-green-600' : 
                            metric.trend.startsWith('-') ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {metric.trend !== "0" && `${metric.trend} from last week`}
                          </p>
                        </div>
                        <div className="rounded-full bg-[#dbeafe] p-3">
                          <metric.icon className="h-6 w-6 text-[#2563eb]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reminder Banner */}
            <Card className="rounded-2xl border-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Follow up with absent students</h3>
                    <p className="text-sm text-white/80">5 students have been absent for more than 2 consecutive days</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-2">
                      <div className="h-8 w-8 rounded-full bg-white/20"></div>
                      <div className="h-6 w-6 rounded-full bg-white/30"></div>
                      <div className="h-4 w-4 rounded-full bg-white/40"></div>
                    </div>
                    <Button className="bg-white text-[#2563eb] hover:bg-white/90">
                      View Absent Students
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
