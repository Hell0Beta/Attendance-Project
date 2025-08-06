"use client"

import * as React from "react"
import { Calendar, Download, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const attendanceRecords = [
  {
    id: 1,
    date: "2024-11-08",
    class: "Mathematics 10A",
    period: "Period 3",
    time: "10:30 AM - 11:15 AM",
    totalStudents: 28,
    present: 26,
    absent: 2,
    late: 0,
    attendanceRate: 92.9,
    markedBy: "Ms. Johnson",
    markedAt: "10:35 AM"
  },
  {
    id: 2,
    date: "2024-11-08",
    class: "Chemistry 10B",
    period: "Period 6",
    time: "1:00 PM - 1:45 PM",
    totalStudents: 30,
    present: 25,
    absent: 4,
    late: 1,
    attendanceRate: 83.3,
    markedBy: "Ms. Johnson",
    markedAt: "1:05 PM"
  },
  {
    id: 3,
    date: "2024-11-07",
    class: "Physics 11B",
    period: "Period 7",
    time: "2:00 PM - 2:45 PM",
    totalStudents: 25,
    present: 22,
    absent: 2,
    late: 1,
    attendanceRate: 88.0,
    markedBy: "Ms. Johnson",
    markedAt: "2:03 PM"
  },
  {
    id: 4,
    date: "2024-11-07",
    class: "Mathematics 9A",
    period: "Period 2",
    time: "9:00 AM - 9:45 AM",
    totalStudents: 32,
    present: 25,
    absent: 6,
    late: 1,
    attendanceRate: 78.1,
    markedBy: "Ms. Johnson",
    markedAt: "9:05 AM"
  },
  {
    id: 5,
    date: "2024-11-06",
    class: "Physics 10A",
    period: "Period 4",
    time: "11:30 AM - 12:15 PM",
    totalStudents: 27,
    present: 20,
    absent: 5,
    late: 2,
    attendanceRate: 74.1,
    markedBy: "Ms. Johnson",
    markedAt: "11:35 AM"
  },
  {
    id: 6,
    date: "2024-11-06",
    class: "Chemistry 9B",
    period: "Period 8",
    time: "3:00 PM - 3:45 PM",
    totalStudents: 29,
    present: 19,
    absent: 8,
    late: 2,
    attendanceRate: 65.5,
    markedBy: "Ms. Johnson",
    markedAt: "3:08 PM"
  }
]

export function AttendanceRecordsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filterClass, setFilterClass] = React.useState("all")
  const [filterDate, setFilterDate] = React.useState("all")

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.class.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = filterClass === "all" || record.class.includes(filterClass)
    const matchesDate = filterDate === "all" || record.date === filterDate
    
    return matchesSearch && matchesClass && matchesDate
  })

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance Records</h1>
          <p className="text-gray-600">View and manage historical attendance data</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline"
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'Calendar' }))}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button 
            className="bg-[#2563eb] hover:bg-[#1d4ed8]"
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'Reports' }))}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Records
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Records</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-gray-900">83.6%</p>
              </div>
              <div className="rounded-full bg-yellow-100 p-3">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Classes Marked</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <div className="rounded-full bg-purple-100 p-3">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="rounded-2xl border-0 bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by class name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterClass} onValueChange={setFilterClass}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDate} onValueChange={setFilterDate}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="2024-11-08">Nov 8, 2024</SelectItem>
                <SelectItem value="2024-11-07">Nov 7, 2024</SelectItem>
                <SelectItem value="2024-11-06">Nov 6, 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Records Table */}
      <Card className="rounded-2xl border-0 bg-white shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Attendance Records ({filteredRecords.length})</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600">Page 1 of 5</span>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Present/Total</TableHead>
                <TableHead>Attendance Rate</TableHead>
                <TableHead>Marked By</TableHead>
                <TableHead>Marked At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRecords.map((record) => (
                <TableRow key={record.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    {new Date(record.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{record.class}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{record.period}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {record.time}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-green-600">{record.present}</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-gray-600">{record.totalStudents}</span>
                    </div>
                    {record.absent > 0 && (
                      <p className="text-xs text-red-600">{record.absent} absent</p>
                    )}
                    {record.late > 0 && (
                      <p className="text-xs text-yellow-600">{record.late} late</p>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold ${
                        record.attendanceRate >= 90 ? 'text-green-600' :
                        record.attendanceRate >= 75 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {record.attendanceRate}%
                      </span>
                      <div className={`h-2 w-12 rounded-full ${
                        record.attendanceRate >= 90 ? 'bg-green-200' :
                        record.attendanceRate >= 75 ? 'bg-yellow-200' : 'bg-red-200'
                      }`}>
                        <div 
                          className={`h-2 rounded-full ${
                            record.attendanceRate >= 90 ? 'bg-green-500' :
                            record.attendanceRate >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${record.attendanceRate}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {record.markedBy}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {record.markedAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
