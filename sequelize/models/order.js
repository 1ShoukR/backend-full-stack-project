'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    babyProductId: DataTypes.INTEGER,
    computerProductId: DataTypes.INTEGER,
    boujieeClothesId: DataTypes.INTEGER,
    freeJunkId: DataTypes.INTEGER,
    orderSummary: DataTypes.STRING,
    carrierService: DataTypes.STRING,
    trackingNumber: DataTypes.STRING,
    deliveryDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};