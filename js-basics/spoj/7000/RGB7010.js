// RGB7010 - 3 оронтой тоо
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.

// Input
// 3 оронтой эерэг тоо өгөгдөнө.

// Output
// Цифрүүдийн нийлбэр.

// Example
// Input:
// 123
// Output:
// 6

function multiply(num) {
  st = num % 10;
  nd = ((num - st) % 100) / 10;
  rd = (num - nd * 10 - st) / 100;
  console.log(st * nd * rd);
}
multiply(123);
