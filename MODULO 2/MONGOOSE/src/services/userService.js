const User = require ("../models/User")
const Vehicle = require ("../models/Vehicle")
module.exports={
    getUsers: async()=>{
        const users = await User.find().populate("vehicle");
       return users;
    },

    createUsers: async(user)=>{
    const newUser = await User.create(user);
    return newUser;
},

//para elegir UN solo usuario
getUserById: async (id) => {
    const user = await User.findById(id);
    return user;
},

getUserbyName: async (name) => {
    const userName = await User.findOne({name});
    return userName;
},

addVehicle: async({userId,vehicleId}) => {
    const user = await User.findById(userId);
    user.vehicle = vehicleId
    await user.save();
    return user;
  
}

}