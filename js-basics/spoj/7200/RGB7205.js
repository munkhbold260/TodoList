// RGB7205 - n!
// n! ол.

// Input
// Int төрлийн бүхэл тоо өгөгдөнө.

// Output
// Өгөгдсөн тооны факториал.

// Example
// Input:
// 5

// Output:
// 120

function math(n) {
  let sum = 1;
  for (let i = 1; i <= n; i = i + 1) {
    sum = sum * i;
    console.log(sum);
  }
}
math(5);
