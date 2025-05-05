// 1. Дан массив [4,7,1,3,9,3,6,2,6,9]
// вывести в консоль КОЛИЧЕСТВО (штук) четных чисел из этого массива
// 2. найти наименьшее число из этого же массива

let myArr = [4,7,1,3,9,3,6,2,6,9]
let howManyOneEben = 0
let min = myArr[0]
    for(let i=0; i<myArr.length; i++)
        {if (myArr[i]%2 === 0){
            howManyOneEben += 1
            min = myArr[i]<min ? myArr[i] : min;
        }
    }
    console.log(`Число четных чисел в массиве = ${howManyOneEben}`);
    console.log(`Минимиальное число массива = ${min}`);