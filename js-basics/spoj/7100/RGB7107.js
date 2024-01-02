// RGB7107 - Тэгш тоонуудын нийлбэр
// Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. Ядаж 1 тэгш тоо бий.

// Input
// Нэг мөрөнд Int төрлийн 3 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Нийлбэр

// Example
// Input:
// 10 3 5
// Output:
// 10

function math(a, b, c) {
  let sum = 0;
  if (a % 2 == 0) {
    sum = sum + a;
  }
  if (b % 2 == 0) {
    sum = sum + b;
  }
  if (c % 2 == 0) {
    sum = sum + c;
  }
  return sum;
}
console.log(math(10, 5, 8));

//herwee a too n tegsh bol sum-d oruul.

//yaj tegsh gedgiig medeh we?-----a toogoo 2d huwaana. uldegdelgui garj baiwal tegsh gesen ug.
//eniigee yaj uldegdelgui garsan gedgee medeh we.
//7/2=3.5 endees 1 uldegdliig barij awaad
