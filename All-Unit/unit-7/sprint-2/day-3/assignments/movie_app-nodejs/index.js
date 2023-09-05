const express =require('express');
const moviecontroller=require('./controllers/controller.js')

const connection=require('./configs/db')
const app=express();

app.use(express.json())
app.use(moviecontroller)

let PORT=3000;
app.listen(3000,()=>{
    try{
        connection();
         console.log('server is listenin on '+PORT)
    }catch(err){
        console.log(err);
    }
})