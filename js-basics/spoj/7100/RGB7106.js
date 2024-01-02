// RGB7106 - Үржвэр 5
// Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа.

// Input
// Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Үржвэр

// Example
// Input:
// 3 6 2 4

// Output:
// 24

function math(a, b, c, d) {
  let multiply = 1;
  if (a < 5) {
    multiply = multiply * a;
  }
  if (b < 5) {
    multiply = multiply * b;
  }
  if (c < 5) {
    multiply = multiply * c;
  }
  if (d < 5) {
    multiply = multiply * d;
  }
  return multiply;
}
console.log(math(3, 6, 2, 4));
