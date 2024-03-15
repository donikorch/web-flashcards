'use strict';
const { Category, Question } = require('../models');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          name: "Сплетни Эльбруса",
          img: "/img/категория1.jpg",
          Questions: [
            {
              name: "Кто имеет связь One-to-many с Катей и Даней?",
              answer: "Костя",
              img: "/img/1categ/Даня.jpg",
            },
            {
              name: "Что сказал HyperX когда захотел других отношений с Никитой(имя изменено)?",
              answer: "Френдзона!",
              img: "/img/1categ/hyperX.webp",
            },
            {
              name: "Как Decoy объяснил это девушке Никиты?",
              answer: "Сори, но твой бойчик больше не твой бойчик",
              img: "/img/тикай.jpeg",
            },
            {
              name: "Как Чингизхан(имя изменено) ласково называет свою любовь?",
              answer: "Надежда Николаевна",
              img: "/img/1categ/Чингизхан.jpg",
            },
            {
              name: "Что отваливается, когда много форкаешь??",
              answer: "Интернет в Эльбрусе",
              img: "/img/1categ/интернет.jpg",
            }
          ],
        },
        {
          name: "Гачимучи имена",
          img: "/img/2categ/0.Cat.jpg",
          Questions: [
            {
              name: "Скажите как его зовут!",
              answer: "ЕвгGaYний",
              img: "/img/2categ/1Evgen.png",
            },
            {
              name: "Скажите как его зовут!",
              answer: "ДИМASS",
              img: "/img/2categ/Dimass.png",
            },
            {
              name: "Скажите как его зовут!",
              answer: "Semen",
              img: "/img/2categ/Semen.png",
            },
            {
              name: "Скажите как его зовут!",
              answer: "GayOrgy",
              img: "/img/2categ/3Gay.png",
            },
            {
              name: "Скажите как его зовут!",
              answer: "ВладAssLove",
              img: "/img/2categ/2Vlad.png",
            }
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
