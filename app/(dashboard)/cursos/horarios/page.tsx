import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function HorariosPage() {
  // Datos de ejemplo
  const horarios = [
    {
      id: "H001",
      curso: "Matemáticas Avanzadas",
      codigo: "MAT301",
      dia: "Lunes",
      horaInicio: "08:00",
      horaFin: "10:00",
      aula: "A101",
      docente: "Roberto Gómez Bolaños",
    },
    {
      id: "H002",
      curso: "Programación Orientada a Objetos",
      codigo: "INF202",
      dia: "Martes",
      horaInicio: "10:00",
      horaFin: "12:00",
      aula: "B201",
      docente: "Ada Lovelace Torres",
    },
    {
      id: "H003",
      curso: "Física Cuántica",
      codigo: "FIS401",
      dia: "Miércoles",
      horaInicio: "14:00",
      horaFin: "16:00",
      aula: "A102",
      docente: "Albert Einstein García",
    },
    {
      id: "H004",
      curso: "Literatura Contemporánea",
      codigo: "LET105",
      dia: "Jueves",
      horaInicio: "16:00",
      horaFin: "18:00",
      aula: "C301",
      docente: "María Montessori López",
    },
  ]

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  const horas = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Programación de Horarios</h1>
            <p className="text-gray-600 mt-1">Gestione los horarios de los cursos</p>
          </div>
          <Link href="/cursos">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-red-700">Horarios Programados</CardTitle>
            <CardDescription>Consulte y administre los horarios de los cursos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Curso</TableHead>
                    <TableHead>Código</TableHead>
                    <TableHead>Día</TableHead>
                    <TableHead>Hora Inicio</TableHead>
                    <TableHead>Hora Fin</TableHead>
                    <TableHead className="hidden md:table-cell">Aula</TableHead>
                    <TableHead className="hidden md:table-cell">Docente</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {horarios.map((horario) => (
                    <TableRow key={horario.id}>
                      <TableCell>{horario.curso}</TableCell>
                      <TableCell className="font-medium">{horario.codigo}</TableCell>
                      <TableCell>{horario.dia}</TableCell>
                      <TableCell>{horario.horaInicio}</TableCell>
                      <TableCell>{horario.horaFin}</TableCell>
                      <TableCell className="hidden md:table-cell">{horario.aula}</TableCell>
                      <TableCell className="hidden md:table-cell">{horario.docente}</TableCell>
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
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-lg">Nuevo Horario</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Label htmlFor="dia">Día</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un día" />
                          </SelectTrigger>
                          <SelectContent>
                            {dias.map((dia) => (
                              <SelectItem key={dia} value={dia.toLowerCase()}>
                                {dia}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aula">Aula</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un aula" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a101">A101 - Aula 101</SelectItem>
                            <SelectItem value="a102">A102 - Aula 102</SelectItem>
                            <SelectItem value="b201">B201 - Laboratorio 201</SelectItem>
                            <SelectItem value="c301">C301 - Auditorio Principal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="horaInicio">Hora de Inicio</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione hora" />
                          </SelectTrigger>
                          <SelectContent>
                            {horas.slice(0, -1).map((hora) => (
                              <SelectItem key={hora} value={hora}>
                                {hora}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="horaFin">Hora de Fin</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione hora" />
                          </SelectTrigger>
                          <SelectContent>
                            {horas.slice(1).map((hora) => (
                              <SelectItem key={hora} value={hora}>
                                {hora}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Clock className="mr-2 h-4 w-4" />
                        Guardar Horario
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
