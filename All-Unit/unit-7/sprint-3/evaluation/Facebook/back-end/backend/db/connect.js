const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


mongoose.connect("mongodb+srv://socialmedia123:1234@cluster001-social-media.yalitow.mongodb.net/?retryWrites=true&w=majority")
    

    .then(() => {
        console.log("Mongoose Connected")
    }).catch((e) => {
        console.log("Not connected")
    })