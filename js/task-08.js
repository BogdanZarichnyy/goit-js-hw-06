// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
//    а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formAction = document.querySelector('form.login-form');

console.log(formAction);
console.dir(formAction);

const validationForm = function (event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    // console.dir(event.currentTarget);
    // console.log(event.currentTarget.elements);

    const { elements: { email, password } } = event.currentTarget;
    // console.log('email:', email.value);
    // console.log(email);
    // console.log(email.name);
    // console.dir(email);
    // console.log('password:', password.value);
    // console.log(password);
    // console.log(password.name);
    // console.dir(password);

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені');
    } else {
        console.log({ [email.name]: email.value, [password.name]: password.value });
        formAction.reset();
    }
}

formAction.addEventListener('submit', validationForm);