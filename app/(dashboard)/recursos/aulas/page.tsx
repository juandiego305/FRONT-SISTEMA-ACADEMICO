"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Search, Building } from "lucide-react"

export default function AulasPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Datos de ejemplo
  const aulas = [
    {
      id: "A101",
      nombre: "Aula 101",
      edificio: "Edificio A",
      capacidad: 30,
      tipo: "Aula",
      recursos: ["Proyector", "Pizarra", "Aire acondicionado"],
      estado: "Disponible",
    },
    {
      id: "A102",
      nombre: "Aula 102",
      edificio: "Edificio A",
      capacidad: 25,
      tipo: "Aula",
      recursos: ["Proyector", "Pizarra"],
      estado: "Ocupado",
    },
    {
      id: "B201",
      nombre: "Laboratorio 201",
      edificio: "Edificio B",
      capacidad: 20,
      tipo: "Laboratorio",
      recursos: ["Computadoras", "Proyector", "Pizarra"],
      estado: "Disponible",
    },
    {
      id: "C301",
      nombre: "Auditorio Principal",
      edificio: "Edificio C",
      capacidad: 100,
      tipo: "Auditorio",
      recursos: ["Proyector", "Sistema de sonido", "Aire acondicionado"],
      estado: "Mantenimiento",
    },
  ]

  const reservas = [
    {
      id: "R001",
      aula: "Aula 101",
      edificio: "Edificio A",
      fecha: "2024-05-21",
      horaInicio: "08:00",
      horaFin: "10:00",
      solicitante: "Roberto Gómez",
      motivo: "Clase de Matemáticas",
      estado: "Confirmada",
    },
    {
      id: "R002",
      aula: "Laboratorio 201",
      edificio: "Edificio B",
      fecha: "2024-05-21",
      horaInicio: "14:00",
      horaFin: "16:00",
      solicitante: "María Montessori",
      motivo: "Práctica de Programación",
      estado: "Pendiente",
    },
    {
      id: "R003",
      aula: "Auditorio Principal",
      edificio: "Edificio C",
      fecha: "2024-05-22",
      horaInicio: "10:00",
      horaFin: "12:00",
      solicitante: "Coordinación Académica",
      motivo: "Conferencia",
      estado: "Confirmada",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Reserva de Aulas y Laboratorios</h1>
          <p className="text-gray-600 mt-1">Gestione la reserva de espacios físicos para clases y actividades</p>
        </div>

        <Tabs defaultValue="disponibilidad" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
            <TabsTrigger
              value="disponibilidad"
              className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
            >
              Disponibilidad
            </TabsTrigger>
            <TabsTrigger value="reservas" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Mis Reservas
            </TabsTrigger>
            <TabsTrigger value="nueva" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
              Nueva Reserva
            </TabsTrigger>
          </TabsList>

          <TabsContent value="disponibilidad">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Disponibilidad de Espacios</CardTitle>
                <CardDescription>Consulte la disponibilidad de aulas y laboratorios</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar aula o laboratorio..." className="pl-8 w-full" />
                  </div>
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="aula">Aula</SelectItem>
                      <SelectItem value="laboratorio">Laboratorio</SelectItem>
                      <SelectItem value="auditorio">Auditorio</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full sm:w-[200px] justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aulas.map((aula) => (
                    <Card key={aula.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{aula.nombre}</CardTitle>
                            <CardDescription>{aula.edificio}</CardDescription>
                          </div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              aula.estado === "Disponible"
                                ? "bg-green-100 text-green-800"
                                : aula.estado === "Ocupado"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {aula.estado}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Tipo:</span>
                            <span>{aula.tipo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Capacidad:</span>
                            <span>{aula.capacidad} personas</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Recursos:</span>
                            <span className="text-right">{aula.recursos.join(", ")}</span>
                          </div>
                        </div>
                      </CardContent>
                      <div className="bg-gray-50 px-4 py-3 border-t">
                        <Button
                          className="w-full bg-red-600 hover:bg-red-700 text-white"
                          disabled={aula.estado !== "Disponible"}
                        >
                          Reservar
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reservas">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Mis Reservas</CardTitle>
                <CardDescription>Consulte y administre sus reservas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reservas.map((reserva) => (
                    <Card key={reserva.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{reserva.aula}</CardTitle>
                            <CardDescription>{reserva.edificio}</CardDescription>
                          </div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              reserva.estado === "Confirmada"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {reserva.estado}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Fecha:</span>
                            <span>{new Date(reserva.fecha).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Horario:</span>
                            <span>
                              {reserva.horaInicio} - {reserva.horaFin}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Motivo:</span>
                            <span className="text-right">{reserva.motivo}</span>
                          </div>
                        </div>
                      </CardContent>
                      <div className="bg-gray-50 px-4 py-3 border-t flex justify-end gap-2">
                        <Button variant="outline">Modificar</Button>
                        <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          Cancelar
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nueva">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle className="text-xl text-red-700">Nueva Reserva</CardTitle>
                    <CardDescription>Complete el formulario para reservar un espacio</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="espacio">Espacio</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un espacio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A101">Aula 101 - Edificio A</SelectItem>
                          <SelectItem value="A102">Aula 102 - Edificio A</SelectItem>
                          <SelectItem value="B201">Laboratorio 201 - Edificio B</SelectItem>
                          <SelectItem value="C301">Auditorio Principal - Edificio C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fecha">Fecha</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="horaInicio">Hora de inicio</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione hora" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="horaFin">Hora de fin</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione hora" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="motivo">Motivo de la reserva</Label>
                      <Input id="motivo" placeholder="Ej: Clase de Matemáticas, Reunión de coordinación, etc." />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="observaciones">Observaciones (opcional)</Label>
                      <Input id="observaciones" placeholder="Observaciones adicionales" />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Solicitar Reserva</Button>
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
