'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class otptable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  otptable.init({
    email: DataTypes.STRING,
    otp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'otptable',
  });
  return otptable;
};