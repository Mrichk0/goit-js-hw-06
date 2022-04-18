const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { elements:{ email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('всі поля повинні бути заповнені');
    }

    console.log(`email:${email.value} password:${password.value}`);
    event.currentTarget.reset();
};

