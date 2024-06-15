module.exports = {
    getAllUsers:(req,res) => {
        res
        .status(200)
        .send("Estamos recibiendo una solicitud para obtener datos de usuarios")
    }
}