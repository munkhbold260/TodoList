// RGB7170 - Давхрын хэд дэх хаалга
// Нэг орцтой байрны давхрын тоо, давхар дахь хаалганы тоо өгөгдөв. Айлын хаалганы дугаар мэдэгдэж
// байгаа үед тэрхүү айл хэд дэх давхрын хэд дэх хаалганд амьдардаг вэ? Давталт ашиглахгүй бодно.

// Input
//  Эхний мөрөнд давхрын тоо, давхар дахь хаалганы тоо зайгаар тусгаарлагдан өгөгдөнө.

// Хоёр дахь мөрөнд айлын хаалганы тоо өгөгдөнө.

// Output
// Давхрын тоо, давхар дахь хэд дэх хаалганы тоо зайгаар тусгаарлагдан хэвлэгдэнэ.

// Example
// Input:
// 5 4
// 10

// Output:
// 3 2

function home(a, b, c) {
  let floor = c / b - ((c / b) % 1);
  let doorNumber = 0;
  if (c > b * a) {
    console.log("naadah chin agaart amidardag ail bnshdee bro");
    return;
  } else if ((c / b) % 1 == 0) {
    floor = floor + 0;
  } else if ((c / b) % 1 !== 0) {
    floor = floor + 1;
  }
  if (c - b * floor == 0) {
    doorNumber = doorNumber + b;
  } else if (c - b * floor !== 0) {
    doorNumber = doorNumber + (c - b * (floor - 1));
  }
  console.log(floor, "-r dawhariin", doorNumber, "-r haalga");
}

home(20, 7, 120);
