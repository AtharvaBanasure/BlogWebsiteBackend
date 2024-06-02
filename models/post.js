import mongoose from "mongoose";

const postSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'like'
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }],
    }
);

const post=mongoose.model("post",postSchema);

export default post;