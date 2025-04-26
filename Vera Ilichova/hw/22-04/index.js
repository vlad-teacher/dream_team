// minimum
//const massiv = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];
//for (let i = 0; i < massiv.length; i++) {
//    if (i === 0) { minNumber = massiv[i]; continue; }
//   else if (minNumber > massiv[i]) { minNumber = massiv[i]; }
//}
//console.log(minNumber);
// 1. Дан массив [4,7,1,3,9,3,6,2,6,9]

// вывести в консоль КОЛИЧЕСТВО (штук) четных чисел из этого массива

//
const massiv = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];
let j = 0;
let k = 0;
for (let i = 0; i < massiv.length; i++) {
  if (massiv[i] % 2 === 0) {
    k = k + 1;
    console.log(`количество четных чисел ${k} `);
  } else {
    j = j + 1;
    console.log(`количество нечетных чисел ${j}`);
  }
}
//
