const {app} = require("./src/server")

const router = require("./src/routes/index")

app.listen(3000, () => { 

console.log("Servidor escuchando en puerto 3000");

})



app.use(router);