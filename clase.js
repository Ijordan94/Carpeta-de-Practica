/* Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios. */

class CarritoCompra{
    constructor(){
        this.carrito = []
        
    }


    agregarProducto(producto){
        this.carrito.push(producto);

    };

    
    calcularTotal(){
    return this.carrito.reduce((total,producto)=>total + (producto.precio*producto.cantidad),0);
    }

    aplicarDescuento(porcentaje){
        let total = this.calcularTotal();
        let descuento = (porcentaje/100)*total;
        return total - descuento
        
    }
}

const carritoCompra2 = new CarritoCompra();

carritoCompra2.agregarProducto({nombre:"televisor", precio: 100, cantidad: 2});
carritoCompra2.agregarProducto({nombre:"dvd", precio: 300, cantidad: 1});

const total = carritoCompra2.calcularTotal();
console.log(total);

const descontado = carritoCompra2.aplicarDescuento(10)
console.log(descontado);


module.exports = {
    CarritoCompra
}