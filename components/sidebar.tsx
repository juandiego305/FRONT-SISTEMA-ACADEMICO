"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BookOpen,
  Users,
  UserCog,
  FileText,
  MessageSquare,
  BookmarkIcon,
  ShieldCheck,
  Menu,
  X,
  GraduationCap,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  const modules = [
    {
      name: "Gestión de Estudiantes",
      href: "/estudiantes",
      icon: Users,
      submodules: [
        { name: "Registro y Actualización", href: "/estudiantes/registro" },
        { name: "Matrícula e Inscripción", href: "/estudiantes/matricula" },
        { name: "Historial Académico", href: "/estudiantes/historial" },
        { name: "Gestión de Asistencia", href: "/estudiantes/asistencia" },
      ],
    },
    {
      name: "Gestión de Docentes",
      href: "/docentes",
      icon: UserCog,
      submodules: [
        { name: "Registro y Actualización", href: "/docentes/registro" },
        { name: "Asignación de Cursos", href: "/docentes/asignacion" },
        { name: "Gestión de Evaluaciones", href: "/docentes/evaluaciones" },
      ],
    },
    {
      name: "Gestión de Cursos",
      href: "/cursos",
      icon: BookOpen,
      submodules: [
        { name: "Creación y Administración", href: "/cursos/administracion" },
        { name: "Programación de Horarios", href: "/cursos/horarios" },
        { name: "Inscripción y Cancelación", href: "/cursos/inscripcion" },
      ],
    },
    {
      name: "Evaluación y Calificaciones",
      href: "/calificaciones",
      icon: FileText,
      submodules: [
        { name: "Registro de Calificaciones", href: "/calificaciones/registro" },
        { name: "Cálculo de Promedios", href: "/calificaciones/promedios" },
        { name: "Retroalimentación", href: "/calificaciones/retroalimentacion" },
      ],
    },
    {
      name: "Comunicación",
      href: "/comunicacion",
      icon: MessageSquare,
      submodules: [
        { name: "Mensajería Interna", href: "/comunicacion/mensajeria" },
        { name: "Alertas y Recordatorios", href: "/comunicacion/alertas" },
      ],
    },
    {
      name: "Recursos Académicos",
      href: "/recursos",
      icon: BookmarkIcon,
      submodules: [
        { name: "Reserva de Aulas", href: "/recursos/aulas" },
        { name: "Gestión de Materiales", href: "/recursos/materiales" },
      ],
    },
    {
      name: "Administración y Seguridad",
      href: "/admin",
      icon: ShieldCheck,
      submodules: [
        { name: "Gestión de Roles", href: "/admin/roles" },
        { name: "Autenticación", href: "/admin/autenticacion" },
      ],
    },
  ]

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-white transition-all duration-300",
        expanded ? "w-64" : "w-16",
        className,
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          {expanded ? (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold text-red-600">DIVISIT</span>
            </div>
          ) : (
            <GraduationCap className="h-6 w-6 text-red-600 mx-auto" />
          )}
        </Link>
        <Button variant="ghost" size="icon" className="absolute right-2 top-3" onClick={toggleSidebar}>
          {expanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          {modules.map((module) => {
            const isActive = pathname.startsWith(module.href)
            const ModuleIcon = module.icon

            return (
              <div key={module.href} className="mb-2">
                <Link href={module.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      isActive && "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700",
                      !expanded && "justify-center px-0",
                    )}
                  >
                    <ModuleIcon className={cn("h-5 w-5", isActive && "text-red-600")} />
                    {expanded && <span className="ml-2">{module.name}</span>}
                  </Button>
                </Link>
                {expanded && isActive && (
                  <div className="ml-6 mt-1 grid gap-1">
                    {module.submodules.map((submodule) => {
                      const isSubActive = pathname === submodule.href
                      return (
                        <Link key={submodule.href} href={submodule.href}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn("w-full justify-start", isSubActive && "bg-red-50 text-red-600 font-medium")}
                          >
                            {submodule.name}
                          </Button>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </ScrollArea>
    </div>
  )
}
