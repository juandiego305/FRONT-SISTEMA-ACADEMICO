import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { UserPlus, FileEdit, ClipboardList, Clock } from "lucide-react"
import Link from "next/link"
import ModuleNavigation from "@/components/module-navigation"

export default function EstudiantesPage() {
  const submodules = [
    {
      id: "registro",
      title: "Registro y Actualización de Estudiantes",
      description: "Gestiona la información personal y académica de los estudiantes",
      icon: <UserPlus className="h-6 w-6 text-red-600" />,
      path: "/estudiantes/registro",
    },
    {
      id: "matricula",
      title: "Matrícula e Inscripción",
      description: "Administra el proceso de matrícula e inscripción a cursos",
      icon: <FileEdit className="h-6 w-6 text-red-600" />,
      path: "/estudiantes/matricula",
    },
    {
      id: "historial",
      title: "Historial Académico",
      description: "Consulta el historial académico completo de los estudiantes",
      icon: <ClipboardList className="h-6 w-6 text-red-600" />,
      path: "/estudiantes/historial",
    },
    {
      id: "asistencia",
      title: "Gestión de Asistencia",
      description: "Controla la asistencia de los estudiantes a clases",
      icon: <Clock className="h-6 w-6 text-red-600" />,
      path: "/estudiantes/asistencia",
    },
  ]

  return (
    <div className="container mx-auto">
      <ModuleNavigation />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Gestión de Estudiantes</h1>
          <p className="text-gray-600 mt-1">Administre todos los aspectos relacionados con los estudiantes</p>
        </div>

        <Tabs defaultValue="registro" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            {submodules.map((submodule) => (
              <TabsTrigger
                key={submodule.id}
                value={submodule.id}
                className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
              >
                {submodule.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {submodules.map((submodule) => (
            <TabsContent key={submodule.id} value={submodule.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {submodule.icon}
                    <div>
                      <CardTitle className="text-xl text-red-700">{submodule.title}</CardTitle>
                      <CardDescription>{submodule.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end">
                    <Link href={submodule.path}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">Acceder al módulo</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
