'use client'

import React from 'react'
import { Filter, Map, Settings, Truck } from 'lucide-react'
import Image from 'next/image'

import { AlertsTab } from '@/app/alerts-tab'
import { ReportsTab } from '@/app/reports-tab'
import { SettingsTab } from '@/app/settings-tab'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 rounded-full bg-blue-600"></div>
          <h1 className="text-xl font-semibold">Cerebros | Department of Veterinar of Malaysia</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 rounded-full">
              <Image
                src="/placeholder.svg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 overflow-y-auto bg-white p-4 shadow">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Date Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Region</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">North</SelectItem>
                  <SelectItem value="south">South</SelectItem>
                  <SelectItem value="east">East</SelectItem>
                  <SelectItem value="west">West</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Vehicle ID</label>
              <Input placeholder="Enter vehicle ID" />
            </div>
            <div>
              <label className="text-sm font-medium">Quarantine Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="quarantined">Quarantined</SelectItem>
                  <SelectItem value="clear">Clear</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Apply Filters</Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <Button className="w-full">Approve Movement</Button>
            <Button variant="outline" className="w-full">
              Send Alerts
            </Button>
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <Tabs defaultValue="dashboard">
            <TabsList>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
              {/* Map Visualization */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Live Transport Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-lg bg-gray-200">
                    <Map className="h-full w-full text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              {/* Statistics Section */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Transports
                    </CardTitle>
                    <Truck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">345</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Animals in Quarantine
                    </CardTitle>
                    <Settings className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,345</div>
                    <p className="text-xs text-muted-foreground">
                      +180 in last 24 hours
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Compliance Rate
                    </CardTitle>
                    <Filter className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">98.5%</div>
                    <p className="text-xs text-muted-foreground">
                      +2.1% from last week
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Animal Movement Logs */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Animal Movements</CardTitle>
                  <CardDescription>
                    A list of recent animal movements and their compliance status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50 text-sm">
                          <th className="p-2 text-left font-medium">Date</th>
                          <th className="p-2 text-left font-medium">Origin</th>
                          <th className="p-2 text-left font-medium">Destination</th>
                          <th className="p-2 text-left font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            date: '2023-06-01',
                            origin: 'Farm A',
                            destination: 'Processing Plant B',
                            status: 'Compliant',
                          },
                          {
                            date: '2023-05-31',
                            origin: 'Farm C',
                            destination: 'Farm D',
                            status: 'Under Review',
                          },
                          {
                            date: '2023-05-30',
                            origin: 'Processing Plant E',
                            destination: 'Distribution Center F',
                            status: 'Non-Compliant',
                          },
                        ].map((movement, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2">{movement.date}</td>
                            <td className="p-2">{movement.origin}</td>
                            <td className="p-2">{movement.destination}</td>
                            <td className="p-2">
                              <span
                                className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                                  movement.status === 'Compliant'
                                    ? 'bg-green-100 text-green-800'
                                    : movement.status === 'Under Review'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {movement.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="alerts">
              <AlertsTab />
            </TabsContent>
            <TabsContent value="reports">
              <ReportsTab />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsTab />
            </TabsContent>
          </Tabs>
        </main>

        {/* Right Sidebar - Alert Panel */}
        <aside className="w-64 overflow-y-auto bg-white p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold">Active Alerts</h2>
          <div className="space-y-4">
            {[
              {
                type: 'Route Deviation',
                priority: 'high',
                timestamp: '10 minutes ago',
              },
              {
                type: 'Quarantine Breach',
                priority: 'critical',
                timestamp: '1 hour ago',
              },
              {
                type: 'Sensor Malfunction',
                priority: 'medium',
                timestamp: '3 hours ago',
              },
            ].map((alert, index) => (
              <Card key={index}>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">
                    {alert.type}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {alert.timestamp}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                      alert.priority === 'high'
                        ? 'bg-red-100 text-red-800'
                        : alert.priority === 'critical'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {alert.priority}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}