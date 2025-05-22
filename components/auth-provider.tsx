"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  id: number
  nombre: string
  rol: string
} | null

type AuthContextType = {
  user: User
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Verificar si hay un usuario en localStorage
    const storedUser = localStorage.getItem("divisit-user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Error parsing user data:", error)
        localStorage.removeItem("divisit-user")
      }
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    // Redirigir al login si no hay usuario autenticado
    if (!loading && !user && pathname !== "/login") {
      router.push("/login")
    }
    // Redirigir al dashboard después del login
    if (!loading && user && pathname === "/login") {
      router.push("/dashboard")
    }
  }, [user, loading, router, pathname])

  const logout = () => {
    localStorage.removeItem("divisit-user")
    setUser(null)
    router.push("/login")
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>
  }

  return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>
}
