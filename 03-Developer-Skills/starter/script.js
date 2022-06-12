// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem 1: Calculate temperature amplitude
// const temperature = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
// 1. understanding the problem
// what is a temp amplitude? Answer: difference between highest and lowest temp.
// how to compute max and min temperatures?
// what is a sensor error? what do we do?

// 2. breaking up into sub problems
// how to ignore errors
// find max value in temp array
// find min value in temp array
// subtract min from max (amplitude) and return it
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temperature.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temperatures

// 1) understanding the problem
// - with 2 arrays, should we implement functionality twice?
//  NO! just merge the two arrays

// 2) breaking into sub problems
// how to merge 2 arrays?

// Debugging
const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    value: 10,
  };
  // C. Fix the big
  //     value: Number(prompt(`Degress celsius:`)),

  // B. Find the Bug
  console.log(measurement);
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A. Identify the Bug
//
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A. Identify bug
console.log(amplitudeBug);
