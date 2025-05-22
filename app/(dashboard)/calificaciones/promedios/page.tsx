import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function PromediosPage() {
  // Datos de ejemplo
  const promedios = [
    {
      id: "001",
      nombre: "Ana María García López",
      parcial1: 85,
      parcial2: 78,
      trabajos: 90,
      final: 88,
      promedio: 85.3,
      estado: "Aprobado",
    },
    {
      id: "002",
      nombre: "Carlos Rodríguez Pérez",
      parcial1: 75,
      parcial2: 82,
      trabajos: 88,
      final: 79,
      promedio: 81.0,
      estado: "Aprobado",
    },
    {
      id: "003",
      nombre: "Laura Martínez Sánchez",
      parcial1: 92,
      parcial2: 95,
      trabajos: 94,
      final: 96,
      promedio: 94.3,
      estado: "Aprobado",
    },
    {
      id: "004",
      nombre: "Juan López Torres",
      parcial1: 68,
      parcial2: 72,
      trabajos: 80,
      final: 75,
      promedio: 73.8,
      estado: "Aprobado",
    },
    {
      id: "005",
      nombre: "María Hernández Gómez",
      parcial1: 88,
      parcial2: 85,
      trabajos: 92,
      final: 90,
      promedio: 88.8,
      estado: "Aprobado",
    },
    {
      id: "006",
      nombre: "Pedro Sánchez Gómez",
      parcial1: 55,
      parcial2: 60,
      trabajos: 65,
      final: 58,
      promedio: 59.5,
      estado: "Reprobado",
    },
  ]

  // Estadísticas
  const estadisticas = {
    promedioGeneral: 80.5,
    aprobados: 5,
    reprobados: 1,
    porcentajeAprobacion: 83.3,
    notaMaxima: 94.3,
    notaMinima: 59.5,
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Cálculo de Promedios y Estadísticas</h1>
            <p className="text-gray-600 mt-1">Visualice promedios y estadísticas de rendimiento</p>
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
                <CardTitle className="text-xl text-red-700">Promedios por Curso</CardTitle>
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
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Promedio General</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">{estadisticas.promedioGeneral.toFixed(1)}</div>
                  <p className="text-sm text-gray-500">Sobre 100 puntos</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tasa de Aprobación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">{estadisticas.porcentajeAprobacion.toFixed(1)}%</div>
                  <p className="text-sm text-gray-500">
                    {estadisticas.aprobados} aprobados, {estadisticas.reprobados} reprobados
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Rango de Notas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">
                    {estadisticas.notaMinima.toFixed(1)} - {estadisticas.notaMaxima.toFixed(1)}
                  </div>
                  <p className="text-sm text-gray-500">Nota mínima y máxima</p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead className="text-center">Parcial 1 (20%)</TableHead>
                    <TableHead className="text-center">Parcial 2 (20%)</TableHead>
                    <TableHead className="text-center">Trabajos (30%)</TableHead>
                    <TableHead className="text-center">Final (30%)</TableHead>
                    <TableHead className="text-center">Promedio</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {promedios.map((estudiante) => (
                    <TableRow key={estudiante.id}>
                      <TableCell className="font-medium">{estudiante.id}</TableCell>
                      <TableCell>{estudiante.nombre}</TableCell>
                      <TableCell className="text-center">{estudiante.parcial1}</TableCell>
                      <TableCell className="text-center">{estudiante.parcial2}</TableCell>
                      <TableCell className="text-center">{estudiante.trabajos}</TableCell>
                      <TableCell className="text-center">{estudiante.final}</TableCell>
                      <TableCell className="text-center font-medium">{estudiante.promedio.toFixed(1)}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            estudiante.estado === "Aprobado" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {estudiante.estado}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-lg">Distribución de Calificaciones</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-around gap-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-red-200 w-12 h-8 rounded-t-md"></div>
                      <div className="text-xs mt-1">50-59</div>
                      <div className="text-xs text-gray-500">1</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-red-300 w-12 h-16 rounded-t-md"></div>
                      <div className="text-xs mt-1">60-69</div>
                      <div className="text-xs text-gray-500">0</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-red-400 w-12 h-32 rounded-t-md"></div>
                      <div className="text-xs mt-1">70-79</div>
                      <div className="text-xs text-gray-500">1</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-red-500 w-12 h-48 rounded-t-md"></div>
                      <div className="text-xs mt-1">80-89</div>
                      <div className="text-xs text-gray-500">3</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-red-600 w-12 h-24 rounded-t-md"></div>
                      <div className="text-xs mt-1">90-100</div>
                      <div className="text-xs text-gray-500">1</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
