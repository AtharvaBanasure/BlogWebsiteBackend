import Like from "../models/like.js";
import Post from "../models/post.js";

const likePost=async(req,res)=>{
    try{
        const {post,user} =req.body;
        const like=new Like({
            post,user
        });
        const savedLike=await like.save();

        //update the post collection basis on this
        const updatedPost=await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}}, {new:true})
                            .populate("likes")
                            .exec();

        res.json({
            post:updatedPost
        }); 

    }
    catch(error){
        res.status(400).json({
            error:"Error while Liking posts"
        })
    }
}

const unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;

        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        const updatePost=await Post.findByIdAndUpdate(post, {$pull:{likes:deletedLike._id}},{new:true})
        res.json({
            post:updatePost
        });
    }
    catch(error){
        res.status(400).json({
            error:"Error while unLiking posts"
        })
    }
}

export {likePost,unlikePost};