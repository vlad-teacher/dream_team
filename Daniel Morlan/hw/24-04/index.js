const arr = [3, 4, 7, 1, 9, 3, 7, 2, 5, 6];

let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    sum += arr[i];
    count++;
  }
}

const average = sum / count;
console.log("Среднее арифметическое:", average);
//Сформировать массив длиной 10, в который с помощью цикла запушить только те числа которые делятся на 3 без остатка.
const result = [];
let number = 0;

while (result.length < 10) {
  if (number % 3 === 0) {
    result.push(number);
  }
  number++;
}

console.log(result);


const originalArray = [3, 5, 2, 6, 8, 1, 7];


alert("Запомни числа: " + originalArray.join(", "));


const userInput = prompt("Введи те же числа через запятую:");


const userArray = userInput.split(",").map(num => parseInt(num.trim(), 10));


let isCorrect = true;

for (let i = 0; i < originalArray.length; i++) {
  if (userArray[i] !== originalArray[i]) {
    isCorrect = false;
    break;
  }
}


if (isCorrect && userArray.length === originalArray.length) {
  alert("Поздравляем! Всё верно!");
} else {
  alert("Ошибка! Введены неправильные числа.");
} 
//Дан массив чисел [3,5,2,6,8,1,7], показать этот массив пользователю с помощью alert(), после чего попросить ввести те же числа с помощью prompt() по памяти, если все числа совпали, то выводим alert() с поздравлениям, если не совпало хотя бы одно число, сразу выводим alert() с ошибкой