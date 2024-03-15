const button = document.querySelector('.next');
const form = document.querySelector('.check-answer');

if (button) {
  button.addEventListener('click', async (event) => {
    const idCategory = event.target.closest('.question').dataset.category;

    try {
      const res = await fetch(`/categories/${idCategory}/next`, {
        method: 'GET',
      });

      const data = await res.json();
      if (data.message == 'success') {
        document.querySelector('.card-title').textContent = data.question.name;
        document.querySelector('.card-img-top').src = `/${data.question.img}`;
      }
    } catch (error) {
      alert(error.message);
    }
  });
}

if (form) {
  form.addEventListener('click', async (event) => {
    event.preventDefault();

    const idCategory = event.target.closest('.question').dataset.category;
    const answer = document.querySelector('.answer').value;

    try {
      const res = await fetch(`/categories/${idCategory}/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }),
      });

      const data = await res.json();
      if (data.message == 'success') {
        alert('Правильный ответ!');
      } else {
        alert('Неправильный ответ!');
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
