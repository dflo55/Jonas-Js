"use strict";

// Default Parameters
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   // ES5
//   numPassengers = numPassengers || 1;
//   price = price || 199;
// const booking = {
//   flightNum,
//   numPassengers,
//   price,
// };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);
// createBooking(`LH123`, undefined, 1000); // undefined will skip parameter when function
// // is called so default parameter will be the value in place of undefined.

// // How passing arguments works: Value vs. Reference

// const flight = `LH235`;
// const david = {
//   name: `David Flores`,
//   passport: 2456842,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr. ` + passenger.name;

//   if (passenger.passport === 2456842) {
//     alert(`Check in`);
//   } else {
//     alert(`Wrong Passport`);
//   }
// };

// checkIn(flight, david);
// console.log(flight); //
// console.log(david); // Mr. David Flores

// IS the same as doing
// const flightNum = flight; // reference does not change the original, passing a primitive type through a function only creates a copy
// const passenger = david; // if we pass an object through a function, it is a copy and whatever is changed in the copy will also be changed in the original.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(david);
// checkIn(flight, david);

// First Class and Higher Order Functions
// javaScript has first class functions
// this means that functions are simply values
// functions are just another "type" of object

// store functions in variables or properties(objects)
// pass functions as arguments to other functions(add event listener)
// return functions from functions
// call methods on functions

// Higher Order Functions
// a function that receives another function as an argument, that returns a new function, or both
// this is only possible because of first class functions
// addEventListener(higher order function) function receives another function(call back function)
//
// Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, ` `).toLowerCase();
// };

// My own practice example of abstraction
// const correctingSentence = function (str) {
//   const [first, ...others] = str.toLowerCase().split(` `);
//   const singleLetter = first.slice(0, 1).toUpperCase();
//   const firstWordComplete = singleLetter + first.slice(1);
//   return firstWordComplete + ` ` + others.join(` `);
// };

// const mistakenSentence = function (str, fn) {
//   console.log(`This is the original String: ${str}`);
//   console.log(`This is the original function: ${fn.name}`);
//   console.log(`This is the correct sentence: ${fn(str)}`);
// };

// mistakenSentence(
//   `david hAS been very gRateFul fOr LearNiNG JS!`,
//   correctingSentence
// );

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(` `);
//   return [first.toUpperCase(), ...others.join()];
// };

// // Higher Order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn()}`);

//   console.log(`Trnsformed by: ${fn.name}`);
// };

// transformer(`JavsScript is the best!`, upperFirstWord);
// transformer(`Javascript is the best!`, oneWord);

// JS Used callback functions all the time
// const high5 = function () {
//   console.log(`hi five`);
// };
// document.body.addEventListener(`click`, high5);

// [`David`, `MArtha`, `Adam`].forEach(high5);

///// Functions Returning Functions //////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`David`);
// greeterHey(`Steven`);

// greet(`Hello`)(`David`);

// const greet2 = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet2(`Yo`)(`Kelly`);
//
//

// ////// The call and apply Methods //////
// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `David Flores`);
// lufthansa.book(635, `Mike Smith`);
// console.log(lufthansa);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;

// // /////// Call method ///////////
// // book(23, `Sara Wilis`); // Doesnt Work
// book.call(eurowings, 23, `Sara Willis`);
// console.log(eurowings);

// book.call(lufthansa, 239, `Joe Gatto`);
// console.log(lufthansa);

// const swiss = {
//   airline: `Swiss Air Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// book.call(swiss, 583, `Mary Cooper`);
// console.log(swiss);

// // Apply Method
// const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

////////// Bind Method //////////
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23); // Partial Application
// bookEW23(`Mark Walls`);
// bookEW23(`James Hoss`);

// With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const tax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// tax(0.1)(200);
// const addVAT2 = tax(0.23);
// console.log(addVAT2(100));

//////// CODING CHALLENGE #1  \\\\\\\\\\\\
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �
// GOOD LUCK

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     console.log(this);
//     // const answer = Number(prompt(
//     //   `${this.question}\m${this.options.join(`\n`)}\n(Write option number)`
//     // ));
//     const answer = prompt(
//       `${this.question}\m${this.options.join(`\n`)}\n(Write option number)`
//     );
//     const num = parseInt(answer);

//     // Register Answer
//     // typeof answer === `number` &&
//     //   answer < this.answers.length &&
//     //   this.answers[answer]++;

//     // Another if statement way
//     // if (num === 0) {
//     //   this.answers[0]++;
//     // } else if (num === 1) {
//     //   this.answers[1]++;
//     // } else if (num === 2) {
//     //   this.answers[2]++;
//     // } else if (num === 3) {
//     //   this.answers[3]++;
//     // } else {
//     //   alert(`Sorry this not a valid answer.`);
//     // }
//     switch (num) {
//       case 0:
//         this.answers[0]++;
//         break;
//       case 1:
//         this.answers[1]++;
//         break;
//       case 2:
//         this.answers[2]++;
//         break;
//       case 3:
//         this.answers[3]++;
//         break;
//       default:
//         alert(`Sorry this is not a valid answer.`);
//     }
//     return this.displayResults();
//     //display prompt window for user to input the number of selected option
//     // based on input number, update the answers array property
//   },

//   displayResults(type = `array`) {
//     if (type === `array`) {
//       console.log(this.answers);
//     } else if (type === `string`) {
//       console.log(`Poll results are ${this.answers.join(`, `)}`);
//     }
//   },
// displayResults() {
//   const question = prompt(`Is this a string or an array?`);
//   if (question === `array`) {
//     console.log(this.answers);
//   } else if (question === `string`) {
//     console.log(
//       `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}.`
//     );
//   } else {
//     console.log(`FIX IT`);
//   }
// },
// };

// document
//   .querySelector(`.poll`)
//   .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

//   // BONUS
// poll.displayResults.call({ answers: [5, 2, 3] }, `string`);

// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1];

//////// 136. Immediately Invoked Function Expressions (IIFE) ////////
// const runOnce = function () {
//   console.log(`this will never run again`);
// };
// runOnce();

// (function () {
//   console.log(`this will never run again`);
//   // const isPrivate = 23;
// })();

// (() => {
//   console.log(`this will never run again`);
// })();

/////// 137. Closures  ////////
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);
/* - Closures happen in certain situations on their own
- Closure makes a function remember all the variables that existed at the functions birthplace
- A function has access to the variable environment of the execution context in which it was created even 
though it is gone. Closure: Variable environment attached to the function, exactly as it was at the time 
and place the function was created*/
// A closure is the closed-over variable environment of the execution context in which a function was created,
// even after that execution context is gone.
// A closure gives a function access to all the variables of its own parent function, even after that parent function
// has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A closure makes sure that function doesn't loose connection variables that existed at the function's birth place
// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables
// that were present in the environment where the function was created.

//////// 138. More Closure Examples ////////
// We dont need to return a function from another function to create a closure
// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); // different from bottom f function
// console.dir(f);

// h();
// f(); // different from top f function
// console.dir(f);

// Example 2
// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds.`);
// };

// const perGroup = 1000; // closure takes priority over global scope
// boardPassenger(180, 3);

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();

// the closure of the header variable still existed even after the iffe executed, so when we activate the call back function it still is able to access
// the header variable

// by the time the callback is executed, the iffe has been long gone as well as the variable
//
