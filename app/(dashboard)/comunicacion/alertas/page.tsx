import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Search, Bell, Calendar, Clock, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export default function AlertasPage() {
  // Datos de ejemplo
  const alertas = [
    {
      id: "A001",
      titulo: "Entrega de Calificaciones",
      descripcion: "Recordatorio para la entrega de calificaciones del primer parcial",
      fecha: "2023-05-25",
      hora: "14:00",
      tipo: "Recordatorio",
      estado: "Pendiente",
    },
    {
      id: "A002",
      titulo: "Reunión de Coordinación",
      descripcion: "Reunión de coordinación académica para planificación del próximo semestre",
      fecha: "2023-05-28",
      hora: "10:00",
      tipo: "Evento",
      estado: "Pendiente",
    },
    {
      id: "A003",
      titulo: "Cierre de Semestre",
      descripcion: "Fecha límite para el cierre de actividades académicas del semestre",
      fecha: "2023-06-30",
      hora: "18:00",
      tipo: "Fecha Límite",
      estado: "Pendiente",
    },
    {
      id: "A004",
      titulo: "Mantenimiento del Sistema",
      descripcion: "El sistema estará en mantenimiento durante la madrugada",
      fecha: "2023-05-20",
      hora: "02:00",
      tipo: "Sistema",
      estado: "Completada",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Alertas y Recordatorios</h1>
            <p className="text-gray-600 mt-1">Gestione alertas y recordatorios para eventos importantes</p>
          </div>
          <Link href="/comunicacion">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="listado" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="listado" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Alertas y Recordatorios
            </TabsTrigger>
            <TabsTrigger value="nueva" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nueva Alerta
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listado">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Alertas y Recordatorios</CardTitle>
                <CardDescription>Consulte y administre las alertas y recordatorios del sistema</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar alerta..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="recordatorio">Recordatorio</SelectItem>
                      <SelectItem value="evento">Evento</SelectItem>
                      <SelectItem value="fecha-limite">Fecha Límite</SelectItem>
                      <SelectItem value="sistema">Sistema</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nueva Alerta
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Título</TableHead>
                        <TableHead className="hidden md:table-cell">Fecha</TableHead>
                        <TableHead className="hidden md:table-cell">Hora</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {alertas.map((alerta) => (
                        <TableRow key={alerta.id}>
                          <TableCell className="font-medium">{alerta.id}</TableCell>
                          <TableCell>{alerta.titulo}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            {new Date(alerta.fecha).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{alerta.hora}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                alerta.tipo === "Recordatorio"
                                  ? "bg-blue-100 text-blue-800"
                                  : alerta.tipo === "Evento"
                                    ? "bg-green-100 text-green-800"
                                    : alerta.tipo === "Fecha Límite"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {alerta.tipo}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                alerta.estado === "Pendiente"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {alerta.estado}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                Editar
                              </Button>
                              <Button variant="outline" size="icon" className="h-8 w-8 text-red-600">
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
                  <Bell className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Crear Nueva Alerta</CardTitle>
                    <CardDescription>Complete el formulario para crear una nueva alerta o recordatorio</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="titulo">Título</Label>
                      <Input id="titulo" placeholder="Ingrese el título de la alerta" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recordatorio">Recordatorio</SelectItem>
                          <SelectItem value="evento">Evento</SelectItem>
                          <SelectItem value="fecha-limite">Fecha Límite</SelectItem>
                          <SelectItem value="sistema">Sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fecha">Fecha</Label>
                      <div className="flex gap-2">
                        <Input id="fecha" type="date" className="flex-1" />
                        <Button variant="outline" size="icon">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hora">Hora</Label>
                      <div className="flex gap-2">
                        <Input id="hora" type="time" className="flex-1" />
                        <Button variant="outline" size="icon">
                          <Clock className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Textarea id="descripcion" placeholder="Ingrese una descripción detallada" rows={4} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="destinatarios">Destinatarios</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione destinatarios" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="todos">Todos los usuarios</SelectItem>
                          <SelectItem value="estudiantes">Estudiantes</SelectItem>
                          <SelectItem value="docentes">Docentes</SelectItem>
                          <SelectItem value="administrativos">Personal Administrativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Alerta</Button>
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
