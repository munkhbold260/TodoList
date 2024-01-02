const queButton = document.querySelector("[name=Q]");
queButton.addEventListener("click", function () {
  document.getElementById("Q").play();
});

queButton.addEventListener("keydown", function (e) {
  if (e.key == 81) {
    document.getElementById("Q").play();
  }
});
var sum = 0;
function add(x, y) {
  sum = x + y;
}
add(1, 3);
console.log(sum);
