import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Search, FileEdit, Trash2, Download } from "lucide-react"

export default function RegistroEstudiantesPage() {
  // Datos de ejemplo
  const estudiantes = [
    {
      id: "001",
      nombre: "Ana María",
      apellido: "García López",
      documento: "1234567890",
      email: "ana.garcia@ejemplo.com",
      estado: "Activo",
    },
    {
      id: "002",
      nombre: "Carlos",
      apellido: "Rodríguez Pérez",
      documento: "0987654321",
      email: "carlos.rodriguez@ejemplo.com",
      estado: "Activo",
    },
    {
      id: "003",
      nombre: "Laura",
      apellido: "Martínez Sánchez",
      documento: "5678901234",
      email: "laura.martinez@ejemplo.com",
      estado: "Inactivo",
    },
    {
      id: "004",
      nombre: "Juan",
      apellido: "López Torres",
      documento: "4321098765",
      email: "juan.lopez@ejemplo.com",
      estado: "Activo",
    },
    {
      id: "005",
      nombre: "María",
      apellido: "Hernández Gómez",
      documento: "6789012345",
      email: "maria.hernandez@ejemplo.com",
      estado: "Activo",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Registro y Actualización de Estudiantes</h1>
          <p className="text-gray-600 mt-1">Gestione la información personal y académica de los estudiantes</p>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Listado de Estudiantes
            </TabsTrigger>
            <TabsTrigger value="registro" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nuevo Estudiante
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Estudiantes Registrados</CardTitle>
                <CardDescription>Consulte y administre los estudiantes registrados en el sistema</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar estudiante..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="activo">Activo</SelectItem>
                      <SelectItem value="inactivo">Inactivo</SelectItem>
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
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido</TableHead>
                        <TableHead className="hidden md:table-cell">Documento</TableHead>
                        <TableHead className="hidden md:table-cell">Email</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {estudiantes.map((estudiante) => (
                        <TableRow key={estudiante.id}>
                          <TableCell className="font-medium">{estudiante.id}</TableCell>
                          <TableCell>{estudiante.nombre}</TableCell>
                          <TableCell>{estudiante.apellido}</TableCell>
                          <TableCell className="hidden md:table-cell">{estudiante.documento}</TableCell>
                          <TableCell className="hidden md:table-cell">{estudiante.email}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                estudiante.estado === "Activo"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {estudiante.estado}
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

          <TabsContent value="registro">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserPlus className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Registrar Nuevo Estudiante</CardTitle>
                    <CardDescription>Complete el formulario para registrar un nuevo estudiante</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Ingrese el nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" placeholder="Ingrese el apellido" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo-documento">Tipo de Documento</Label>
                      <Select defaultValue="dni">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dni">DNI</SelectItem>
                          <SelectItem value="pasaporte">Pasaporte</SelectItem>
                          <SelectItem value="cedula">Cédula</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="documento">Número de Documento</Label>
                      <Input id="documento" placeholder="Ingrese el número de documento" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="Ingrese el teléfono" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fecha-nacimiento">Fecha de Nacimiento</Label>
                      <Input id="fecha-nacimiento" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="direccion">Dirección</Label>
                      <Input id="direccion" placeholder="Ingrese la dirección" />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Estudiante</Button>
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
