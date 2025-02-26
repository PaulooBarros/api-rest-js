import { Router } from "express";
import aluno from "../controllers/aluno.js";

const router = new Router();

router.get('/', aluno.index);



export default router;
