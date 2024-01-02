let randomNum = 0;
function reset() {
  let randomed = Math.ceil(Math.random() * 100);
  randomNum = randomNum + randomed;
  document.getElementById("qwe").innerText = randomNum;
}

function check() {
  let num1 = Number(document.getElementById("inputNum").value);
  if (num1 > randomNum) {
    document.getElementById("result").innerText = "too high";
  } else if (num1 < randomNum) {
    document.getElementById("result").innerText = "too low";
  } else if ((num1 = randomNum)) {
    document.getElementById("result").innerText = "congratulation";
  }
}