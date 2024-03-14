'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Question}) {
      this.hasMany(Question, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    name: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};