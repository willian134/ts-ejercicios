class Restaurante {

    // Calcula el total de un producto (precio × cantidad)
    calcularTotal(precio: number, cantidad: number): number {
        return precio * cantidad;
    }

    // Aplica un descuento al total
    aplicarDescuento(total: number, descuento: number): number {
        return total - (total * descuento / 100);
    }

    // Calcula el valor de la propina
    calcularPropina(total: number, porcentaje: number): number {
        return total * (porcentaje / 100);
    }
}

const rest = new Restaurante();

const totalProducto = rest.calcularTotal(12.50, 3);   // 37.5
const totalConDescuento = rest.aplicarDescuento(totalProducto, 10); // 33.75
const propina = rest.calcularPropina(totalConDescuento, 15); // 5.06

console.log("Total sin descuento:", totalProducto);
console.log("Total con descuento:", totalConDescuento);
console.log("Propina:", propina);
