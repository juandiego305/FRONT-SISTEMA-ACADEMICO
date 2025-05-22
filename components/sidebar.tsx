import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link href="/estudiantes">Estudiantes</Link>
        </li>
        <li className="mb-2">
          <Link href="/estudiantes/registro">Registro de Estudiantes</Link>
        </li>
        <li className="mb-2">
          <Link href="/cursos">Cursos</Link>
        </li>
        <li className="mb-2">
          <Link href="/profesores">Profesores</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
