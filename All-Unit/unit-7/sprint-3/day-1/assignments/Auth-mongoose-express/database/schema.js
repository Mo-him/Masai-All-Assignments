const mongoose = require('mongoose')



const schema = mongoose.Schema({
    name: String,
    email: String,
    password :String,
    verifiedEmail: Boolean
},{
    timestamps: true
})

const User = mongoose.model('User' , schema)
module.exports = User;