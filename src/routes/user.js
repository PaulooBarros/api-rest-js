import { Router } from "express";
import UserController from "../controllers/User.js";

const router = new Router();

router.post("/",UserController.store);

export default router;
