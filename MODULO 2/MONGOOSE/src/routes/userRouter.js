const {Router} = require("express");
const usersController  = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");
const usersRouter = Router();

usersRouter.get("/",usersController.getAllUsers);
usersRouter.post("/",validateUser, usersController.createUsers);
usersRouter.get("/byName", usersController.getUserByName)
usersRouter.put("/addVehicle",usersController.addVehicle);
usersRouter.get("/:id", usersController.getUserById);





module.exports = usersRouter;


