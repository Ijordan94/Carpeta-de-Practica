const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({//scehma es un constructor.
    name: String,
    email: String,
    age: Number,
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Vehicle"
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;