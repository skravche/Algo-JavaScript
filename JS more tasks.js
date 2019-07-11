/*  0
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function numbers(length) {
  length--;
  let a = length / 3,
    b = length / 5,
    c = length / 15;

  return (
    ((a * (a + 1)) / 2) * 3 + ((b * (b + 1)) / 2) * 5 - ((c * (c + 1)) / 2) * 15
  );
}

console.log(Math.round(numbers(1000)));

/* // 1. foo.x ???
var foo = { n: 1 };
var bar = foo; //ссилка на старі дані foo
foo.x = foo = { n: 2 }; //foo.x вказує на адрес foo і додасть нову властивість х рівне {n: 2}.
// до нового foo запишеться {n: 2}
//значення старого foo знаходеться в bar

console.log(foo.x);
//при виклику foo.x ссилається на нове foo в якому відсутній х, то foo.x undefined
console.log(bar);  */

// 2. функція суми типу add(num1)(num2)...
/*
const add = a => {
  let sum = a;
  const func = b => {
    if (b) {
      sum += b;
      return func;
    } else {
      return sum;
    }
  };
  return func;
};
console.log(add(2)(3)()); */
/*
//даний спосіб !!! не працює з консолями !!! =(
const add = a => {
  let sum = a;
  const func = b => {
    sum += b;
    return func;
  };
  func.valueOf = () => sum;
  return func;
};
console.log(add(2)(3)); // 5; */

/* // 3. console.log ?
var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]);
//b & c являються обектами, вони конвертуються в [object Object](string), через stringify ми змінюємо одну властивість

//equaltoFlatten
// ... b = 'object', c = 'object'; */

/*
// 5. обьеднати два масиви з вкладеністю
// [1, [1,2,[3,4,],[2,4]] -> [1,1,2,3,4,2,4]
sarr = [1, [1, 2, [3, 4], [2, 4]]];
const flatten = arr =>
  arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );

console.log(flatten(sarr)); */

///////////////////

// 6
(function() {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.push("dog", "rat", "goat");
  console.log(animal.length);
})();

// 7
// почати повтори з інтервалом в 1 секунду
var timerId = setInterval(function() {
  console.log("ping");
}, 1000);

// зупинити через 3 секунди
setTimeout(function() {
  clearInterval(timerId);
  console.log("stop");
}, 3000);

// 8
console.log(NaN === NaN ? true : false);

// 9
(function f() {
  function f() {
    return 1;
  }
  return f();
  function f() {
    return 2;
  }
})();

// 10
let a,
  b,
  c = [1, 2, 3, 4, 5];
console.log(a, c);

// 11
var arr = [0, 1, 2, 4];
console.log(arr.index(3));
