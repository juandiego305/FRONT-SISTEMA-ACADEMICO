import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MessageSquare, Bell } from "lucide-react"
import Link from "next/link"
import ModuleNavigation from "@/components/module-navigation"

export default function ComunicacionPage() {
  const submodules = [
    {
      id: "mensajeria",
      title: "Mensajería Interna",
      description: "Sistema de mensajería para comunicación entre usuarios",
      icon: <MessageSquare className="h-6 w-6 text-red-600" />,
      path: "/comunicacion/mensajeria",
    },
    {
      id: "alertas",
      title: "Alertas y Recordatorios",
      description: "Gestione alertas y recordatorios para eventos importantes",
      icon: <Bell className="h-6 w-6 text-red-600" />,
      path: "/comunicacion/alertas",
    },
  ]

  return (
    <div className="container mx-auto">
      <ModuleNavigation />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Comunicación y Notificaciones</h1>
          <p className="text-gray-600 mt-1">Gestione la comunicación entre usuarios del sistema</p>
        </div>

        <Tabs defaultValue="mensajeria" className="w-full">
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
