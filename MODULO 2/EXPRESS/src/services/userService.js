const users = 
        [
            {
                id:1,
                name:"Ignacio"
            },
            {
                id:2,
                name: "Lourdes"
            },
            {
                id:3,
                name: "Agostina"
            }
        ]

let id = 4 //para que continue a parte del cuarto usuario 


module.exports={
    getUsers: async()=>{
        
        return users;
    },

    createUsers: async(name)=>{
        const newUser = {
            id, 
            name
        }
        id++;
        users.push(newUser)
    }
}