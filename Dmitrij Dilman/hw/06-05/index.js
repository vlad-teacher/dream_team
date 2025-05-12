// Решая эти задачи старайтесь как можно чаще использовать rest и spread операторы

// 1. Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением,
// используя SPREAD для передачи элементов в `Math.min` и `Math.max`.

function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}

console.log(findMinMax([3, 8, 5, 9, 16, 1, 18, 2]));
