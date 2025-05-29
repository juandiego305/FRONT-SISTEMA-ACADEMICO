"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Definimos la estructura de los módulos principales
const mainModules = [
  { path: "/dashboard", label: "Dashboard", icon: Home }
  { path: "/estudiantes", label: "Estudiantes" },
  { path: "/docentes", label: "Docentes" },
  { path: "/cursos", label: "Cursos" },
  { path: "/calificaciones", label: "Calificaciones" },
  { path: "/comunicacion", label: "Comunicación" },
  { path: "/recursos", label: "Recursos" },
  { path: "/admin", label: "Administración" },
]

export default function ModuleNavigation() {
  const pathname = usePathname()

  // Encontrar el índice del módulo actual
  const currentModuleIndex = mainModules.findIndex((module) => pathname.startsWith(`/${pathname.split("/")[1]}`))

  // Determinar los módulos anterior y siguiente
  const prevModule = currentModuleIndex > 0 ? mainModules[currentModuleIndex - 1] : null
  const nextModule = currentModuleIndex < mainModules.length - 1 ? mainModules[currentModuleIndex + 1] : null

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-2">
        <Link href="/dashboard">
          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
            <Home className="h-4 w-4 mr-1" />
            Dashboard
          </Button>
        </Link>

        {prevModule && (
          <Link href={prevModule.path}>
            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
              <ChevronLeft className="h-4 w-4 mr-1" />
              {prevModule.label}
            </Button>
          </Link>
        )}
      </div>

      {nextModule && (
        <Link href={nextModule.path}>
          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
            {nextModule.label}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      )}
    </div>
  )
}
