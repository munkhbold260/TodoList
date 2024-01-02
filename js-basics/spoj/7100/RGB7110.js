// RGB7110 - 3-д хуваагдах
// Өгөгдсөн 4 тоон дотроос 3-д хуваагддаг тоонуудын тоог ол.

// Input
// Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// 3-д хуваагддаг тоонуудын тоо.

// Example
// Input:
// 3 12 8 9

// Output:
// 3

function math(a, b, c, d) {
  let sum = 0;
  if (a % 3 == 0) {
    sum = sum + 1;
  }
  if (b % 3 == 0) {
    sum = sum + 1;
  }
  if (c % 3 == 0) {
    sum = sum + 1;
  }
  if (d % 3 == 0) {
    sum = sum + 1;
  }
  return sum;
}
console.log(math(3, 12, 15, 9));
