'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'endereco', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        endereco: {
          type: Sequelize.STRING(199),
          allowNull: false
        },
        numero: {
          type: Sequelize.INTEGER,
          allowNull: true 
        }, 
        complemento: {
          type: Sequelize.STRING,
          allowNull: true
        },
        cep: {
          type: Sequelize.INTEGER(8),
          allowNull: true
        },
        uf: {
          type: Sequelize.STRING(2),
          allowNull: true
        },
        fk_usuario: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {
            model: 'usuario',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('endereco');
  }
};
