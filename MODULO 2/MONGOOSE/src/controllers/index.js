const usersController = (req,res) => {
    res
    .status(200)
    .send("Estamos recibiendo una solicitud para obtener datos de usuarios")
}


const postController = (req,res) => {
    res
    .status(200)
    .send("Estamos recibiendo una solicitud para obtener datos de posts")

}
module.exports= {
    usersController,
    postController

}