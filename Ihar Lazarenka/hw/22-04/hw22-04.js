// fe 
// 1. Дан массив [4,7,1,3,9,3,6,2,6,9]
// вывести в консоль КОЛИЧЕСТВО (штук) четных чисел из этого массива
// 2. найти наименьшее число из этого же массива
const array = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sum++;
    }
};
// При делении на 2 остаток будет равен нулю. Только четные числа получатьсяпш
console.log("Кол-во чётных чисел:", sum);


let minNumber = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
        minNumber = array[i];
    }
}
console.log("Наименьшее число:", minNumber);

