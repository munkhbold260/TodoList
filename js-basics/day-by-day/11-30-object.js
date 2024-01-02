// ARRAY [ ] haaltaar temdeglegdne.
//array n 1 turliin zuilsiin tsugluulga ym.
//array-n itemiig duudaj hewlehdee console.log(let[0])

let city = [
  "ulaanbaatar",
  "erdenet",
  "tsetserleg",
  "uliastai,",
  "bulgan",
  "arvaikheer",
  "chingis",
  "dalanzadgad",
];
console.log(
  city[0],
  city[1],
  city[2],
  city[3],
  city[4],
  city[5],
  city[6],
  city[7]
);
//object
let usa = {
  a: { aaa: "1111" },
  b: { bbb: "2222" },
  c: { ccc: "3333" },
  d: { ddd: "4444" },
  e: { eee: "5555" },
};
console.log(usa.a);
console.log(usa.a.aaa);

//salary ni 2 sayaas ih,
//niigmiin daatgaliin shimtgel toldog bh,
//passporttoi eswel identitycardtai bh,
//bas person bh eswel itgemjleheer bh,
//dept ni 1 sayas baga bwal zeel garna.

function loan(salary, insurance, inperson, cred, dept, passport, identityCard) {
  if (
    salary > 10 &&
    insurance > 1 &&
    (inperson || cred) &&
    dept < 1000000 &&
    (passport || identityCard)
  ) {
    console.log("yes");
  } else console.log("no");
}
loan(
  11,
  2,
  (inperson = true),
  (cred = true),
  500,
  (passport = true),
  (identityCard = false)
);

let iphonePrices = [900, 850, 800, 790];
let display = [
  { brand: "LG", inch: "23", price: 200000, year: "2022" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: "300000", year: "2021" },
  { brand: "sony", inch: "31", price: "300000", year: "2021" },
  { brand: "sony", inch: "31", price: "300000", year: "2021" },
  { brand: "sony", inch: "31", price: "300000", year: "2021" },
];
let iphone15 = {
  brand: "apple",
  prices: [
    { year: 2020, price: 900 },
    { year: 2021, price: 850 },
    { year: 2022, price: 800 },
  ],
};
iphone15.prices[2].price = 700;
display[0].price = display[0].price * 0.9;
console.log(display);
console.log(iphonePrices);
