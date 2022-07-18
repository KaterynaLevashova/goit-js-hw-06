
const inputEl = document.querySelector('#validation-input')
const validLength = Number(inputEl.dataset.length) 

inputEl.addEventListener("blur", (event) => {

    if (event.currentTarget.value.length === validLength) {
    event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid') 
    }
    else {
    event.currentTarget.classList.add('invalid')
    event.currentTarget.classList.remove('valid')
    }
    })