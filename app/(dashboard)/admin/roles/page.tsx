import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, FileEdit, Trash2, Plus, ShieldCheck } from "lucide-react"

export default function RolesPage() {
  // Datos de ejemplo
  const roles = [
    {
      id: 1,
      nombre: "Administrador",
      descripcion: "Acceso completo al sistema",
      usuarios: 3,
      permisos: 25,
    },
    {
      id: 2,
      nombre: "Docente",
      descripcion: "Gestión de cursos y calificaciones",
      usuarios: 45,
      permisos: 15,
    },
    {
      id: 3,
      nombre: "Estudiante",
      descripcion: "Consulta de información académica",
      usuarios: 1250,
      permisos: 8,
    },
    {
      id: 4,
      nombre: "Coordinador",
      descripcion: "Gestión académica y supervisión",
      usuarios: 12,
      permisos: 20,
    },
    {
      id: 5,
      nombre: "Secretaría",
      descripcion: "Gestión administrativa",
      usuarios: 8,
      permisos: 12,
    },
  ]

  const modulos = [
    {
      id: 1,
      nombre: "Gestión de Estudiantes",
      permisos: ["Ver", "Crear", "Editar", "Eliminar"],
    },
    {
      id: 2,
      nombre: "Gestión de Docentes",
      permisos: ["Ver", "Crear", "Editar", "Eliminar"],
    },
    {
      id: 3,
      nombre: "Gestión de Cursos",
      permisos: ["Ver", "Crear", "Editar", "Eliminar"],
    },
    {
      id: 4,
      nombre: "Evaluación y Calificaciones",
      permisos: ["Ver", "Crear", "Editar", "Eliminar"],
    },
    {
      id: 5,
      nombre: "Comunicación",
      permisos: ["Ver", "Crear", "Editar", "Eliminar"],
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Gestión de Roles y Permisos</h1>
          <p className="text-gray-600 mt-1">Administre los roles y permisos de los usuarios del sistema</p>
        </div>

        <Tabs defaultValue="roles" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="roles" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Roles
            </TabsTrigger>
            <TabsTrigger value="nuevo" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nuevo Rol
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roles">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Roles del Sistema</CardTitle>
                <CardDescription>Consulte y administre los roles existentes</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar rol..." className="pl-8 w-full" />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuevo Rol
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
                        <TableHead className="hidden md:table-cell">Descripción</TableHead>
                        <TableHead className="text-center">Usuarios</TableHead>
                        <TableHead className="text-center">Permisos</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roles.map((rol) => (
                        <TableRow key={rol.id}>
                          <TableCell className="font-medium">{rol.id}</TableCell>
                          <TableCell>{rol.nombre}</TableCell>
                          <TableCell className="hidden md:table-cell">{rol.descripcion}</TableCell>
                          <TableCell className="text-center">{rol.usuarios}</TableCell>
                          <TableCell className="text-center">{rol.permisos}</TableCell>
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
                  <ShieldCheck className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Crear Nuevo Rol</CardTitle>
                    <CardDescription>Defina un nuevo rol y asigne permisos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre del Rol</Label>
                      <Input id="nombre" placeholder="Ej: Coordinador Académico" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Input id="descripcion" placeholder="Breve descripción del rol" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Permisos por Módulo</Label>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Módulo</TableHead>
                            <TableHead className="text-center">Ver</TableHead>
                            <TableHead className="text-center">Crear</TableHead>
                            <TableHead className="text-center">Editar</TableHead>
                            <TableHead className="text-center">Eliminar</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {modulos.map((modulo) => (
                            <TableRow key={modulo.id}>
                              <TableCell className="font-medium">{modulo.nombre}</TableCell>
                              {modulo.permisos.map((permiso, index) => (
                                <TableCell key={index} className="text-center">
                                  <Checkbox id={`${modulo.id}-${permiso}`} />
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Rol</Button>
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
