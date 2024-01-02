// RGB7114 - Тэгш тоонууд YES
// Гурван тоо өгөгдөнө. Тоо тэгш бол YES үгүй бол NO гэж хэвлэ.

// Input
// Int төрлийн 3 тоо нэг нэг мөрөнд өгөгдөнө.

// Output
// Тоо тус бүрийг шалгаад нэг нэг мөрөнд хариуг хэвлэ.

// Example
// Input:
// 3
// 4
// 5
// Output:
// NO
// YES
// NO

function math(a, b, c) {
  if (a % 2 == 0) {
    console.log("yes");
  } else console.log("no");
  if (b % 2 == 0) {
    console.log("yes");
  } else console.log("no");
  if (c % 2 == 0) {
    console.log("yes");
  } else console.log("no");
}
math(3, 4, 5);
