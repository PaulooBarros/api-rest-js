import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await User.create(req.body);
      const {id, nome , email} = novoUsuario;
      return res.json({id, nome , email});
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
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (e) {
      return res.json(e);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(e);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await user.update(req.body);
      const {id, nome , email} = novosDados;

      return res.json({id, nome , email});
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
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();

      return res.status(200).json("Usuário removido com sucesso");
    } catch (e) {
      if (e.errors) {
        res.status(400).json(e.errors.map((erro) => erro.message));
      } else {
        res.status(400).json({ error: e.message || "Erro desconhecido" });
      }
    }
  }
}

export default new UserController();
