import Aluno from "../models/Aluno.js";

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ["id", "nome", "email"],
      });
      return res.json(alunos);
    } catch (e) {
      return res.json(e);
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { id, nome, email } = novoAluno;
      return res.json({ id, nome, email });
    } catch (e) {
      if (e.errors) {
        res.status(400).json(e.original.detail);
      } else {
        res.status(400).json("Erro desconhecido");
      }
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      const { id, nome, email } = aluno;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(e);
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.userId);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      const novosDados = await aluno.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      if (e.errors) {
        console.log(e);
        res.status(400).json(e.errors.map((erro) => erro.message));
      } else {
        res.status(400).json({ error: e.message || "Erro desconhecido" });
      }
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.userId);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      await aluno.destroy();

      return res.status(200).json("Aluno removido com sucesso");
    } catch (e) {
      if (e.errors) {
        res.status(400).json(e.errors.map((erro) => erro.message));
      } else {
        res.status(400).json({ error: e.message || "Erro desconhecido" });
      }
    }
  }
}

export default new AlunoController();
