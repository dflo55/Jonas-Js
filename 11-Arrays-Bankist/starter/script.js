"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//142. Simple Array Methods
let arr = [`a`, `b`, `c`, `d`, `e`];
// Slice method - can extract any part of array without changing the original array
console.log(arr.slice(2)); // will return a new array
console.log(arr.slice(2, 4)); // first parameter is included, second parameter is not included
console.log(arr.slice(-2)); // will start backwards and keep the parameter positons
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); // extracts at position 1 and anythign after until position -2
console.log(arr.slice(0, -2)); // [`a`, `b`, `c`]
console.log(arr.slice()); // can make a shallow copy of original array
console.log([...arr]); // another way to make a shallow copy or original array

// Splice Method - mutates(changes) original array
// console.log(arr.splice(2)); // will return a mutated array of original
arr.splice(-1); // will remove the first element from end of the array
console.log(arr);
arr.splice(1, 2); // extracts at first position, second position is for deleting part of the array
console.log(arr);

// Reverse Method
arr[(`a`, `b`, `c`, `d`, `e`)];
const arr2 = [`j`, `i`, `h`, `g,`, `f`];
console.log(arr2.reverse()); // this will mutate(change) the array
console.log(arr2);

// Concat Method
const letters = arr.concat(arr2); // does not mutate original array
console.log(letters); // [a, b, c, d, e, f, g, h, i]
console.log([...arr, ...arr2]); // same as concat above
// first array has the method called on it and the second array is passed through the concat method

// Join Method
console.log(letters.join(`-`)); // a-b-c-d-e-f-g-h-i
