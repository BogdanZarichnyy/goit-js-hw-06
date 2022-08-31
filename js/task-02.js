// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listIngredients = document.querySelector('ul#ingredients');
console.log(listIngredients);

const createItem = function (ingredient)  {
    const itemIngredient = document.createElement('li');
    itemIngredient.textContent = ingredient;
    itemIngredient.classList.add('item');

    return itemIngredient;
}

const arrayItems = ingredients.map(ingredient => createItem(ingredient));

console.log(arrayItems);
console.log(...arrayItems);

listIngredients.append(...arrayItems);