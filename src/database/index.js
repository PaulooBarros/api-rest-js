import { Sequelize } from "sequelize";
import Aluno from "../models/Aluno.js";
import User from "../models/User.js";

const models = [Aluno, User];

//const connection = new Sequelize(databaseConfig);
//const connection = new Sequelize('postgres://postgres:FantaUva10!@localhost:5432/Escola'); // Example for postgres
const connection = new Sequelize('postgres://postgres:FantaUva10!@localhost:5432/Api-paulo');

models.forEach(model => model.init(connection));
