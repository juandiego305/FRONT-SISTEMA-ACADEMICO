import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, UserCog, FileText, MessageSquare, BookmarkIcon, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const modules = [
    {
      id: 1,
      title: "Gestión de Estudiantes",
      description: "Administra registros, matrículas e historial académico",
      icon: <Users className="h-8 w-8 text-red-600" />,
      path: "/estudiantes",
    },
    {
      id: 2,
      title: "Gestión de Docentes",
      description: "Administra docentes, asignaciones y evaluaciones",
      icon: <UserCog className="h-8 w-8 text-red-600" />,
      path: "/docentes",
    },
    {
      id: 3,
      title: "Gestión de Cursos",
      description: "Administra cursos, horarios e inscripciones",
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      path: "/cursos",
    },
    {
      id: 4,
      title: "Evaluación y Calificaciones",
      description: "Gestiona calificaciones, promedios y retroalimentación",
      icon: <FileText className="h-8 w-8 text-red-600" />,
      path: "/calificaciones",
    },
    {
      id: 5,
      title: "Comunicación",
      description: "Mensajería interna, alertas y recordatorios",
      icon: <MessageSquare className="h-8 w-8 text-red-600" />,
      path: "/comunicacion",
    },
    {
      id: 6,
      title: "Recursos Académicos",
      description: "Reserva de aulas y gestión de materiales",
      icon: <BookmarkIcon className="h-8 w-8 text-red-600" />,
      path: "/recursos",
    },
    {
      id: 7,
      title: "Administración y Seguridad",
      description: "Gestión de roles, permisos y autenticación",
      icon: <ShieldCheck className="h-8 w-8 text-red-600" />,
      path: "/admin",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Sistema Académico Divisit</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          Plataforma integral para la gestión académica. Seleccione un módulo para comenzar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {modules.map((module) => (
            <Link href={module.path} key={module.id} className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-red-100 hover:border-red-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    {module.icon}
                    <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700 font-medium text-sm">
                      Módulo {module.id}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-red-700 mt-2">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
                  >
                    Acceder <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
