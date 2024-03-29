// // JavaScript Fundamentals - Part 1

// // Lecture: Values and Variables

// // 1. Declare variables called 'country', 'continent' and 'population' and
// // assign their values according to your own country (population in millions)
// let country = "United States";
// let continent = "North America";
// let population = 329.5;

// // 2. Log their values to the console
// console.log(country);
// console.log(continent);
// console.log(population);


// //LECTURE: Data Types

// //  1. Declare a variable called 'isIsland' and set its value according to your 
// //  country. The variable should hold a Boolean value. Also declare a variable
// //  'language', but don't assign it any value yet
// let isIsland = true;
// let language;

// //  2. Log the types of 'isIsland', 'population', 'country' and 'language'
// //  to the console
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// //  LECTURE: let, const and var

// //  1. Set the value of 'language' to the language spoken where you live (some
// //  countries have multiple languages, but just choose one)
// language = 'English';

// //  2. Think about which variables should be const variables (which values will never
// //  change, and which might change?). Then, change these variables to const.
// const country2 = 'United States';
// const continent2 = 'North America';

// //  3. Try to change one of the changed variables now, and observe what happens
// //country2 = 'Canada';

// //  LECTURE: Basic Operators

// //  1. If your country split in half, and each half would contain half the population,
// //  then how many people would live in each half?
// const populationHalved = population / 2;
// console.log(populationHalved);

// //  2. Increase the population of your country by 1 and log the result to the console
// const populationPlusOne = population++;
// console.log(populationPlusOne);

// //  3. Finland has a population of 6 million. Does your country have more people than
// //  Finland?
// const finland = 6;
// const finlandCompare = population > finland;
// console.log(finlandCompare);

// //  4. The average population of a country is 33 million people. Does your country
// //  have less people than the average country?
// const averagePopulation = 33;
// const averagePopulationCompare = population < averagePopulation;
// console.log(averagePopulationCompare);


// //  5. Based on the variables you created, create a new variable 'description'
// //  which contains a string with this format: 'Portugal is in Europe, and its 11 million
// //  people speak portuguese
// const description = 'United States is in North America, and its' + ' ' + 329.5 + ' ' + 'million people speak English.';
// console.log(description);

// // LECTURE: Strings and Template Literals

// // 1. Recreate the 'description' variable from the last assignment, this time
// // using the template literal syntax 
// const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(newDescription);

//  LECTURE: Taking Decisions: if / else Statements
//  1. If your country's population is greater that 33 million, log a string like this to the 
//  console: 'Portugal's population is above average'. Otherwise, log a string like 
//  'Portugal's population is 22 million below average' (the 22 is the average of 33 
//  minus the country's population)

// if (population > 33) {
//     console.log(`United States population is above average`);
// } else {
//     console.log(`United States population is 22 million below average`);
// }
// //  2. After checking the result, change the population temporarily to 13 and then to 
// //  130. See the different results, and set the population back to original


// //  LECTURE: Type Conversion and Coercion
// //  1. Predict the result of these 5 operations without executing them:
// '9' - '5';  // 4
// '19' - '13' + '17';  //  '617'
// '19' - '13' + 17;  //  23
// '123' < 57;  // false 
// 5 + 6 + '4' + 9 - 4 - 2;   //  1143

//  2. Execute the operations to check if you were right
// 4/5 correct

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// const numNeighbors = prompt(`How many neighbor countries does your country have?`)
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// if (Number(numNeighbors) === 1) {
//     console.log(`Only 1 border!`);
// }
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// else if (Number(numNeighbors) === 2) {
//     console.log(`Only 2 border!`);
// }
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// else {
//     console.log(`No borders`);
// }
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// TESTED
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening? 
// I keep getting no borders for 1, 2, and 0

// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// Its giving me the correct answer now

// 8. Reflect on why we should use the === operator and type conversion in this
// situation
// Its so we can get a strict absolute comparison to ensure the code executes without any unexpected bugs. If we use it loosely then it will convert on its own and cause more headaches down the line.

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// const language = "english";
// const population = 329.5;
// const island = false;
// const country = "United States"
// 3. Write an if statement to; help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// if (language === `english` && population < 50 && island === false) {
//     console.log(`You should live in ${country}`)
// } else {
//     console.log(`${country} does not meet your criteria`);
// }
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('

// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D) 
// Did it and it works! - df

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'
// const language = `english`;

// switch (language) {
//     case `chinese`:
//     case 'mandarin':
//         console.log(`MOST number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case `english`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`Number 4`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great language too!`);
//         break;
// }

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// const population = 329.5;
// population >= 33 ? console.log(`United States population is above average`) : console.log(`United States population is below average`);
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables */
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// //const massMark = 95;
// //const heightMark = 1.88;
// //const massJohn = 85;
// //const heightJohn = 1.76;

// //  2. Calculate both their BMIs using the formula (you can even implement both 
// //  versions)
// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / (heightJohn * heightJohn);
// console.log(markBMI, `Mark`);
// console.log(johnBMI, `John`);


// // 3. Create a Boolean variable 'markHigherBMI' containing information about 
// // whether Mark has a higher BMI than John.
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

/*Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" */

/*if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's`);
} else {
    console.log(`Johns's BMI is higher than Mark's!`);
}
//  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//  BMI (28.3) is higher than John's (23.9)!"

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} BMI!`);
} else {
    console.log(`Johns's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}*/

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// console.log(dolphinsAverageScore, `Dolphins`);
// console.log(koalasAverageScore, `Koalas`);

// Bonus #1
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// console.log(dolphinsAverageScore, `Dolphins`);
// console.log(koalasAverageScore, `Koalas`);

// Bonus #2
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 106) / 3;
// console.log(dolphinsAverageScore, `Dolphins`);
// console.log(koalasAverageScore, `Koalas`);


// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphins win the Trophy`);
// } else if (koalasAverageScore > dolphinsAverageScore) {
//     console.log(`Koalas win the Trophy`);
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log(`Both win the Trophy`);
// }
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log(`Dolphins win the Trophy`);
// } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
//     console.log(`Koalas win the Trophy`);
// }
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
//     console.log(`It's a Draw and both teams win the trophy`);
// } else {
//     console.log(`No one wins the trophy`);
// }

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Coding Challenge # 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// const bill = 275;
// const bill2 = 40;
// const bill3 = 430;

// const tip = bill >= 50 && bill <= 300 ? .15 * bill : .20 * bill;
// const tip2 = bill2 >= 50 && bill2 <= 300 ? .15 * bill2 : .20 * bill2;
// const tip3 = bill3 >= 50 && bill3 <= 300 ? .15 * bill3 : .20 * bill3;
// console.log(tip);
// console.log(tip2);
// console.log(tip3);
// const totalValue = bill + tip;
// const totalValue2 = bill2 + tip2;
// const totalValue3 = bill3 + tip3;
// // 2. Print a string to the console containing the bill value, the tip, and the final value
// // (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// // 316.25”
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${totalValue2}`);
// console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${totalValue3}`);
// // Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 





//// JavaScript Fundamentals – Part 2 \\\\
// Coding Challenge #1 \\
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// const calcAverage = (x, y, z) => {
//     const average = (x + y + z) / 3;
//     return average;
// }
// const dolphinScore = calcAverage(44, 23, 71);
// const koalaScore = calcAverage(65, 54, 49);
// const dolphinScore2 = calcAverage(85, 54, 41);
// const koalaScore2 = calcAverage(23, 34, 27);

// 2. Use the function to calculate the average for both teams
// console.log(calcAverage(44, 23, 71), `Dolphins`);
// console.log(calcAverage(65, 54, 49), `Koalas`);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`)
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`)
//     } else {
//         console.log(`No one wins`);
//     }
// }

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// checkWinner(dolphinScore, koalaScore);
// checkWinner(dolphinScore2, koalaScore2);

// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


//// Coding Challenge #2 \\\\
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * (15 / 100);
//     } else {
//         return bill * (20 / 100);
//     }
// }

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);
// Test data: 125, 555 and 44

////// Coding Challenge #3  \\\\\\\
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// const mark = {
//     firstName: `Mark`,
//     lastName: `Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
//     getSummary: function () {
//         return this.bmi > john.bmi ? `${this.firstName} ${this.lastName}'s BMI (${this.bmi} is higher than ${john.firstName} ${john.lastName} (${john.bmi})!`
//             : `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${this.firstName} ${this.lastName} (${this.bmi})!`
//     }

// };
// const john = {
//     firstName: `John`,
//     lastName: `Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
//     getSummary: function () {
//         return this.bmi > mark.bmi ? `${this.firstName} ${this.lastName}'s BMI (${this.bmi} is higher than ${mark.firstName} ${mark.lastName} (${mark.bmi})!`
//             : `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${this.firstName} ${this.lastName} (${this.bmi})!`
//     }

// };
// console.log(mark.calcBmi());
// console.log(john.calcBmi());
// console.log(mark.getSummary());
// console.log(john.getSummary());

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it 
// from the method

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.

//////////  Coding Challenge #4  \\\\\\\\\\
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 85, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
// tips and totals arrays �
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * (15 / 100);
    } else {
        return bill * (20 / 100);
    }
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);

}
console.log(`Bills`, bills);
console.log(`tips`, tips);
console.log(`totals`, totals);
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it:
const array = [];

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

    }
    console.log(sum);
    // return array.push(sum / 10);
    return sum / arr.length;
}
console.log(calcAverage(totals));
// console.log(array);




// 4.1. First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum' that starts at 0. Then loop over the 
// array using a for loop. In each iteration, add the current value to the 
// 'sum' variable. This way, by the end of the loop, you have all values 
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array













////////// JavaScript Fundamentals – Part 2 //////////

