let arr = ["Aaaa", "BaaBaa", "Cccc", "Ddddd"];
let qwe = "aAa";

la = arr.map((a) => converter(a));

function converter(text) {
  let qqq = "";
  for (i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      qqq += String.fromCharCode(text.charCodeAt(i) - 32);
    } else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      qqq += String.fromCharCode(text.charCodeAt(i) + 32);
    } else {
      qqq += text[i];
    }
  }
  return qqq;
}

console.log(la);
