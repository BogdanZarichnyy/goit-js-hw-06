// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const bodyStyle = document.querySelector('body');
const buttonSetColor = document.querySelector('.change-color');
const spanTextColor = document.querySelector('.color');

console.log(bodyStyle);
console.dir(bodyStyle);
console.log(buttonSetColor);
console.dir(buttonSetColor);
console.log(spanTextColor);
console.dir(spanTextColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const setBackgroundColor = function () {
    const color = getRandomHexColor();
    console.log(color);
    bodyStyle.style.backgroundColor = color;
    spanTextColor.textContent = color;
}

buttonSetColor.addEventListener('click', setBackgroundColor);