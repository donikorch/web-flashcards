'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    login: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    email: {
      unique: true,
      allowNull: false,
      type:DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};