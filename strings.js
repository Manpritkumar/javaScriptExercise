//String
let str = "My name is Manprit";
let str2 = "agam athi";
console.log(str2.length);
console.log(str2[2]);
console.log(str2.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

//template literals

let sale = {
  item: "Book",
  price: 100,
};
let output = `the cost of ${sale.item} is ${sale.price} sek`;
console.log(output);

// String slice
let name1 = "Kanvi";
console.log(name1.slice(1, 3));
// string concate

let formName = "Kanu";
let lastName = "Athi";
let result = formName.concat(lastName);

console.log(result);

// replace method
let place = "Ludhiana";
console.log(place.replace("L", "l"));

//
//charAt method
let word = "IloveJs";
console.log(word.charAt(3));

//task-1

let fullName = prompt("enter your full name without space ");

let userName = "@" + fullName + fullName.length;
console.log(userName);
