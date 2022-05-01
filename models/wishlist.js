'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wishlist.init({
    customerId: DataTypes.INTEGER,
    productname: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imgId: DataTypes.STRING,
    category: DataTypes.STRING,
    contactNumber: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'wishlist',
  });
  return wishlist;
};