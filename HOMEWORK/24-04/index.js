// 1. Дан массив `[3,4,7,1,9,3,7,2,5,6]`. Найдите среднее арифметическое значение всех элементов массива, которые имеют четный индекс.

// const array = [3, 4, 7, 1, 9, 3, 7, 2, 5, 6];
// let sumEvenNumbers = 0;
// let numberEventNumbers = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     sumEvenNumbers += array[i];
//     numberEventNumbers++;
//   }
// }
// let arithmeticMeanOfEvenNumber = sumEvenNumbers / numberEventNumbers;
// console.log(arithmeticMeanOfEvenNumber);

// 2. Сформировать массив длиной 10, в который с помощью цикла запушить только те числа которые делятся на 3 без остатка.

// const array = [];
// for (let i = 0; array.length < 10; i++) {
//   if (i % 3 === 0) {
//     array.push(i);
//   }
// }
// console.log(array);

// 3. Дан массив чисел `[3,5,2,6,8,1,7]`, показать этот массив пользователю с помощью `alert()`, после чего попросить ввести те же числа с помощью `prompt()` по памяти, если все числа совпали, то выводим `alert()` с поздравлениям, если не совпало хотя бы одно число, сразу выводим `alert()` с ошибкой


// let arrayNumbers = [3, 5, 2, 6, 8, 1, 7];

// alert(`Посмотри на числа и запомни их: ${arrayNumbers}`);
// let userInput = prompt("Введите числа через ПРОБЕЛ!");
// let userNumber = userInput.split(" ");
// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (Number(userNumber[i]) !== arrayNumbers[i]) {
//     alert("Ошибка!");
//     break;
//   }
//   if (i === arrayNumbers.length - 1) {
//     alert("Поздравляем! Вы ввели правильные числа!");
//   }
// }
