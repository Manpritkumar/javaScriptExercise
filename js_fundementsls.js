//javaScript variables
let age = 25; // in let variable we can not be re-declare but we can update.
age = 36;
console.log(age);

let name = "Manprit";
console.log(name);
const title = "Don"; //in const we can not redeclare and update the value
console.log(title);

//below we cab declare the value in the diffrent -2 blocks
{
  let b = 5;
  console.log(b);
}
{
  let b = 10;
  console.log(b);
}

//undefined

let x;
console.log(x);

//null
let y = null;
console.log(y);

//object it is collection of value

const student = {
  fullName: "Manprit Kumar",
  age: 35,
  mark: 60,
  isPass: true,
};
student["age"] = student["age"] + 1;
console.log(student);
console.log(student["age"]);

//product object example
const product = {
  title: "Ball Pen",
  rating: 4,
  offer: 5,
  price: 270,
};
console.log(product);

//Switch case statement

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("its start of the week");
    break;
  case "Sunday":
    console.log("its end of the week");
    break;
  default:
    console.log("Its middle of the week");
}

//operators
let a = 5;
let b = 10;
let c = a + b;
console.log(c); //addition operation
let n1 = 20;
let n2 = "20";
console.log(n1 == n2); //true
console.log(n1 === n2); //false

//function declaration
function greetDeclaration(name) {
  console.log("Hello " + name + "!");
}
greetDeclaration("Manprit");

function addition(n1, n2) {
  return n1 + n2;
}
const result = addition(10, 20);
console.log(result);
//function expression

const greetExperssion = function (name) {
  console.log("Hello " + name + "!");
};

greetExperssion("Agam");

//Arrow function

const greetArrow = name => console.log("Hello " + name + "!");
greetArrow("Kanvi");

const _addition = (n1, n2) => console.log(n1 + n2);
_addition(15, 15);

//for each loop
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
const sumResult = sum(1, 2, 3, 4);
console.log(sumResult);

let _name = "Manprit";
let _age = 30;
let info = "Hello,my name is " + _name + " and I am " + _age + "years old.";

//backticks
let _info = "Hello my name is${_name} and i am ${_age} years old.";
console.log(info);
console.log(_info);

// more examples
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) throw new console.error("can not divide by zero");
  return x / y;
}

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(calculate(15, 5, subtract));

/*try {
  console.log(calculate(15, 0, divide));
} catch (error) {
  console.log("Caught an error:",error.message);
} finally {
  console.log("Finally block has been executed!");
}*/

// string and data examples
let text = "Hello Js !";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.indexOf("Js"));
console.log(text.slice(0, 5));

// date examples
const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.toLocaleDateString("sv-se"));
