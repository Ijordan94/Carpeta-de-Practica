//"MiBoton"
//Myform
const apretar = document.getElementById("MiBoton");
const formulario = document.getElementById("Myform");
const afuera = document.getElementById("cuerpo")
const funcionApretar = () =>  {
    const palabras = formulario.value;
    const enGrande = document.createElement("h1");
    enGrande.innerHTML = `La palabra escrita es: ${palabras}`;
    enGrande.innerText = cambiarColor
    afuera.appendChild(enGrande)
    formulario.value = ""
    
} 
/* apretar.addEventListener("click", funcionApretar);

const botonAgregar = document.getElementById("agregar");
const cuadrado = document.getElementById("cuadrado rojo");
const cambiarColor = () => {
    cuadrado.innerHTML = "Hola"
    cuerpo.appendChild(cuadrado)
}

botonAgregar.addEventListener("click",cambiarColor); */


