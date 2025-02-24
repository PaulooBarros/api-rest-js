import User from "../models/User.js";

class UserController {
  async store(req,res){
    const novoUsuario = await User.create({
      nome: "Paulo",
      email: "paulo@email.com",
      password: "@Test123"
    });
    res.json(novoUsuario);
  }
}


export default new UserController();
