//calcular el total en una factura con un solo item
// calcular el total en una factura con varios items
// manejar correctamente una lista vacia de los items
/* [{name: "Producto A", price: 10, quantity: 2 }] */


const {calcularTotal} = require("../index")

describe("La función calcular total", ()=>{
    it("Debe calcular el total en una factura con un solo item",()=>{
        expect(calcularTotal([{name: "Producto A", price: 10, quantity: 2 }])).toEqual(20);
    })

    it("calcular el total en una factura con varios items",()=>{
        expect(calcularTotal([
            {name: "Producto A", price: 10, quantity: 2},
            {name: "Producto B", price: 30, quantity: 4},
            {name: "Producto C", price: 7, quantity: 24}
        ]))
        .toEqual(308)
    })

    it("Debe arrojar un error 'Factura Inválida' si recibe un array vacío",()=>{
        expect(() => calcularTotal([])).toThrowError("Factura Inválida")
    })
})

