class Auto {

    // Método para acelerar
    acelerar(velocidadActual: number, incremento: number): number {
        return velocidadActual + incremento;
    }

    // Método para frenar
    frenar(velocidadActual: number, decremento: number): number {
        const nuevaVelocidad = velocidadActual - decremento;
        return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
    }

    // Método para calcular velocidad media
    recorrer(distancia: number, tiempo: number): number {
        if (tiempo <= 0) {
            throw new Error("El tiempo debe ser mayor que 0");
        }
        return distancia / tiempo;
    }
}
const miAuto = new Auto();

let velocidad = 50;
velocidad = miAuto.acelerar(velocidad, 20);  
console.log("Velocidad tras acelerar:", velocidad);

velocidad = miAuto.frenar(velocidad, 30);
console.log("Velocidad tras frenar:", velocidad);

const velocidadMedia = miAuto.recorrer(120, 2);
console.log("Velocidad media:", velocidadMedia, "km/h");
