let number = [1, 2, 3, 4];
console.log(number[2]);

number[1] = 10; // arrary look like 1,10,3,4

//add element end of array

number.push(5, 6); //[1,10,3,4,5,6]
console.log(number);

number.pop(5); // to remove any number
console.log(number);
// for each loop

number.forEach(number => console.log(number));
let evennumber = number.filter(number => number % 2 === 0); //result even number [10,4]
console.log(evennumber);

let doubleNumber = number.map(num => num * 2);
console.log(doubleNumber);
