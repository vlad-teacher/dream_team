//1. Вывести в консоль количество чётных чисел
//2. найти наименьшее число из этого же массива

const numbers = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];
let count = 0;
let min = numbers[0];

for( let i = 0; i < numbers.length; i++){

    if (numbers[i] % 2 ===0){
        count ++;
    }

    if (numbers[i] < min){
        min = numbers[i];
    }
}
console.log("количество чётных чисел", count);
console.log("наименьшее число:", min)
