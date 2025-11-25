class Animal {
    sonar(): void {
        console.log("El animal hace un sonido.");
    }
}

class Perro extends Animal {
    sonar(): void {
        console.log("El perro dice: ¡Guau guau!");
    }
}

class Gato extends Animal {
    sonar(): void {
        console.log("El gato dice: ¡Miau!");
    }
}

// Ejecución en consola
const animal = new Animal();
const perro = new Perro();
const gato = new Gato();

animal.sonar();
perro.sonar();
gato.sonar();
