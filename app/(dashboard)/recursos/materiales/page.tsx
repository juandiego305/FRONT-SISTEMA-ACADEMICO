import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, BookOpen, FileEdit, Trash2, Plus } from "lucide-react"
import Link from "next/link"

export default function MaterialesPage() {
  // Datos de ejemplo
  const materiales = [
    {
      id: "M001",
      nombre: "Libro de Matemáticas Avanzadas",
      tipo: "Libro",
      autor: "Roberto Gómez",
      disponible: 5,
      ubicacion: "Biblioteca Central",
      estado: "Disponible",
    },
    {
      id: "M002",
      nombre: "Presentación de Programación Orientada a Objetos",
      tipo: "Digital",
      autor: "Ada Lovelace",
      disponible: null,
      ubicacion: "Repositorio Digital",
      estado: "Disponible",
    },
    {
      id: "M003",
      nombre: "Kit de Laboratorio de Física",
      tipo: "Equipo",
      autor: null,
      disponible: 2,
      ubicacion: "Laboratorio B201",
      estado: "Prestado",
    },
    {
      id: "M004",
      nombre: "Antología de Literatura Contemporánea",
      tipo: "Libro",
      autor: "María Montessori",
      disponible: 0,
      ubicacion: "Biblioteca Central",
      estado: "Agotado",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Gestión de Materiales</h1>
            <p className="text-gray-600 mt-1">Administre los materiales didácticos y recursos educativos</p>
          </div>
          <Link href="/recursos">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Materiales
            </TabsTrigger>
            <TabsTrigger value="nuevo" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nuevo Material
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Materiales Disponibles</CardTitle>
                <CardDescription>Consulte y administre los materiales didácticos</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar material..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="libro">Libro</SelectItem>
                      <SelectItem value="digital">Digital</SelectItem>
                      <SelectItem value="equipo">Equipo</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuevo Material
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead className="hidden md:table-cell">Autor</TableHead>
                        <TableHead className="text-center">Disponibles</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {materiales.map((material) => (
                        <TableRow key={material.id}>
                          <TableCell className="font-medium">{material.id}</TableCell>
                          <TableCell>{material.nombre}</TableCell>
                          <TableCell>{material.tipo}</TableCell>
                          <TableCell className="hidden md:table-cell">{material.autor || "-"}</TableCell>
                          <TableCell className="text-center">
                            {material.disponible !== null ? material.disponible : "∞"}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                material.estado === "Disponible"
                                  ? "bg-green-100 text-green-800"
                                  : material.estado === "Prestado"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {material.estado}
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
                    <CardTitle className="text-xl text-red-700">Registrar Nuevo Material</CardTitle>
                    <CardDescription>Complete el formulario para registrar un nuevo material didáctico</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre del Material</Label>
                      <Input id="nombre" placeholder="Ingrese el nombre del material" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Material</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="libro">Libro</SelectItem>
                          <SelectItem value="digital">Digital</SelectItem>
                          <SelectItem value="equipo">Equipo</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="autor">Autor (Opcional)</Label>
                      <Input id="autor" placeholder="Ingrese el autor" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ubicacion">Ubicación</Label>
                      <Input id="ubicacion" placeholder="Ingrese la ubicación" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cantidad">Cantidad Disponible</Label>
                      <Input id="cantidad" type="number" min="0" placeholder="Ingrese la cantidad" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="disponible">Disponible</SelectItem>
                          <SelectItem value="prestado">Prestado</SelectItem>
                          <SelectItem value="agotado">Agotado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción</Label>
                    <Input id="descripcion" placeholder="Ingrese una descripción del material" />
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Material</Button>
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
