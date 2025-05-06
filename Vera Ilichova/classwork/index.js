
const car= {
brand: "Opel",
year: 2025,
engine: "patrol"}
car.brand="BMW";
console.log( ` i have a ${car.brand}`);
delete car.year;


const subscribers = {

oldSubscribers: 300,
newSubscribers: 500
}
subscribers.currentSubscribers= subscribers.oldSubscriberssubscribers + subscribers.newSubscribers; 
if (subscribers.newSubscribers > 700) {console.log (`You are famous!`);}
else {console.log (`Try harder`);}



function test(stroka1, stroka2){console.log(stroka1,stroka2); }
test (`hi there`,`hello wotld`);

function sum(number1,number2){console.log(number1+number2);}
sum(2,3);


function getAnnualRating(note1, note2, note3,note4){console.log((note1+note2+note3+note4)/4); }
getAnnualRating (4,5,3,5);

const day=Number(prompt(`input number of day`));console.log(day);
getDayofWeek(day);
function getDayofWeek(day){ 
   switch (day) {
        case 1: {console.log(`понедельник`);break;}
        case 2: {console.log(`вторник`);break;}
        case 3: {console.log(`среда`);break;}
        case 4: {console.log(`четверг`);break;}
        case 5: {console.log(`пятница`);break;}
        case 6: {console.log(`суббота`);break;}
        case 7: {console.log(`воскресенье`);break;} 
       default: {console.log(`такого дня нет`);}         
}}

// algorithm: reverse massiv
//let arr = ["H", "e", "l", "l", "o", "-", "W", "o", "r", "l", "d"];
//console.log(`Reverse arr is ${reverse(arr)}`);

//function reverse(arr) {
   // let arr = ["H", "e", "l", "l", "o", "-", "W", "o", "r", "l", "d"];
   // console.log(`Reverse arr is ${reverse(arr)}`);
    
    //function reverse(arr) {
    //    let l = 0;
     //   let r = arr.length - 1;
     //   while(l < r) {
      //      let temp = arr[l];
      //      arr[l] = arr[r];
       //     arr[r] = temp;
       //     l++;
       //     r--;
       // }
        //return arr;
    //}

    let arr = ["H", "e", "l", "l", "o", "-", "W", "o", "r", "l", "d"];
console.log(`Reverse arr is ${reverse(arr)}`);

function reverse(arr) {
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}

// 1. получить от пользователя камень ножницы или бумагу
// 2. получить от компа камень ножницы или бумагу
// 3. сопоставить полученные данные и выяснить кто победил
// 4. если победил комп то очко компу
// 5. если победил пользка то очко пользователю

const userChoiceToNumber = {
    камень: 0,
    ножницы: 1,
    бумага: 2,
  };
  let userScore = 0;
  let compScore = 0;
  for (;;) {
    const userChoiceString = prompt(`Введите камень/ножницы/бумага`);
    const compChoiceNumber = Math.floor(Math.random() * 3);
    const userChoiceNumber = userChoiceToNumber[userChoiceString];
    if (userChoiceNumber === compChoiceNumber) {
      alert(`Ничья`);
      continue;
    } else if (
      (userChoiceNumber === 0 && compChoiceNumber === 1) ||
      (userChoiceNumber === 1 && compChoiceNumber === 2) ||
      (userChoiceNumber === 2 && compChoiceNumber === 0)
    ) {
      alert(`Вы победили`);
      userScore++;
    } else {
      alert(`Вы проиграли`);
      compScore++;
    }
    if (userScore === 5 || compScore === 5) {
      alert(`Счет: user - ${userScore}, comp - ${compScore}`);
      break;
    }
  }