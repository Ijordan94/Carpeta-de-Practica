const {Router} = require("express");
const usersController  = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");
const usersRouter = Router();

usersRouter.get("/",usersController.getAllUsers);
usersRouter.post("/",validateUser, usersController.createUsers);


module.exports = usersRouter;


