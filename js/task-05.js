const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", onInputTyping)

function onInputTyping(event) {
    
    if (inputEl.value === "") {
        outputEl.textContent = "Anonymous"
    }
    outputEl.textContent = event.currentTarget.value;
}
