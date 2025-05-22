import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileEdit, ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

export default function MatriculaEstudiantesPage() {
  // Datos de ejemplo
  const matriculas = [
    {
      id: "M001",
      estudiante: "Ana María García López",
      codigo: "EST001",
      curso: "Matemáticas Avanzadas",
      codigoCurso: "MAT301",
      periodo: "2023-1",
      estado: "Activa",
    },
    {
      id: "M002",
      estudiante: "Carlos Rodríguez Pérez",
      codigo: "EST002",
      curso: "Programación Orientada a Objetos",
      codigoCurso: "INF202",
      periodo: "2023-1",
      estado: "Activa",
    },
    {
      id: "M003",
      estudiante: "Laura Martínez Sánchez",
      codigo: "EST003",
      curso: "Física Cuántica",
      codigoCurso: "FIS401",
      periodo: "2023-1",
      estado: "Cancelada",
    },
    {
      id: "M004",
      estudiante: "Juan López Torres",
      codigo: "EST004",
      curso: "Literatura Contemporánea",
      codigoCurso: "LET105",
      periodo: "2023-1",
      estado: "Activa",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Matrícula e Inscripción</h1>
            <p className="text-gray-600 mt-1">Gestione las matrículas e inscripciones de los estudiantes</p>
          </div>
          <Link href="/estudiantes">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-red-700">Matrículas Registradas</CardTitle>
            <CardDescription>Consulte y administre las matrículas de los estudiantes</CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Buscar matrícula..." className="pl-8 w-full" />
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
                <Plus className="mr-2 h-4 w-4" />
                Nueva Matrícula
              </Button>
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
                    <TableHead className="hidden md:table-cell">Período</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {matriculas.map((matricula) => (
                    <TableRow key={matricula.id}>
                      <TableCell className="font-medium">{matricula.id}</TableCell>
                      <TableCell>{matricula.estudiante}</TableCell>
                      <TableCell className="hidden md:table-cell">{matricula.codigo}</TableCell>
                      <TableCell>{matricula.curso}</TableCell>
                      <TableCell className="hidden md:table-cell">{matricula.periodo}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            matricula.estado === "Activa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {matricula.estado}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <FileEdit className="mr-2 h-4 w-4" />
                            Editar
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Nueva Matrícula</CardTitle>
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
                        <Label htmlFor="estado">Estado</Label>
                        <Select defaultValue="activa">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="activa">Activa</SelectItem>
                            <SelectItem value="pendiente">Pendiente</SelectItem>
                            <SelectItem value="cancelada">Cancelada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Matrícula</Button>
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
