"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, PlusCircle, Paperclip, MessageSquare } from "lucide-react"

export default function MensajeriaPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>("chat1")

  // Datos de ejemplo
  const contactos = [
    {
      id: "chat1",
      nombre: "Roberto Gómez",
      rol: "Docente",
      ultimoMensaje: "Hola, ¿cómo estás?",
      hora: "10:30",
      noLeidos: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "chat2",
      nombre: "María Montessori",
      rol: "Docente",
      ultimoMensaje: "¿Cuándo es la próxima reunión?",
      hora: "Ayer",
      noLeidos: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "chat3",
      nombre: "Juan López",
      rol: "Estudiante",
      ultimoMensaje: "Gracias por la información",
      hora: "Lun",
      noLeidos: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "chat4",
      nombre: "Coordinación Académica",
      rol: "Departamento",
      ultimoMensaje: "Recordatorio: Entrega de notas",
      hora: "25/04",
      noLeidos: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const mensajes = [
    {
      id: 1,
      remitente: "Roberto Gómez",
      mensaje: "Hola, ¿cómo estás?",
      hora: "10:30",
      esPropio: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      remitente: "Tú",
      mensaje: "Hola Roberto, estoy bien gracias. ¿Y tú?",
      hora: "10:32",
      esPropio: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      remitente: "Roberto Gómez",
      mensaje: "Todo bien. Quería consultarte sobre las calificaciones del último examen.",
      hora: "10:35",
      esPropio: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      remitente: "Roberto Gómez",
      mensaje: "¿Ya están disponibles para revisión?",
      hora: "10:35",
      esPropio: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Mensajería Interna</h1>
          <p className="text-gray-600 mt-1">Comuníquese con otros usuarios del sistema</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-red-700">Conversaciones</CardTitle>
              <CardDescription>Chats recientes</CardDescription>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Buscar contacto..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col divide-y">
                {contactos.map((contacto) => (
                  <button
                    key={contacto.id}
                    className={`flex items-start gap-3 p-3 text-left hover:bg-gray-50 ${
                      selectedChat === contacto.id ? "bg-red-50" : ""
                    }`}
                    onClick={() => setSelectedChat(contacto.id)}
                  >
                    <Avatar>
                      <AvatarImage src={contacto.avatar || "/placeholder.svg"} alt={contacto.nombre} />
                      <AvatarFallback>{contacto.nombre.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{contacto.nombre}</span>
                        <span className="text-xs text-gray-500">{contacto.hora}</span>
                      </div>
                      <div className="text-xs text-gray-500">{contacto.rol}</div>
                      <p className="text-sm truncate">{contacto.ultimoMensaje}</p>
                    </div>
                    {contacto.noLeidos > 0 && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                        {contacto.noLeidos}
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="p-3">
                <Button variant="outline" className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nuevo mensaje
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            {selectedChat ? (
              <>
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={contactos.find((c) => c.id === selectedChat)?.avatar || "/placeholder.svg"}
                        alt={contactos.find((c) => c.id === selectedChat)?.nombre}
                      />
                      <AvatarFallback>
                        {contactos.find((c) => c.id === selectedChat)?.nombre.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{contactos.find((c) => c.id === selectedChat)?.nombre}</CardTitle>
                      <CardDescription>{contactos.find((c) => c.id === selectedChat)?.rol}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col h-[400px]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {mensajes.map((mensaje) => (
                      <div
                        key={mensaje.id}
                        className={`flex ${mensaje.esPropio ? "justify-end" : "justify-start"} gap-2`}
                      >
                        {!mensaje.esPropio && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={mensaje.avatar || "/placeholder.svg"} alt={mensaje.remitente} />
                            <AvatarFallback>{mensaje.remitente.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            mensaje.esPropio ? "bg-red-600 text-white rounded-tr-none" : "bg-gray-100 rounded-tl-none"
                          }`}
                        >
                          <p className="text-sm">{mensaje.mensaje}</p>
                          <span
                            className={`text-xs ${mensaje.esPropio ? "text-red-100" : "text-gray-500"} block text-right`}
                          >
                            {mensaje.hora}
                          </span>
                        </div>
                        {mensaje.esPropio && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tú" />
                            <AvatarFallback>TÚ</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t">
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="shrink-0">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Textarea placeholder="Escribe un mensaje..." className="min-h-[40px] resize-none" rows={1} />
                      <Button className="shrink-0 bg-red-600 hover:bg-red-700">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex flex-col items-center justify-center h-[500px] text-center">
                <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium">No hay conversación seleccionada</h3>
                <p className="text-gray-500 mt-2">Seleccione una conversación para comenzar a chatear</p>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
