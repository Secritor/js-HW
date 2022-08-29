// // module 11.fucntion

"use strict";

let arr = [10, 5, 0.4, null, 2, 0.8, 67, undefined, "1"];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
function sortArr() {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
      numbercount += 1;
      if (arr[i] === 0) {
        zerocount += 1;
      } else if (arr[i] % 2 === 0) {
        evencount += 1;
      } else {
        oddcount += 1;
      }
    }
  }
  console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей,
 ${evencount} чётных, ${oddcount} нечётных.`);
}
sortArr();
//--------------------------------------------------------------------------------------

function isFilter(item) {
  if (!Number.isInteger(item) || (item < 2 && item > 1000)) {
    return "данные неверны";
  }
  let k = Math.sqrt(item);
  for (let i = 2; i <= k; i++) {
    if (item % i === 0) {
      return "непростое число";
    } else {
      return "простое число";
    }
  }
}
console.log(isFilter("ff"));

//--------------------------------------------------------------------------------------

function sum(x) {
  return function (y) {
    return x + y;
  };
}

let result = sum(1);
console.log(result(0), result(1), result(2));

//--------------------------------------------------------------------------------------
let timer = [1, 2];

const interval = setInterval(function () {
  console.log(timer.shift());
  if (timer.length == 0) {
    clearInterval(interval);
  }
}, 1000);

//--------------------------------------------------------------------------------------

function calc(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = 2;
let n = 4;

if (n < 1) {
  console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  console.log(calc(x, n));
}

//--------------------------------------------------------------------------------------
