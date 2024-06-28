import { Router, Request, Response } from "express";
import { createUser } from "../controllers/userController";
const router: Router = Router();

router.get("/users");
router.post("/users", createUser);
router.delete("/users");
export default router;
