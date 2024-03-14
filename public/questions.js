const button = document.querySelector('.next');

if (button) {
  button.addEventListener('click', async (event) => {
    const id = event.target.closest('.m-5').dataset.id;

    try {
      const res = await fetch(`/categories/${id}/next`, {
        method: 'GET',
      });

      const data = await res.json();
      if (data.message == 'success') {
        document.querySelector('.card-title').textContent = data.question.name;
        document.querySelector('.card-img-top').src = data.question.img;
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
