const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Mateus',
        sobrenome: 'Silva',
        email: 'mateus1@email.com',
        idade: 25,
        peso: 75,
        altura: 1.75,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Tulio',
        sobrenome: 'Ferreira',
        email: 'tulio1@email.com',
        idade: 22,
        peso: 80,
        altura: 1.78,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Jonas',
        sobrenome: 'Pereira',
        email: 'jonas1@email.com',
        idade: 30,
        peso: 85,
        altura: 1.82,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'julio X',
        sobrenome: 'Teste',
        email: 'juliox@email.com',
        idade: 20,
        peso: 90,
        altura: 1.80,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alunos', null, {});
  }
};


// npx sequelize-cli db:seed --seed 20250227231314-criar-alunos.cjs comando para rodar essa seed