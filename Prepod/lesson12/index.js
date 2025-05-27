// TODO: closure, bind, callback, class
// TODO: settiemout, serinterval, this () =>, instanceof


'use strict';

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








