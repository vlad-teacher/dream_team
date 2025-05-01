// 1. Напишите функцию которая вычисляет сумму чисел от 0 до n, значение n передается как аргумент функции. Например `sumTo(3)` вычисляется ка 0 + 1 + 2 + 3.

// function calculationOfTheSum(n) {
//   let result = "";
//   for (let i = 0; i <= n; i++) {
//     result += i;
//     if (i < n) {
//       result += " + ";
//     }
//   }
//   console.log(result);
// }
// calculationOfTheSum(5);

// 2. Напишите функцию `arrMaker()`, которая принимает 3 числа и выводит в консоль массив из этих трех чисел. Например: `arrMaker(1,2,3)` выводит `[1,2,3]`.

// function arrMaker(numberOne, numberTwo, numberThree) {
//   let arr = [numberOne, numberTwo, numberThree];
//   console.log(arr);
// }
// arrMaker(10, 15, 20);

// 3. Напишите функцию, которая возвращает процент побед и процент поражений в морской бой или шахматы. Функция принимает два параметра: первый это количество побед, а второй это количество поражений. Функция выводит в консоль результативность в процентах. Пример работы: `myStats(352,211)`, это значит было 352 победы и 211 поражений. Функция выводит сообщение «ваш процент побед - 62%, поражений – 38%»

// function percentageOfWinsAndLossesInTheSeaBattle(
//   numbersOfGames,
//   sumOfWins,
//   sumOfLosses
// ) {
//   let winningPercentage = Math.round((sumOfWins / numbersOfGames) * 100);
//   let lossesPercentage = Math.round((sumOfLosses / numbersOfGames) * 100);
//   console.log(`Ваш процент побед - ${winningPercentage}%`);
//   console.log(`Ваш процент порожений - ${lossesPercentage}%`);
// }
// percentageOfWinsAndLossesInTheSeaBattle(750, 352, 211);

// 4. `getDayOfWeek()`, которая принимает номер дня недели и выводит в консоль его название, если введен не сущетвующий день недели, то функция должна выводить "такого дня нет".
// *: продумайте функцию так, чтобы она могла выводить названия на разных языках

function getDayOfWeek(dayNumber, Language) {
  const dayOfTheWeek = {
    en: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    ru: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ]
  }
  const day = dayOfTheWeek[Language]
  if (dayNumber >= 1 && dayNumber <= 7) {
    console.log(`День недели: ${day[dayNumber - 1]}`);
  } else {
    console.log("Такого дня нет");
  }
}
getDayOfWeek(7, "ru");
getDayOfWeek(5, "en")