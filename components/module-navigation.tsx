import Link from "next/link"

const ModuleNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/estudiantes/registro">Registro de Estudiantes</Link>
        </li>
        <li>
          <Link href="/estudiantes/matricula">Matrícula de Estudiantes</Link>
        </li>
        <li>
          <Link href="/estudiantes/horarios">Horarios de Estudiantes</Link>
        </li>
        <li>
          <Link href="/estudiantes/notas">Notas de Estudiantes</Link>
        </li>
        <li>
          <Link href="/profesores/gestion">Gestión de Profesores</Link>
        </li>
        <li>
          <Link href="/cursos/catalogo">Catálogo de Cursos</Link>
        </li>
        <li>
          <Link href="/administracion/usuarios">Administración de Usuarios</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ModuleNavigation
