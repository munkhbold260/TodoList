// RGB7017 - Жил сар
// Өгөгдсөн сарыг жил сар руу шилжүүл.

// Input
// Сар Int төрлөөр өгөгдөнө.

// Output
// Жил сарыг нэг мөрөнд зайгаар тусгаарлан хэвлэ.

// Example
// Input:
// 27
// Output:
// 2 3

function time(a) {
  m = a % 12;
  y = (a - m) / 12;
  console.log(y, m);
}
time(100);
