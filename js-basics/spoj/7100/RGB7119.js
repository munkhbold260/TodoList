// RGB7119 - Улирал
// Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү.

// 2-р сарыг хаварт тооцно уу.

// Input
// Натурал тоо. 1<=n<=12.

// Output
// Улирлын нэр англиар.

// Example
// Input:
// 3

// Output:
// Spring

let month = 1;
if (month >= 2 && month <= 4) {
  console.log("Spring");
} else if (month >= 5 && month <= 7) {
  console.log("Summer");
} else if (month >= 8 && month <= 10) {
  console.log("Autumn");
} else if (month >= 11) {
  console.log("Winter");
} else {
  console.log("Winter");
}
