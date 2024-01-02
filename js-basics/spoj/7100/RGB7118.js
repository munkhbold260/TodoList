// RGB7118 - Гараг
// Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ. Эхний үсгийг л томоор бичнэ.

// Input
// Натурал тоо. 1<=n<=7.

// Output
// Гараг.

// Example
// Input:
// 5

// Output:
// Friday

function day(n) {
  if (n == 1) {
    console.log("Monday");
  } else if (n == 2) {
    console.log("Tuesday");
  } else if (n == 3) {
    console.log("Wednesday");
  } else if (n == 4) {
    console.log("Thursday");
  } else if (n == 5) {
    console.log("Friday");
  } else if (n == 6) {
    console.log("Saturday");
  } else if (n == 7) {
    console.log("Sunday");
  }
}
day(5);
