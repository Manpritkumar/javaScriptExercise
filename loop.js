//for Loop

for (let i = 1; i <= 10; i++) {
  console.log("My name is Agam");
}
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum=", sum);

//infinite loop

//while loop

// let i = 1;
// while (i <= 5) {
//   console.log("i=", i);
//   i++;
// }

//do while loop

// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 10);

//for of loop use for string and array value

let str = "Manprit";
let size = 0;
for (let val of str) {
  console.log("val=", val);
  size++;
}
console.log("String size=", size);
// for in loop  return key value
let student = {
  name: "manprit",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};
for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}

//task-1
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    // even numbe print
    console.log("number=", num);
  } else {
  }
}

//task-2
let gameNum = 25;
let userNum = parseInt(prompt("Guess the game number:"));

while (userNum != gameNum) {
  console.log("Wrong number entered");
  userNum = parseInt(prompt("Guess the game number:")); // Ask for input again
}

console.log("You entered the correct number: " + gameNum);
