const userService = require("../services/userService")

module.exports = {
    getAllUsers: async(req,res) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users)    
        } catch (error) {
            res.status(500).json(
                {
                    error:"Error interno del servidor"
                }
            )
        }
        
    },

    createUsers: async (req,res) => {
        try {
          
            const { name } = req.body;
            await userService.createUsers(name);
            res.status(201).json({

                message: "Usuario creado correctamente"

            })

        } catch (error) {
            
            res.status(400).json(
                {
                    error:"Error al crear el usuario"
                }
            )

        }
            

            
       
        }
    }