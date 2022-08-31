// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
// і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount 
// і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3 .Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const formControls = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('div#boxes');

console.log(formControls);
console.dir(formControls);
console.log(buttonCreate);
console.dir(buttonCreate);
console.log(buttonDestroy);
console.dir(buttonDestroy);
console.log(boxes);
console.dir(boxes);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
    console.log(amount);
    let stringboxes = '';
    let width = 30;
    let height = 30;

    for (let i = 0; i < amount; i += 1) {
        stringboxes += `
            <div class="box" style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px"></div>
        `;
        width += 10;
        height += 10;
    }
    // boxes.innerHTML += stringboxes;
    boxes.insertAdjacentHTML('beforeend', stringboxes);
}

function destroyBoxes() {
    if (boxes.innerHTML != '') {
        boxes.innerHTML = '';
        console.log("Всі об'єкти видалені !!!");
    } else {
        console.log("Відсутні об'єкти для видалення !!!");
    }
}

function buildBoxes() {
    createBoxes(Number(formControls.value));
}

buttonCreate.addEventListener('click', buildBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);








