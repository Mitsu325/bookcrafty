'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'usuario', [
          {
            nome: 'John Doe',
            email: 'john@gmail.com',
            senha: bcrypt.hashSync('123456', 10)
          },
          {
            nome: 'Ana Doe',
            email: 'ana@gmail.com',
            senha: bcrypt.hashSync('123456', 10)
          },
          {
            nome: 'Bia Doe',
            email: 'bia@gmail.com',
            senha: bcrypt.hashSync('123456', 10)
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuario', null, {});
  }
};
