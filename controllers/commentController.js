import comment from "../models/comment.js";
import Post from "../models/post.js";

const createComment=async(req,res)=>{
    try{
        const {post,user,body} =req.body;
        const newcomment=new comment({
            post,user,body
        });

        const savecomment=await newcomment.save();

        //find the post using id and then add that comment to the post
        const updatedPost=await Post.findByIdAndUpdate(post, {$push:{comments:savecomment._id}}, {new:true})
                            .populate("comments")
                            .exec();

        res.json(
            {
                post:updatedPost
                // status:true,
                // data:updatedPost,
                // message:"Comment created successfuly"
            }
        )
    }catch(error){
        console.log(error);
        res.status(500)
        .json({
            status:false,
            data:"Internal Server Error",
            message:error.message
        })
    }
};

export default createComment;