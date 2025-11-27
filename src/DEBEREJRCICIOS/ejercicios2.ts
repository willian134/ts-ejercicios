class Estudiante {

    // Agregar una nueva nota y recalcular el promedio
    agregarNota(promedio: number, nuevaNota: number): number {
        return (promedio + nuevaNota) / 2;
    }

    // Verificar si el estudiante aprueba
    aprobar(nota: number, minima: number): boolean {
        return nota >= minima;
    }

    // Calcular faltas totales
    calcularFaltas(faltasActuales: number, nuevas: number): number {
        return faltasActuales + nuevas;
    }
}
const estudiante = new Estudiante();

// Promedio inicial 8, nueva nota 10
let promedio = estudiante.agregarNota(8, 10); 


// Verificar aprobación
let aprueba = estudiante.aprobar(promedio, 7);

// Manejo de faltas
let faltas = estudiante.calcularFaltas(3, 2);

console.log("Promedio:", promedio);
console.log("Aprueba:", aprueba);   
console.log("Faltas totales:", faltas);
