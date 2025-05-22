"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function EstudianteRegistroPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Registro de Estudiante</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del estudiante" {...field} />
                </FormControl>
                <FormDescription>Este es el nombre público del estudiante.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="ejemplo@ejemplo.com" {...field} />
                </FormControl>
                <FormDescription>Esta es la dirección de correo electrónico del estudiante.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-3">
            <Button variant="outline" onClick={() => window.history.back()}>
              Volver
            </Button>
            <div className="flex gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Guardar Estudiante</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
