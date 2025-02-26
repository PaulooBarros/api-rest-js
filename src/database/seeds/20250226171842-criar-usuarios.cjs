const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'john@email.com',
        password_hash: bcrypt.hashSync('@Test123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Juliano',
        email: 'juliano@email.com',
        password_hash: bcrypt.hashSync('@Test123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Arthur',
        email: 'arthur@email.com',
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
