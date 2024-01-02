function hollowSq(n) {
  let stars = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
        stars += "$";
      } else {
        stars += " ";
      }
    }
    stars += "\n";
    console.log(stars);
  }
}
hollowSq(5);
