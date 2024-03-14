'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Category}) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }
  Question.init({
    name: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    categoryId: {
      allowNull: false,
      references: {
        model: "Categories",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};