'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      babyProductId: {
        type: Sequelize.INTEGER,
      },
      computerProductId: {
        type: Sequelize.INTEGER,
      },
      boujieeClothesId: {
        type: Sequelize.INTEGER,
      },
      freeJunkId: {
        type: Sequelize.INTEGER,
      },
      orderSummary: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      carrierService: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trackingNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deliveryDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};