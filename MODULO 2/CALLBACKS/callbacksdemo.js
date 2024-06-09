function operacion (a,b,callback){
    let resultado = a+b;
    callback(resultado)
}
let funcionCallback = function(resultado){
    console.log(`el resultado es ${resultado}`);
}
operacion(3,5,funcionCallback)