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
// const flightNum = flight; // reference does not change the original
// const passenger = david; // if we change copy in an object, it changes the original

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

// Functions Returning Functions

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
// The call and apply Methods
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
//   iatacode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;

// Call method
// book(23, `Sara Wilis`); // Doesnt Work
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

// Apply Method
// const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// Bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23);
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

const tax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

tax(0.1)(200);
const addVAT2 = tax(0.23);
console.log(addVAT2(100));
