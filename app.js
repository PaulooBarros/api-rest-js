import dotenv from "dotenv";
dotenv.config();
import "./src/database/index.js";
import express from 'express';
import home from "./src/routes/home.js";
import user from "./src/routes/user.js";
import token from "./src/routes/token.js";
import aluno from "./src/routes/aluno.js";

class App {

  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens/', token);
    this.app.use('/alunos/', aluno);
  }

}

export default new App().app;
