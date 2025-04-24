// 1. Дан массив [4,7,1,3,9,3,6,2,6,9]
// вывести в консоль КОЛИЧЕСТВО (штук) четных чисел из этого массива

// const array = [4,7,1,3,9,3,6,2,6,9];
// let sum = 0; 
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 ===0) {
//         sum++;
//     } 
// }
// console.log("кол.во штук", sum);
// 2. вывести самое наименьшее число

let array = [4,7,1,3,9,3,6,2,6,9];
let minNumber = array[0];

for(let i = 1; i < array.length; i++){
    if (array[i] < min){
        minNumber = array[i];
    }
}
console.log("мин.число",minNumber);




