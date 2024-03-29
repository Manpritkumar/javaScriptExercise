//Task-1

// let number = prompt("enter a number:");

// if (number % 5 === 0) {
//   console.log(number, " is multiple of 5");
// } else {
//   console.log(number, "is not multiple 5");
// }

//task-2

let score = prompt("Enter your score 0-100");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("Grade According to your score:", grade);
