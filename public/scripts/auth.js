const regForm = document.querySelector('.sign-in');
const authForm = document.querySelector('.authForm');

if (regForm) {
  // повесили слушатель событий по кнопке
  regForm.addEventListener('submit', async (e) => {
    // останавливаем дефолтное поведение
    e.preventDefault();

    // в цель события попадают форма в виде объекта,
    // где ключ - login, значение - value
    const { login, email, password } = e.target;

    if (password.value) {
      const user = {
        login: login.value,
        email: email.value,
        password: password.value,
      };

      // отправили информацию с userom на сервер
      const res = await fetch('/registration', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data);

      if (data.message === 'Отлично') {
        window.location.assign('/');
        return;
      } else {
        alert(data.message);
      }
    }
  });
}

if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      const res = await fetch(`/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });
      console.log(res);
      const data = await res.json();
      if (data.message === 'success') {
        window.location.assign('/quiz');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
