// RGB7204 - Эхний n тооны нийлбэр
// Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.

// Input
// Int төрлийн эерэг бүхэл тоо өгөгдөнө.

// Output
// 1-ээс n тооны нийлбэр.

// Example
// Input:
// 5

// Output:
// 15

function math(n) {
  let sum = 0;
  for (let i = 1; i <= n; i = i + 1) {
    sum = sum + i;
  }
  console.log(sum);
}

math(5);
