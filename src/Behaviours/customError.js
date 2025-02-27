export const CustomError =(error, response) => {
  if (error.name === "SequelizeUniqueConstraintError") {
    response.status(400).json(error.original.detail);
  } else if (error.name === "SequelizeValidationError") {
    response.status(400).json(error.errors.map((erro) => erro.message));
  } else {
    console.log(error);
    response.status(400).json("Deu errado");
  }
};

