// //function decleration- function zarlah

// function doSomething(a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// }

// // function calling

// let result = doSomething(3, 4, 5);
// console.log(result);

// function findDay(num) {
//   if (num == 1) {
//     return "Monday";
//   } else if (num == 2) {
//     return "Tuesday";
//   }
// }
// let dayInText = findDay(2);
// console.log(dayInText);

function findMonth(day) {
  if (day <= 31) {
    return "JAN";
  } else if (day <= 59) {
    return "FEB";
  } else if (day <= 90) {
    return "MAR";
  } else if (day <= 120) {
    return "APR";
  } else if (day <= 151) {
    return "MAY";
  } else if (day <= 181) {
    return "JUN";
  } else if (day <= 212) {
    return "JUL";
  } else if (day <= 243) {
    return "AUG";
  } else if (day <= 273) {
    return "SEP";
  } else if (day <= 304) {
    return "OCT";
  } else if (day <= 334) {
    return "NOV";
  } else if (day <= 365) {
    return "DEC";
  }
}
let dayInText = findMonth(61);
console.log(dayInText);
