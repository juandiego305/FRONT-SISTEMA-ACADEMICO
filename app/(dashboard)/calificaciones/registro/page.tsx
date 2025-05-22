import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Save, Download } from "lucide-react"

export default function RegistroCalificacionesPage() {
  // Datos de ejemplo
  const estudiantes = [
    {
      id: "001",
      nombre: "Ana María García López",
      parcial1: 85,
      parcial2: 78,
      trabajos: 90,
      final: 88,
      promedio: 85.3,
    },
    {
      id: "002",
      nombre: "Carlos Rodríguez Pérez",
      parcial1: 75,
      parcial2: 82,
      trabajos: 88,
      final: 79,
      promedio: 81.0,
    },
    {
      id: "003",
      nombre: "Laura Martínez Sánchez",
      parcial1: 92,
      parcial2: 95,
      trabajos: 94,
      final: 96,
      promedio: 94.3,
    },
    {
      id: "004",
      nombre: "Juan López Torres",
      parcial1: 68,
      parcial2: 72,
      trabajos: 80,
      final: 75,
      promedio: 73.8,
    },
    {
      id: "005",
      nombre: "María Hernández Gómez",
      parcial1: 88,
      parcial2: 85,
      trabajos: 92,
      final: 90,
      promedio: 88.8,
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Registro de Calificaciones</h1>
          <p className="text-gray-600 mt-1">Registre y actualice las calificaciones de los estudiantes</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-red-700">Seleccionar Curso</CardTitle>
            <CardDescription>Seleccione el curso para registrar calificaciones</CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Select defaultValue="">
                <SelectTrigger className="w-full sm:w-[250px]">
                  <SelectValue placeholder="Seleccione período académico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-1">2023 - Primer Semestre</SelectItem>
                  <SelectItem value="2023-2">2023 - Segundo Semestre</SelectItem>
                  <SelectItem value="2024-1">2024 - Primer Semestre</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="">
                <SelectTrigger className="w-full flex-1">
                  <SelectValue placeholder="Seleccione curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MAT301">MAT301 - Matemáticas Avanzadas</SelectItem>
                  <SelectItem value="INF202">INF202 - Programación Orientada a Objetos</SelectItem>
                  <SelectItem value="FIS401">FIS401 - Física Cuántica</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Matemáticas Avanzadas (MAT301)</CardTitle>
                    <CardDescription>Período: 2023 - Primer Semestre</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="h-8">
                      <Search className="mr-2 h-4 w-4" />
                      Buscar
                    </Button>
                    <Button variant="outline" className="h-8">
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
                        <TableHead className="text-center">Parcial 1 (20%)</TableHead>
                        <TableHead className="text-center">Parcial 2 (20%)</TableHead>
                        <TableHead className="text-center">Trabajos (30%)</TableHead>
                        <TableHead className="text-center">Final (30%)</TableHead>
                        <TableHead className="text-center">Promedio</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {estudiantes.map((estudiante) => (
                        <TableRow key={estudiante.id}>
                          <TableCell className="font-medium">{estudiante.id}</TableCell>
                          <TableCell>{estudiante.nombre}</TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              defaultValue={estudiante.parcial1}
                              className="h-8 text-center"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              defaultValue={estudiante.parcial2}
                              className="h-8 text-center"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              defaultValue={estudiante.trabajos}
                              className="h-8 text-center"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              defaultValue={estudiante.final}
                              className="h-8 text-center"
                            />
                          </TableCell>
                          <TableCell className="text-center font-medium">{estudiante.promedio.toFixed(1)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-end mt-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Calificaciones
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
