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

        // Validar ID repetido
        for (let e of this.estudiantes) {
            if (e.id === est.id) {
                return { ok: false, mensaje: "ID ya registrado" };
            }
        }

        // Validar edad
        if (est.edad < 15 || est.edad > 80) {
            return { ok: false, mensaje: "Edad inválida" };
        }

        // Validar promedio
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
                return { ok: true, mensaje: "Encontrado", data: e };
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
        let suma = 0;

        for (let e of this.estudiantes) {
            suma += e.promedio;
        }

        return this.estudiantes.length === 0 ? 0 : suma / this.estudiantes.length;
    }
}

function mostrarMenu(): void {
    console.log("SISTEMA DE ESTUDIANTES");
    console.log("1. Agregar estudiantes");
    console.log("2. Listar estudiantes");
    console.log("3. Buscar estudiante");
    console.log("4. Actualizar promedio");
    console.log("5. Cambiar estado");
    console.log("6. Listar activos");
    console.log("7. Promedio general\n");
}

function ejecutarDemo(sistema: SistemaEstudiantes): void {

    console.log(" DEMO DEL SISTEMA -");

    // Agregar 3 estudiantes
    sistema.agregar(new Estudiante(1, "Ana", 20, "Sistemas", true, 8.5));
    sistema.agregar(new Estudiante(2, "Luis", 22, "Administración", true, 7.2));
    sistema.agregar(new Estudiante(3, "Carlos", 19, "Contabilidad", true, 9.0));

    // Listar todos
    console.log("Lista de estudiantes:");
    console.log(sistema.listar());

    // Buscar por ID
    console.log(" Buscar estudiante ID 2:");
    console.log(sistema.buscarPorId(2));

    // Actualizar promedio
    console.log(" Actualizar promedio de ID 1:");
    console.log(sistema.actualizarPromedio(1, 9.5));

    // Cambiar estado
    console.log(" Cambiar estado de ID 3 a inactivo:");
    console.log(sistema.cambiarEstado(3, false));

    // Listar activos
    console.log("Estudiantes activos:");
    console.log(sistema.listarActivos());

    // Promedio general
    console.log(" Promedio general del curso:");
    console.log(sistema.promedioGeneral().toFixed(2));
}

mostrarMenu();

const sistema = new SistemaEstudiantes();
ejecutarDemo(sistema);
