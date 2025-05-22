"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileEdit, Trash2, Download, UserCog } from "lucide-react"

export default function RegistroDocentesPage() {
  // Datos de ejemplo
  const docentes = [
    {
      id: "D001",
      nombre: "Roberto",
      apellido: "Gómez Bolaños",
      documento: "9876543210",
      email: "roberto.gomez@divisit.edu",
      especialidad: "Matemáticas",
      estado: "Activo",
    },
    {
      id: "D002",
      nombre: "María",
      apellido: "Montessori López",
      documento: "8765432109",
      email: "maria.montessori@divisit.edu",
      especialidad: "Pedagogía",
      estado: "Activo",
    },
    {
      id: "D003",
      nombre: "Albert",
      apellido: "Einstein García",
      documento: "7654321098",
      email: "albert.einstein@divisit.edu",
      especialidad: "Física",
      estado: "Inactivo",
    },
    {
      id: "D004",
      nombre: "Ada",
      apellido: "Lovelace Torres",
      documento: "6543210987",
      email: "ada.lovelace@divisit.edu",
      especialidad: "Informática",
      estado: "Activo",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Registro y Actualización de Docentes</h1>
          <p className="text-gray-600 mt-1">Gestione la información personal y profesional de los docentes</p>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Listado de Docentes
            </TabsTrigger>
            <TabsTrigger value="registro" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nuevo Docente
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Docentes Registrados</CardTitle>
                <CardDescription>Consulte y administre los docentes registrados en el sistema</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar docente..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="activo">Activo</SelectItem>
                      <SelectItem value="inactivo">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido</TableHead>
                        <TableHead className="hidden md:table-cell">Especialidad</TableHead>
                        <TableHead className="hidden md:table-cell">Email</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {docentes.map((docente) => (
                        <TableRow key={docente.id}>
                          <TableCell className="font-medium">{docente.id}</TableCell>
                          <TableCell>{docente.nombre}</TableCell>
                          <TableCell>{docente.apellido}</TableCell>
                          <TableCell className="hidden md:table-cell">{docente.especialidad}</TableCell>
                          <TableCell className="hidden md:table-cell">{docente.email}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                docente.estado === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {docente.estado}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <FileEdit className="h-4 w-4" />
                                <span className="sr-only">Editar</span>
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Eliminar</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registro">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserCog className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Registrar Nuevo Docente</CardTitle>
                    <CardDescription>Complete el formulario para registrar un nuevo docente</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Ingrese el nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" placeholder="Ingrese el apellido" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo-documento">Tipo de Documento</Label>
                      <Select defaultValue="dni">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dni">DNI</SelectItem>
                          <SelectItem value="pasaporte">Pasaporte</SelectItem>
                          <SelectItem value="cedula">Cédula</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="documento">Número de Documento</Label>
                      <Input id="documento" placeholder="Ingrese el número de documento" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="Ingrese el teléfono" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="especialidad">Especialidad</Label>
                      <Input id="especialidad" placeholder="Ingrese la especialidad" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="titulo">Título Académico</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione título" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="licenciado">Licenciado</SelectItem>
                          <SelectItem value="magister">Magíster</SelectItem>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between gap-3">
                    <Button variant="outline" onClick={() => window.history.back()}>
                      Volver
                    </Button>
                    <div className="flex gap-3">
                      <Button variant="outline">Cancelar</Button>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Docente</Button>
                    </div>
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
