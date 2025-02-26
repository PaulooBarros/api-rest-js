import { Router } from "express";
import UserController from "../controllers/User.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.post("/", UserController.store);

router.get("/",UserController.index);

router.get("/:id", UserController.show);

router.put("/", loginRequired, UserController.update);

router.delete("/", loginRequired, UserController.delete);


export default router;
