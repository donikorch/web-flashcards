const button = document.querySelector('.next');
const form = document.querySelector('.check-answer');
const input = document.querySelector('.answer');

if (button) {
  button.addEventListener('click', async (event) => {
    const idCategory = event.target.closest('.question').dataset.category;
    input.value = '';

    try {
      const res = await fetch(`/categories/${idCategory}/next`, {
        method: 'GET',
      });

      const data = await res.json();
      if (data.message === 'success') {
        document.querySelector('.card-title').textContent = data.question.name;
        document.querySelector('.card-img-top').src = `/${data.question.img}`;
      } else {
        window.location.assign('/quiz');
      }
    } catch (error) {
      alert(error.message);
    }

    form.disabled = false;
  });
}

if (form) {
  form.addEventListener('click', async (event) => {
    event.preventDefault();

    const idCategory = event.target.closest('.question').dataset.category;
    const answer = document.querySelector('.answer').value;
    let score = document.querySelector('.score').textContent;
    score = score.slice(score.lastIndexOf(' '));

    try {
      const res = await fetch(`/categories/${idCategory}/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer, score }),
      });

      const data = await res.json();
      document.querySelector('.score').textContent =
        `Your score: ${data.result.score}`;

      if (data.message === 'success') {
        alert('Правильный ответ!');
      } else {
        alert('Неправильный ответ!');
      }

      form.disabled = true;
    } catch (error) {
      alert(error.message);
    }
  });
}
