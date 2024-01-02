function sqStar(n) {
  stars = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      stars += "$";
    }
    stars += "\n";
  }
  console.log(stars);
}

sqStar(5);
