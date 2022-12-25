"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 146. PROJECT: "Bankist" App
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

// 147. Creating DOM Elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = ` `;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">$${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

// 151. Computing Usernames
const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((name) => {
        return name[0];
      })
      .join(``);
  });
};
createUsernames(accounts);

// 153. (continued from below) Reduce Method

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `$ ${acc.balance} USD`;
};

// 155. (continued from below) The Magic of Chaining Methods

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `$${incomes}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `$${Math.abs(out)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `$${interest}`;
};

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

////// EVENT HANDLERS \\\\\\
// 158. Implementing Login
let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  // Prevents form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ` `;
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

// 159. Implementing Transfers
btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ` `;

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

// 160. The findIndex method
btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);
  }
  // Hide UI
  containerApp.style.opacity = 0;
  inputCloseUsername.value = inputClosePin.value = ` `;
  labelWelcome.textContent = `Log in to get started`;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//142. Simple Array Methods
// let arr = [`a`, `b`, `c`, `d`, `e`];
// Slice method - can extract any part of array without changing the original array
// console.log(arr.slice(2)); // will return a new array
// console.log(arr.slice(2, 4)); // first parameter is included, second parameter is not included
// console.log(arr.slice(-2)); // will start backwards and keep the parameter positons
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2)); // extracts at position 1 and anythign after until position -2
// console.log(arr.slice(0, -2)); // [`a`, `b`, `c`]
// console.log(arr.slice()); // can make a shallow copy of original array
// console.log([...arr]); // another way to make a shallow copy or original array

// // Splice Method - mutates(changes) original array
// // console.log(arr.splice(2)); // will return a mutated array of original
// arr.splice(-1); // will remove the first element from end of the array
// console.log(arr);
// arr.splice(1, 2); // extracts at first position, second position is for deleting part of the array
// console.log(arr);

// // Reverse Method
// arr[(`a`, `b`, `c`, `d`, `e`)];
// const arr2 = [`j`, `i`, `h`, `g,`, `f`];
// console.log(arr2.reverse()); // this will mutate(change) the array
// console.log(arr2);

// // Concat Method
// const letters = arr.concat(arr2); // does not mutate original array
// console.log(letters); // [a, b, c, d, e, f, g, h, i]
// console.log([...arr, ...arr2]); // same as concat above
// // first array has the method called on it and the second array is passed through the concat method

// // Join Method
// console.log(letters.join(`-`)); // a-b-c-d-e-f-g-h-i

// 143. The new at Method
// Great for grabbing the last value of the array
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]); // grabs last value of the array
// console.log(arr.slice(-1)[0]); // same as below
// console.log(arr.at(-1)); // grabs the last value of the array

// console.log(`david`.at(0));
// at Method works on strings as well

// 144. Looping Arrays: forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
// We use .entries() to get the index from a for of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// Above is the same as below

// first parameter needs to be the current element, second the index, third the array
// that is how we receive the index from the forEach method
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// You cannot break out of a forEach loop, it always loop over the array
// You can break out a for of Loop, so if you need to break out of a loop use the for of loop

// 145. forEach with Maps and Sets
// Maps
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// // Set
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${_}: ${value}`);
// });
// key is exactly the same as the value for Sets, Sets have no keys

// 149. Data transformations: map, filter, reduce
// Map Method
// similar to forEach method except it creates a new array based on original array
// loops over an array and each iteration it applies a callback function that we specify
// maps original array to a new array
// map returns a new array containing the results of applying an operation on all original array elements

// Filter Method
// filters elements in the original array that satisifies a certain condition
// filter returns a new array containing the array elements that passed a specified test condition

// Reduce Method
// reduce boils(reduces) all aray elements down to one single value
// (adding all elements together)
// an accumulator is present
// reduces single array to one single value
// no new array in the end, only the reduced value is returned

// 150. The Map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// callback function as function
// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// callback function as arrow function
// const movementsUsd = movements.map((mov) => {
//   return mov * euroToUsd;
// });

// console.log(movements);
// console.log(movementsUsd);

// for of loop does the same thing however we must define an empty array and push the elements to create a new array
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * euroToUsd);
// }
// console.log(movementsUSDfor);

// Map method can access element, index, and array like the forEach method
// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
//       mov
//     )})`

// if (mov > 0) {

//   return `Movement ${i + 1}: You deposited ${mov}`;
// } else {
//   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// }
// );
// console.log(movementsDescription);

// 152. The Filter Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter((mov) => {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// The for of loop does the same thing as the filter method
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);

// const withdrawals = movements.filter((mov) => {
//   return mov < 0;
// });
// console.log(withdrawals);

// 153. The Reduce Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// first parameter of reduce call back function is the accumulator
// Must define what the accumulator starts at, we start at Zero(see below)
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iternation ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// This is the same as the reduce method, we must create a global variable to store the numbers into
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// Get Maximum Value of Movements Array
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

/////////// Working With Arrays \\\\\\\\\\\\\
////////// Coding Challenge #1 \\\\\\\\\\\\\\
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

/*
    // newDogsJulia.forEach(function (age, i) {
    //   age >= 3
    //     ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
    //     : console.log(
    //         `Dog number ${i + 1} is still a puppy, and is ${age} years old`
    //       );
    // });
    // newDogsKate.forEach(function (age, i) {
    //   age >= 3
    //     ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
    //     : console.log(
    //         `Dog number ${i + 1} is still a puppy, and is ${age} years old`
    //       );
    // });
  });
};
checkDogs(dogsJulia, dogsKate); */

// 154.    Coding Challenge #2   \\\\\\\\
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//   const humanAgeConversion = ages.map((age) => {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });
//   const filterHumanAge = humanAgeConversion.filter((age) => {
//     return age >= 18;
//   });

//   const averageAge =
//     filterHumanAge.reduce((acc, adultAge) => {
//       return acc + adultAge;
//     }, 0) / filterHumanAge.length;

//   return averageAge;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// 155. The Magic of Chaining Methods
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// // Pipeline
// const totalDepositUsd = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUsd);
// we can continue to chain methods as long as they return new arrays
// filter returns a new array so we can chain another method after
// map returns a new array so we can chain another method after
// reduce returns a value so we cannot chain after reduce
// We should not overuse chaining so we should try to use the methods sparingly
// bad practice to chain a method that mutates an array

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = (ages) => {
//   const calculation = ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, adultAge, i, arr) => acc + adultAge / arr.length, 0);
//   console.log(calculation);
//   return calculation;
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// 157. The Find Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find((mov) => mov < 0);
// the find method returns a boolen
// the find method wont return a new array
// goal of find method is to find the one element that the condition is set to
// the first element in the array that meets the condition of the callback function will be returned
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === `Jessica Davis`);
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === `Jessica Davis`) {
//     console.log(acc);
//   }
// }
