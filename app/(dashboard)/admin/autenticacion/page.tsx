import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Shield, Lock, UserCog } from "lucide-react"
import Link from "next/link"

export default function AutenticacionPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Autenticación y Autorización</h1>
            <p className="text-gray-600 mt-1">Configure los parámetros de seguridad del sistema</p>
          </div>
          <Link href="/admin">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
            <TabsTrigger value="general" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              General
            </TabsTrigger>
            <TabsTrigger value="password" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Contraseñas
            </TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Sesiones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Configuración General</CardTitle>
                    <CardDescription>Configure los parámetros generales de autenticación</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Autenticación de dos factores</Label>
                        <p className="text-sm text-gray-500">
                          Requiere que los usuarios verifiquen su identidad con un segundo método
                        </p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="captcha">CAPTCHA en inicio de sesión</Label>
                        <p className="text-sm text-gray-500">
                          Protege contra intentos automatizados de inicio de sesión
                        </p>
                      </div>
                      <Switch id="captcha" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ip-restriction">Restricción por IP</Label>
                        <p className="text-sm text-gray-500">Limita el acceso a rangos de direcciones IP específicos</p>
                      </div>
                      <Switch id="ip-restriction" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="audit-log">Registro de auditoría</Label>
                        <p className="text-sm text-gray-500">
                          Registra todas las actividades de inicio de sesión y cambios de seguridad
                        </p>
                      </div>
                      <Switch id="audit-log" defaultChecked />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-attempts">Intentos de inicio de sesión fallidos permitidos</Label>
                    <Select defaultValue="3">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione número de intentos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 intentos</SelectItem>
                        <SelectItem value="5">5 intentos</SelectItem>
                        <SelectItem value="10">10 intentos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lockout-duration">Duración del bloqueo de cuenta</Label>
                    <Select defaultValue="15">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="1440">24 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Configuración</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Política de Contraseñas</CardTitle>
                    <CardDescription>Configure los requisitos para las contraseñas de los usuarios</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="min-length">Longitud mínima</Label>
                    <Select defaultValue="8">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione longitud" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 caracteres</SelectItem>
                        <SelectItem value="8">8 caracteres</SelectItem>
                        <SelectItem value="10">10 caracteres</SelectItem>
                        <SelectItem value="12">12 caracteres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="uppercase">Requiere mayúsculas</Label>
                        <p className="text-sm text-gray-500">Al menos una letra mayúscula</p>
                      </div>
                      <Switch id="uppercase" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="lowercase">Requiere minúsculas</Label>
                        <p className="text-sm text-gray-500">Al menos una letra minúscula</p>
                      </div>
                      <Switch id="lowercase" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="numbers">Requiere números</Label>
                        <p className="text-sm text-gray-500">Al menos un número</p>
                      </div>
                      <Switch id="numbers" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="special">Requiere caracteres especiales</Label>
                        <p className="text-sm text-gray-500">Al menos un carácter especial (ej: !@#$%)</p>
                      </div>
                      <Switch id="special" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expiration">Expiración de contraseña</Label>
                    <Select defaultValue="90">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Nunca</SelectItem>
                        <SelectItem value="30">30 días</SelectItem>
                        <SelectItem value="60">60 días</SelectItem>
                        <SelectItem value="90">90 días</SelectItem>
                        <SelectItem value="180">180 días</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="history">Historial de contraseñas</Label>
                    <Select defaultValue="5">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione cantidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No recordar</SelectItem>
                        <SelectItem value="3">Recordar 3 contraseñas</SelectItem>
                        <SelectItem value="5">Recordar 5 contraseñas</SelectItem>
                        <SelectItem value="10">Recordar 10 contraseñas</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">Evita que los usuarios reutilicen contraseñas anteriores</p>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Política</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserCog className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Gestión de Sesiones</CardTitle>
                    <CardDescription>Configure los parámetros de las sesiones de usuario</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Tiempo de inactividad para cierre de sesión</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione tiempo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="120">2 horas</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="concurrent-sessions">Permitir sesiones concurrentes</Label>
                        <p className="text-sm text-gray-500">
                          Permite que un usuario inicie sesión desde múltiples dispositivos
                        </p>
                      </div>
                      <Switch id="concurrent-sessions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="remember-me">Opción "Recordarme"</Label>
                        <p className="text-sm text-gray-500">
                          Permite a los usuarios mantener la sesión iniciada por períodos prolongados
                        </p>
                      </div>
                      <Switch id="remember-me" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="force-logout">Forzar cierre de sesión al cambiar contraseña</Label>
                        <p className="text-sm text-gray-500">
                          Cierra todas las sesiones activas cuando un usuario cambia su contraseña
                        </p>
                      </div>
                      <Switch id="force-logout" defaultChecked />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="remember-duration">Duración de "Recordarme"</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 días</SelectItem>
                        <SelectItem value="14">14 días</SelectItem>
                        <SelectItem value="30">30 días</SelectItem>
                        <SelectItem value="90">90 días</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Configuración</Button>
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
