// RGB7008 - Аравтын орны цифр
// Өгөгдсөн тооны аравтын орны цифрийг ол.

// Input
// Int төрлийн бүхэл тоо өгөгдөнө.

// Output
// Аравтын орны цифр.

// Example
// Input:
// 423
// Output:
// 2

function num(x) {
  last = x % 10;
  secondNumber = ((x - last) % 100) / 10;
  console.log(secondNumber);
}
num(4567);
