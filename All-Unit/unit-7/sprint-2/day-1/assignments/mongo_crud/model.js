const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    full_name: String,
    age: Number,
    gender: String,
    balance: String,
    native: String,
    relocate_to: String,
    family_members: Number
},
{
    timestamps:true
})

const User=mongoose.model("User",UserSchema);

module.exports=User