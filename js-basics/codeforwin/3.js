function sqrStar(n) {
  let stars = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
        stars += "a";
      } else if (i == 2) {
        stars += "+";
      } else {
        stars += "-";
      }
    }
    stars += "\n";
  }
  console.log(stars);
}
sqrStar(5);

("a a a a a");
("a a   a a");
("a   a   a");
("a a   a a");
("a a a a a");
