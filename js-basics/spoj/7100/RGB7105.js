// RGB7105 - Нийлбэр 80
// Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.

// Input
// Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Нийлбэр.

// Example
// Input:
// 85 75 96 69
// Output:
// 181

function math(a, b, c, d) {
  let sum = 0;
  if (a > 80) {
    sum = sum + a;
  }
  if (b > 80) {
    sum = sum + b;
  }
  if (c > 80) {
    sum = sum + c;
  }
  if (d > 80) {
    sum = sum + d;
  }
  return sum;
}
console.log(math(10, 10, 10, 10));

// herwee a ni 80s ikh bol
// herwee b n 80s ikh bol
// herwee c n 80s ikh bol

// herwee d n 80s ikh bol
