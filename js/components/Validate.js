const formEl = document.querySelector('.questions__form');
const validate = new window.JustValidate(formEl);

export default function initValidate() {
  validate
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста, введите ваше имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя должно содержать минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Имя должно содержать максимум 20 символов',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Пожалуйста, введите вашу почту',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный адрес',
      },
    ])
    .addField('#agree', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться на обработку данных',
      },
    ])
    .onSuccess(async (event) => {
			event.preventDefault();

			const formData = new FormData(event.target);

			try {
				const response = await fetch('https://httpbin.org/post', {
					method: 'POST',
					body: formData,
				});

        formEl.reset();

				if (!response.ok) {
					throw new Error('Ошибка при отправке данных');
				}
				showModal('Благодарим за обращение!');
			} catch (error) {
				showModal('Не удалось отправить сообщение');
			}
		});
}

function showModal(title) {
	const modal = document.createElement('div');
	modal.className = 'message';
	modal.innerHTML = `
    <div class="message__content">
      <button class="message__close">&times;</button>
      <h2>${title}</h2>
    </div>
  `;

	document.body.appendChild(modal);

	modal.querySelector('.message__close').addEventListener('click', () => {
		modal.remove();
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.remove();
		}
	});
}
