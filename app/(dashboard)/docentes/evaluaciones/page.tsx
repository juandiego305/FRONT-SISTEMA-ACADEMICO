"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, FileEdit, Trash2, Plus, ArrowLeft, ClipboardCheck } from "lucide-react"
import Link from "next/link"

export default function GestionEvaluacionesPage() {
  // Datos de ejemplo
  const evaluaciones = [
    {
      id: "E001",
      titulo: "Examen Parcial 1",
      curso: "Matemáticas Avanzadas",
      tipo: "Examen",
      fecha: "2023-03-15",
      porcentaje: 20,
      estado: "Publicada",
    },
    {
      id: "E002",
      titulo: "Trabajo Práctico 1",
      curso: "Programación Orientada a Objetos",
      tipo: "Trabajo",
      fecha: "2023-03-20",
      porcentaje: 15,
      estado: "Borrador",
    },
    {
      id: "E003",
      titulo: "Examen Final",
      curso: "Física Cuántica",
      tipo: "Examen",
      fecha: "2023-06-10",
      porcentaje: 30,
      estado: "Publicada",
    },
    {
      id: "E004",
      titulo: "Exposición Grupal",
      curso: "Pedagogía Moderna",
      tipo: "Exposición",
      fecha: "2023-04-05",
      porcentaje: 25,
      estado: "Publicada",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Gestión de Evaluaciones</h1>
            <p className="text-gray-600 mt-1">Cree y administre evaluaciones para sus cursos</p>
          </div>
          <Link href="/docentes">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Mis Evaluaciones
            </TabsTrigger>
            <TabsTrigger value="nueva" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nueva Evaluación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Evaluaciones Creadas</CardTitle>
                <CardDescription>Consulte y administre las evaluaciones de sus cursos</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar evaluación..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="examen">Examen</SelectItem>
                      <SelectItem value="trabajo">Trabajo</SelectItem>
                      <SelectItem value="exposicion">Exposición</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nueva Evaluación
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Título</TableHead>
                        <TableHead className="hidden md:table-cell">Curso</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead className="hidden md:table-cell">Fecha</TableHead>
                        <TableHead className="text-center">%</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {evaluaciones.map((evaluacion) => (
                        <TableRow key={evaluacion.id}>
                          <TableCell className="font-medium">{evaluacion.id}</TableCell>
                          <TableCell>{evaluacion.titulo}</TableCell>
                          <TableCell className="hidden md:table-cell">{evaluacion.curso}</TableCell>
                          <TableCell>{evaluacion.tipo}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            {new Date(evaluacion.fecha).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-center">{evaluacion.porcentaje}%</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                evaluacion.estado === "Publicada"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {evaluacion.estado}
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

          <TabsContent value="nueva">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Crear Nueva Evaluación</CardTitle>
                    <CardDescription>Complete el formulario para crear una nueva evaluación</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="titulo">Título de la Evaluación</Label>
                      <Input id="titulo" placeholder="Ej: Examen Parcial 1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="curso">Curso</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un curso" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mat301">MAT301 - Matemáticas Avanzadas</SelectItem>
                          <SelectItem value="inf202">INF202 - Programación Orientada a Objetos</SelectItem>
                          <SelectItem value="fis401">FIS401 - Física Cuántica</SelectItem>
                          <SelectItem value="ped202">PED202 - Pedagogía Moderna</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Evaluación</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="examen">Examen</SelectItem>
                          <SelectItem value="trabajo">Trabajo</SelectItem>
                          <SelectItem value="exposicion">Exposición</SelectItem>
                          <SelectItem value="proyecto">Proyecto</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fecha">Fecha de Evaluación</Label>
                      <Input id="fecha" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="porcentaje">Porcentaje de la Nota Final (%)</Label>
                      <Input id="porcentaje" type="number" min="1" max="100" placeholder="Ej: 20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Select defaultValue="borrador">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="borrador">Borrador</SelectItem>
                          <SelectItem value="publicada">Publicada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Textarea
                        id="descripcion"
                        placeholder="Ingrese una descripción detallada de la evaluación"
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="instrucciones">Instrucciones</Label>
                      <Textarea
                        id="instrucciones"
                        placeholder="Ingrese las instrucciones para los estudiantes"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between gap-3">
                    <Button variant="outline" onClick={() => window.history.back()}>
                      Volver
                    </Button>
                    <div className="flex gap-3">
                      <Button variant="outline">Guardar como Borrador</Button>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">Publicar Evaluación</Button>
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
