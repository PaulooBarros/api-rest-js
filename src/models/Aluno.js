import { DataTypes, Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: DataTypes.STRING
        },
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        peso: DataTypes.FLOAT,
        altura: DataTypes.FLOAT,
      },

      {
        sequelize,
        modelName: "alunos",
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
    // super.init(
    //   {
    //     id: {
    //       type: Sequelize.INTEGER,
    //       primaryKey: true,
    //       autoIncrement: true,
    //       allowNull: false
    //     },
    //     nome: {
    //       type: Sequelize.STRING,
    //       allowNull: false
    //     },
    //     sobrenome: {
    //       type: Sequelize.STRING,
    //       allowNull: false
    //     },
    //     email: {
    //       type: Sequelize.STRING,
    //       allowNull: false,
    //       unique: true,
    //       validate: {
    //         isEmail: true
    //       }
    //     },
    //     idade: {
    //       type: Sequelize.INTEGER,
    //       allowNull: false,
    //       validate: {
    //         min: 0
    //       }
    //     },
    //     peso: {
    //       type: Sequelize.FLOAT,
    //       allowNull: false
    //     },
    //     altura: {
    //       type: Sequelize.FLOAT,
    //       allowNull: false
    //     }
    //   },
    //   {
    //     sequelize,
    //     modelName: "Aluno",
    //     tableName: "alunos"
    //   }
    // );
    return this;
  }
}
