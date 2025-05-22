"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, MessageSquare, Search, Save } from "lucide-react"
import Link from "next/link"

export default function RetroalimentacionPage() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>("001")

  // Datos de ejemplo
  const estudiantes = [
    {
      id: "001",
      nombre: "Ana María García López",
      codigo: "EST001",
      parcial1: 85,
      parcial2: 78,
      trabajos: 90,
      final: 88,
      promedio: 85.3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "002",
      nombre: "Carlos Rodríguez Pérez",
      codigo: "EST002",
      parcial1: 75,
      parcial2: 82,
      trabajos: 88,
      final: 79,
      promedio: 81.0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "003",
      nombre: "Laura Martínez Sánchez",
      codigo: "EST003",
      parcial1: 92,
      parcial2: 95,
      trabajos: 94,
      final: 96,
      promedio: 94.3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "004",
      nombre: "Juan López Torres",
      codigo: "EST004",
      parcial1: 68,
      parcial2: 72,
      trabajos: 80,
      final: 75,
      promedio: 73.8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const retroalimentaciones = [
    {
      id: 1,
      estudianteId: "001",
      evaluacion: "Parcial 1",
      fecha: "15/03/2023",
      comentario:
        "Buen trabajo en general. Demuestra comprensión de los conceptos básicos, pero necesita mejorar en la resolución de problemas complejos. Revise los ejercicios 3 y 5 donde hubo confusión con las fórmulas.",
      calificacion: 85,
    },
    {
      id: 2,
      estudianteId: "001",
      evaluacion: "Parcial 2",
      fecha: "20/04/2023",
      comentario:
        "Ha mejorado en la aplicación de conceptos. Los ejercicios están bien estructurados, pero aún hay errores en los cálculos. Preste más atención a los detalles y revise sus respuestas antes de entregar.",
      calificacion: 78,
    },
    {
      id: 3,
      estudianteId: "001",
      evaluacion: "Trabajo Práctico",
      fecha: "10/05/2023",
      comentario:
        "Excelente trabajo de investigación. La presentación fue clara y bien estructurada. Las conclusiones demuestran un análisis profundo del tema. Siga así.",
      calificacion: 90,
    },
    {
      id: 4,
      estudianteId: "002",
      evaluacion: "Parcial 1",
      fecha: "15/03/2023",
      comentario:
        "Necesita mejorar la comprensión de los conceptos fundamentales. Revise los capítulos 1 y 2 del libro de texto y realice los ejercicios adicionales que se proporcionaron en clase.",
      calificacion: 75,
    },
  ]

  // Filtrar retroalimentaciones por estudiante seleccionado
  const retroalimentacionesEstudiante = retroalimentaciones.filter((retro) => retro.estudianteId === selectedStudent)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Retroalimentación</h1>
            <p className="text-gray-600 mt-1">Gestione la retroalimentación para los estudiantes</p>
          </div>
          <Link href="/calificaciones">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-red-700">Retroalimentación por Estudiante</CardTitle>
                <CardDescription>Matemáticas Avanzadas (MAT301) - 2023-1</CardDescription>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="mat301">
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Seleccione un curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mat301">MAT301 - Matemáticas Avanzadas</SelectItem>
                    <SelectItem value="inf202">INF202 - Programación Orientada a Objetos</SelectItem>
                    <SelectItem value="fis401">FIS401 - Física Cuántica</SelectItem>
                    <SelectItem value="let105">LET105 - Literatura Contemporánea</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Estudiantes</CardTitle>
                  <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar estudiante..." className="pl-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-col divide-y">
                    {estudiantes.map((estudiante) => (
                      <button
                        key={estudiante.id}
                        className={`flex items-start gap-3 p-3 text-left hover:bg-gray-50 ${
                          selectedStudent === estudiante.id ? "bg-red-50" : ""
                        }`}
                        onClick={() => setSelectedStudent(estudiante.id)}
                      >
                        <Avatar>
                          <AvatarImage src={estudiante.avatar || "/placeholder.svg"} alt={estudiante.nombre} />
                          <AvatarFallback>{estudiante.nombre.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{estudiante.nombre}</span>
                            <span className="text-xs text-gray-500">{estudiante.codigo}</span>
                          </div>
                          <div className="text-xs text-gray-500">Promedio: {estudiante.promedio.toFixed(1)}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                {selectedStudent ? (
                  <Tabs defaultValue="historial" className="w-full">
                    <CardHeader className="pb-0">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={estudiantes.find((e) => e.id === selectedStudent)?.avatar || "/placeholder.svg"}
                            alt={estudiantes.find((e) => e.id === selectedStudent)?.nombre}
                          />
                          <AvatarFallback>
                            {estudiantes.find((e) => e.id === selectedStudent)?.nombre.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{estudiantes.find((e) => e.id === selectedStudent)?.nombre}</CardTitle>
                          <CardDescription>
                            Código: {estudiantes.find((e) => e.id === selectedStudent)?.codigo}
                          </CardDescription>
                        </div>
                      </div>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger
                          value="historial"
                          className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                        >
                          Historial
                        </TabsTrigger>
                        <TabsTrigger
                          value="nueva"
                          className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                        >
                          Nueva Retroalimentación
                        </TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <TabsContent value="historial">
                        {retroalimentacionesEstudiante.length > 0 ? (
                          <div className="space-y-4">
                            {retroalimentacionesEstudiante.map((retro) => (
                              <Card key={retro.id}>
                                <CardHeader className="pb-2">
                                  <div className="flex justify-between items-center">
                                    <CardTitle className="text-lg">{retro.evaluacion}</CardTitle>
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm text-gray-500">{retro.fecha}</span>
                                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                                        {retro.calificacion}/100
                                      </span>
                                    </div>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-gray-700">{retro.comentario}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <MessageSquare className="h-12 w-12 text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium">No hay retroalimentaciones</h3>
                            <p className="text-gray-500 mt-2">
                              Este estudiante aún no tiene retroalimentaciones registradas
                            </p>
                          </div>
                        )}
                      </TabsContent>
                      <TabsContent value="nueva">
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="evaluacion">Evaluación</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccione evaluación" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="parcial1">Parcial 1</SelectItem>
                                  <SelectItem value="parcial2">Parcial 2</SelectItem>
                                  <SelectItem value="trabajo">Trabajo Práctico</SelectItem>
                                  <SelectItem value="final">Examen Final</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="calificacion">Calificación</Label>
                              <Input
                                id="calificacion"
                                type="number"
                                min="0"
                                max="100"
                                placeholder="Ej: 85"
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="comentario">Comentario</Label>
                            <Textarea
                              id="comentario"
                              placeholder="Escriba su retroalimentación para el estudiante..."
                              rows={6}
                            />
                          </div>
                          <div className="flex justify-end">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                              <Save className="mr-2 h-4 w-4" />
                              Guardar Retroalimentación
                            </Button>
                          </div>
                        </form>
                      </TabsContent>
                    </CardContent>
                  </Tabs>
                ) : (
                  <CardContent className="flex flex-col items-center justify-center h-[500px] text-center">
                    <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium">No hay estudiante seleccionado</h3>
                    <p className="text-gray-500 mt-2">Seleccione un estudiante para ver o agregar retroalimentación</p>
                  </CardContent>
                )}
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
