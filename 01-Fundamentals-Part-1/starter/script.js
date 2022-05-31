/*let js = "Howdy";

const greeting = () => {
    if (js === "Howdy") {
        alert("Howdy to you too");
    }
    else {
        alert("You got it all wrong Cowboy");
    }
}

console.log(7 + 15 + 20 - 13);

let firstName = "David";

console.log(firstName);

let myFirstJob = `Painter`;
let myCurrentJob = `Security`;
let myAspiringJob = `Develeoper`;

console.log(myFirstJob, myCurrentJob, myAspiringJob);

// JavaScript Fundamentals - Part 1

// Lecture: Values and Variables

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
let country = "United States";
let continent = "North America";
let population = 329.5;

// 2. Log their values to the console
console.log(country);
console.log(continent);
console.log(population);


//LECTURE: Data Types

//  1. Declare a variable called 'isIsland' and set its value according to your
//  country. The variable should hold a Boolean value. Also declare a variable
//  'language', but don't assign it any value yet
let isIsland = true;
let language;

//  2. Log the types of 'isIsland', 'population', 'country' and 'language'
//  to the console
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//  LECTURE: let, const and var

//  1. Set the value of 'language' to the language spoken where you live (some
//  countries have multiple languages, but just choose one)
language = 'English';

//  2. Think about which variables should be const variables (which values will never
//  change, and which might change?). Then, change these variables to const.
const country2 = 'United States';
const continent2 = 'North America';

//  3. Try to change one of the changed variables now, and observe what happens
//country2 = 'Canada';

//  LECTURE: Basic Operators

//  1. If your country split in half, and each half would contain half the population,
//  then how many people would live in each half?
const populationHalved = population / 2;
console.log(populationHalved);

//  2. Increase the population of your country by 1 and log the result to the console
const populationPlusOne = population++;
console.log(populationPlusOne);

//  3. Finland has a population of 6 million. Does your country have more people than
//  Finland?
const finland = 6;
const finlandCompare = population > finland;
console.log(finlandCompare);

//  4. The average population of a country is 33 million people. Does your country
//  have less people than the average country?
const averagePopulation = 33;
const averagePopulationCompare = population < averagePopulation;
console.log(averagePopulationCompare);


//  5. Based on the variables you created, create a new variable 'description'
//  which contains a string with this format: 'Portugal is in Europe, and its 11 million
//  people speak portuguese
const description = 'United States is in North America, and its' + ' ' + 329.5 + ' ' + 'million people speak English.';
console.log(description);

LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(newDescription);


const age = 15;

if (age >= 18) {
    console.log(`David can start driving`);
} else {
    const yearsLeft = 18 - age;
    console.log(`David cannot start driving, he needs to wait another ${yearsLeft} years`);
}

const birthYear = 1995;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;

/*2. Calculate both their BMIs using the formula (you can even implement both
versions)
const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI, `Mark`);
console.log(johnBMI, `John`);


/*3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
/*Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall*/


/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's`);
} else {
    console.log(`Johns's BMI is higher than Mark's!`);
}
/*2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} BMI!`);
} else {
    console.log(`Johns's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// Type conversion
const inputYear = `1991`;
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(String(23), 23);

// type coercion
console.log('I am' + 23 + 'years old'); //turns 23 into a string
console.log('23' - '10' - 3); // turns 23 and 10 into numbers because of subtraction, addition will concat the numbers into strings
console.log('23 * 2'); //multiplication and division will turn strings into numbers


let n = '1' + 1; // string of 11
n = n - 1; //  string of 11 converts to number 11 - 1 - 10
console.log(n);

// 5 falsy values: 0, '', undefined, null. NaN

console.log(Boolean(0));  // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean({})); // true

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('HEIGHT is UNDEFINED');
}

const ageDavid = 18;
if (ageDavid === 18) {
    console.log(`You are legally an adult (strictly equal ===)`);
}
if (ageDavid == 18) {
    console.log(`You are legally an adult (loosely equal ==)`);
}
if (ageDavid === '18') {
    console.log(`You are legally an adult (strictly equal ===)`);
} // wont execute because string of 18 is not strictly equal to number of 18
*/
/*const favorite = Number(prompt(`What is your favorite number?`));
console.log(favorite);

if (favorite === 23) {
    console.log("Cool, 23 is an amazing number");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
    console.log("Why not 23?");
}*/

// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }

// const day = 'sunday';

// switch (day) {
//     case 'monday':
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case 'thursday':
//         console.log(`Write code examples`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Not a valid day`);
// }

// const day = 'sunday';

// if (day === `monday`) {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === `tuesday`) {
//     console.log(`Prepare theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//     console.log(`Write code examples`);
// } else if (day === `friday`) {
//     console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//     console.log(`Enjoy the weekend`);
// } else {
//     console.log(`Not a valid day`);
// }

// Ternary Operator  ?   : 
const age = 23;
age >= 18 ? console.log('I like water') : console.log('If not water, then juice');


const drink = age >= 18 ? `water` : `juice`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `water`;
} else {
    drink2 = `juice`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `water` : `juice`}`);
