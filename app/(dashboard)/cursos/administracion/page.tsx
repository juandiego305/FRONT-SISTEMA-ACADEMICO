import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Search, FileEdit, Trash2, Download, Plus } from "lucide-react"

export default function AdministracionCursosPage() {
  // Datos de ejemplo
  const cursos = [
    {
      id: "C001",
      nombre: "Matemáticas Avanzadas",
      codigo: "MAT301",
      creditos: 4,
      departamento: "Ciencias",
      nivel: "Pregrado",
      estado: "Activo",
    },
    {
      id: "C002",
      nombre: "Programación Orientada a Objetos",
      codigo: "INF202",
      creditos: 3,
      departamento: "Informática",
      nivel: "Pregrado",
      estado: "Activo",
    },
    {
      id: "C003",
      nombre: "Literatura Contemporánea",
      codigo: "LET105",
      creditos: 3,
      departamento: "Humanidades",
      nivel: "Pregrado",
      estado: "Inactivo",
    },
    {
      id: "C004",
      nombre: "Física Cuántica",
      codigo: "FIS401",
      creditos: 5,
      departamento: "Ciencias",
      nivel: "Postgrado",
      estado: "Activo",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Creación y Administración de Cursos</h1>
          <p className="text-gray-600 mt-1">Gestione la información de cursos y asignaturas</p>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Listado de Cursos
            </TabsTrigger>
            <TabsTrigger value="nuevo" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nuevo Curso
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Cursos Registrados</CardTitle>
                <CardDescription>Consulte y administre los cursos registrados en el sistema</CardDescription>
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
                      {cursos.map((curso) => (
                        <TableRow key={curso.id}>
                          <TableCell className="font-medium">{curso.codigo}</TableCell>
                          <TableCell>{curso.nombre}</TableCell>
                          <TableCell className="hidden md:table-cell">{curso.creditos}</TableCell>
                          <TableCell className="hidden md:table-cell">{curso.departamento}</TableCell>
                          <TableCell className="hidden md:table-cell">{curso.nivel}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                curso.estado === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {curso.estado}
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

          <TabsContent value="nuevo">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Registrar Nuevo Curso</CardTitle>
                    <CardDescription>Complete el formulario para crear un nuevo curso</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre del Curso</Label>
                      <Input id="nombre" placeholder="Ingrese el nombre del curso" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codigo">Código del Curso</Label>
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
                      <Label htmlFor="capacidad">Capacidad</Label>
                      <Input id="capacidad" type="number" min="1" placeholder="Ej: 30" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Textarea id="descripcion" placeholder="Ingrese una descripción del curso" rows={4} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Prerrequisitos</Label>
                      <div className="flex gap-2">
                        <Input placeholder="Buscar curso prerrequisito" className="flex-1" />
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">No hay prerrequisitos seleccionados</div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Curso</Button>
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
