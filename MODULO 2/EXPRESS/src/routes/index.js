const {Router} = require("express");
const usersRouter = require("./userRouter");
const postsRouter = require("./postRouter")

const router = Router(); 
router.use("/users",usersRouter);
router.use("/posts",postsRouter);

module.exports = router; 
