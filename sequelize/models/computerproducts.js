'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class computerProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  computerProducts.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    review: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'computerProducts',
  });
  return computerProducts;
};