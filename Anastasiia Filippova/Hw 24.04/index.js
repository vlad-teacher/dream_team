// 1. Дан массив `[3,4,7,1,9,3,7,2,5,6]`. Найдите среднее арифметическое значение всех элементов массива, которые имеют четный индекс.

const arrOne = [3, 4, 7, 1, 9, 3, 7, 2, 5, 6];

let amount = 0;
let sum = 0;

for (let i = 0; i < arrOne.length; i++) {
  if (arrOne[i] % 2 === 0) {
    amount++;
    sum = sum + arrOne[i];
  }
}
console.log(sum / amount);

// 2. Сформировать массив длиной 10, в который с помощью цикла запушить только те числа которые делятся на 3 без остатка.

const arrTwo = [];

for (let i = 0; arrTwo.length < 10; i++) {
  if (i % 3 === 0) {
    arrTwo.push(i);
  }
}
console.log(arrTwo);

// 3. Дан массив чисел `[3,5,2,6,8,1,7]`, показать этот массив пользователю с помощью `alert()`, после чего попросить ввести те же числа с помощью `prompt()` по памяти, если все числа совпали, то выводим `alert()` с поздравлениям, если не совпало хотя бы одно число, сразу выводим `alert()` с ошибкой

const arrThree = [3, 5, 2, 6, 8, 1, 7];

alert(`Запомните эти числа: ${arrThree}`);

let i = 0;

for (; i < arrThree.length; i++) {
  let userNumbers = prompt(`Введите те же числа по памяти`);
  if (userNumbers === null) {
    break;
  }
  userNumbers = Number(userNumbers);
  if (userNumbers !== arrThree[i]) {
    alert(`Была допущена ошибка`);
    break;
  }
}
if (i === arrThree.length) {
  alert(`Поздравляем! Все числа введены верно`);
}
