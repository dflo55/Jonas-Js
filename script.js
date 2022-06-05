////////////  JavaScript Fundamentals – Part 1  \\\\\\\\\\\\

////*LECTURE: Values and Variables*////
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// const country = `United States`;
// const continent = `North America`;
// let population = 330;
// 2. Log their values to the console
// console.log(country);
// console.log(continent);
// console.log(population);

////*LECTURE: Data Types*////
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// const isIsland = false;
// let language;
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

////*LECTURE: let, const and var*////
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// language = `english`;
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// `Things that are constant or permanent will be const, let is more so for changing values like numbers`
// 3. Try to change one of the changed variables now, and observe what happens


////*LECTURE: Basic Operators*////
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// const halfPopulation = population / 2;
// console.log(halfPopulation);
// 2. Increase the population of your country by 1 and log the result to the console
// population += 1;
// console.log(population);
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// const finlandPopulation = 6;
// console.log(population > finlandPopulation);
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// const averagePopulation = 33;
// console.log(averagePopulation > population);
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
// const description = country + ' ' + 'is in' + ' ' + continent + ' ' + 'and its' + ' ' + population + ' ' + 'million people speak' + ' ' + language;
// console.log(description);

////*LECTURE: Strings and Template Literals*////
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax
// const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(newDescription);

////*LECTURE: Taking Decisions: if / else Statements*////
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is below average`);
// }
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


////*LECTURE: Type Conversion and Coercion*////
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; 4
// '19' - '13' + '17'; '617'
// '19' - '13' + 17; 23
// '123' < 57; false 
// 5 + 6 + '4' + 9 - 4 - 2; 1143


// 2. Execute the operations to check if you were right
// `I was definitely right!`

////*LECTURE: Equality Operators: == vs. ===*////
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
// prompt('How many neighbour countries does your country 
// have?');
// const numNeighbors = Number(prompt(`How many neighbor countries does your country have?`));

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// if (numNeighbors === 1) {
//     console.log(`Only 1 border!`);
// }
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// else if (numNeighbors === 2) {
//     console.log(`More than 1 border`);
// }
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// else {
//     console.log(`No borders`);
// }
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation 
// `Using === will give us an exact answer we are looking for and it will be specific to that datatype which is numbers`


////*LECTURE: Logical Operators*////
// 1. Comment out the previous code so the prompt doesn't get in the way

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// `must speak english`
// `has less than 50 million population`
// `is not an island`
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// if (language === `English` && population < 50 && isIsland === false) {
//     console.log(`YOu should live in ${country}.`)
// } else {
//     console.log(`${country} does not meet your criteria`);
// }
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

////*LECTURE: The switch Statement*////
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'
// switch (language) {
//     case `chinese`:
//     case `mandarin`:
//         console.log(`MOST number of native speaker!`);
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
//         console.log(`Great language too`);
// }

////*LECTURE: The Conditional (Ternary) Operator*////
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// population > 33 ? console.log(`${country} population is above average.`) : console.log(`${country} population is below average.`);

// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to origina




////////////  JavaScript Fundamentals – Part 2  \\\\\\\\\\\\
// Note: Please start Part 2 from scratch and comment out all the code from Part 1.
////*LECTURE: Functions*////
// 1. Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the console
const unitedStates = describeCountry(`United States`, 330, `D.C.`);
const peru = describeCountry(`Peru`, 33, `Lima`);
const italy = describeCountry(`Italy`, 60, `Rome`);
console.log(unitedStates);
console.log(peru);
console.log(italy);

////*LECTURE: Function Declarations vs. Expressions*////
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100

// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
const unitedStates2 = percentageOfWorld1(330);
const peru2 = percentageOfWorld1(33);
const italy2 = percentageOfWorld1(60);
console.log(unitedStates2);
console.log(peru2);
console.log(italy2);


// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
console.log(`United States`, percentageOfWorld2(330));
console.log(`Peru`, percentageOfWorld2(33));
console.log(`Italy`, percentageOfWorld2(60));

////*LECTURE: Arrow Functions*////
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
}

////*LECTURE: Functions Calling Other Functions*////
// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.'
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage} of the world.`;
}

// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
console.log(describePopulation(`United States`, 330));
console.log(describePopulation(`Peru`, 33));
console.log(describePopulation(`Italy`, 60));


////*LECTURE: Introduction to Arrays*////
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
const populations = [330, 60, 33, 222];

// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4);
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

////*LECTURE: Basic Array Operations (Methods)*////
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
const neighbors = [`Mexico`, `Canada`];
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
neighbors.push(`Utopia`);
console.log(neighbors);
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
neighbors.pop();
console.log(neighbors);
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
if (!neighbors.includes(`Germany`)) {
    console.log(`Probably not a central European country.`);
}
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
neighbors[neighbors.indexOf(`Canada`)] = `Republic of Canada`;
console.log(neighbors);