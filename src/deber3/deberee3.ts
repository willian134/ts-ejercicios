//está clase Banco tiene métodos para depositar, retirar y transferir dinero entre cuentas.
class Banco {

    // Depositar dinero
    depositar(saldo: number, monto: number): number {
        return saldo + monto;
    }

    // Retirar dinero
    retirar(saldo: number, monto: number): number {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes");
        }
        return saldo - monto;
    }

    // Transferir dinero
    transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir más del saldo disponible");
        }
        return saldoOrigen - monto;
    }
}

const banco = new Banco();

let saldo = 100;

// Depositar
saldo = banco.depositar(saldo, 50);   
console.log(saldo); 

// Retirar
saldo = banco.retirar(saldo, 30);    
console.log(saldo);

// Transferir
saldo = banco.transferir(saldo, 20); 
console.log(saldo); 
