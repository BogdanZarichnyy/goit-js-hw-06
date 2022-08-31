// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputText = document.querySelector('input');
console.log(inputText);
console.dir(inputText);
console.log('Кількість символів, яка повинна бути в input - data-length:', inputText.getAttribute('data-length'), '\n\n');

const validationEvent = function (event) {
    console.log('Your text:', event.currentTarget.value);
    console.log('The length in your text is:', event.currentTarget.value.length, '\n\n');

    if (event.currentTarget.value.length == inputText.getAttribute('data-length')) {
        if (inputText.classList.contains('invalid')) {
            inputText.classList.remove('invalid');
            inputText.classList.add('valid');
        } else {
            inputText.classList.add('valid'); 
        }
        console.log('Validation OK !!!\n\n');
    } else {
        if (inputText.classList.contains('valid')) {
            inputText.classList.remove('valid');
            inputText.classList.add('invalid');
        } else { 
            inputText.classList.add('invalid');
        }
        console.log('Error validation:', inputText.getAttribute('placeholder'), '\n\n');
    }
}

inputText.addEventListener('blur', validationEvent);