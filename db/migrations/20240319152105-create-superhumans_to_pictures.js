'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superhumans_to_pictures', {
      superhumanId: {
        type: Sequelize.INTEGER,
        field: 'superhuman_id',
        allowNull: false,
        references: {
          model: 'superhumans',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      pictureId: {
        type: Sequelize.INTEGER,
        field: 'picture_id',
        allowNull: false,
        references: {
          model: 'pictures',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('superhumans_to_pictures');
  },
};
