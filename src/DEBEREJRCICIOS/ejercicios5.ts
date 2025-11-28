class Hospital {

    // Calcula la dosis de medicamento según peso (mg)
    calcularDosis(peso: number, mgPorKg: number): number {
        return peso * mgPorKg;
    }

    // Calcula el índice de masa corporal (IMC)
    calcularIMC(peso: number, altura: number): number {
        return peso / (altura * altura);
    }

    // Registra nuevas visitas sumándolas a las anteriores
    registrarVisitas(visitasActuales: number, nuevas: number): number {
        return visitasActuales + nuevas;
    }
}

const hospital = new Hospital();

const dosis = hospital.calcularDosis(70, 5);         // 350 mg
const imc = hospital.calcularIMC(70, 1.75);          // ~22.86
const visitas = hospital.registrarVisitas(3, 2);     // 5

console.log("Dosis:", dosis);
console.log("IMC:", imc);
console.log("Visitas:", visitas);
