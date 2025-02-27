import { DataTypes, Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "O campo Nome deve ter entre 3 e 255 caracteres",
            },
            notNull: { msg: "O campo Nome é obrigatório" },
            notEmpty: { msg: "O campo Nome não pode estar vazio" },
          },
        },
        sobrenome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: "O campo Sobrenome deve ter entre 3 e 255 caracteres",
            },
            notNull: { msg: "O campo Sobrenome é obrigatório" },
            notEmpty: { msg: "O campo Sobrenome não pode estar vazio" },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: "Este e-mail já está cadastrado",
          },
          validate: {
            isEmail: { msg: "E-mail inválido" },
            notNull: { msg: "O campo E-mail é obrigatório" },
            notEmpty: { msg: "O campo E-mail não pode estar vazio" },
          },
        },
        idade: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            isInt: { msg: "A Idade deve ser um número inteiro" },
            min: {
              args: [0],
              msg: "A Idade não pode ser negativa",
            },
            notNull: { msg: "O campo Idade é obrigatório" },
          },
        },
        peso: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            isFloat: { msg: "O Peso deve ser um número" },
            min: {
              args: [0],
              msg: "O Peso não pode ser negativo",
            },
            notNull: { msg: "O campo Peso é obrigatório" },
          },
        },
        altura: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            isFloat: { msg: "A Altura deve ser um número" },
            min: {
              args: [0],
              msg: "A Altura não pode ser negativa",
            },
            notNull: { msg: "O campo Altura é obrigatório" },
          },
        },
      },
      {
        sequelize,
        modelName: "Aluno",
        tableName: "alunos",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    return this;
  }
}
