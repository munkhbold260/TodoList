// RGB7009 - 2 оронтой тоо
// Өгөгдсөн 2 оронтой тооны цифрүүдийн үржвэрийг ол.

// Input
// 2 оронтой тоо өгөгдөнө.

// Output
// Нэгж ба аравтын орны цифрүүдийн үржвэр.

// Example
// Input:
// 27
// Output:
// 14

// function nemeh(too) {
//    = too % 10;
//   y = (too - x) / 10;
//   console.log(y, "*", x, "=", x * y);
// }
// nemeh(27);

function multiply(num) {
  st = num % 10;
  nd = (num - st) / 10;
  console.log(st * nd);
}
multiply(27);
