import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, FileText, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function HistorialAcademicoPage() {
  // Datos de ejemplo
  const cursos = [
    {
      id: 1,
      codigo: "MAT301",
      nombre: "Matemáticas Avanzadas",
      creditos: 4,
      periodo: "2023-1",
      nota: 85,
      estado: "Aprobado",
    },
    {
      id: 2,
      codigo: "INF202",
      nombre: "Programación Orientada a Objetos",
      creditos: 3,
      periodo: "2023-1",
      nota: 92,
      estado: "Aprobado",
    },
    {
      id: 3,
      codigo: "FIS401",
      nombre: "Física Cuántica",
      creditos: 5,
      periodo: "2022-2",
      nota: 78,
      estado: "Aprobado",
    },
    {
      id: 4,
      codigo: "LET105",
      nombre: "Literatura Contemporánea",
      creditos: 3,
      periodo: "2022-2",
      nota: 65,
      estado: "Reprobado",
    },
    {
      id: 5,
      codigo: "QUI201",
      nombre: "Química Orgánica",
      creditos: 4,
      periodo: "2022-1",
      nota: 88,
      estado: "Aprobado",
    },
  ]

  const periodos = ["2023-1", "2022-2", "2022-1", "2021-2", "2021-1"]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Historial Académico</h1>
            <p className="text-gray-600 mt-1">Consulte el historial académico completo del estudiante</p>
          </div>
          <Link href="/estudiantes">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-red-700">Ana María García López</CardTitle>
                <CardDescription>Código: EST001 | Programa: Ingeniería de Sistemas</CardDescription>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Período académico" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los períodos</SelectItem>
                    {periodos.map((periodo) => (
                      <SelectItem key={periodo} value={periodo}>
                        {periodo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cursos" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                <TabsTrigger value="cursos" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
                  Cursos
                </TabsTrigger>
                <TabsTrigger
                  value="estadisticas"
                  className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                >
                  Estadísticas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cursos">
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Código</TableHead>
                        <TableHead>Curso</TableHead>
                        <TableHead className="text-center">Créditos</TableHead>
                        <TableHead className="text-center">Período</TableHead>
                        <TableHead className="text-center">Nota</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cursos.map((curso) => (
                        <TableRow key={curso.id}>
                          <TableCell className="font-medium">{curso.codigo}</TableCell>
                          <TableCell>{curso.nombre}</TableCell>
                          <TableCell className="text-center">{curso.creditos}</TableCell>
                          <TableCell className="text-center">{curso.periodo}</TableCell>
                          <TableCell className="text-center">{curso.nota}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                curso.estado === "Aprobado" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {curso.estado}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Promedio General</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-red-600">85.6</div>
                      <p className="text-sm text-gray-500">Sobre 100 puntos</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Créditos Aprobados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-red-600">16</div>
                      <p className="text-sm text-gray-500">De 20 cursados</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Porcentaje de Avance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-red-600">40%</div>
                      <p className="text-sm text-gray-500">Del plan de estudios</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="estadisticas">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-5 w-5 text-red-600" />
                        <CardTitle className="text-lg">Rendimiento por Período</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="h-80 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                        <p>Gráfico de rendimiento por período académico</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-5 w-5 text-red-600" />
                        <CardTitle className="text-lg">Distribución de Notas</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="h-80 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                        <p>Gráfico de distribución de notas</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
