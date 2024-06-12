// uncomment if using this code if running it in node   ---------->

//----> // const fetch = require("node-fetch");

// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

let number = [2, 3, 4, 5, 6, 7];

const squareNumber = number.map((num) => {
  return num * num;
});

console.log(squareNumber);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.

function checkGrade(num) {
  if (num >= 85) {
    return "Your grade is :- A";
  } else if (num >= 70) {
    return "Your grade is :- b";
  } else if (num >= 55) {
    return "Your grade is :- c";
  } else if (num >= 45) {
    return "Your grade is :- d";
  } else {
    return "Your grade is :- f";
  }
}

checkGrade(100);
checkGrade(70);
checkGrade(40);

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

class Car {
  companyName = "Maruti suzuki";
  model = "suzuki";
  year = 2021;
  changeYear = (year) => {
    this.year = year;
  };
}

const { model, year } = new Car();

console.log(model + "  -----------  " + year);

const car = new Car();
car.changeYear(2024);
console.log(car.year);
// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

number = [2, 3, 4, 5, 6, 7, 9, 13];
const primeArr = number.filter((num) => {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count > 1) {
    return false;
  }
  return true;
});

console.log(primeArr);

// Q5 -  State different use cases of map, filter and reduce functions.

// map use case :- modifying data
numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter :- filtering data
numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// reduce : - Summing Values
numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.org/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Call the function to fetch and log the data
fetchData();

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  contact: {
    email: "john.doe@example.com",
    phone: "555-1234",
  },
};

// Another example where contact is missing
const personWithoutContact = {
  name: "Jane Doe",
  address: {
    street: "456 Elm St",
    city: "Othertown",
    state: "TX",
    zip: "67890",
  },
};

// Accessing phone number with optional chaining
const phoneNumber = person.contact?.phone;
console.log(phoneNumber); // Output: '555-1234'

// Accessing phone number where contact is missing
const phoneNumberWithoutContact = personWithoutContact.contact?.phone;
console.log(phoneNumberWithoutContact); // Output: undefined
