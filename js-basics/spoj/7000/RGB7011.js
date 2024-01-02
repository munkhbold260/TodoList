// RGB7011 - Минут секунд
// Өгөгдсөн секундыг минут секунд болго.

// Input
// Секунд Int тоон утгаар өгөгдөнө.

// Output
// Минут секундыг зайгаар тусгаарлан хэвлэ.

// Example
// Input:
// 200

// Output:
// 3 20

function time(num) {
  sec = num % 60;
  min = (num - sec) / 60;
  console.log(min, sec);
}
time(200);
