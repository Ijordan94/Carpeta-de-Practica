 const axios = require("axios");


const promesaResuelta = new Promise((resolve, reject) => {
    //resolve y reject siempre iran de esa forma. Resolve, resuelve la promesa y reject la rechaza
     resolve("Valor de resolución");
 }); 

 const promesaRechazada = new Promise ((resolve, reject)=>{
    reject("Valor del rechazo")
})  
 
 const promise = axios.get("https://students-api.up.railway.app/movis");

promise
.then((res) => {     //.then => si todo salio bien vamos a hacer tal cosa(se llama success handler)
    console.log(res.data);
})

.catch((err)=>{ //.catch ---> y este es el contrario, el error handler. 
    console.log(err);
}) 
 const { log } = require("console"); 

 const { log } = require("console"); 

 const fecthMovies = async() => {
    try {
        /* console.log("Estamos por intentar un par de operaciones"); */
        const data = await axios.get("https://students-api.up.railway.app/movies");//--->esto es una promesa pendiente.
        console.log(data.data);
/*         console.log("Ha finalizado todo con exito"); */
    } catch (error) {
       /*  console.log("Tuvimos un error, estamos en el bloque catch"); */
        console.log(error.message);//---> me imprimira el error en la consola(solamente el error que encuentra)
    }

};

fecthMovies();

const { log } = require("console")
const fs = require ("fs")
fs.readFile("./mi_archivo.txt","utf-8",(err,data)=>{
    if(err)console.log(err);
    else console.log(data);
})
