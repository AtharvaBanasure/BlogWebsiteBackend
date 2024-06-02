import express from 'express';
const router=express.Router();

import createComment from '../controllers/commentController.js';
import {createPost,getAllPosts} from '../controllers/postController.js';
import {likePost,unlikePost} from '../controllers/likeController.js';


router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost); 
router.post("/likes/unlike",unlikePost); 

export default router;