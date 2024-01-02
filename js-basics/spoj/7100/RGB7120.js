// RGB7120 - Гурвалжин эсэх
// Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ.

// Input
// Нэг мөрөнд 3 натурал тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Гурвалжин байгуулж болох бол YES үгүй бол NO.

// Example
// Input:
// 3 4 5
// Output:
// YES

function math(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
math(3, 8, 10);
