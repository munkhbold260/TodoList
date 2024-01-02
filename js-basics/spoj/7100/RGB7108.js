// RGB7108 - Сондгой тоонуудын үржвэр
// Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. Ядаж 1 сондгой тоо байгаа.

// Input
// Нэг мөрөнд Int төрлийн 3 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Үржвэр

// Example
// Input:
// 5 2 3
// Output:
// 15

function math(a, b, c) {
  let sum = 0;
  if (a % 2 == 1) {
    sum = sum + a;
  }
  if (b % 2 == 1) {
    sum = sum + b;
  }
  if (c % 2 == 1) {
    sum = sum + c;
  }
  return sum;
}
console.log(math(15, 5, 3));
