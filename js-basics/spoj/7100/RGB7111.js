// RGB7111 - 11-д хуваагддаггүй
// Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол.

// Input
// Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// 11-д хуваагддаггүй тоонуудын нийлбэр.

// Example
// Input:
// 7 22 13 30

// Output:
// 50

function math(a, b, c, d) {
  let sum = 0;
  if (a % 11 !== 0) {
    sum = sum + a;
  }
  if (b % 11 !== 0) {
    sum = sum + b;
  }
  if (c % 11 !== 0) {
    sum = sum + c;
  }
  if (d % 11 !== 0) {
    sum = sum + d;
  }
  return sum;
}
console.log(math(7, 22, 13, 30));
