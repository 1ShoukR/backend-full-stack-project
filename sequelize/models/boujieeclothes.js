'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class boujieeClothes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  boujieeClothes.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    review: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'boujieeClothes',
  });
  return boujieeClothes;
};