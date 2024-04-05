let div = document.querySelector("div"); // to access the div with query method
console.log(div);
div.style.backgroundColor = "green";
div.innerText = "Hello";
div.style.fontSize = "50px";
div.style.textAlign = "center";

let id = div.getAttribute("id"); // to access the attributted and get the print value
console.log(id);

let para = document.querySelector("p");
console.log(para);

let classValue = para.getAttribute("class");
console.log(classValue);

//set the attributes vale
let h1 = document.querySelector("h1");
console.log(h1);

let classUpdate = h1.setAttribute("class", "new agam");
console.log(classUpdate);
// to create new element

let newBtn = document.createElement("button");
newBtn.innerText = "click Me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
console.log(newBtn);

document.querySelector("body").prepend(newBtn);

// document.querySelector("h1");
// h1.before(newBtn);
// newBtn.style.backgroundColor = "yellow";
// new heading creation

let newHeading = document.createElement("h1");
newHeading.innerText = "Hi ,I am new heading";
document.querySelector("body").prepend(newHeading);

// create paragraph
let newPara = document.querySelector("p");
let classV = newPara.document.getAttribute("class");
newPara.document.setAttribute("class", "newClass");
