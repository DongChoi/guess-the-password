"use strict";

// 1. ES5 String Concatenation
const name = "Michelle";
const favoriteColor = "purple";
const city = "San Francisco";

console.log(
  `${name} lives in ${city} and their favorite color is ${favoriteColor}.`
);

// 1. Refactor to ES2015 Template Literals:

// 2. ES5 Global Constants
const PI = 3.14;
PI = 42; // stop me from doing this!

// 2. Refactor to ES2015 Global Constants

// 3. ES5 Assigning Variables to Object Properties
let foods = {
  fruits: {
    apple: "red",
    banana: "yellow",
  },
};

let { apple, banana } = { ...foods.fruits };

// 3. Refactor to ES2015 Object Destructuring

// 4. ES5 Array Swap
var nums = [1, 2];
var temp = nums[0];
nums[0] = nums[1];
nums[1] = temp;

// 4. Refactor to ES2015 Array Swap

[nums[1], nums[0]] = [nums[0], nums[1]];

// 5. ES5 Map Callback
function double(nums) {
  return nums.map(function (num) {
    return num * 2;
  });
}

// 5. Refactor to ES2015 Arrow Functions Shorthand

function double(nums) {
  return nums.map((num) => num * 2);
}

// 6. ES5 Default Arguments
function add(a, b) {
  if (a === undefined) {
    a = 10;
  }
  if (b === undefined) {
    b = 10;
  }
  return a + b;
}

// 6. Refactor to ES2015 Default Arguments

function add(a = 10, b = 10) {
  return a + b;
}

// 7. ES5 Function that takes a variable number of arguments
function onlyEvens() {
  // in ES5, this is how we turned something
  // array-like into an actual array
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// 7. Refactor to ES2015

function onlyEvens(...nums) {
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}
