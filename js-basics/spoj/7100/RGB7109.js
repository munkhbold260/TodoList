// RGB7109 - Тэнцүү 5
// Өгөгдсөн 3 тоон дотроос 5-тай тэнцүү тоонуудын тоог ол.

// Input
// Нэг мөрөнд Int төрлийн 3 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// 5-тай тэнцүү тоонуудын тоо.

// Example
// Input:
//  2 5 5

// Output:
// 2

function math(a, b, c) {
  let sum = 0;
  if (a - 5 == 0) {
    sum = sum + a;
  }
  if (b - 5 == 0) {
    sum = sum + b;
  }
  if (c - 5 == 0) {
    sum = sum + c;
  }
  return sum;
}
console.log(math(15, 5, 5));
