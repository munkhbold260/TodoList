// Dor hayj 10n object tei array zohio.
// 10n tamirchidiin onoog tootsog program bichne.
// Example Object:
// {
// name: "boldo",
// age: 20,
// scores: [10,20,30,40]
// }

// Ehnii tamirchnii dundaj onoog ol.
// 2 dahi tamirchnii dundaj onoog ol.
// hamgiin zaluu tamirchniig

let athletes = [
  { name: "bold", age: 33, score: [10, 20, 30, 40] },
  { name: "khosoo", age: 35, score: [11, 21, 31, 41] },
  { name: "khuuk", age: 22, score: [12, 22, 32, 42] },
  { name: "dashka", age: 33, score: [13, 23, 33, 43] },
  { name: "khuslen", age: 18, score: [14, 24, 34, 44] },
  { name: "temuulen", age: 18, score: [15, 10, 20, 26] },
  { name: "ami", age: 20, score: [14, 21, 19, 40] },
  { name: "munkhbat", age: 25, score: [10, 22, 30, 42] },
  { name: "tulga", age: 35, score: [15, 15, 16, 26] },
  { name: "davaadalai", age: 30, score: [14, 15, 20, 40] },
];
//zaluu tairching haij oloh funct
function findByYoung() {
  let youngest = athletes[0].age;
  let youngestName = athletes[0].age;
  for (let i = 0; i < athletes.length; i = i + 1) {
    if (youngest > athletes[i].age) {
      youngest = athletes[i].age;
      youngestName = athletes[i].name;
    }
  }
  console.log("youngest athlete name is:", youngestName, "year is:", youngest);
}
findByYoung();

//hugshin tamirching haij oloh funct
function findByOld() {
  let oldest = athletes[0].age;
  let oldestName = athletes[0].name;
  for (let i = 0; i < athletes.length; i = i + 1) {
    if (oldest < athletes[i].age) {
      oldest = athletes[i].age;
      oldestName = athletes[i].name;
    }
  }
  console.log("oldest athlet name is:", oldestName, "year is:", oldest);
}
findByOld();

//tamirchnii nereer haih funct

function findScore(s) {
  for (let i = 0; i < athletics.length; i = i++) {}
}
console.log(athletics[0].score[0]);
findScore();

function setSale(saleAmount) {
  for (let i = 0; i < 10; i = i + 1) {
    products[i].price = products[i].price * (1 - saleAmount / 100);
  }
}
setSale(20);
console.log(products);

function findByCategory(name) {
  // let avgScore = athletes[0].score;
  for (let i = 0; i < 10; i = i + 1) {
    if (athletes[i].name == name) {
      // avgScore = athletes[i].console.log(athletes[i].score[0]);
    }
  }
}
findByCategory("bold");
