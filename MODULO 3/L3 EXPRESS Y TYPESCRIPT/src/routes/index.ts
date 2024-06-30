import { Router, Request, Response } from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/userController";
import autenticacion from "../middlewares/autenticacion";
const router: Router = Router();

router.get("/users", autenticacion, getUsers);
router.post("/users", createUser);
router.delete("/users", deleteUser);
export default router;
