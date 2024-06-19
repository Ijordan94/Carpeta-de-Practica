const mongoose = require("mongoose");


const dbCon = async () => { //esta función va a relizar la conexión con la BDD
   await mongoose.connect("mongodb+srv://ignaciojordan17:InLKpZcNRy7bnvFe@prueba.0mo3joy.mongodb.net/")
}

module.exports = dbCon;