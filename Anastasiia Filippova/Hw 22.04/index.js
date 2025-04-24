// 1. Дан массив, вывести в консоль количество четных чисел 
const arr = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];

for (i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 2. Найти наименьшее число в массиве
let minimal = arr[0];

for (let i = 1; i < arr.length; i++) {
    if(arr[i] < minimal) {
        minimal = arr[i];
    }
}
console.log(minimal);