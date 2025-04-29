// TODO: for, rest, spread, destructuriation
// Objects

// Object example
// const obj = {
//     key: 'value',
//     aaa: 2,
//     myFashionKey: false,
//     items: [1,2,3],
//     obj: {}
// };

// const person = {
//     name: 'Valerchik',
//     adress: {
//         country: 'Germany',
//         city: 'Berlin'
//     },
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     age: 58,
//     weight: 98,
//     height: 183,
// };

// person.stack.push('React');

// console.log( person.adress );
// console.log( person['adress'] );

// const fieldName = 'stack';
// console.log( person[fieldName] ); // person.stack

// const fruits = {
//     0: 'apple',
//     1: 'banana',
//     2: 'pineapple',
//     3: 'orange',
//     length: 5
// };

// fruits[1] = 'potato';

// const person = {
//   name: "Valerchik",
//   adress: {
//     country: "Germany",
//     city: "Berlin",
//   },
//   isProgrammer: true,
//   stack: ["HTML", "CSS", "JS"],
//   age: 58,
//   weight: 98,
//   height: 183,
// };

// person.age = person.age + 1;
// person.age++;

// person.newField = 'value'; // создали поле newField
// person['anotherField'] = 'value'; // создали поле anotherField

// delete person.weight; // удаляем поле weight из объекта person

// console.log(person);

// console.log(Number('2'));
// console.log(Boolean('hi there'));
// String()
// Array()
// Object()

// const result = Object.keys(person); // ['name', 'age', 'adress' .... ]

// for (let i = 0; i < result.length; i++) {
    // console.log( result[i] );
    // console.log( person[ result[i] ] );
// }

// for in
// for (let key in person) {
//     console.log( key ); //  ключи объекта
//     console.log( person[key] ); // значение ключа из объекта 
// }


// марка
// модель
// год выпуска
// тип двигателя


// const car = {
//     brand: 'BMW',
//     model: 'X5',
//     year: 2025,
//     engineType: 'petrol',
// };

// car.model = 'X6';
// car['model'] = 'X7';

// `i have ${} ${} car`


// вывести в консоль сообщение "у меня есть МАРКА МОДЕЛЬ авто"
// удалить поле year

// 1. Создать объект subscribers с полями oldSubscribers:
// 300, newSubscribers: 500.

// 2. Добавьте в объект поле currentSubscribers и
// запишите в него сумму oldSubscribers и
// newSubscribers.

// 3. Если число newSubscribers больше 700, вывести
// сообщение «You are famous!», иначе вывести
// сообщение Try harder!

// используя цикл, написать программу которая выясняет пуст ли объект (в нем нет ни одного поля)
// если пуст вывести в консоль EMPTY
// если нет вывести в консоль NOT EMPTY

// const obj = {
//     a: 1,
//     c: 3
// };

// const obj2 = {
//     a: 10,
//     b: 2
// };

// const result = Object.assign(obj2, obj);

// console.log(result);


// const person = {
//     name: 'Valerchik',
//     age: 2
// };

// const person2 = structuredClone(person); // создаем копию объекта

// person2.age++;

// console.log(person2);


// FUNCTIONS

// function test () {
//     console.log('FUNCTION RUNS!');
// }

// test();

// const arr = [1,23,2,23,13,1,23];
// const arr2 = [5,6,4,3,456,456,45,2];

// let maxNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[0] > maxNum) {
//         maxNum = arr[0];
//     }
// }

// findMaxNum(arr); // 23
// findMaxNum(arr2); // 456




// function test (stroka, someVar, anotherVar) {
//     console.log(stroka, someVar, anotherVar);
// }

// test('hi there', 'two', 'three');
// test('hello world!', 'four', 'five');

// напишите функцию sum, передайте ей два числа
// задача функции складывать два числа и выводить их в консоль
// sum(2,3) // 5
// sum(4,8) // 12



// function plitochnik (plitka) {
//     console.log('kladu plitku...', plitka);
// }

