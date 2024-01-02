// RGB7171 - Орц, давхар, хаалга
// Байшингийн давхар, орц, нэг давхарт суудаг айлын тоо мэдэгдэж байвал
// энэхүү байшингийн өгөгдсөн тоот нь хэддүгээр орцны, хэдэн давхрын хэд дэх хаалга вэ?

// Жич: Давхар бүр дэх хаалганы тоо ижил.

// Input
// Эхний мөрөнд байшингийн давхар, орц, нэг давхарт байгаа хаалганы
// тоонууд нэг зайгаар тусгаарлагдан өгөгдөнө.

// Хоёр дахь мөрөнд нэгэн айлын хаалганы дугаар өгөгдөнө.

// Output
// Орц, давхар, давхрын хэд дэх хаалганы дугаарууд нэг мөрөнд нэг зайгаар
//тусгаарлагдан хэвлэгдэнэ.

// Example
// Input:
// 5 3 4
// 32

// Output:
// 2 3 4
//orts dawhar toot
//a=dawhar
//b=orts
//c=ortson dahi ailiin too
//d=ailiin dugaar
var entry = 0;
var floor = 0;
var door = 0;
var doorNum = 21;
for (let i = 0; i <= doorNum; i++) {
  if (i < 20) {
    entry = 1;
  } else if (i > 20 && i < 40) {
    entry = 2;
  } else if (i > 40) {
    entry = 3;
  }
}
console.log(entry, floor, door);

// function math(floors, gates, doors, doornum) {
//   let gate = 1;
//   let floor = doornum / doors - (doornum % doors);
//   if (doornum - floors * doors > floors * doors) {
//     gate = orts + 1;
//   } else if (doornum - floors * doors < floors * doors) {
//     gate = gate;
//   }
//   if (floor) {
//   }
//   console.log("orts", gate, "dawhar", floor);
// }

// math(5, 3, 4, 9);
