//correcciondel trabajp del mini sistema

const readline = require("readline");



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
  public id: number;
  public nombre: string;
  public edad: number;
  public carrera: string;
  public activo: boolean;
  public promedio: number;

  constructor(
    id: number,
    nombre: string,
    edad: number,
    carrera: string,
    activo: boolean,
    promedio: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.activo = activo;
    this.promedio = promedio;
  }

  mostrar(): void {
    console.log(
      `ID: ${this.id} | ${this.nombre} | Edad: ${this.edad} | Carrera: ${this.carrera} | Promedio: ${this.promedio} | Activo: ${this.activo}`
    );
  }
}


class SistemaEstudiantes {
  private estudiantes: Estudiante[] = [];

  agregar(est: Estudiante): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === est.id) {
        return { ok: false, mensaje: "ID repetido" };
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
    for (let e of this.estudiantes) {
      if (e.id === id) {
        return { ok: true, mensaje: "Estudiante encontrado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {
    if (nuevoPromedio < 0 || nuevoPromedio > 10) {
      return { ok: false, mensaje: "Promedio inválido" };
    }

    for (let e of this.estudiantes) {
      if (e.id === id) {
        e.promedio = nuevoPromedio;
        return { ok: true, mensaje: "Promedio actualizado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === id) {
        e.activo = activo;
        return { ok: true, mensaje: "Estado actualizado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no encontrado" };
  }

  listarActivos(): Estudiante[] {
    let activos: Estudiante[] = [];
    for (let e of this.estudiantes) {
      if (e.activo) {
        activos.push(e);
      }
    }
    return activos;
  }

  promedioGeneral(): number {
    if (this.estudiantes.length === 0) return 0;

    let suma = 0;
    for (let e of this.estudiantes) {
      suma += e.promedio;
    }
    return suma / this.estudiantes.length;
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto: string): Promise<string> {
  return new Promise((resolve) => rl.question(texto, resolve));
}

function mostrarMenu(): void {
  console.log(`
coloca lo q quieres buscar manin
1. Agregar estudiante
2. Listar estudiantes
3. Buscar por ID
4. Actualizar promedio
5. Cambiar estado
6. Listar activos
7. Promedio general
0. Salir

`);
}

async function ejecutarDemo(sistema: SistemaEstudiantes): Promise<void> {
  let opcion = "";

  while (opcion !== "0") {
    mostrarMenu();
    opcion = await preguntar("Seleccione una opción: ");

    switch (opcion) {
      case "1": {
        const id = Number(await preguntar("ID: "));
        const nombre = await preguntar("Nombre: ");
        const edad = Number(await preguntar("Edad: "));
        const carrera = await preguntar("Carrera: ");
        const promedio = Number(await preguntar("Promedio: "));

        const est = new Estudiante(id, nombre, edad, carrera, true, promedio);
        console.log(sistema.agregar(est).mensaje);
        break;
      }

      case "2": {
        const lista = sistema.listar();
        for (let e of lista) {
          e.mostrar();
        }
        break;
      }

      case "3": {
        const id = Number(await preguntar("ID a buscar: "));
        const res = sistema.buscarPorId(id);
        if (res.ok && res.data) res.data.mostrar();
        else console.log(res.mensaje);
        break;
      }

      case "4": {
        const id = Number(await preguntar("ID: "));
        const prom = Number(await preguntar("Nuevo promedio: "));
        console.log(sistema.actualizarPromedio(id, prom).mensaje);
        break;
      }

      case "5": {
        const id = Number(await preguntar("ID: "));
        const est = await preguntar("¿Activo? (s/n): ");
        console.log(
          sistema.cambiarEstado(id, est.toLowerCase() === "s").mensaje
        );
        break;
      }

      case "6": {
        const activos = sistema.listarActivos();
        for (let e of activos) {
          e.mostrar();
        }
        break;
      }

      case "7": {
        console.log(
          "Promedio general:",
          sistema.promedioGeneral().toFixed(2)
        );
        break;
      }

      case "0":
        console.log("Saliendo del sistema...");
        break;

      default:
        console.log("Opción inválida");
    }
  }

  rl.close();
}


const sistema = new SistemaEstudiantes();
ejecutarDemo(sistema);
