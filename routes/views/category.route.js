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
  res.app.locals.questionId += 1;

  try {
    const nextQuestion = await Question.findOne({
      where: {
        categoryId: id,
        id: res.app.locals.questionId,
      },
      order: [['id', 'ASC']],
    });

    if (nextQuestion) {
      res.json({
        message: 'success',
        question: nextQuestion,
      });
    } else {
      res.json({
        message: 'not success',
      });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

// проверка ответа
router.post('/:id/check', async (req, res) => {
  const { id } = req.params;
  const { answer, score } = req.body;
  res.app.locals.score = Number(score);

  try {
    const currentQuestion = await Question.findOne({
      where: {
        categoryId: id,
        id: res.app.locals.questionId,
      },
      order: [['id', 'ASC']],
    });

    if (currentQuestion && currentQuestion.answer === answer) {
      res.app.locals.score += 100;
      res.json({
        message: 'success',
        result: { currentQuestion, answer, score: res.app.locals.score },
      });
    } else {
      res.app.locals.score -= 50;
      res.json({
        message: 'no success',
        result: { currentQuestion, answer, score: res.app.locals.score },
      });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
