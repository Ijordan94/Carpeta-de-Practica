const {sumar} = require("../index")

const mockSumar = jest.fn(sumar)



describe ("La funcion debe sumar", ()=>{
    it("debe retornar null si es ejecutada con algun valor no numerico", ()=>{
        expect(mockSumar(1,true)).toBe(null);
        expect(mockSumar(false,10)).toBe(null);
        expect(mockSumar("Hola","true")).toBe(null)
        console.log(mockSumar.mock);
    })

    it("Debe retornar el resultado de la suma", ()=>{
        expect(mockSumar(10,15)).toBe(25);
        expect(mockSumar(0,0)).toBe(0);
        expect(mockSumar(-10,15)).toBe(5);
        expect(mockSumar(-30,-20)).toBe(-50);
        console.log(mockSumar.mock);
    })

    it("Debe haber registrado correctamente los argumentos 10 y 15", ()=>{
        expect(mockSumar).toHaveBeenCalledWith(10,15)
    })
})