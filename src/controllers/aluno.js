import Aluno from "../models/Aluno.js";

class AlunoController {
  async index(req, res) {
    try {
      const aluno = await Aluno.findAll({
        attributes: ["id", "nome", "email"],
      });
      return res.json(aluno);
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new AlunoController();
