import { DataTypes, Model, Sequelize } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
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
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo Nome deve ter entre 3 e 5 caracteres",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: "",
          unique: true,
          validate: {
            isEmail: {
              args: [3, 255],
              msg: "Email Inválido",
            },
          },
        },
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha deve possuir no mínimo 6 Caracteres",
            },
          },
        },
      },

      {
        sequelize,
        modelName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    }); // Fazendo o hash da senha para não ser salva no banco

    return this;
  }

  isPasswordValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
