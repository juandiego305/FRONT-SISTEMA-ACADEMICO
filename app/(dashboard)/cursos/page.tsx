import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, ClipboardList, BookText } from "lucide-react"
import Link from "next/link"
import ModuleNavigation from "@/components/module-navigation"

export default function CursosPage() {
  const submodules = [
    {
      id: "administracion",
      title: "Creación y Administración",
      description: "Cree y administre cursos y asignaturas",
      icon: <BookOpen className="h-6 w-6 text-red-600" />,
      path: "/cursos/administracion",
    },
    {
      id: "materias",
      title: "Gestión de Materias",
      description: "Administre las materias del sistema académico",
      icon: <BookText className="h-6 w-6 text-red-600" />,
      path: "/cursos/materias",
    },
    {
      id: "horarios",
      title: "Programación de Horarios",
      description: "Gestione los horarios de los cursos",
      icon: <Calendar className="h-6 w-6 text-red-600" />,
      path: "/cursos/horarios",
    },
    {
      id: "inscripcion",
      title: "Inscripción y Cancelación",
      description: "Administre las inscripciones y cancelaciones de cursos",
      icon: <ClipboardList className="h-6 w-6 text-red-600" />,
      path: "/cursos/inscripcion",
    },
  ]

  return (
    <div className="container mx-auto">
      <ModuleNavigation />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Gestión de Cursos y Asignaturas</h1>
          <p className="text-gray-600 mt-1">Administre todos los aspectos relacionados con los cursos</p>
        </div>

        <Tabs defaultValue="administracion" className="w-full">
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
