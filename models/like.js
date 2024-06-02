import mongoose from "mongoose";

const likeSchema=mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        },
        user:{
            type:String,
            required:true
        },
    }
);

const like=mongoose.model("like",likeSchema);

export default like;