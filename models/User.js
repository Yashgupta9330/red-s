const mongoose =require('mongoose');

const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
        phone:{
            type:Number,
            trim:true,
            required:true
        },
        hobby:{
            type:String,
            trim:true,
            required:true
        }
    },
    { timestamps: true }
);

module.exports=mongoose.model("user",userSchema);