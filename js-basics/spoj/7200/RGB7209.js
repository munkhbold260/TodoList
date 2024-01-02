// RGB7209 - a тооны n зэрэг
// Өгөгдсөн тооны n зэргийг ол.

// Input
// Нэг мөрөнд Int төрлийн эерэг 2  тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// an

// Example
// Input:
// 3 4

// Output:
// 81

function math(a, b) {
  let sum = 0;
  for (let i = 1; i <= b; i = i + 1) {
    sum = a ** b;
  }
  console.log(sum);
}
math(3, 4);
