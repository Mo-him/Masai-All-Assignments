const mongoose=require('mongoose');
mongoose.set('strictQuery', true);

async function connection(){
    await mongoose.connect('mongodb://localhost:27017');
    console.log('mongodb connected');
}

module.exports=connection