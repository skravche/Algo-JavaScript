// https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9-javascript-19b587506803
// Улучшенный вариант сортировки пузырьком. Но в отличие от нее этот алгоритм больше не является устойчивой сортировкой.

console.time("ms: ");
arr = [10, 23, 45, 11, 90, 14343, -12, 3.34534534, 3, 1, 1024];

const combSort = arr => {
  const l = arr.length;
  const factor = 1.247;
  let gapFactor = l / factor;
  while (gapFactor > 1) {
    const gap = Math.round(gapFactor);
    for (let i = 0, j = gap; j < l; i++, j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    gapFactor = gapFactor / factor;
  }
  console.log(arr);
  return arr;
};

combSort(arr);

console.timeEnd("ms: "); //4,492 - 5,426ms
