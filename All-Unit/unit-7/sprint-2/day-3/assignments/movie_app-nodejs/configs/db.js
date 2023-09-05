const mongoose=require('mongoose');

mongoose.set('strictQuery', false);

const connection=async ()=>{
    await mongoose.connect("mongodb://localhost:27017");
    console.log('mongodb connected')
}
module.exports=connection