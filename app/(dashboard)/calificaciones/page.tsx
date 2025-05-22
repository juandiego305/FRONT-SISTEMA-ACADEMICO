import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, BarChart2, MessageSquare } from "lucide-react"
import Link from "next/link"
import ModuleNavigation from "@/components/module-navigation"

export default function CalificacionesPage() {
  const submodules = [
    {
      id: "registro",
      title: "Registro de Calificaciones",
      description: "Registre y actualice las calificaciones de los estudiantes",
      icon: <FileText className="h-6 w-6 text-red-600" />,
      path: "/calificaciones/registro",
    },
    {
      id: "promedios",
      title: "Cálculo de Promedios y Estadísticas",
      description: "Visualice promedios y estadísticas de rendimiento",
      icon: <BarChart2 className="h-6 w-6 text-red-600" />,
      path: "/calificaciones/promedios",
    },
    {
      id: "retroalimentacion",
      title: "Retroalimentación",
      description: "Gestione la retroalimentación para los estudiantes",
      icon: <MessageSquare className="h-6 w-6 text-red-600" />,
      path: "/calificaciones/retroalimentacion",
    },
  ]

  return (
    <div className="container mx-auto">
      <ModuleNavigation />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Evaluación y Calificaciones</h1>
          <p className="text-gray-600 mt-1">Administre las calificaciones y evaluaciones de los estudiantes</p>
        </div>

        <Tabs defaultValue="registro" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
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
