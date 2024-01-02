// RGB7104 - 4 тооны бага
// Өгөгдсөн 4 тооны багыг ол.

// Input
// Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Бага тоо.

// Example
// Input:
// 3 2 1  4
// Output:
// 1

function math(a, b, c, d) {
  if (a < b && a < c && a < d) {
    console.log(a);
  } else if (b < c && b < d) {
    console.log(b);
  } else if (c < d) {
    console.log(c);
  } else console.log(d);
}
math(3, 2, 1, 4);

let math = [{ a: 10 }, { a: 57 }, { a: 17 }, { a: 21 }, { a: 7 }];
function findMostNumber() {
  let mostExp = math[0].a;
  for (let i = 1; i < math.length; i = i + 1) {
    if (mostExp > math[i].a) {
      mostExp = math[i].a;
    }
  }
  console.log(mostExp);
}

findMostNumber();
