'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superhumans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING(100),
      },
      realName: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'real_name',
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: 'origin_description',
      },
      catchPhrase: {
        type: Sequelize.STRING(500),
        field: 'catch_phrase',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superhumans');
  },
};
