import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Building, BookOpen } from "lucide-react"
import Link from "next/link"

export default function RecursosPage() {
  const submodules = [
    {
      id: "aulas",
      title: "Reserva de Aulas y Laboratorios",
      description: "Gestione la reserva de espacios físicos para clases y actividades",
      icon: <Building className="h-6 w-6 text-red-600" />,
      path: "/recursos/aulas",
    },
    {
      id: "materiales",
      title: "Gestión de Materiales",
      description: "Administre los materiales didácticos y recursos educativos",
      icon: <BookOpen className="h-6 w-6 text-red-600" />,
      path: "/recursos/materiales",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Gestión de Recursos Académicos</h1>
          <p className="text-gray-600 mt-1">Administre los recursos físicos y materiales educativos</p>
        </div>

        <Tabs defaultValue="aulas" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
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
