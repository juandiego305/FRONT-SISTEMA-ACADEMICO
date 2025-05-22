import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Save, Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AsignacionCursosPage() {
  // Datos de ejemplo
  const asignaciones = [
    {
      id: "A001",
      docente: "Roberto Gómez Bolaños",
      curso: "Matemáticas Avanzadas",
      codigo: "MAT301",
      periodo: "2023-1",
      grupos: 2,
      horas: 8,
    },
    {
      id: "A002",
      docente: "María Montessori López",
      curso: "Pedagogía Moderna",
      codigo: "PED202",
      periodo: "2023-1",
      grupos: 1,
      horas: 6,
    },
    {
      id: "A003",
      docente: "Albert Einstein García",
      curso: "Física Cuántica",
      codigo: "FIS401",
      periodo: "2023-1",
      grupos: 1,
      horas: 10,
    },
    {
      id: "A004",
      docente: "Ada Lovelace Torres",
      curso: "Programación Orientada a Objetos",
      codigo: "INF202",
      periodo: "2023-1",
      grupos: 3,
      horas: 12,
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Asignación de Cursos a Docentes</h1>
            <p className="text-gray-600 mt-1">Gestione la asignación de cursos y horarios a los docentes</p>
          </div>
          <Link href="/docentes">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-red-700">Asignaciones Actuales</CardTitle>
            <CardDescription>Consulte y administre las asignaciones de cursos a docentes</CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Buscar asignación..." className="pl-8 w-full" />
              </div>
              <Select defaultValue="2023-1">
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Período académico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-1">2023 - Primer Semestre</SelectItem>
                  <SelectItem value="2023-2">2023 - Segundo Semestre</SelectItem>
                  <SelectItem value="2024-1">2024 - Primer Semestre</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Docente</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead className="hidden md:table-cell">Código</TableHead>
                    <TableHead className="hidden md:table-cell">Período</TableHead>
                    <TableHead className="text-center">Grupos</TableHead>
                    <TableHead className="text-center">Horas</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {asignaciones.map((asignacion) => (
                    <TableRow key={asignacion.id}>
                      <TableCell className="font-medium">{asignacion.id}</TableCell>
                      <TableCell>{asignacion.docente}</TableCell>
                      <TableCell>{asignacion.curso}</TableCell>
                      <TableCell className="hidden md:table-cell">{asignacion.codigo}</TableCell>
                      <TableCell className="hidden md:table-cell">{asignacion.periodo}</TableCell>
                      <TableCell className="text-center">{asignacion.grupos}</TableCell>
                      <TableCell className="text-center">{asignacion.horas}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Editar
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
                  <CardTitle className="text-lg">Nueva Asignación</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="docente">Docente</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un docente" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="d001">Roberto Gómez Bolaños</SelectItem>
                            <SelectItem value="d002">María Montessori López</SelectItem>
                            <SelectItem value="d003">Albert Einstein García</SelectItem>
                            <SelectItem value="d004">Ada Lovelace Torres</SelectItem>
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
                            <SelectItem value="c001">MAT301 - Matemáticas Avanzadas</SelectItem>
                            <SelectItem value="c002">PED202 - Pedagogía Moderna</SelectItem>
                            <SelectItem value="c003">FIS401 - Física Cuántica</SelectItem>
                            <SelectItem value="c004">INF202 - Programación Orientada a Objetos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="periodo">Período Académico</Label>
                        <Select defaultValue="2023-1">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione período" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023-1">2023 - Primer Semestre</SelectItem>
                            <SelectItem value="2023-2">2023 - Segundo Semestre</SelectItem>
                            <SelectItem value="2024-1">2024 - Primer Semestre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grupos">Número de Grupos</Label>
                        <Input id="grupos" type="number" min="1" defaultValue="1" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="horas">Horas Semanales</Label>
                        <Input id="horas" type="number" min="1" defaultValue="4" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Asignación
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
