const router = require('express').Router();

// компоненты
const QuestionComponent = require('../../components/pages/Question');

// модели
const { Question, Category } = require('../../db/models');

// страница первого вопроса
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const firstQuestion = await Question.findOne({ where: { categoryId: id } });
    res.app.locals.questionId = firstQuestion.id;

    const question = res.renderComponent(QuestionComponent, {
      title: 'Quiz',
      question: firstQuestion,
    });

    res.send(question);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

// следующий вопрос
router.get('/:id/next', async (req, res) => {
  const { id } = req.params;

  try {
    const currentQuestion = await Question.findOne({
      where: { id: res.app.locals.questionId },
    });

    res.app.locals.questionId += 1;
    const nextQuestion = await Question.findOne({
      where: {
        categoryId: id,
        id: {
          [Op.gt]: res.app.locals.questionId,
        },
      },
      order: [['id', 'ASC']],
    });

    console.log(nextQuestion);

    if (nextQuestion) {
      res.json({ message: 'success', question: nextQuestion });
    } else {
      res.json({ message: 'No more questions in this category' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
