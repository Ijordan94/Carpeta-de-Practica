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
            
            const { name, email, age } = req.body;
            const newUser = await userService.createUsers({name, email, age});
            res.status(201).json(newUser)
        
    },


    //para elegir un solo usuario
    getUserById:async (req,res) =>{ try {
        const {id} = req.params;
        const user = await userService.getUserById(id);
        res.status(202).json(user)
    } catch (error) {
        res.status(502).json({
            error: "Can't connect with user"
        })
    }
},

    getUserByName: async (req,res) =>{ try {
        const {name} = req.body;
        const userName = await userService.getUserbyName(name);
        res.status(203).json(userName)
    } catch (error) {
        res.status(503).json({
            error:"Can't find the user"
        })
    }
},
    addVehicle: async (req,res)=>{
        try {
            const {userId,vehicleId} = req.body;
            await userService.addVehicle({userId,vehicleId});
            res.status(200).json({message: "Vehiculo agregado correctamente"})
        } catch (error) {
            res.status(500).json({
                error:"Error al cargar el vehiculo"
            })
        }
    }
}