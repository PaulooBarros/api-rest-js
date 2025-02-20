import Aluno from './../models/Aluno.js';

class HomeController {
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: "Paulo",
      sobrenome: "Gustavo",
      email: "paulo@email.com",
      idade: 20,
      peso: 93,
      altura: 1.80
    });
    res.json(novoAluno);
  }
}


export default new HomeController();
