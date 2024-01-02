const root = document.getElementById("root");
const inputNum = document.createElement("input");
const generateBtn = document.createElement("button");
generateBtn.innerHTML = "generate";
root.appendChild(inputNum);
root.appendChild(generateBtn);

generateBtn.addEventListener("click", () => {
  drawCircles(Number(inputNum.value));
});

function drawCircles(num) {
  const circleContainer = document.createElement("div");
  circleContainer.setAttribute("class", "container");
  const red = Math.floor(Math.random()) * 256;
  const green = Math.floor(Math.random()) * 256;
  const blue = Math.floor(Math.random()) * 256;

  while (num > 0) {
    const newCircle = document.createElement("div");
    newCircle.setAttribute("class", "circle");
    let newBlue = blue - num * 2;
    if (newBlue < 0) {
      newBlue = Math.abs(newBlue);
    } else if (newBlue > 255) {
      newBlue = 255 - newBlue;
    }
    newCircle.style.backgroundColor = `rgb(${red},${green}, ${newBlue})`;
    circleContainer.appendChild(newCircle);
    num--;
  }
  root.appendChild(circleContainer);
}
