import React from 'react'
import { BarChart, Download, FileText } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {

} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export function ReportsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Generate New Report
        </Button>
      </div>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">256</div>
            <p className="text-xs text-muted-foreground">Generated this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Viewed</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Compliance Summary</div>
            <p className="text-xs text-muted-foreground">Viewed 1,234 times</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Active data integrations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Report Accuracy</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">Based on data verification</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>A list of generated reports ready for download.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50 text-sm">
                  <th className="p-2 text-left font-medium">Report Name</th>
                  <th className="p-2 text-left font-medium">Generated On</th>
                  <th className="p-2 text-left font-medium">Size</th>
                  <th className="p-2 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Monthly Compliance Report',
                    date: '2023-06-01',
                    size: '2.5 MB',
                  },
                  {
                    name: 'Quarantine Status Summary',
                    date: '2023-05-15',
                    size: '1.8 MB',
                  },
                  {
                    name: 'Transport Route Analysis',
                    date: '2023-05-01',
                    size: '3.2 MB',
                  },
                ].map((report, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{report.name}</td>
                    <td className="p-2">{report.date}</td>
                    <td className="p-2">{report.size}</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
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