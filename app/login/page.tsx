"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, AlertCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    documento: "",
    codigo: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validación básica
    if (!formData.documento || !formData.codigo || !formData.password) {
      setError("Todos los campos son obligatorios")
      return
    }

    try {
      setIsLoading(true)

      // Simulación de autenticación
      // En un caso real, aquí se conectaría con el backend de Spring Boot
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Credenciales de prueba (en producción esto se validaría en el backend)
      if (formData.documento === "12345678" && formData.codigo === "EST001" && formData.password === "password") {
        // Almacenar información de sesión
        localStorage.setItem(
          "divisit-user",
          JSON.stringify({
            id: 1,
            nombre: "Usuario de Prueba",
            rol: "estudiante",
          }),
        )

        // Redireccionar al dashboard
        router.push("/dashboard")
      } else {
        setError("Credenciales incorrectas. Por favor, verifique sus datos.")
      }
    } catch (err) {
      setError("Error al iniciar sesión. Intente nuevamente.")
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
            <CardTitle className="text-2xl text-center text-red-700">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">Ingrese sus credenciales para acceder al sistema</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="documento">Número de Documento</Label>
                <Input
                  id="documento"
                  name="documento"
                  placeholder="Ingrese su número de documento"
                  value={formData.documento}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="codigo">Código</Label>
                <Input
                  id="codigo"
                  name="codigo"
                  placeholder="Ingrese su código de usuario"
                  value={formData.codigo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link href="/recuperar-password" className="text-xs text-red-600 hover:underline">
                    ¿Olvidó su contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-gray-600">
              <span>¿No tiene una cuenta? Contacte al administrador del sistema</span>
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
