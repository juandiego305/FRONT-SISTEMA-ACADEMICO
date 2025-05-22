import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Download, Save, Calendar } from "lucide-react"
import Link from "next/link"

export default function AsistenciaEstudiantesPage() {
  // Datos de ejemplo
  const estudiantes = [
    {
      id: "001",
      nombre: "Ana María García López",
      asistencia: [true, true, false, true, true, true, true, true],
    },
    {
      id: "002",
      nombre: "Carlos Rodríguez Pérez",
      asistencia: [true, true, true, true, false, true, true, true],
    },
    {
      id: "003",
      nombre: "Laura Martínez Sánchez",
      asistencia: [true, true, true, true, true, true, true, true],
    },
    {
      id: "004",
      nombre: "Juan López Torres",
      asistencia: [false, true, false, true, true, false, true, true],
    },
    {
      id: "005",
      nombre: "María Hernández Gómez",
      asistencia: [true, true, true, true, true, true, false, true],
    },
  ]

  // Fechas de clase (ejemplo)
  const fechas = [
    "01/03/2023",
    "08/03/2023",
    "15/03/2023",
    "22/03/2023",
    "29/03/2023",
    "05/04/2023",
    "12/04/2023",
    "19/04/2023",
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Gestión de Asistencia</h1>
            <p className="text-gray-600 mt-1">Controle la asistencia de los estudiantes a clases</p>
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
                <CardTitle className="text-xl text-red-700">Registro de Asistencia</CardTitle>
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
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Estudiante</TableHead>
                    {fechas.map((fecha, index) => (
                      <TableHead key={index} className="text-center">
                        <div className="flex flex-col items-center">
                          <span>{fecha}</span>
                          <span className="text-xs text-gray-500">Clase {index + 1}</span>
                        </div>
                      </TableHead>
                    ))}
                    <TableHead className="text-center">Asistencia</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {estudiantes.map((estudiante) => (
                    <TableRow key={estudiante.id}>
                      <TableCell className="font-medium">{estudiante.id}</TableCell>
                      <TableCell>{estudiante.nombre}</TableCell>
                      {estudiante.asistencia.map((presente, index) => (
                        <TableCell key={index} className="text-center">
                          <Checkbox
                            className="mx-auto"
                            defaultChecked={presente}
                            aria-label={`Asistencia de ${estudiante.nombre} el ${fechas[index]}`}
                          />
                        </TableCell>
                      ))}
                      <TableCell className="text-center">
                        {Math.round(
                          (estudiante.asistencia.filter((presente) => presente).length / estudiante.asistencia.length) *
                            100,
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Agregar Fecha
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
