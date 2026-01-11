interface IEstudiante {
  id: number;
  nombre: string;
  edad: number;
  carrera: string;
  activo: boolean;
  promedio: number;
}

interface IResultado<T> {
  ok: boolean;
  mensaje: string;
  data?: T;
}

class Estudiante implements IEstudiante {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
    public carrera: string,
    public activo: boolean,
    public promedio: number
  ) {}
}
class SistemaEstudiantes {
  private estudiantes: Estudiante[] = [];

  agregar(est: Estudiante): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === est.id) {
        return { ok: false, mensaje: "ID ya existe" };
      }
    }
    if (est.edad < 15 || est.edad > 80) {
      return { ok: false, mensaje: "Edad inválida" };
    }
    if (est.promedio < 0 || est.promedio > 10) {
      return { ok: false, mensaje: "Promedio inválido" };
    }

    this.estudiantes.push(est);
    return { ok: true, mensaje: "Estudiante agregado", data: est };
  }

  listar(): Estudiante[] {
    return this.estudiantes;
  }

  buscarPorId(id: number): IResultado<Estudiante> {
    for (let est of this.estudiantes) {
      if (est.id === id) {
        return { ok: true, mensaje: "Estudiante encontrado", data: est };
      }
    }
    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {
    if (nuevoPromedio < 0 || nuevoPromedio > 10) {
      return { ok: false, mensaje: "Promedio inválido" };
    }

    for (let est of this.estudiantes) {
      if (est.id === id) {
        est.promedio = nuevoPromedio;
        return { ok: true, mensaje: "Promedio actualizado", data: est };
      }
    }

    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {
    for (let est of this.estudiantes) {
      if (est.id === id) {
        est.activo = activo;
        return { ok: true, mensaje: "Estado actualizado", data: est };
      }
    }

    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  listarActivos(): Estudiante[] {
    const activos: Estudiante[] = [];

    for (let est of this.estudiantes) {
      if (est.activo) {
        activos.push(est);
      }
    }

    return activos;
  }

  promedioGeneral(): number {
    if (this.estudiantes.length === 0) return 0;

    let suma = 0;
    for (let est of this.estudiantes) {
      suma += est.promedio;
    }

    return parseFloat((suma / this.estudiantes.length).toFixed(2));
  }
}
function mostrarMenu(): void {
  console.log(" SISTEMA DE ESTUDIANTES");
  console.log("1. Agregar estudiante");
  console.log("2. Listar estudiantes");
  console.log("3. Buscar por ID");
  console.log("4. Actualizar promedio");
  console.log("5. Cambiar estado");
  console.log("6. Listar activos");
  console.log("7. Promedio general");
  console.log("========================\n");
}

function ejecutarDemo(sistema: SistemaEstudiantes): void {
  console.log("DEMO AUTOMÁTICA\n");

  sistema.agregar(new Estudiante(1, "Ana", 20, "Ingeniería", true, 8.5));
  sistema.agregar(new Estudiante(2, "Luis", 22, "Medicina", true, 7.2));
  sistema.agregar(new Estudiante(3, "María", 19, "Derecho", true, 9.1));

  console.log("Lista de estudiantes:");
  console.log(sistema.listar());

  console.log(" Buscar estudiante ID 2:");
  console.log(sistema.buscarPorId(2));

  console.log(" Actualizar promedio ID 2:");
  console.log(sistema.actualizarPromedio(2, 8.8));


  console.log(" Cambiar estado ID 2 a inactivo:");
  console.log(sistema.cambiarEstado(2, false));

  console.log(" Estudiantes activos:");
  console.log(sistema.listarActivos());

  console.log(" Promedio general del curso:");
  console.log(sistema.promedioGeneral());
}



mostrarMenu();
const sistema = new SistemaEstudiantes();
ejecutarDemo(sistema);
