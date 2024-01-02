// function calculate(num1, num2, operation) {
//   let answer;
//   if (operation == "+") {
//     answer = num1 + num2;
//   } else if (operation == "-") {
//     answer = num1 - num2;
//   } else if (operation == "*") {
//     answer = num1 * num2;
//   } else if (operation == "/") {
//     answer = num1 / num2;
//   }
//   return answer;
// }
// let answer = calculate(10, 20, "*");
// console.log(answer);
var n = 10000;
for (j = 1; j <= n; j++) {
  s = 0;
  su = 0;
  for (i = 1; i <= j; i *= 10) {
    s++;
  }
  for (i = 1; i <= j; i *= 10) {
    k = Math.floor((j % (10 * i)) / i);

    su += Math.pow(k, s);
  }
  if (j == su) {
    console.log("Армостронгийн тоо", j);
  }
}
