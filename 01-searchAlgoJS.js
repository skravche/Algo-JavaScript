/* 0 find min max */
var items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

//Returns the Min Value
function findMinValue(items) {
  var currentMin = items[0];
  items.forEach(function(item) {
    if (currentMin > item) {
      currentMin = item;
    }
  });
  return currentMin;
}

//Returns the Max Value
function findMaxValue(items) {
  var currentMax = items[0];
  items.forEach(function(item) {
    if (currentMax < item) {
      currentMax = item;
    }
  });
  return currentMax;
}

var minimum = findMinValue(items);
var maximum = findMaxValue(items);

console.log("Minimum value is : " + minimum);
console.log("Maximum value is : " + maximum);

/* 1 Linear Search or Sequential Search */
// Функция будет искать значение в каждом элементе массива и возвращать позицию значения в массиве,
// если оно найдено. Если значение отсутствует в массиве, оно вернет -1.
// The runtime complexity for linear search is O(n)
function linearSearch(value, list) {
  let found = false;
  let position = -1;
  let index = 0;

  while (!found && index < list.length) {
    if (list[index] == value) {
      found = true;
      position = index;
    } else {
      index += 1;
    }
  }
  return position;
}
// more example http://www.scriptonitejs.com/javascript-searching-algorithms/
//Using a for loop
var items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

function itemSearch(item) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] === item) {
      console.log("Found item " + item + " at index " + i);
      return true;
    }
  }
  //item not found
  return false;
}
var item = itemSearch(15);
if (!item) {
  console.log("Item does not exist!");
}

//using forEach
var items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

items.forEach(function(itemValue, index, array) {
  if (itemValue === 15) {
    console.log("Found item " + itemValue + " at index " + index);
    return;
  } else {
    console.log("Item does not exist!");
  }
});

/* 2  */
//Self Organizing Data
var items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

function itemSearch(itemToFind) {
  items.forEach(function(itemValue, index, array) {
    if (itemValue === itemToFind) {
      //as long as the current index value is not the first index in the array
      if (index > 0) {
        selfOrganize(array, index, index - 1);
      }
    }
  });
  return items;
}

function selfOrganize(array, index, indexToSwap) {
  //hold the item value in a temp variable
  var tempCurrentValue = array[index];
  //swap the current value with the index that comes before it
  array[index] = array[indexToSwap];
  //assign the prior index to the temp value
  array[indexToSwap] = tempCurrentValue;
}

console.log("BEFORE: " + items);
var firstSearch = itemSearch(7);
var secondSearch = itemSearch(7);
var thirdSearch = itemSearch(7);
var fourthSearch = itemSearch(7);
console.log("AFTER: " + fourthSearch);
/* console.log result
BEFORE: 2,5,3,7,8,10,15,18,24,111,12,19,87
AFTER: 7,2,5,3,8,10,15,18,24,111,12,19,87
*/

/* 3 Binary Search */
// бинарный поиск использует отсортированный список
// Для поиска 9 в списке:
// 1 2 3 4 5 6 7 8 9 10
// Сначала мы находим средний элемент. Это элемент в позиции Math.floor((first + last)/2), где first - первый индекс,
// а last - последний индекс. Мы выбираем округление так, чтобы в случае, если результат является дробью, он становится целым числом. Средний элемент в этом списке равен 5. Наше поисковое значение 9 больше 5, поэтому мы ищем список:
// 6 7 8 9 10
// Средний элемент этой части равен 8. Девять больше, чем 8, поэтому мы ищем список:
// 9 10
// Средний элемент равен 9, поэтому мы можем остановить наш поиск здесь.

function binarySearch(value, list) {
  let first = 0; //left endpoint
  let last = list.length - 1; //right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (list[middle] == value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      //if in lower half
      last = middle - 1;
    } else {
      //in in upper half
      first = middle + 1;
    }
  }
  return position;
}
