const form = document.querySelector('.login-form');
let message = '';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail: mail,
        password: password,
    }

    if (mail === '' || password === '') {
        return window.alert('Fill all the required fields!')
    }
    
    if (mail && password) {
        console.log(formData)
        form.reset()
    }
}
