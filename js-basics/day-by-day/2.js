let days = 6;
if (days == 1) {
  console.log("monday");
} else if (days == 2) {
  console.log("tuesday");
} else if (days == 3) {
  console.log("wednesday");
} else if (days == 4) {
  console.log("thursday");
} else if (days == 5) {
  console.log("friday");
} else if (days == 6) {
  console.log("saturday");
} else if (days == 7) {
  console.log("sunday");
}

// sariig oldog program. odor ogdono, ogogdson odoroos hamaar heddehi sard baigaag todorhoilno
// jishee n 35 gevel 1r sard bish 2r sard baigaa bolhoor feburary
// 65 gevel 3r sar buyu MARCH gesen text hevledeg

let myAge = 22;
let ageLimit = 21;
if (myAge >= ageLimit) {
  console.log("allowed to enter", myAge);
} else {
  console.log("not allowed to enter", myAge);
}

let day = 365;

if (day < 32) {
  console.log("Jan");
} else if (day < 60) {
  console.log("Feb");
} else if (day < 91) {
  console.log("Mar");
} else if (day < 121) {
  console.log("Apr");
} else if (day < 152) {
  console.log("May");
} else if (day < 182) {
  console.log("June");
} else if (day < 213) {
  console.log("July");
} else if (day < 244) {
  console.log("Aug");
} else if (day < 274) {
  console.log("Sep");
} else if (day < 305) {
  console.log("Oct");
} else if (day < 335) {
  console.log("Nov");
} else if (day < 366) {
  console.log("Dec");
} else {
  console.log("Other");
}

// dung tootsoh program bichne.
// 3n oor torliin dun taniulna (midterm1, midterm2, final)
//hervee dundaj dun chine 60s doosh avsan bol dun chine F
//hervee dundaj dun chine 61-70 hoorond bol avsan bol dun chine D
//hervee dundaj dun chine 71-80 hoorond bol avsan bol dun chine C
//81-90 bol B...
//91-100bol A

// let midterm1 = 100;
// let midterm2 = 100;
// let final = 1000;
// if ((midterm1 + midterm2 + final) / 3 < 60) {
//   console.log("F");
// } else if ((midterm1 + midterm2 + final) / 3 < 70) {
//   console.log("D");
// } else if ((midterm1 + midterm2 + final) / 3 < 80) {
//   console.log("C");
// } else if ((midterm1 + midterm2 + final) / 3 < 90) {
//   console.log("B");
// } else if ((midterm1 + midterm2 + final) / 3 <= 100) {
//   console.log("A", (midterm1 + midterm2 + final) / 3);
// } else {
//   console.log("other");
// }

//EXTRA midterm- uud n dund 25% iar noloolno harin final dun buh dungiin  50% d noloolno.
//console.log(((mid1 + mid2) / 2 + fin) / 2);
let midterm1 = 70;
let midterm2 = 70;
let final = 100;
let avg = ((midterm1 + midterm2) / 2 + final) / 2;

if (avg < 60) {
  console.log("F");
} else if (avg < 70) {
  console.log("D");
} else if (avg < 80) {
  console.log("C");
} else if (avg < 90) {
  console.log("B");
} else if (avg <= 100) {
  console.log("A");
} else {
  console.log("other");
}
