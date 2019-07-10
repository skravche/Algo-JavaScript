// https://medium.com/@alivander/%D0%B3%D0%BD%D0%BE%D0%BC%D1%8C%D1%8F-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-javascript-40571db21ea6
// Алгоритм гномьей сортировки одновременно похож и на сортировку вставками и на сортировку пузырьком.
// Только, в отличии от сортировки вставками, мы не используем дополнительную переменную для текущего элемента,
//  а спускаем его вниз “пузырьком”, до первого элемента с меньшим значением чем у текущего (для сортировки по возрастанию)
// сложность алгоритма все еще O(n²), ведь мы поочередно движемся в двух направлениях.

console.time("ms: ");
arr = [10, 23, 45, 11, 90, 14343, -12, 3.34534534, 3, 1, 1024];

const gnomeSort = arr => {
  const l = arr.length;
  let i = 1;
  while (i < l) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    } else {
      i++;
    }
  }
  return arr;
};

console.log(gnomeSort(arr));

console.timeEnd("ms: ");