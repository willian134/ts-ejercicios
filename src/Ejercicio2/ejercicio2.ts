// Definir la clase Persona
class Persona {
    nombre: string;
    edad: number;
// Constructor de la clase
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
// Definir la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    curso: string;
// Constructor de la clase Estudiante
    constructor(nombre: string, edad: number, curso: string) {
        super(nombre, edad); 
        this.curso = curso;  
    }
    // Método para imprimir el curso
    imprimirCurso() {
        console.log(`El estudiante ${this.nombre} está en el curso: ${this.curso}`);
    }

}

// Crear una instancia de Estudiante
const estudiante1 = new Estudiante("Carlos", 18, "2do de Bachillerato");
estudiante1.imprimirCurso();
