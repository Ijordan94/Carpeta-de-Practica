const {Router} = require("express");
const usersRouter = require("./userRouter");
const postsRouter = require("./postRouter")
const vehicleRouter = require ("./vehicleRouter")
const router = Router(); 
router.use("/users",usersRouter);

router.use("/posts",postsRouter);

router.use("/vehicles",vehicleRouter);

module.exports = router; 