// Note: Please start Part 2 from scratch and comment out all the code from Part 1.

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// function describeCountry(country, population, capitalCity) {
//     const myCountry = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//     return myCountry;
// }
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
// const unitedStates = describeCountry(`United States`, 329.5, `DC`);
// const mexico = describeCountry(`Mexico`, 128.9, `Mexico City`);
// const japan = describeCountry(`Japan`, 125.8, `Tokyo`);
// console.log(unitedStates);
// console.log(mexico);
// console.log(japan);


// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// function percentageOfWorld1(population) {
//     const percentagePopulation = (population / 7900) * 100;
//     return percentagePopulation;
// }
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100

// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// const unitedStatesPercentage = percentageOfWorld1(329.5);
// const japanPercentage = percentageOfWorld1(125.8);
// const unitedKingdomPercentage = percentageOfWorld1(67.2);
// console.log(unitedStatesPercentage);
// console.log(japanPercentage);
// console.log(unitedKingdomPercentage);
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
// const percentageOfWorld2 = function (population) {
//     const percentagePopulation = (population / 7900) * 100;
//     return percentagePopulation;
// }
// console.log(percentageOfWorld2(500));
// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
// const percentageOfWorld3 = (population) => {
//     const percentagePopulation = (population / 7900) * 100;
//     return percentagePopulation;
// }
// console.log(percentageOfWorld3(785));

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// function percentageOfWorld1(population) {
//     const percentagePopulation = (population / 7900) * 100;
//     return percentagePopulation;
// }

// const describePopulation = (country, population) => {
// const percentage = percentageOfWorld1(population);
// return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// }
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier

// 3. Call 'describePopulation' with data for 3 countries of your choice
// const unitedStatesDescribe = describePopulation(`United States`, 329.5);
// const japanDescribe = describePopulation(`Japan`, 125.8);
// const canadaDescribe = describePopulation(`Canada`, 38);
// console.log(unitedStatesDescribe);
// console.log(japanDescribe);
// console.log(canadaDescribe);

//// LECTURE: Introduction to Arrays \\\\
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// const populations = [329, 126, 67, 145];

// 2. Log to the console whether the array has 4 elements or not (true or false)
// if (populations.length === 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values
// function percentageOfWorld1(population) {
//     const percentagePopulation = (population / 7900) * 100;
//     return percentagePopulation;
// }
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

//// LECTURE: Basic Array Operations (Methods) \\\\
// 1. Create an array containing all the neighbouring countries of a country of your 
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
// into a variable called 'neighbours'
// const neighbors = [`Mexico`, `Canada`];
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// neighbors.push(`Utopia`);
// console.log(neighbors);
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// neighbors.pop();
// console.log(neighbors);
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// if (neighbors.includes(`Germany`)) {
//     console.log(`It's probably a central European country`);
// } else {
//     console.log(`Probably not a central European country`);
// }

// if (!neighbors.includes(`Germany`)) {
//     console.log(`Probably not a central European country`);
// }
// 5. Change the name of one of your neighbouring countries. To do that, find the 
// index of the country in the 'neighbours' array, and then use that index to 
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
// neighbors[neighbors.indexOf(`Canada`)] = `Republic of Canada`;
// neighbors[1] = `Republic of Canada`;
// console.log(neighbors);

//// LECTURE: Introduction to Objects \\\\
// 1. Create an object called 'myCountry' for a country of your choice, containing 
// properties 'country', 'capital', 'language', 'population' and 
// 'neighbours' (an array like we used in previous assignments)
// const myCountry = {
//     country: `United States`,
//     capital: `D.C.`,
//     language: `All languages`,
//     population: 329.5,
//     neighbors: [`Mexico`, `Canada`]
// };
//// LECTURE: Dot vs. Bracket Notation \\\\
// 1. Using the object from the previous assignment, log a string like this to the 
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// and a capital called Helsinki.'
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`)
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.
// myCountry.population += 2;
// console.log(myCountry);
// myCountry[`population`] -= 2;
// console.log(myCountry);



// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters. 
// Use a for loop to simulate the 50 people voting, by logging a string like this to 
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// const populations = [329, 126, 67, 145];
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the 
// function 'percentageOfWorld1' that you created earlier
// const percentages2 = [];
// function percentageOfWorld1(population) {
//     const percentagePopulation = (population / 7900) * 100;
//     return percentagePopulation;
// }

// for (let i = 0; i < populations.length; i++) {

//     percentages2.push(percentageOfWorld1(populations[i]));

// }
// console.log(percentages2);

// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment, 
// and reflect on how much better this solution is
// Yes and very much faster and easier



// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
// 'Russia']];
// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country


// for (let i = 0; i < listOfNeighbors.length; i++) {
//     for (let y = 0; y < listOfNeighbors[i].length; y++) {
//         console.log(`Neighbors: ${listOfNeighbors[i][y]}`)
//     }
// }

// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
// worry if it's too difficult for you! But you can still try to figure this out anyway �


// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
// but this time using a while loop (call the array 'percentages3')
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));
//     i++;
// }


// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?
// the for loop