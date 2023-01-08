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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ` `;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
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

// 161. (Continued from below) The Some and Every Method
btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.01)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ` `;
});

// 163. (continued from below) Sorting Arrays
let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
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

// 161. Some and Every Method
// the includes method searches for the exact value
// the some method searches for the condition stated
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // INCLUDES: EQUALITY
// console.log(movements.includes(-130)); // checks for equality

// // SOME: CONDITION
// console.log(movements.some((mov) => mov === -130));

// const anyDeposits = movements.some((mov) => mov > 5000); // checks for a condition
// console.log(anyDeposits);

// // EVERY
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// Seperate Call back function
// We can create a global function and call it as the call back function of any of the methods below
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // 162. Flat and flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // Flat
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flatMap
// flatMap only flattens 1 array deep, if more arrays are nested then flat needs to be used
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// 163. Sorting Arrays
// Strings
// const owners = [`Jonas`, `Zack`, `Adam`, `Martha`];
// console.log(owners.sort());
// // the sort method mutates the original array
// console.log(owners);

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.sort());

// Return < 0, A comes before B (keep order)
// Return > 0, B comes before A (switch order)

// ASCENDING ORDER
// movements.sort((a, b) => {
//   // a is current value
//   // b is the next value
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });

// Alternative way
// movements.sort((a, b) => a - b);

// // DESCENDING ORDER
// movements.sort((a, b) => {
//   // a is current value
//   // b is the next value
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });

// Alternative way
// movements.sort((a, b) => b - a);

// 164. More Ways of Creating and Filling Arrays
// Empty Arrays
// const x = new Array(7);
// console.log(x); // creates an array with 7 empty elements

// Fill method (it will mutate the array)
// x.fill(1);
// x.fill(1, 3); // will fill after the 3rd index with 1
// console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 4, 6);
// console.log(arr); // [1,2,3]

// Array.from method
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y); // [1,1,1,1,1,1,1];

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // [1,2,3,4,5,6,7];

// const diceRoll = Array.from({ length: 100 }, (num) =>
//   Math.floor(Math.random(num) * 7)
// );

// console.log(diceRoll);

// labelBalance.addEventListener(`click`, function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(`.movements__value`),
//     (el) => Number(el.textContent.replace(`$`, ` `))
//   );
//   console.log(movementsUI);
// });

// 165. Summary: Which Array Method to Use
// Ask the question, do I want to:

// mutate the original array?
//// -- Add to original array -- \\\\
// .push (to the end)
// .unshift (to the start)
//// -- Remove from the original array -- \\\\
// .pop (at the end)
// .shift (at the start)
// .splice (any)
//// -- Others -- \\\\
// .reverse
// .sort
// .fill

// create a new array?
//// -- Computed from original array -- \\\\
// .map (loop)
//// -- Filterd using a condition -- \\\\
// .filter
//// -- Portion of the original array -- \\\\
// .slice
//// -- Adding original to the other array -- \\\\
// .concat
//// -- Flattening the original array -- \\\\
// .flat
// .flatMap

// get an array index?
//// -- Based on the value of the array -- \\\\
// .indexOf
//// -- Based on test condition -- \\\\
// .findIndex

// get an array element?
//// -- Based on test condition -- \\\\
// .find

// know if an array includes a certain element?
//// -- Based on value of the array -- \\\\
// .includes
//// -- Based on test condition -- \\\\
// .some (if 1 element is true based on condition set)
// .every (if all elements are true based on condition set)
// includes, some, and every all return boolean values

// transform an array into a string?
//// -- Based on seperator string -- \\\\
// .join

// transform the new array to a value?
//// -- Based on accumulator --  \\\\
// .reduce
// (boil array down to a single value of any type:
// number, string, boolean, or even a new array or object)

// loop over the array?
//// -- Based on callback -- \\\\
// .forEach
// (does not create a new array, just loops over it)

// 166. Array Methods Practice

// 1.
// const bankDepositSum = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// const bankDepositSum = accounts.flatMap((acc) => acc.movements); same as above

// 2.
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length; // 6

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // 6

// Prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

// 3.
// const { deposits, withdrawals } = accounts
//   .map((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// 4.
// this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

//   const exceptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];

//   const titleCase = title
//     .toLowerCase()
//     .split(` `)
//     .map((word) =>
//       exceptions.includes(word) ? word : capitalize(word).join(` `)
//     );

//   return capitalize(titleCase);
// };

// console.log(convertTitleCase(`this is a nice title`));
// console.log(convertTitleCase(`this is a LONG title but not too long`));
// console.log(convertTitleCase(`and here is another title with an EXAMPLE`));

// 167. Coding Challenge #4
// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
const recommendedFood = dogs.forEach((dog) => {
  dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28);
});
console.log(dogs);
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
const findSarah = dogs.findIndex(function (person) {
  const found = person.owners.includes(`Sarah`);
  if (found === true && person.curFood > person.recommendedFood) {
    console.log(`It is eating too much food`);
  } else if (found === true && person.curFood < person.recommendedFood) {
    console.log(`It is eating too little food`);
  }
});

// const dogSarah = dogs.find((dog) => dog.owners.includes(`Sarah`));
// console.log(
//   `Sarah's dog is eating ${
//     dogSarah.curFood > dogSarah.recommendedFood ? `much` : `little`
//   }`
// );

// console.log(dogs[2].owners.flat());
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .filter((owner) => owner.curFood > owner.recommendedFood)
  .map((owner) => owner.owners)
  .flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter((owner) => owner.curFood < owner.recommendedFood)
  .map((owner) => owner.owners)
  .flat();

console.log(ownersEatTooLittle);
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
const statement1 = function (arr) {
  console.log(`${arr[0]} and ${arr[1]} and ${arr[2]}'s dogs eat too much!`);
};
statement1(ownersEatTooMuch);

const statement2 = function (arr) {
  console.log(`${arr[0]} and ${arr[1]} and ${arr[2]}'s dogs eat too little!`);
};
statement2(ownersEatTooLittle);

// Same as above, but written better
// console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(` and `)}'s dogs eat too little`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
const exactFood = dogs.map((food) =>
  food.curFood === food.recommendedFood ? console.log(true) : console.log(false)
);

// same as above but better using the some method
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
const okayFood = dogs.map((food) =>
  food.curFood > food.recommendedFood * 0.9 &&
  food.curFood < food.recommendedFood * 1.1
    ? console.log(true)
    : console.log(false)
);

// same as above
// const checkEatingOkay = (dog) =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.some(checkEatingOkay));

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const okayDog = dogs.filter(
  (food) =>
    food.curFood > food.recommendedFood * 0.9 &&
    food.curFood < food.recommendedFood * 1.1
);
console.log(okayDog);
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
