// RGB7210 - Тооны хүрд
// Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга.

// Input
// n натурал тоо өгөгдөнө. n<=10.

// Output
// n тооны хүрд нэг нэг мөрөнд хэвлэ.

// Example
// Input:
// 3

// Output:
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30

function math(a) {
  let sum = 1;
  for (let i = 1; i <= 10; i = i + 1) {
    sum = i;
    console.log(a, "*", i, "=", sum * a);
  }
}
math(3);