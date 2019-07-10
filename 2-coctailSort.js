//сортировка перемешиванием = она же двунаправленная сортировка — по сути всего лишь оптимизированный алгоритм
// пузырьковой сортировки. Напомним — ее суть была в том, что за каждый проход по массиву в его конец “всплывал” максимальный элемент.
// Шейкерная сортировка работает быстрее, чем сортировка пузырьком, но все еще имеет сложность O(n²).
// !!!! За один проход в конец массива “всплывает” максимальный элемент из диапазона, а за следующий проход — в начало
// массива минимальный (мы рассматриваем сортировку по возрастанию).
// Эти элементы можно больше не рассматривать и таким образом диапазон сужается с двух сторон

console.time("ms: ");

arr = [10, 23, 45, 11, 90, 14343, -12, 3.34534534, 3, 1, 1024];

// const cocktailSort = arr => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     for (let i = left; i < right; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//     right--;

//     for (let i = right; i > left; i--) {
//       if (arr[i] < arr[i - 1]) {
//         [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
//       }
//     }
//     left++;
//   }
//   console.log(arr);
//   return arr;
// };
// cocktailSort(arr);

///////////////////
//rewrite muself
const shakerSort = arr => {
  let leftSide = 0;
  let rightSide = arr.length - 1;
  while (leftSide < rightSide) {
    for (let i = leftSide; i < rightSide; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    rightSide--;
    for (let i = rightSide; i > leftSide; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
    leftSide++;
  }
  console.log(arr);
  return arr;
};
shakerSort(arr);

console.timeEnd("ms: ");
