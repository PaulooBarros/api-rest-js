import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await User.create({
        nome: "Joao",
        email: "joao2@email.com",
        password: "@Test123",
      });
      return res.json(novoUsuario);
    } catch (e) {
      if (e.errors) {
        res.status(400).json(e.original.detail);
      } else {
        res.status(400).json("Erro desconhecido");
      }
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(e);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
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
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();

      return res.status(200).json("Usuário removido com sucesso");
    } catch (e) {
      if (e.errors) {
        console.log(e);
        res.status(400).json(e.errors.map((erro) => erro.message));
      } else {
        res.status(400).json({ error: e.message || "Erro desconhecido" });
      }
    }
  }
}

export default new UserController();
