//object it is collection of value

const student = {
  fullName: "Manprit Kumar",
  age: 35,
  mark: 60,
  isPass: true,
};
student["age"] = student["age"] + 1;
console.log(student);
console.log(student.age);

//product object example
const product = {
  title: "Ball Pen",
  rating: 4,
  offer: 5,
  price: 270,
};
console.log(product);
product["rating"] = 10; // we can update the product
console.log(product);
delete product.offer;
console.log(product); // we can delete the value

//array list in Object
const adList = [
  { title: "ad 1", description: "This is the first ad." },
  { title: "ad 2", description: "This is the Second ad." },
  { title: "ad 3", description: "This is the third ad." },
];

console.log(adList[2].description);
