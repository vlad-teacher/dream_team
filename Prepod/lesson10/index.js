// TODO: for, rest, spread, destructuriation
// TODO: scope, default values, rest op in args, n args

// function sum ( a, b ) {

//     console.log(a);
//     console.log(b);

//     if (a < 0 || b < 0) {
//         return;
//     }

//     return a + b;
// }

// const result = 7 - sum(2,3);

// console.log(result);

// Написать игру "камень ножницы бумага"
// играем против компа
// играем до 5 побед
// если пользователь нажал "отмена", то считаем что он проиграл

// 1. получить от пользователя камень ножницы или бумагу
// 2. получить от компа камень ножницы или бумагу
// 3. сопоставить полученные данные и выяснить кто победил
// 4. если победил комп то очко компу
// 5. если победил пользка то очко пользователю
// TODO: добавить подсчет
// TODO: добавить отмену

// const userChoiceString = prompt('введите кнб'); // 'бумага'
// const compChoiceNumber = Math.round( Math.random() * 2 ); // 0 1 2

// const obj = {
//     'камень': 0,
//     'ножницы': 1,
//     'бумага': 2
// };

// const userChoice = 2;

// const compChoice = compVariants[compChoiceNumber];

function getUserChoice() {
  const userChoiceToNumber = {
    камень: 0,
    ножницы: 1,
    бумага: 2,
  };

  const userChoiceString = prompt(`Введите камень/ножницы/бумага`);

  return userChoiceToNumber[userChoiceString];
}

function getCompChoice() {
  return Math.floor(Math.random() * 3);
}

function isUserWin(userChoice, compChoice) {
  return (
    (userChoice === 0 && compChoice === 1) ||
    (userChoice === 1 && compChoice === 2) ||
    (userChoice === 2 && compChoice === 0)
  );
}

function isDraw(userChoice, compChoice) {
  return userChoice === compChoice;
}

function doesWinnerExist(userScore, compScore) {
  return userScore === 2 || compScore === 2;
}

function startGame() {
  let userScore = 0;
  let compScore = 0;

  for (;;) {
    const userChoice = getUserChoice();
    const compChoice = getCompChoice();

    if (isDraw(userChoice, compChoice)) {
      alert(`Ничья`);
      continue;
    } else if (isUserWin(userChoice, compChoice)) {
      alert(`Вы победили`);
      userScore++;
    } else {
      alert(`Вы проиграли`);
      compScore++;
    }
    if (doesWinnerExist(userScore, compScore)) {
      alert(`Счет: user - ${userScore}, comp - ${compScore}`);
      break;
    }
  }
}


for (;;) {
    const shouldRestart = prompt('start new game?');
    if (shouldRestart === 'да') {
        startGame();
    } else {
        break;
    }
}

