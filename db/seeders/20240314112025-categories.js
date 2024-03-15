'use strict';
const { Category, Question } = require('../models');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          name: '1 Категория',
          img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikabu.ru%2Fstory%2Fkartinka_gipnoz_3971961&psig=AOvVaw1jDqH9Zgv9c2FpkTe8GGru&ust=1710511250301000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjz0Y7184QDFQAAAAAdAAAAABAI',
          Questions: [
            {
              name: '1 вопрос?',
              answer: '1 ответ',
              img: 'Изображение 1',
            },
            {
              name: '2 вопрос?',
              answer: '2 ответ',
              img: 'Изображение 2',
            },
            {
              name: '3 вопрос?',
              answer: '3 ответ',
              img: 'Изображение 3',
            },
          ],
        },
        {
          name: '2 Категория',
          img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeti-online.com%2Fprintables%2Fdlya-samyh-malenkih%2Fkartinki-dlya-detey-na-steny%2Fcyplenok%2F&psig=AOvVaw1jDqH9Zgv9c2FpkTe8GGru&ust=1710511250301000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjz0Y7184QDFQAAAAAdAAAAABAR',
          Questions: [
            {
              name: '1 вопрос?',
              answer: '1 ответ',
              img: 'Изображение 1',
            },
            {
              name: '2 вопрос?',
              answer: '2 ответ',
              img: 'Изображение 2',
            },
            {
              name: '3 вопрос?',
              answer: '3 ответ',
              img: 'Изображение 3',
            },
          ],
        },
      ],
      {
        include: [Question],
      },
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
