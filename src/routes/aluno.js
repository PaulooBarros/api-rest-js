import { Router } from "express";
import AlunoController from "../controllers/aluno.js";
import loginRequired from "../middlewares/loginRequired.js";


const router = new Router();

router.post('/',AlunoController.store);

router.get('/', AlunoController.index);

router.get('/:id', AlunoController.show);

router.put('/:id', loginRequired, AlunoController.update);

router.delete('/:id', loginRequired, AlunoController.delete);




export default router;
