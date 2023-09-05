const express=require('express');
const movies=require('../models/mongoose.modles')
const router=express.Router();






router.get('/movies',async (req,res)=>{
    try{
        const Movies=await movies.find()
    return res.status(200).send(Movies)
    }catch(err){
        return res.status(400).send("error")
    
    }
})





router.post('/',(req,res)=>{
    try{
    return res.status(200).send("hello there")
    }catch(err){
        return res.status(400).send("error")
    
    }
})





router.get('/:id',(req,res)=>{
    try{
    return res.status(200).send("hello there")
    }catch(err){
        return res.status(400).send("error")
    
    }
})




router.patch('/',(req,res)=>{
    try{
    return res.status(200).send("hello there")
    }catch(err){
        return res.status(400).send("error")
    
    }
})



router.get('/',(req,res)=>{
    try{
    return res.status(200).send("hello there")
    }catch(err){
        return res.status(400).send("error")
    
    }
})


module.exports=router