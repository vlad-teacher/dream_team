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





function findMaxNumberFromArray (kakojtoMassivChisel) {

    let maxNum = kakojtoMassivChisel[0];

    for (let i = 0; i < kakojtoMassivChisel.length ; i++) {
        if (maxNum < kakojtoMassivChisel[i]) {
            maxNum = kakojtoMassivChisel[i];
        }
    }

    console.log(maxNum);
}



findMaxNumberFromArray([1,5,67,2,65,8]);

findMaxNumberFromArray([7,2,5,43,34,5,6]);

