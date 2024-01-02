//sort 1

let points = [40, 100, 1, 5, 25, 10];

points.sort(function (c, d) {
  return d - c;
});
console.log(points);
//sort 2
points.sort((c, d) => {
  return d - c;
});
console.log(points);

// sort 1
let numbers = [
  { a: 1, b: 2, c: 3 },
  { a: 6, b: 5, c: 4 },
  { a: 5, b: 7, c: 8 },
  { a: 9, b: 6, c: 4 },
  { a: 3, b: 5, c: 4 },
];
numbers.sort(function (c, d) {
  return c.a - d.a;
});
console.log(numbers);

// sort 2

numbers.sort((c, d) => {
  return c.b - d.b;
});
console.log(numbers);
//////////////////////////////////////////////////////
//////////////////////////filter 1
let ages = [32, 33, 16, 40];
let result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(result);
//filter 2
let numbers2 = [
  { a: 1, b: 2, c: 3 },
  { a: 6, b: 5, c: 4 },
  { a: 5, b: 7, c: 8 },
  { a: 9, b: 6, c: 4 },
  { a: 3, b: 5, c: 4 },
];
let findByStock = numbers2.filter(function (a) {
  return a.c == 3;
});
console.log(findByStock);

/////////////////////////////////////////
var creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];
var aquaticCreatures = creatures.filter(function (creature) {
  return creature.habitat == "Ocean";
});

console.log(aquaticCreatures);
///////////////////////////////////////////
//////////////////     map
let nums = 0;
let numbers3 = [
  { a: 1, b: 2, c: 3 },
  { a: 6, b: 5, c: 4 },
  { a: 5, b: 7, c: 8 },
  { a: 9, b: 6, c: 4 },
  { a: 3, b: 5, c: 4 },
];
let findByA = numbers3.map((i) => {
  return i.c == 4;
});
console.log(findByA);
