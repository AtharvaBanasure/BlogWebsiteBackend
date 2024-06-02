import Post from "../models/post.js";

const createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;

        const post=new Post({
            title,body
        });

        const savedPost=await post.save();

        res.json({
            post:savedPost
        })
    }
    catch(error){
        res.status(400).json({
            error:"Error while creating post"
        })
    }
};


const getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts
        }) 
    }
    catch(error){
        res.status(400).json({
            error:"Error while fetching posts"
        })
    }
}

export {getAllPosts,createPost};