"use strict";
const { Category, Question } = require("../models");
const path = require("path");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          name: "1 Категория",
          img: "https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg",
          Questions: [
            {
              name: "1 вопрос?",
              answer: "1 ответ",
              img: "Изображение 1",
            },
            {
              name: "2 вопрос?",
              answer: "2 ответ",
              img: "Изображение 2",
            },
            {
              name: "3 вопрос?",
              answer: "3 ответ",
              img: "Изображение 3",
            },
          ],
        },
        {
          name: "2 Категория",
          img: "какое-то изображение",
          Questions: [
            {
              name: "1 вопрос?",
              answer: "1 ответ",
              img: "Изображение 1",
            },
            {
              name: "2 вопрос?",
              answer: "2 ответ",
              img: "Изображение 2",
            },
            {
              name: "3 вопрос?",
              answer: "3 ответ",
              img: "Изображение 3",
            },
          ],
        },
      ],
      {
        include: [Question],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await Category.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
