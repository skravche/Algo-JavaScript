// Сортировка вставками (Insertion sort) https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8-javascript-c5fba1fd6e0c
// Суть его заключается в том, что в цикле один за другим выбираются элементы массива и сравниваются с
// элементами, стоящими перед ними, до тех пор пока не будет найдет элемент, меньший текущего, или мы не
//  дойдем до начала массива.
// Перед ним мы и вставляем текущий, для этого предварительно сдвинув все элементы, которые оказались больше
// текущего, в сторону увеличения на один индекс.

// Имеет сложность O(n²) только для худшего случая (массива, отсортированного в обратном порядке), а для лучшего случая
// сложность будет O(n) — достаточно одного прохода, чтобы понять что массив отсортирован.
// При этом и затраты памяти всего O(n) на сам массив и O(1) на дополнительную переменную с текущим элементом.

console.time("ms: ");

arr = [10, 23, 45, 11, 90, 14343, -12, 3.34534534, 3, 1, 1024];

const insertionSort = arr => {
  for (let i = 1, l = arr.length; i < l; i++) {
    let j = i;
    const currentVal = arr[i];
    while (j > 0 && arr[j - 1] > currentVal) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = currentVal;
  }
  console.log(arr);
  return arr;
};
insertionSort(arr);

console.timeEnd("ms: ");