// plitochnik('red');

// plitochnik('green');





// function findMaxNumberFromArray (kakojtoMassivChisel) {

//     let maxNum = kakojtoMassivChisel[0];

//     for (let i = 0; i < kakojtoMassivChisel.length ; i++) {
//         if (maxNum < kakojtoMassivChisel[i]) {
//             maxNum = kakojtoMassivChisel[i];
//         }
//     }

//     console.log(maxNum);
// }

// findMaxNumberFromArray([1,5,67,2,65,8]);

// findMaxNumberFromArray([7,2,5,43,34,5,6]);




// Loops recap

//2. Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.

// 1. prompt многократно нужно брать числа
// 2. break когда нажали отмена (если нажали отмена prompt вернет null)
// 3. после break вывести среднее арифметическое (сложить все n чисел и посчитать их количество)
// 4. нужно не забыть посчитать количество чисел (мб завести переменную ?)

// let sum = 0;
// let counter = 0;

// for (;;) {
//     const userNumber = prompt('enter a number');

//     if (userNumber === null) {
//         break;
//     }

//     counter += 1;
//     sum += Number(userNumber);
// }

// console.log(sum/counter);


//3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.


// 1. prompt, 5 раз
// 2. след число > предыдущ (переменная > переменная2)
// 3. если не больше то вывести ошибку, break

// let prevNumber = Number(prompt('enter a number'));

// for (let i = 0; i < 4 ; i++) {
//     const nextNumber = Number(prompt('enter a number'));
//     console.log('nextNumber', nextNumber);
//     console.log('prevNumber',prevNumber);
    
//     if (nextNumber < prevNumber) {
//         alert('ERROR!');
//         break;
//     }
//     prevNumber = nextNumber;
// }

// const p1 = prompt('enter a number');

// const p2 = prompt('enter a number');
// // p2 > p1
// const p3 = prompt('enter a number');
// // p3 > p2
// const p4 = prompt('enter a number');
// // p4 > p3
// const p5 = prompt('enter a number');
// // p5 > p4

// TODO: scope, default values, rest op in args, n args

// function sum (a, b) { // a = 2, b = undefined
//     console.log(a);
//     console.log(b);
// }

// sum(2,3);

// function declaration

// sum(); // это работает!

// function sum () {
//     console.log('declaration works!');
// }

// function expression

// sum(6, 2); // это не сработает!

// const sum = function (a,b) {
//     console.log(a - b);
// };

// hoisting всплытие переменных

// jekiChan = undefined
// decl <<<=== function
// expres = undefined

// console.log(jekiChan); // undefined

// decl();
// expres();

// var jekiChan = 'good';

// function decl () {}

// var expres = function () {};

// let a NOTE: не давать к ней доступ до того как случится let

// const arr = [1,2,3];

// arr.push(a);

// console.log(arr);

// let a = 2;


// anonymous functions
// function test () {}
// function () {} // anonymous
// const expr = function () {};
// console.log( function () { 2 + 3 } );

// IIFE immediately invoked function expression
// (function (name) {
//     console.log(name);
// }) ()


// function test () {}
// const func = function () {}; // экспресшн
// function () {}

// if () {} 
// for () {}

// const arr = [];
// const obj = {};
// function () {} // переиспользовать логику (алгоритм)

// TODO: return

// 1. написать функцию getAnnualRating(), которая принимает 4
// оценки за четверти, и выводит в консоль годовую оценку

// 2. getDayOfWeek(), которая принимает номер дня недели
// и выводит в консоль его название, если введен не сущетвующий
// день недели, то функция должна выводить "такого дня нет"
// *: продумайте функцию так, чтобы она могла выводить названия
// на разных языках

function getAnnualRating (q1, q2, q3, q4) {
    const annualRating = (q1 + q2 + q3 + q4) / 4;

    console.log(`Оценка за год: ${Math.round(annualRating)}`);
}

getAnnualRating(2,3,7,5);
