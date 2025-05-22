"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, AlertCircle, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RecuperarPasswordPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [codigo, setCodigo] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSolicitarCodigo = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Por favor ingrese su correo electrónico")
      return
    }

    try {
      setIsLoading(true)
      // Simulación de envío de código
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStep(2)
    } catch (err) {
      setError("Error al enviar el código. Intente nuevamente.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerificarCodigo = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!codigo) {
      setError("Por favor ingrese el código de verificación")
      return
    }

    try {
      setIsLoading(true)
      // Simulación de verificación de código
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStep(3)
    } catch (err) {
      setError("Código de verificación inválido. Intente nuevamente.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCambiarPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!newPassword || !confirmPassword) {
      setError("Por favor complete todos los campos")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }

    try {
      setIsLoading(true)
      // Simulación de cambio de contraseña
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch (err) {
      setError("Error al cambiar la contraseña. Intente nuevamente.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-red-600 rounded-full mb-4">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-red-600">DIVISIT</h1>
          <p className="text-gray-600 mt-1">Sistema Académico</p>
        </div>

        <Card className="border-red-100">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-red-700">Recuperar Contraseña</CardTitle>
            <CardDescription className="text-center">
              {step === 1 && "Ingrese su correo electrónico para recibir un código de verificación"}
              {step === 2 && "Ingrese el código de verificación enviado a su correo"}
              {step === 3 && "Cree una nueva contraseña para su cuenta"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success ? (
              <div className="text-center py-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">¡Contraseña Actualizada!</h3>
                <p className="text-gray-600 mb-6">
                  Su contraseña ha sido actualizada correctamente. Ya puede iniciar sesión con su nueva contraseña.
                </p>
                <Link href="/login">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Ir a Iniciar Sesión</Button>
                </Link>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <form onSubmit={handleSolicitarCodigo} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Enviando código..." : "Enviar Código de Verificación"}
                    </Button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleVerificarCodigo} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="codigo">Código de Verificación</Label>
                      <Input
                        id="codigo"
                        placeholder="Ingrese el código recibido"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        required
                      />
                      <p className="text-sm text-gray-500">Se ha enviado un código de verificación a {email}</p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Verificando..." : "Verificar Código"}
                    </Button>

                    <Button
                      type="button"
                      variant="link"
                      className="w-full text-red-600"
                      onClick={() => setStep(1)}
                      disabled={isLoading}
                    >
                      Volver a enviar código
                    </Button>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={handleCambiarPassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Ingrese su nueva contraseña"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirme su nueva contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Actualizando..." : "Actualizar Contraseña"}
                    </Button>
                  </form>
                )}
              </>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <Link href="/login" className="text-red-600 hover:underline flex items-center justify-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Volver a Iniciar Sesión
              </Link>
            </div>
            <div className="text-center text-xs text-gray-500">
              <p>© {new Date().getFullYear()} Divisit. Todos los derechos reservados.</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
