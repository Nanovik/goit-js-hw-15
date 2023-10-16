const form = document.querySelector('.login-form');

form.addEventListener("submit", handlerSubmitForm);

function handlerSubmitForm(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    if (email.value ==='' || password.value ==='') {
        return alert('Всі поля повинні бути заповнені!');
    }
    const data = {};
    data[email.name] = email.value;
    data[password.name] = password.value;

    console.log("data: ", data);

    e.currentTarget.reset();
};
