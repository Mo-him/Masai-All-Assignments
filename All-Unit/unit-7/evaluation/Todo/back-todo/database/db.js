const mongoose = require('mongoose');





async function connectDB() {
    const connection = 'mongodb+srv://mohimthakre:198mohim@cluster0.kskdsnn.mongodb.net/?retryWrites=true&w=majority'





    return new Promise((resolve, reject) => {
        mongoose.connect(connection)
        .then(() => {
            console.log('Connected to MongoDB database');
            resolve();
        })


        .catch((err) => {
            console.log('Could not connect to database')
            reject(err);
        })
    })


}

module.exports = connectDB