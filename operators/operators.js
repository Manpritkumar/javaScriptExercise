// Artimetic Operators
// let a = 10;
// let b = 2;
// let c = a + b;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log(a % b);
//console.log(a ** b);
// console.log(a++);
// console.log(a--);
// console.log(a);

//Asignment operator

// let a = 10;
// let b = 2;

// a += 4; //  a = a+4
// console.log("a= ", a);
// a -= 3;
// console.log("a=", a);

// a **= 3;
// console.log(a);

//Compression operator

// let a = 10;
// let b = 10;

// console.log("10 == 10", a == b); //result true

// console.log("10 !=10", 10 != 10); // result false

//let a = 10; // number
//let b = "05"; //String
//console.log("a === b", a === b); // resul false with === it will check Equal & Type also.

// let a = 10;
// let b = 9;
// console.log("a <= b", a <= b); //greater than a nd less than

// logical operator
// condition && if both the condtion is true then it will show true otherwise false
// let a = 6;
// let b = 5;
// let cond1 = a < b; // false
// let cond2 = a === 6; // true

// console.log("cond1 && cond2= ", cond1 && cond2);  //result false
// condition or || if any condition is true from both then result will show true

// let a = 6;
// let b = 5;
// console.log("cond1 || cond2= ", a < b || a == 6); // result true

// condition not ! if condition is true it will give result false and if condtion is false then result will true

// let a = 6;
// let b = 5;
// console.log("!(6<5)= ", !6 < 5); // result true

//Conditional Statements
// (if Statement)

// let age = 20;
// if (age >= 18) {
//   console.log("You can vote");
// }
// if (age < 18) {
//   console.log("You can not vote");
// }

//Example -2
// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// }

// if (mode === "light") {
//   color = "white";
// }
// console.log(color);

//if & else Statement
// let mode = "light";
// let color;

// if (mode === "light") {
//   color = "black";
// } else {
//   color = "blue";
// }

// console.log(color);

//odd & Even number
// let num = 19;
// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

// else if statement

// let mode = "blue";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }
// console.log(color);

//Ternary operators
let age = 17;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);
