import { Router } from "express";
import UserController from "../controllers/User.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.post("/", UserController.store);

router.get("/", loginRequired, UserController.index);

router.get("/:id", loginRequired, UserController.show);

router.put("/:id", loginRequired, UserController.update);

router.delete("/:id", loginRequired, UserController.delete);


export default router;
