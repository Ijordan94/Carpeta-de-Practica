const express = require ("express")
const router = require("../src/routes/index")
//antes que la solicitud sea despachada al enrutador, quiero que la tome la libreria morgan
const morgan = require ("morgan");
//aqui utilizaré la libreria cors para decidir quienes tendrán acceso a esta app
const cors = require("cors");
const app = express();
//acá es donde utilizaré a morgan
app.use(morgan("dev"))
app.use(cors());//el argumento de cors puede configurarse para limitar el acceso de hosts distintos al suyo.
//como yo no tengo nada configurado, el servidor sabe uqe tiene que abrirse a recibir solicitudes de cualquier lugar
app.use(express.json())


//ahora usare un middleware personalizado
app.use((req,res,next)=>{ //como un middleware es una función, recibe como parametro lo que recibiría un controlador (req y res) y un tercer parametro llamado "next"
    console.log("Estamos pasando por mi propio middleware");
    next(); //=> lo que hace esta función(parametro) es indicarle a la request que siga su camino. 
})
app.use(router);
module.exports = app;
