//onclick event handling
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 20;
//   a++;
//   console.log(a);
//};

// onmouseover event handling

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you are inside the div");
// };

// //even object
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = evt => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
// };

// event listner
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  console.log("button 1 was clicked -handler-1");
});

const handler2 = () => {
  console.log("button 1 was clicked -handler-2");
};
btn1.addEventListener("click", handler2);

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked -handler-3");
});
btn1.addEventListener("click", () => {
  console.log("button 1 was clicked -handler-4");
});

//remove eventlistner
btn1.removeEventListener("click", handler2);

//practice

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  console.log("you are trying to change mode");
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    // document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    //document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
