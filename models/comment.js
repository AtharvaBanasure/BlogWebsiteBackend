import mongoose from "mongoose";

const commentSchema=mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"post",//reference to post model
        },
        user:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true 
        }
    }
);

const comment=mongoose.model("comment",commentSchema);
export default comment;