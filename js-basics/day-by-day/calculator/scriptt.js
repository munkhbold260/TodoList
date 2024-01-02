// //
// const root = document.getElementById("root");
// const test = document.createElement("div");
// test.setAttribute("class", "test");
// root.appendChild(test);
// //
// const disp = document.createElement("input");
// disp.setAttribute("class", "disp");
// disp.setAttribute("id", "disp");
// disp.setAttribute("type", "number");
// test.appendChild(disp);
// //
// const but = document.createElement("div");
// but.setAttribute("class", "buttons");
// test.appendChild(but);
// //
// const buttonLabel = [
//   "AC",
//   "+/-",
//   "%",
//   "/",
//   "7",
//   "8",
//   "9",
//   "*",
//   "4",
//   "5",
//   "6",
//   "-",
//   "1",
//   "2",
//   "3",
//   "+",
//   "0",
//   ".",
//   "=",
// ];
// //
// var oldNumber = "";
// var lastOperator = "";
// var operUsed = false;
// //
// for (let i = 0; i < 19; i++) {
//   const buttonsDiv = document.createElement("div");
//   buttonsDiv.setAttribute("id", i);
//   buttonsDiv.setAttribute("class", "buttonsDiv");
//   const buttons = document.createElement("button");
//   buttons.setAttribute("id", i);
//   buttons.setAttribute("class", "orange");
//   buttons.innerText = buttonLabel[i];
//   buttons.addEventListener("click", toDisplay);
//   if ((i = 16)) {
//     buttonsDiv.setAttribute("class", "zero");
//   }
//   but.appendChild(buttonsDiv);
//   buttonsDiv.appendChild(buttons);
// }
// function isNumber(value) {
//   return typeof value === "number";
// }
// function toDisplay() {
//   var disp = document.getElementById("disp");
//   //
//   if (this.innerText === "AC") {
//     disp.value = "";
//   } else if (
//     this.innerText === "+" ||
//     this.innerText === "-" ||
//     this.innerText === "*" ||
//     this.innertext === "/"
//   ) {
//     oldNumber = disp.value;
//     lastOperator = this.innerText;
//     operUsed = true;
//     console.log(oldNumber);
//   } else if (this.innerText === "+/-") {
//     disp.value = Number(disp.value.toString()) * -1;
//   } else if (this.innerText === "%") {
//     disp.value = Number(disp.value.toString()) * 0.01;
//   } else if (this.innerText === "=") {
//     if (lastOperator === "+") {
//       disp.value = Number(oldNumber) + Number(disp.value);
//     }
//     //
//     else if (lastOperator === "-") {
//       disp.value = Number(oldNumber) - Number(disp.value);
//     } else if (lastOperator === "*") {
//       disp.value = Number(oldNumber) * Number(disp.value);
//     } else if (lastOperator === "/") {
//       disp.value = Number(oldNumber) / Number(disp.value);
//     }
//   } else if (isNumber(Number(this.innerText))) {
//     if (operUsed) {
//       operUsed = false;
//       disp.value = this.innerText;
//     } else {
//       disp.value = disp.value + this.innerText;
//     }
//   }
// }
