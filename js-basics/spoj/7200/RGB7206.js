// RGB7206 - 100-г n удаа нэм
// 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.

// Input
// Int төрлийн эерэг тоо өгөгдөнө.

// Output
// Нийлбэр

// Example
// Input:
// 6
// Output:
// 600

function math(n) {
  let sum = 0;
  for (let i = 0; i < n; i = i + 1) {
    sum = sum + 100;
  }
  console.log(sum);
}
math(8);
