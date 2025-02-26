const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Mateus',
        email: 'mateus@email.com',
        password_hash: bcrypt.hashSync('@Test123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Tulio',
        email: 'tulio@email.com',
        password_hash: bcrypt.hashSync('@Test123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Jonas',
        email: 'jonas@email.com',
        password_hash: bcrypt.hashSync('@Test123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
