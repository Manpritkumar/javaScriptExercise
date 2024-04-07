function myFunction() {
  console.log("My name Manprit");
  console.log("My name Agam");
}

myFunction();

function newFunction(sms) {
  //parameter -> input work like local variable of function.
  console.log(sms);
}
newFunction("What is time now"); //argument

//funtion -> 2 numbers ,sum

function sum(a, b) {
  s = a + b;
  return s;
}
let val = sum(6, 6);
console.log(val);

function multiple(a, b) {
  m = a * b;
  return m;
}
let calVal = multiple(6, 6);
console.log(calVal);

// arrow function
function suma(x, y) {
  return x + y;
}

// modren part of javascript
const arrowSum = (x, y) => {
  console.log(x + y);
};

//  mulitply arrow function

const arrowMulti = (x, y) => {
  return x * y;
};
console.log(arrowMulti(6, 5));

const printName = () => {
  console.log("agamAthi");
};

// Task-1

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
const countVow = str => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// //for each loop in Arrays
// //let arr = [1, 2, 3, 4, 5];
// //arr.forEach(function printVal(val) {
// //console.log(val);
// //});
// /*arr.forEach(val => {
//   console.log(val);
// });*/

// let arr = ["puna", "delhi", "punjab"]; // we are using only for array to perfom some task
// arr.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
// });

// //Task practice -1
// let nums = [2, 4, 5, 6];
// nums.forEach(num => {
//   console.log(num * num);
// });

// // map is using to return new array

// let numbers = [2, 5, 6, 8, 4];
// let newArr = numbers.map(val => {
//   return val * val;
// });
// console.log(newArr);

// // filter  method
// let lockNumber = [2, 3, 5, 8, 6, 9];
// let newlockNumbers = lockNumber.filter(num => {
//   return num <= 3;
// });
// console.log(newlockNumbers);

// //task 1 filter
// let marks = [70, 60, 93, 96, 98, 99];
// let marklist = marks.filter(num => {
//   return num > 90;
// });
// console.log(marklist);
