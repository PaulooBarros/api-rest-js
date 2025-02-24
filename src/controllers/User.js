import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await User.create({
        nome: "Paulo",
        email: "paulo@email.com",
        password: "@Test123",
      });
      res.json(novoUsuario);
    } catch (e) {
      if (e.errors) {
        console.log(e);
        res.status(400).json(e.errors.map(erro => erro.message));
      } else {
        res.status(400).json({ error: e.message || "Erro desconhecido" });
      }
    }

  }
}

export default new UserController();
