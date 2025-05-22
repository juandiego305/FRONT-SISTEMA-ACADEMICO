"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { Mail, Phone, MapPin, Briefcase, Camera, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PerfilPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    nombre: user?.nombre || "Usuario de Prueba",
    email: "usuario@divisit.edu.co",
    telefono: "123-456-7890",
    direccion: "Calle 123 #45-67, Ciudad",
    fechaNacimiento: "1990-01-01",
    departamento: "Ingeniería",
    biografia: "Estudiante de ingeniería con interés en desarrollo de software y tecnologías emergentes.",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar los cambios en el backend
    toast({
      title: "Perfil actualizado",
      description: "Los cambios en tu perfil han sido guardados correctamente.",
    })
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Mi Perfil</h1>
            <p className="text-gray-600 mt-1">Gestiona tu información personal y preferencias</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver al Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl text-red-700">Información de Perfil</CardTitle>
              <CardDescription>Tu información básica visible para otros usuarios</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt={formData.nombre} />
                  <AvatarFallback className="text-3xl bg-red-100 text-red-600">
                    {formData.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white"
                >
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Cambiar foto</span>
                </Button>
              </div>
              <h3 className="text-xl font-semibold">{formData.nombre}</h3>
              <p className="text-gray-500">{user?.rol || "Rol no definido"}</p>
              <div className="flex flex-col gap-2 mt-4 w-full">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{formData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{formData.telefono}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{formData.direccion}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  <span>{formData.departamento}</span>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancelar Edición" : "Editar Perfil"}
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl text-red-700">Detalles de la Cuenta</CardTitle>
              <CardDescription>Actualiza tu información personal y preferencias</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    value="academico"
                    className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                  >
                    Académico
                  </TabsTrigger>
                  <TabsTrigger
                    value="seguridad"
                    className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                  >
                    Seguridad
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre Completo</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                        <Input
                          id="fechaNacimiento"
                          name="fechaNacimiento"
                          type="date"
                          value={formData.fechaNacimiento}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="direccion">Dirección</Label>
                        <Input
                          id="direccion"
                          name="direccion"
                          value={formData.direccion}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="biografia">Biografía</Label>
                        <Textarea
                          id="biografia"
                          name="biografia"
                          value={formData.biografia}
                          onChange={handleChange}
                          disabled={!isEditing}
                          rows={4}
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex justify-end gap-3">
                        <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
                          Cancelar
                        </Button>
                        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                          Guardar Cambios
                        </Button>
                      </div>
                    )}
                  </form>
                </TabsContent>

                <TabsContent value="academico">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="departamento">Departamento</Label>
                        <Select
                          disabled={!isEditing}
                          value={formData.departamento}
                          onValueChange={(value) => handleSelectChange("departamento", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Ingeniería">Ingeniería</SelectItem>
                            <SelectItem value="Ciencias">Ciencias</SelectItem>
                            <SelectItem value="Humanidades">Humanidades</SelectItem>
                            <SelectItem value="Administración">Administración</SelectItem>
                            <SelectItem value="Medicina">Medicina</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="programa">Programa Académico</Label>
                        <Select disabled={!isEditing} defaultValue="ingenieria_sistemas">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione programa" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ingenieria_sistemas">Ingeniería de Sistemas</SelectItem>
                            <SelectItem value="ingenieria_industrial">Ingeniería Industrial</SelectItem>
                            <SelectItem value="ingenieria_civil">Ingeniería Civil</SelectItem>
                            <SelectItem value="medicina">Medicina</SelectItem>
                            <SelectItem value="derecho">Derecho</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="semestre">Semestre Actual</Label>
                        <Select disabled={!isEditing} defaultValue="5">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione semestre" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                Semestre {i + 1}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="creditos">Créditos Aprobados</Label>
                        <Input id="creditos" value="85" disabled />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="promedio">Promedio General</Label>
                        <Input id="promedio" value="4.2" disabled />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="estado">Estado Académico</Label>
                        <Input id="estado" value="Activo" disabled />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex justify-end gap-3">
                        <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
                          Cancelar
                        </Button>
                        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                          Guardar Cambios
                        </Button>
                      </div>
                    )}
                  </form>
                </TabsContent>

                <TabsContent value="seguridad">
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Cambiar Contraseña</h3>
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña Actual</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva Contraseña</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-red-600 hover:bg-red-700 text-white">Cambiar Contraseña</Button>
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-medium">Preferencias de Seguridad</h3>
                      <div className="space-y-2">
                        <Label htmlFor="notificaciones-seguridad">Notificaciones de Seguridad</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione preferencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las notificaciones</SelectItem>
                            <SelectItem value="important">Solo importantes</SelectItem>
                            <SelectItem value="none">Ninguna</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="verificacion">Método de Verificación</Label>
                        <Select defaultValue="email">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione método" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Correo electrónico</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="app">Aplicación móvil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Preferencias</Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
