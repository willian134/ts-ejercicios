// Clase CuentaBancaria con métodos para depositar y mostrar saldo
class CuentaBancaria {
    private saldo: number;
// Constructor de la clase
    constructor(saldoInicial: number = 0) {
        this.saldo = saldoInicial;
    }
// Método para depositar dinero en la cuenta
    depositar(cantidad: number): void {
        // Validar que la cantidad sea positiva
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito realizado: $${cantidad}`);
        } else {
            console.log("La cantidad a depositar debe ser positiva.");
        }
    }
// Método para mostrar el saldo actual
    mostrarSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}

// Ejecución en consola
const cuenta = new CuentaBancaria(100);
cuenta.mostrarSaldo();

cuenta.depositar(50);
cuenta.mostrarSaldo();
