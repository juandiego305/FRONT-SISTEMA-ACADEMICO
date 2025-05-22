import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, FileEdit, Trash2, Download, BookOpen } from "lucide-react"
import Link from "next/link"

export default function GestionMateriasPage() {
  // Datos de ejemplo
  const materias = [
    {
      id: "M001",
      nombre: "Cálculo Diferencial",
      codigo: "MAT101",
      departamento: "Ciencias",
      creditos: 4,
      nivel: "Pregrado",
      estado: "Activo",
    },
    {
      id: "M002",
      nombre: "Programación Básica",
      codigo: "INF101",
      departamento: "Informática",
      creditos: 3,
      nivel: "Pregrado",
      estado: "Activo",
    },
    {
      id: "M003",
      nombre: "Literatura Clásica",
      codigo: "LET101",
      departamento: "Humanidades",
      creditos: 3,
      nivel: "Pregrado",
      estado: "Inactivo",
    },
    {
      id: "M004",
      nombre: "Física Mecánica",
      codigo: "FIS101",
      departamento: "Ciencias",
      creditos: 4,
      nivel: "Pregrado",
      estado: "Activo",
    },
    {
      id: "M005",
      nombre: "Química General",
      codigo: "QUI101",
      departamento: "Ciencias",
      creditos: 4,
      nivel: "Pregrado",
      estado: "Activo",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Gestión de Materias</h1>
            <p className="text-gray-600 mt-1">Administre las materias del sistema académico</p>
          </div>
          <Link href="/cursos">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Listado de Materias
            </TabsTrigger>
            <TabsTrigger value="nueva" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nueva Materia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Materias Registradas</CardTitle>
                <CardDescription>Consulte y administre las materias registradas en el sistema</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar materia..." className="pl-8 w-full" />
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
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Código</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead className="hidden md:table-cell">Créditos</TableHead>
                        <TableHead className="hidden md:table-cell">Departamento</TableHead>
                        <TableHead className="hidden md:table-cell">Nivel</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {materias.map((materia) => (
                        <TableRow key={materia.id}>
                          <TableCell className="font-medium">{materia.codigo}</TableCell>
                          <TableCell>{materia.nombre}</TableCell>
                          <TableCell className="hidden md:table-cell">{materia.creditos}</TableCell>
                          <TableCell className="hidden md:table-cell">{materia.departamento}</TableCell>
                          <TableCell className="hidden md:table-cell">{materia.nivel}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                materia.estado === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {materia.estado}
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
                  <BookOpen className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Registrar Nueva Materia</CardTitle>
                    <CardDescription>Complete el formulario para crear una nueva materia</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre de la Materia</Label>
                      <Input id="nombre" placeholder="Ingrese el nombre de la materia" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codigo">Código de la Materia</Label>
                      <Input id="codigo" placeholder="Ej: MAT101" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="creditos">Créditos</Label>
                      <Input id="creditos" type="number" min="1" max="10" placeholder="Ej: 3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departamento">Departamento</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione departamento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ciencias">Ciencias</SelectItem>
                          <SelectItem value="informatica">Informática</SelectItem>
                          <SelectItem value="humanidades">Humanidades</SelectItem>
                          <SelectItem value="ingenieria">Ingeniería</SelectItem>
                          <SelectItem value="medicina">Medicina</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nivel">Nivel</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione nivel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pregrado">Pregrado</SelectItem>
                          <SelectItem value="postgrado">Postgrado</SelectItem>
                          <SelectItem value="doctorado">Doctorado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Select defaultValue="activo">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="activo">Activo</SelectItem>
                          <SelectItem value="inactivo">Inactivo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Input id="descripcion" placeholder="Ingrese una descripción de la materia" />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Materia</Button>
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
