"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Bell, Moon, Globe, Eye, Monitor } from "lucide-react"
import Link from "next/link"

export default function ConfiguracionPage() {
  const { toast } = useToast()
  const [theme, setTheme] = useState("light")

  const handleSavePreferences = () => {
    toast({
      title: "Preferencias guardadas",
      description: "Tus preferencias han sido actualizadas correctamente.",
    })
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Configuración</h1>
            <p className="text-gray-600 mt-1">Personaliza tu experiencia en el sistema</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver al Dashboard
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="apariencia" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
            <TabsTrigger value="apariencia" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Apariencia
            </TabsTrigger>
            <TabsTrigger
              value="notificaciones"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
            >
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="idioma" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Idioma
            </TabsTrigger>
          </TabsList>

          <TabsContent value="apariencia">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Moon className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Apariencia</CardTitle>
                    <CardDescription>Personaliza la apariencia del sistema</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Tema</Label>
                      <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tema" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            <div className="flex items-center gap-2">
                              <Eye className="h-4 w-4" />
                              <span>Claro</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                            <div className="flex items-center gap-2">
                              <Moon className="h-4 w-4" />
                              <span>Oscuro</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="system">
                            <div className="flex items-center gap-2">
                              <Monitor className="h-4 w-4" />
                              <span>Sistema</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="animations">Animaciones</Label>
                        <p className="text-sm text-gray-500">Habilitar animaciones en la interfaz</p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="compact-mode">Modo compacto</Label>
                        <p className="text-sm text-gray-500">Reduce el espaciado en la interfaz</p>
                      </div>
                      <Switch id="compact-mode" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="font-size">Tamaño de fuente</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tamaño" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Pequeño</SelectItem>
                          <SelectItem value="medium">Mediano</SelectItem>
                          <SelectItem value="large">Grande</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={handleSavePreferences}>
                      Guardar Preferencias
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificaciones">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Notificaciones</CardTitle>
                    <CardDescription>Configura tus preferencias de notificaciones</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notificaciones del Sistema</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notif-calificaciones">Calificaciones</Label>
                        <p className="text-sm text-gray-500">Recibir notificaciones de nuevas calificaciones</p>
                      </div>
                      <Switch id="notif-calificaciones" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notif-cursos">Cursos</Label>
                        <p className="text-sm text-gray-500">Recibir notificaciones sobre cambios en cursos</p>
                      </div>
                      <Switch id="notif-cursos" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notif-mensajes">Mensajes</Label>
                        <p className="text-sm text-gray-500">Recibir notificaciones de nuevos mensajes</p>
                      </div>
                      <Switch id="notif-mensajes" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notif-sistema">Sistema</Label>
                        <p className="text-sm text-gray-500">Recibir notificaciones de actualizaciones del sistema</p>
                      </div>
                      <Switch id="notif-sistema" />
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">Métodos de Notificación</h3>
                    <div className="space-y-2">
                      <Label htmlFor="metodo-notificacion">Método preferido</Label>
                      <Select defaultValue="app">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="app">Aplicación</SelectItem>
                          <SelectItem value="email">Correo electrónico</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="all">Todos los métodos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="frecuencia-notificacion">Frecuencia de resumen</Label>
                      <Select defaultValue="diario">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione frecuencia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inmediato">Inmediato</SelectItem>
                          <SelectItem value="diario">Diario</SelectItem>
                          <SelectItem value="semanal">Semanal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={handleSavePreferences}>
                      Guardar Preferencias
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="idioma">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Idioma y Región</CardTitle>
                    <CardDescription>Configura tus preferencias de idioma y formato</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="idioma">Idioma</Label>
                      <Select defaultValue="es">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="pt">Português</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Región</Label>
                      <Select defaultValue="co">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione región" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="co">Colombia</SelectItem>
                          <SelectItem value="mx">México</SelectItem>
                          <SelectItem value="ar">Argentina</SelectItem>
                          <SelectItem value="cl">Chile</SelectItem>
                          <SelectItem value="pe">Perú</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="formato-fecha">Formato de fecha</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="formato-hora">Formato de hora</Label>
                      <Select defaultValue="24h">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12h">12 horas (AM/PM)</SelectItem>
                          <SelectItem value="24h">24 horas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={handleSavePreferences}>
                      Guardar Preferencias
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
