// TODO: closure, bind, callback, class, get set ?
// TODO: settiemout, serinterval, instanceof, static, #, errors + classes

"use strict";

// FUNCTION  понимает кто ее THIS:
// В МОМЕНТ ВЫ ЗО ВА!!!!!

// function run (destination, speed) {
//     console.log(`${this.firstName} runs to ${destination} with ${speed}kmph`);

//     function smth () {
//         console.log(this); // SMTHновский THIS
//     }

//    smth.call(this); // RUNвский THIS
// }

// function run (destination, speed) {
//     console.log(`${this.firstName} runs to ${destination} with ${speed} `);
// }

// const person = {
//     firstName: 'Valerchik',
//     age: 24,
//     run
// };

// const person2 = {
//     firstName: 'Oleg',
//     age: 54,
//     run
// };

// const dog = {
//     firstName: 'Bobik',
//     age: 90,
//     budka: 'Berlin'
// };

// const args = ['pivnuha', 30];

// run.apply(dog, args);
// run.call(dog, ...args);

// person.run('pivnuha');

// run.call(dog, 'pivnuha', 200);

// person.run('domoj', 2);

// person.run.call(dog);
// run.call(dog);
// person.run();

// run(person); // JS реши сам кто this
// run.call(person); // Я РЕШАЮ что this будет person

// arrow functions and this

// const person = {
//     firstName: 'Valerchik',
//     age: 23,
//     run: function () {
//         console.log(`${this.firstName} runs`);
//     },
//     walk () {
//         console.log(`${this.firstName} walks`);
//     }
// };

// ARROW FUNCTION  понимает кто ее THIS:
// В МОМЕНТ КОГДА ОНА РОДИЛАСЬ!!!!

// const eat = () => {
//     console.log(`${this.firstName} eats`);
// };

// function foo () {

//     const inner = () => {
//         console.log(this);
//     }

//     inner();
// }

// foo.call(person);

// const car = {
//     model: 'tesla',
//     adress: {
//         country: {
//             city: {
//                 name: 'Boston',
//                 street: {
//                     name: 'pushkina',
//                     number: 2
//                 }
//             }
//         },
//         region: ['Iowa','Texas','California']
//     },
//     specs: {
//         price: {
//             low: 2000,
//             mid: 3000,
//             high: 5000
//         },
//         engine: {
//             power: 400,
//             lowPower: 100
//         }
//     }
// };

// С помощью деструктуризации запишите в отдельны переменные:
//  1.1 Название города в котором находится авто
// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona')
// 1.3 Поле high, объекта price
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию
// должно являться объектом вида:
// { city: 12, mix: 10, country: 8 }

// js classes

// 1. при вызове чз new функиця/класс ВСЕГДА возвращает объект
// 2. this ВСЕГДА будет ссылаться на экзепляр класса
// 3. функция запишет пустой объект в this (this = {})

// function foo (a,b) {
//     // {}
//     // this = {}
//     console.log(a,b); // {}

//     // return this;
// }

// const result = new foo(2,3);

// console.log(result);

// class Person {
//     constructor (firstName, age) {
//         // {}
//         // this = {}

//         // this = {}
//         this.firstName = firstName;
//         // this = {firstName: 'Valerchik'}
//         this.age = age;
//         // this = {firstName: 'Valerchik', age: 23}

//          // return this;
//     }

//     run () {
//         console.log(`${this.firstName} runs`);
//     }
// }

// const p1 = new Person('Valerchik', 23);
// const p2 = new Person('Oleg', 54);

// Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

// Напишите код, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью метода
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.

// 1. что такое точка
// 2. что такое линия
// 3. как вычислить длину линии
// 4. как вычислить существование треугольника

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const points = [];

for (let i = 0; i < 6; i++) {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const point = new Point(randomNumber1, randomNumber2);
  points.push(point);
}

class Line {
  constructor(point1, point2) {
    this.start = point1;
    this.end = point2; // {x: 23, y: 64}
  }

  getLength() {
    return Math.round(
      Math.sqrt(
        (this.end.x - this.start.x) ** 2 + (this.end.y - this.start.y) ** 2
      )
    );
  }
}

const l1 = new Line(points[0], points[1]);
const l2 = new Line(points[2], points[3]);
const l3 = new Line(points[4], points[5]);

function canTriangleExist (line1, line2, line3) {
    const line1Length = line1.getLength();
    const line2Length = line2.getLength();
    const line3Length = line3.getLength();
   
    return (line1Length < line2Length + line3Length) &&
        (line2Length < line1Length + line3Length) &&
        (line3Length < line1Length + line2Length)
}


if ( canTriangleExist(l1,l2,l3) ) {
    console.log('triangle can exist!');
} else {
    console.log('triangle can not exist!');
}
