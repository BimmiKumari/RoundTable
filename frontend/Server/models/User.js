const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        firstname:{
            type:String,
          
            trim:true,
        },
        lastname:{
            type:String,
            
            trim:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
        },
        accountType:{
            type:String,
            enum:["Admin","Student","Instructor"],
            required:true,
        },
        active:{
            type:Boolean,
            default:true,
        },
        approved:{
            type:Boolean,
            default:true,
        },
        additionalDetails:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Profile",
        },
        
        token:{
            type:String,
        },
        resetPasswordExpires:{
            type : Date,
        },
        image:{
            type:String,
            required:true,
        },
       

    },
    {
        timestamps:true   //ye automatically createdat and updatedat ke liyen
    }
);
module.exports=mongoose.model("user",userSchema);