import dotenv from "dotenv";
dotenv.config();
import "./src/database/index.js";
import express from 'express';
import home from "./src/routes/home.js";
import user from "./src/routes/user.js";

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
  }

}

export default new App().app;
