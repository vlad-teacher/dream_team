// TODO: closure, this, callback




// const a = 1;
// const b = 3;

// function test (c) { // let c = a
//     const a = 2;

//     function inner () { // let a = c
//         const a = 3;

//         console.log(a); // 1
//     }

//     inner(c);

//     console.log(a); // 1
// }

// test(a);


// TODO: let const  in funcs


// let a = 1;

// function test () {
//     a = 2; // УЖАС! (нету let!)

//     console.log('IM TEST!', a);
// }

// test();

// console.log(a);


// block scope

// let sum = 0;
// let i = 0;

// for (; i < 10; i++) {
//     sum += i;
// }

// console.log( sum / i );


// arrow function

// const sum = function (a,b) {
//     return a + b;
// };


// sum();
// fira code

// const sub = (a, b) => a - b; // return произойдет АВТОМАТИЧЕСКИ!

// const test = (a) => a + 2;


// const tovar1 = {
//     name: "ruchka",
//     type: "kanzelyaria",
//     price: 23,
//     color: "green",
//     sklad: [
//         {
//             adress: "London",
//             amount: 92
//         }
//     ]
// };

// const tovar3 = {
//     name: "ruchka",
//     type: "kanzelyaria",
//     price: 93,
//     color: "red",
//     sklad: [
//         {
//             adress: "Paris",
//             amount: 9
//         }
//     ]
// };

// const tovar4 = {
//     name: "skrepka",
//     type: "kanzelyaria",
//     price: 1,
//     color: "yellow",
//     sklad: [
//         {
//             adress:"Berlin",
//             amount: 23
//         },
//         {
//             adress: "Madrid",
//             amount: 2
//         }
//     ]
// };

// const tovary = [tovar1, tovar3, tovar4];


// function isTovarAvailable (arrTovars, tovarName) {
//     let  isAvailbale = false;
//     for (let i = 0; i < arrTovars.length; i++) {
//         if ( arrTovars[i].name === tovarName ) {
//             isAvailbale = true
//         }
//     }

//     if (isAvailbale) {
//         alert("TOVAR IS AVAILABLE");
//     } else {
//         alert("TOVAR IS NOT AVAILABLE");
//     }
// }


// isTovarAvailable(tovary, 'ruchka');
// isTovarAvailable(tovary, 'skrepka');
// isTovarAvailable(tovary, 'miska');


// obj methods call apply bind

// const  wwwwwwwwwwwwwalk = function () {
//     // this // context вызова
//     console.log(`${this.firstName} walks bokom`);
//     // console.log(this);
// }


// const person = {
//     firstName: 'Valerchik',
//     age: 24,
//     stack: ['CSS', 'HTML'],
//     walk: wwwwwwwwwwwwwalk,
//     work () {
//         console.log('Valerchik works');
//     },
//     eat: () => {
//         console.log('Valerchik eats');
//     }
// };

// const person2 = {
//     firstName: 'Oleg',
//     age: 64,
//     stack: ['Kopat', 'Kolotit'],
//     walk: wwwwwwwwwwwwwalk,
//     work () {
//         console.log('Oleg works');
//     },
//     eat: () => {
//         console.log('Oleg eats');
//     }
// };

// person.walk();

// person2.walk();

// потеря контекста

// const personWalk = function () {
//     this

//     person.walk();
// };

// window.prompt('asdasd')
// prompt();

// window.personWalk();



// 1. создать объекты cat и dog
// добавить им на двоих метод eat, метод должен принимать аргумент food (еда)
// методы eat должны ссылаться на одну и ту же функцию eat 
// и должны выводить в консоль сообщение вида {cat/dog.name} eats {food}

// 2. const persons = [
//     {
//         name: 'One',
//         age: 1,
//     },
//     {
//         name: 'Two',
//         age: 2
//     },
//     {
//         name: 'Three',
//         age: 3
//     },
//     {
//         name: 'Four',
//         age: 4
//     }
// ];

// создать функицю sayHello() которая выводит сообщение "{NAME} says hello"
// добавить эту функцию каждому объекту как метод sayHello

