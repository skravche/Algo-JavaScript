// SELECTION SORT сортировка выбором  https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BE%D0%BC-javascript-a5610af309c8
// за каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и поменять его местами с
// первым элементом в еще не отсортированном участке массива, тем самым уменьшив длину этого участка на один,
// и так до тех пор пока не будут отсортированы все элементы.

console.time("ms: ");
arr = [10, 23, 45, 11, 90, 14343, -12, 3.34534534, 3, 1, 1024];

const selectionSort = arr => {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let indexMin = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  console.log(arr);
  return arr;
};
selectionSort(arr);

console.timeEnd("ms: ");
