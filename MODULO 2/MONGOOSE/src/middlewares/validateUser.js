const validateUser = (req,res,next) => {
    const {name} = req.body;

    if(!name){
        next("Hay un error en la escritura del nombre");//al darle un mensaje al parametro next, express sabe automaticamente que esta solicitud tiene errores y lo envia al manejador de errores de la libreria.
    }
    else{
        next();//al no pasarle argumento a next, la solicitud sigue su camino correctamente. 
    }
}


module.exports = validateUser;