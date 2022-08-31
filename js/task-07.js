// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputText = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

console.log(inputText);
console.dir(inputText);
console.log(spanText);
console.dir(spanText);

console.log('Range:', inputText.valueAsNumber);

spanText.style.fontSize = inputText.valueAsNumber + 'px';

const updateFontSize = function (event) {
    console.log(event.currentTarget.value);
    spanText.style.fontSize = event.currentTarget.value + 'px';
}

inputText.addEventListener('input', updateFontSize);