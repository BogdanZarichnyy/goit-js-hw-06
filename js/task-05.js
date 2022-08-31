// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputText = document.querySelector('input#name-input');
const spanValue = document.querySelector('span#name-output');

console.log(inputText);
console.dir(inputText);
console.log(spanValue);
console.dir(spanValue);
console.dir(spanValue.textContent);

const text = spanValue.textContent;

const viewText = function (event) {
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);

    spanValue.textContent = event.currentTarget.value;

    if (spanValue.textContent === '') {
        spanValue.textContent = text;
    }
}

inputText.addEventListener('input', viewText);