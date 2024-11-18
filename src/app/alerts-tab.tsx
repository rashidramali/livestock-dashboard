import React from 'react'
import { Bell, Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function AlertsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Alerts</h2>
        <Button>
          <Bell className="mr-2 h-4 w-4" />
          Configure Notifications
        </Button>
      </div>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+15% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <Bell className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">42</div>
            <p className="text-xs text-muted-foreground">-5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15m</div>
            <p className="text-xs text-muted-foreground">Average response time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
          <CardDescription>A list of recent alerts and their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50 text-sm">
                  <th className="p-2 text-left font-medium">Date</th>
                  <th className="p-2 text-left font-medium">Type</th>
                  <th className="p-2 text-left font-medium">Location</th>
                  <th className="p-2 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: '2023-06-01 14:30',
                    type: 'Quarantine Breach',
                    location: 'Farm A',
                    status: 'Critical',
                  },
                  {
                    date: '2023-05-31 09:15',
                    type: 'Route Deviation',
                    location: 'Transport B32',
                    status: 'Resolved',
                  },
                  {
                    date: '2023-05-30 11:45',
                    type: 'Disease Outbreak',
                    location: 'Region C',
                    status: 'Under Investigation',
                  },
                ].map((alert, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{alert.date}</td>
                    <td className="p-2">{alert.type}</td>
                    <td className="p-2">{alert.location}</td>
                    <td className="p-2">
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                          alert.status === 'Critical'
                            ? 'bg-red-100 text-red-800'
                            : alert.status === 'Resolved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {alert.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}