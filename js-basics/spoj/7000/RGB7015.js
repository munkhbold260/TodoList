// RGB7015 - Хоног цаг
// Өгөгдсөн цагийг хоног цагт шилжүүл.

// Input
// Цаг Int төрлөөр өгөгдөнө.

// Output
// Хоног, цаг нэг мөрөнд зайгаар тусгаарлагдан хэвлэгдэнэ.

// Example
// Input:
// 44
// Output:
// 1 20

function time(a) {
  h = a % 24;
  day = (a - h) / 24;
  console.log(day, h);
}
time(72);
