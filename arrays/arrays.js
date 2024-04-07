//arrays
// let marks = [91, 25, 42, 63, 63];
// marks[2] = 66; // can update the array value also
// console.log(marks);
//  array indices
// console.log(marks[2]);

//  Looping over an Array
// let books = ["Jambo", "Creator", "Vampire", "Action", "lifeline"];

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]);
//}

// //for of loop
// let cities = ["delhi", "punjab", "haryana", "goa"];
// for (city of cities) {
//   console.log(city.toUpperCase());
// }

//  task-1
// let Marks = [85, 95, 42, 52, 63, 66];
// let sum = 0;
// for (let val of Marks) {
//   sum = sum + val;
// }
// let avg = sum / Marks.length;
// console.log(`average marks of the class= ${avg}`);

//  task-2  get the items value after the 10% discount offer.
// let items = [250, 652, 455, 755, 855];
//  let i = 0;
// for (let val of items) {
//   console.log(`value at index ${i}=${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer=${items[i]}`);
//   i++;
// }

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer;
// }
// console.log(items);

// //array methods

// let clothes = ["pant", "t-shirt", "short"];
// clothes.push("bra", "panty"); //push method to add some thing new in the array list
// console.log(clothes);
// let deletedItem = clothes.pop(); // pop to deleted the item from last of array
// console.log(clothes);
// console.log("deleted=", deletedItem);
// //to string
// let fastfood = ["burger", "noodles", "saus"];
// console.log(fastfood.toString());

// //concat in array
// let Hardware = ["harddisk", "mouse", "printer"];
// let Software = ["window", "office"];
// let Hardsoft = Hardware.concat(Software);
// console.log(Hardsoft);

// //unshift method add the arrary in the start
// let City = ["ludhian", "Jalandar", "Amritsar"];

// City.unshift("Hosiyarpur");
// console.log(City);

// let val = City.shift();
// console.log("deleted", val);

// //Slice method
// let profession = ["doctor", "enginner", "nurse", "teacher"];
// console.log(profession);
// console.log(profession.slice(1, 4));

//  splice method
let numbers = [12, 41, 52, 66, 85, 88, 11];
numbers.splice(1, 2, 52, 53);
console.log(numbers);

//add element
numbers.splice(5, 0, 101);
console.log(numbers);

//deleted element
numbers.splice(0, 1);
// //replace element
numbers.splice(1, 1, 105);

// // task-1

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// //part -A removed first compnay from array
// companies.splice(0, 1);
// //Removed uber and add Ola
// console.log(companies);
// companies.splice(1, 1, "Ola");

// // add amazon at the end
// companies.push("Amazon");
