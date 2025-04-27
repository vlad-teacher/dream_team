// 1. Дан массив `[3,4,7,1,9,3,7,2,5,6]`. Найдите среднее арифметическое значение всех элементов массива, которые имеют четный индекс.

// 1.1 first way________

// let myArr = [3,4,7,1,9,3,7,2,5,6];
// let ebenIndexSum = 0;
// let count = 0;

// for (let i = 2; i < myArr.length; i++) {
//     if (i % 2 === 0){
//     ebenIndexSum += myArr[i];
//     count++;
//     }
// }
//     let averageEbenIndex = ebenIndexSum/count;

//     console.log(`Average value on eben indices ${averageEbenIndex}`);


// 1.2  second way________

// let myArr = [3,4,7,1,9,3,7,2,5,6];

// let ebenIndexValues = myArr.filter((_, index) => index >= 2 && index % 2 === 0);

// let ebenIndexSum = ebenIndexValues.reduce((sum, value) => sum + value, 0);

// let averageEbenIndex = ebenIndexSum / ebenIndexValues.length;

// console.log(`Average value on eben indices ${averageEbenIndex}`);




// 2. Сформировать массив длиной 10, в который с помощью цикла запушить только те числа которые делятся на 3 без остатка.

// let userArr = []
// for (let i = 0; i < 10;) {
//     element = prompt ('Enter please a number that is divisible by three.');

//     x = Number(element)

//     if (element ===  null){ // !!!!!!!!
//         alert ('Input interrupted by user!');
//         break;
//     } else
    
//     if (x % 3 === 0) {
//         userArr.push(x);
//         i++;
//     } else

//     if (isNaN(x)) {
//         alert ('enter a numeric value');
//     } else
//         alert ('a number is not divisible by three');

// }

// if (userArr.length === 10){
//     alert (`10 numbers that are divisible by three ${userArr}`);
// }








// 3. Дан массив чисел `[3,5,2,6,8,1,7]`, показать этот массив пользователю с помощью `alert()`, после чего попросить ввести те же числа с помощью `prompt()` по памяти, если все числа совпали, то выводим `alert()` с поздравлениям, если не совпало хотя бы одно число, сразу выводим `alert()` с ошибкой


let myArr = [3,5,2,6,8,1,7];
let userArr = []
alert (`Remember these numbers:
${myArr}

Enter each of these numbers in sequence.`);

    for (let i = 0; i < myArr.length; i++) {

        userNumber = prompt(`enter ${i+1} number`)

        if (userNumber === null){
            alert(`Input interrupted by user!`);
            break;
        }

        let x = Number(userNumber);
        
        if (isNaN(x)){
            alert(`This is not a number at all!`);
            break;
        } 

        if (x !== myArr[i]){
            alert(`Unfortunately it's wrong number!`);
            break;
        }

        userArr.push(x);
    }


    if (userArr.length === myArr.length){
        alert(`You have an excellent memory!`)
    }
    
