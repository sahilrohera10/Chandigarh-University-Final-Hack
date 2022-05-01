'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productname: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      imgId: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      contactNumber: {
        type: Sequelize.BIGINT
      },
      collegeName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productdata');
  }
};