"use strict";

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   function printAge() {
//     let output = `You are the ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // creating NEW variable with same name as outer scope's variable
//       const firstName = `Steven`;

//       // Reassigning outer scope's variable
//       output = `NEW OUTPUT!`;

//       const str = `Oh, you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = `David`;
// calcAge(1995);

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = `David`;
// let job = `Security Officer`;
// const year = 1995;

// Hoisting functions
// console.log(addDeclaration(2, 3)); // works
// console.log(addExpression(2, 3)); // does not work
// console.log(addArrow(2, 3)); // does not work

function addDeclaration(a, b) {
  return a + b;
}

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// Example

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

const calcAge = function (birthYear) {
  const age = 2022 - birthYear;
  console.log(age);
  console.log(this);
};

const calcAgeArrow = (birthYear) => {
  const age = 2022 - birthYear;
  console.log(age);
  console.log(this);
};

calcAge(1995);
calcAgeArrow(1995);

const david = {
  firstName: `david`,
  year: 1995,
  calcAge: function () {
    console.log(2022 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), //undefined: "this" value
};

david.greet();
david.calcAge();

// const addExpression = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpression(2, 5);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = david.calcAge;
// matilda.calcAge();

// const f = david.calcAge;
// f();

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: `David`,
  age: 27,
};

const friend = me;
friend.age = 30;
console.log(friend);
console.log(me);

const array = [12, 15];
array[0] = 10;
console.log(array);

// Primitive Types
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: `jessica`,
  lastName: `williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Before Marriage`, jessica);
console.log(`After Marriage`, marriedJessica);

marriedJessica = {}; // cannot do this since marriedJessica is a constant

const jessica2 = {
  firstName: `jessica`,
  lastName: `williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);
