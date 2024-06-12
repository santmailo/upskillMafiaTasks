//     Write JavaScript functions that perform the following operations on an array:30,

const arr = [4, 8, 2, 11, 6, 7, 10];

function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

let sumOfArr = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

let countOdd = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) count++;
  }

  return count;
};

console.log("Maximum number: ", findMax(arr));
console.log("Sum of all elements: ", sumOfArr(arr));
console.log("Count of odd numbers: ", countOdd(arr));
