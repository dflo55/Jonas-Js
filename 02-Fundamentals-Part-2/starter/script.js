'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) {
//     console.log(`I can drive`);
// }

// // Functions

// function logger() {
//     console.log(`My name is David`);
// }

// // Calling/ Invoking / running the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function addition(x, y) {
//     const total = x + y;
//     return total;
// }

// const add = addition(7, 5);
// console.log(add);

// //  Function Declaration - can call before function is defined
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1995);

// //  Function Expression - function has to be defined first before being called/ also stored in a variable
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1995);
// console.log(age1, age2);

// //  Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1995, `David`));

// Functions calling other functions //
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Functions Review //

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }

// }
// console.log(yearsUntilRetirement(1995, `David`));
// console.log(yearsUntilRetirement(1965, `Jim`));

//   Arrays Data Structure  \\
// const friend1 = `Michael`;
// const friend2 = `Steven`;
// const friend3 = `Peter`;

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// const years = new Array(1995, 1984, 2008, 2020);

// console.log(friends[0]);  // Michael
// console.log(friends[2]); //  Peter

// console.log(friends.length); //  3
// console.log(friends[friends.length - 1]); //  Peter

// friends[2] = `Jay`;
// console.log(friends);

// const firstName = `David`;
// const david = [firstName, `Flores`, 2037 - 1995, `security`, friends];
// console.log(david);

//  Excercise  \\
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//  Basic Array Operations (Methods)  \\
// const friends = [`Michael`, `Steven`, `Peter`];
// Add elements
// const newLength = friends.push(`Jay`); // adds/pushes Jay to end of the array
// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`); //  adds John to the front of the array
// console.log(friends);

// Remove elements
// friends.pop(); // removes Jay
// const popped = friends.pop(); // removes last element of an array //  remove peter
// console.log(popped);  //  Peter
// console.log(friends);  //  no jay or peter

// friends.shift(); //  removes first element of array
// console.log(friends);

// console.log(friends.indexOf(`Steven`));
// console.log(friends.indexOf(`Bob`));

// friends.push(23);
// console.log(friends.includes(`Steven`));
// console.log(friends.includes(`Bob`));
// console.log(friends.includes(23));

// if (friends.includes(`Peter`)) {
//     console.log(`You have a friend called Peter`);
// } else {
//     console.log(`You dont have a friend`);
// }

////  Objects  \\\\
// Object Literal \\
// const david = {
//     firstName: `David`,
//     lastName: `Flores`,
//     age: 2037 - 1995,
//     job: `security`,
//     friends: [`Michael`, `Peter`, `Steven`]
// };
//  Object dot notation
// console.log(david.lastName);
// console.log(david[`lastName`]);

//  Object bracket notation
// const nameKey = `Name`;
// console.log(david[`first` + nameKey]);
// console.log(david[`last` + nameKey]);

// const interestedIn = prompt(`What do you want to know about David? Choose between firstName, lastName, age, job, and friends.`);

// if (david[interestedIn]) {
//     console.log(david[interestedIn]);
// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends.`)
// }

// david.location = `Chicago`;
// david[`twitter`] = `@dflo328`;
// console.log(david);

// Challenge
// "David has 3 friends, and his best friend is called Michael"
// console.log(`${david.firstName} has ${david.friends.length} friends, and his best friend is called ${david.friends[0]}.`);

////  Object Methods  \\\\
// const david = {
//     firstName: `David`,
//     lastName: `Flores`,
//     birthYear: 1995,
//     job: `security officer`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriversLicense: false,

// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }

// calcAge: function () {

//     return 2037 - this.birthYear;
// }

// calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
// },

// getSummary: function () {
//     if (this.hasDriversLicense === true) {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job},
//         and he has a driver's license`;
//     } else {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job},
//     and he has no driver's license`;
//     }
// }

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job},
//                 and he has ${this.hasDriversLicense === true ? `a` : `no`} driver's license`;


//     }
// };



// console.log(david.getSummary());

// console.log(david.calcAge());
// console.log(david.age);
// console.log(david.calcAge(david.birthYear));
// console.log(david[`calcAge`](david.birthYear));

////////// for Loops  \\\\\\\\\\
// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }

////////// Looping Arrays, Breaking, and Continuing \\\\\\\\\\\
// const david = [
//     `David`,
//     `Flores`,
//     2037 - 1995,
//     `security officer`,
//     [`Michael`, `Peter`, `Steven`],
//     true
// ];

// const types = [];

// for (let i = 0; i < david.length; i++) {
/// Reading from david's array
// console.log(david[i], typeof david[i]);

/// Filling the array with types
// types[i] = typeof david[i];
//     types.push(typeof david[i]);
// }
// console.log(types);

//// Pushing array values into an empty array
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

/// continue and break statement

//// It will skip over anything thats not a string
//// and only log strings
// console.log(`ONLY STRINGS`)
// for (let i = 0; i < david.length; i++) {
//     if (typeof david[i] !== `string`) continue;
//     console.log(david[i], typeof david[i]);
// }

//// This will stop the loop after it reaches a
//// value thats a number
// console.log(`BREAK WITH NUMBER`)
// for (let i = 0; i < david.length; i++) {
//     if (typeof david[i] === `number`) break;
//     console.log(david[i], typeof david[i]);
// }

//////// Looping backwards and loops in loops \\\\\\\\

/// Looping backwards \\\
// const david = [
//     `David`,
//     `Flores`,
//     2037 - 1995,
//     `security officer`,
//     [`Michael`, `Peter`, `Steven`],
// ];
// for (let i = david.length - 1; i >= 0; i--) {
//     console.log(i, david[i]);
// }

/// Loops inside of loops
// for (let excercise = 1; excercise < 4; excercise++) {
//     console.log(`STARTING EXCERCISE ${excercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Excercise ${excercise}: Lifting weight repition ${rep}`);
//     }
// }

/// While Loop \\\
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) [
        console.log(`Loop is about to end.`)
    ]
}