import type React from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { AuthProvider } from "@/components/auth-provider"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-4 bg-gray-50">{children}</main>
        </div>
      </div>
    </AuthProvider>
  )
}
