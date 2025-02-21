import { Sequelize } from "sequelize";
import Aluno from "../models/Aluno.js";

const models = [Aluno];

// const connection = new Sequelize(databaseConfig);
const connection = new Sequelize('postgres://postgres:FantaUva10!@localhost:5432/Api-paulo'); // Example for postgres

models.forEach(model => model.init(connection));
