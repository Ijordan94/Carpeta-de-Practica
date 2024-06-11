const {calcularTotal} = require("./index");

//quiero asegurarme que cuando invoco a calulcar total, la cb que le paso de argumento, se está ejecutando ok. 
const mockGetItems = jest.fn(() =>{
    return [
        {name: "Producto A", price: 10, quantity: 2},
        {name: "Producto B", price: 30, quantity: 4},
        {name: "Producto C", price: 7, quantity: 24}
        ];
});




describe("En al funcion calcularTotal", ()=>{
    it("La funcion que paso como parametro debe ejecutarse al menos una vez",()=>{
        calcularTotal(mockGetItems);
        expect(mockGetItems).toHaveBeenCalled();
    })
})
