const mongoose=require('mongoose');



const movieSchema=new mongoose.Schema({
     title:{type:String,required:true},
     year:{type:Number,require:true},
     rating:{type:Number,require:true},
     genre:{type:String,require:true}
},
{
    timestamps:true
})



const movies=mongoose.model("movies",movieSchema);
module.exports=movies