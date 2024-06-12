let a = 153;
let b = 166;
let c = 44;
let d = 71;

const arr = [a, b, c, d];

for (let i = 0; i < arr.length; i++) {
  console.log("Number :- ", arr[i]);

  // checking sum of digits
  let sumOfDigits = 0;
  let temp = arr[i];

  while (temp > 0) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp / 10);
  }

  console.log("Sum of its digits ", sumOfDigits);

  //checking armstrong

  temp = arr[i];
  let armStrongSum = 0;

  while (temp > 0) {
    armStrongSum += (temp % 10) ** 3;
    temp = Math.floor(temp / 10);
  }

  if (armStrongSum == arr[i]) {
    console.log("Is it an Armstrong number? ", "Yes");
  } else {
    console.log("Is it an Armstrong number? ", "No");
  }

  //checking Prime
  let number = arr[i];

  if (number <= 1) {
    console.log("Is it a prime number? No");
  } else if (number <= 3) {
    console.log("Is it a prime number? Yes");
  } else if (number % 2 === 0 || number % 3 === 0) {
    console.log("Is it a prime number? No");
  } else {
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        console.log("Is it a prime number? No");
        break;
      }
      i += 6;
    }
    if (i * i > number) {
      console.log("Is it a prime number? Yes");
    }
  }

  //cheching factors

  number = arr[i];
  let factors = "";

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors += "" + i + " ";
    }
  }

  console.log("factors", factors);

  console.log("\n");
}
