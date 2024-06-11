class carritoCompra{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre,
        this.precio = precio
        this.cantidad = cantidad
    }


    agregarProducto(producto){
        
    };

  
    calcularTotal(unnumero,lacantidad){
        let total = 0;
        total +=this.precio*this.cantidad;
        return total
    }

    aplicarDescuento(calcularTotal,number){
        let descuento  = (calcularTotal*number)/100;
        let final = calcularTotal - descuento;
        return final
        
    }
}

console.log(carritoCompra.aplicarDescuento(calcularTotal(20,1),10));