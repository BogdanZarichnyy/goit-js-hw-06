// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// - Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// - Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// - Оновлюй інтерфейс новим значенням змінної counterValue.

const counterBox = document.querySelector('#counter');
console.log(counterBox);
console.dir(counterBox);

let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

console.log(buttonDecrement);
console.dir(buttonDecrement);
console.log(buttonIncrement);
console.dir(buttonIncrement);
console.log(counter);
console.dir(counter);

const valueCounterDec = function () {
    console.log('Decrement value');
    counterValue -= 1;
    counter.textContent = counterValue;
}

const valueCounterAdd = function () {
    console.log('Increment value');
    counterValue += 1;
    counter.textContent = counterValue;
}

buttonDecrement.addEventListener('click', valueCounterDec);
buttonIncrement.addEventListener('click', valueCounterAdd);




