const { Router } = require("express");
const postController = require("../controllers/postController"); 
const postsRouter = Router();

postsRouter.get("/", postController.getAllPosts); 

module.exports = postsRouter;
