import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Plus, Check, X } from "lucide-react"
import Link from "next/link"

export default function InscripcionCursosPage() {
  // Datos de ejemplo
  const inscripciones = [
    {
      id: "I001",
      estudiante: "Ana María García López",
      codigo: "EST001",
      curso: "Matemáticas Avanzadas",
      codigoCurso: "MAT301",
      fecha: "01/03/2023",
      estado: "Aprobada",
    },
    {
      id: "I002",
      estudiante: "Carlos Rodríguez Pérez",
      codigo: "EST002",
      curso: "Programación Orientada a Objetos",
      codigoCurso: "INF202",
      fecha: "02/03/2023",
      estado: "Aprobada",
    },
    {
      id: "I003",
      estudiante: "Laura Martínez Sánchez",
      codigo: "EST003",
      curso: "Física Cuántica",
      codigoCurso: "FIS401",
      fecha: "01/03/2023",
      estado: "Pendiente",
    },
    {
      id: "I004",
      estudiante: "Juan López Torres",
      codigo: "EST004",
      curso: "Literatura Contemporánea",
      codigoCurso: "LET105",
      fecha: "03/03/2023",
      estado: "Rechazada",
    },
  ]

  const cursos = [
    {
      id: "C001",
      codigo: "MAT301",
      nombre: "Matemáticas Avanzadas",
      docente: "Roberto Gómez Bolaños",
      cupos: 30,
      inscritos: 25,
      horario: "Lunes 08:00 - 10:00",
    },
    {
      id: "C002",
      codigo: "INF202",
      nombre: "Programación Orientada a Objetos",
      docente: "Ada Lovelace Torres",
      cupos: 25,
      inscritos: 20,
      horario: "Martes 10:00 - 12:00",
    },
    {
      id: "C003",
      codigo: "FIS401",
      nombre: "Física Cuántica",
      docente: "Albert Einstein García",
      cupos: 20,
      inscritos: 18,
      horario: "Miércoles 14:00 - 16:00",
    },
    {
      id: "C004",
      codigo: "LET105",
      nombre: "Literatura Contemporánea",
      docente: "María Montessori López",
      cupos: 35,
      inscritos: 30,
      horario: "Jueves 16:00 - 18:00",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Inscripción y Cancelación de Cursos</h1>
            <p className="text-gray-600 mt-1">Gestione las inscripciones y cancelaciones de cursos</p>
          </div>
          <Link href="/cursos">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="inscripciones" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger
              value="inscripciones"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
            >
              Inscripciones
            </TabsTrigger>
            <TabsTrigger value="cursos" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Cursos Disponibles
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inscripciones">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Solicitudes de Inscripción</CardTitle>
                <CardDescription>Gestione las solicitudes de inscripción a cursos</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar inscripción..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="aprobada">Aprobada</SelectItem>
                      <SelectItem value="pendiente">Pendiente</SelectItem>
                      <SelectItem value="rechazada">Rechazada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Estudiante</TableHead>
                        <TableHead className="hidden md:table-cell">Código</TableHead>
                        <TableHead>Curso</TableHead>
                        <TableHead className="hidden md:table-cell">Fecha</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inscripciones.map((inscripcion) => (
                        <TableRow key={inscripcion.id}>
                          <TableCell className="font-medium">{inscripcion.id}</TableCell>
                          <TableCell>{inscripcion.estudiante}</TableCell>
                          <TableCell className="hidden md:table-cell">{inscripcion.codigo}</TableCell>
                          <TableCell>{inscripcion.curso}</TableCell>
                          <TableCell className="hidden md:table-cell">{inscripcion.fecha}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                inscripcion.estado === "Aprobada"
                                  ? "bg-green-100 text-green-800"
                                  : inscripcion.estado === "Pendiente"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {inscripcion.estado}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {inscripcion.estado === "Pendiente" && (
                                <>
                                  <Button variant="outline" size="icon" className="h-8 w-8 text-green-600">
                                    <Check className="h-4 w-4" />
                                    <span className="sr-only">Aprobar</span>
                                  </Button>
                                  <Button variant="outline" size="icon" className="h-8 w-8 text-red-600">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Rechazar</span>
                                  </Button>
                                </>
                              )}
                              {inscripcion.estado === "Aprobada" && (
                                <Button variant="outline" size="sm" className="text-red-600">
                                  Cancelar
                                </Button>
                              )}
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

          <TabsContent value="cursos">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Cursos Disponibles para Inscripción</CardTitle>
                <CardDescription>Consulte los cursos disponibles y realice nuevas inscripciones</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar curso..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="ciencias">Ciencias</SelectItem>
                      <SelectItem value="informatica">Informática</SelectItem>
                      <SelectItem value="humanidades">Humanidades</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Código</TableHead>
                        <TableHead>Curso</TableHead>
                        <TableHead className="hidden md:table-cell">Docente</TableHead>
                        <TableHead className="hidden md:table-cell">Horario</TableHead>
                        <TableHead className="text-center">Cupos</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cursos.map((curso) => (
                        <TableRow key={curso.id}>
                          <TableCell className="font-medium">{curso.codigo}</TableCell>
                          <TableCell>{curso.nombre}</TableCell>
                          <TableCell className="hidden md:table-cell">{curso.docente}</TableCell>
                          <TableCell className="hidden md:table-cell">{curso.horario}</TableCell>
                          <TableCell className="text-center">
                            {curso.inscritos}/{curso.cupos}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                              disabled={curso.inscritos >= curso.cupos}
                            >
                              <Plus className="h-4 w-4" />
                              Inscribir
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Nueva Inscripción</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="estudiante">Estudiante</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccione un estudiante" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="est001">Ana María García López</SelectItem>
                                <SelectItem value="est002">Carlos Rodríguez Pérez</SelectItem>
                                <SelectItem value="est003">Laura Martínez Sánchez</SelectItem>
                                <SelectItem value="est004">Juan López Torres</SelectItem>
                              </SelectContent>
                            </Select>
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
                                <SelectItem value="let105">LET105 - Literatura Contemporánea</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button className="bg-red-600 hover:bg-red-700 text-white">Solicitar Inscripción</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
