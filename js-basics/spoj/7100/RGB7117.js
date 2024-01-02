// RGB7117 - Тоон үнэлгээнээс үсгэнд
// Өгөгдсөн тоон үнэлгээг үсгэн үнэлгээнд шилжүүл.

// Input
// Тоон үнэлгээ 100-аас ихгүй эерэг бүхэл тоогоор өгөгдөнө.

// Output
// Тоон үнэлгээ 89-өөс их бол А, 79-өөс их В, 69-өөс их бол С, 59-өөс их бол D бусад тохиолдолд F үсгэн дүнг хэвлэ.

// Example
// Input:
// 84

// Output:
// В

let dun = 99;

if (dun >= 90) {
  console.log("A");
} else if (dun >= 80 && dun < 90) {
  console.log("B");
} else if (dun < 80 && dun >= 70) {
  console.log("C");
} else if (dun <= 69 && dun >= 60) {
  console.log("D");
} else {
  console.log("F");
}
