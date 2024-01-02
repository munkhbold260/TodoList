const root = document.getElementById("root");

// header uusgeh
const header = document.createElement("div");
// haeder class="head"
header.setAttribute("class", "head");
// root ruu haeder hiij baina
root.appendChild(header);

//
const startBtn = document.createElement("button");
//
startBtn.setAttribute("class", "startgame");
//
startBtn.innerText = "start";
//
header.appendChild(startBtn);
// reset

const reset = document.createElement("button");
reset.setAttribute("class", "reset");
reset.innerText = "reset";
header.appendChild(reset);

// score
const score = document.createElement("div");
score.setAttribute("class", "score");
header.appendChild(score);
let scores = 0;
score.innerHTML = scores;
//
const chance = document.createElement("div");
chance.setAttribute("class", "chance");
header.appendChild(chance);
let chances = 3;
chance.innerHTML = chances;
//
const gamebody = document.createElement("div");
//
gamebody.setAttribute("class", "gamebody");
//
root.appendChild(gamebody);

// start button deer darahad startgame function duudna
startBtn.addEventListener("click", startgame);

// startgame function
function startgame() {
  //
  const box = document.createElement("div");
  //
  box.setAttribute("class", "box");

  // red-d sanamsargui utga ugch bn
  const red = Math.floor(Math.random() * 255); // 0-255
  //
  const green = Math.floor(Math.random() * 205) + 50;
  //
  const blue = Math.floor(Math.random() * 255);
  //
  const rand = Math.floor(Math.random() * 8); // 0 1 2 3 4 5 6 7 8
  for (let i = 0; i < 9; i++) {
    //
    const card = document.createElement("div");
    card.setAttribute("id", `qwer${i}`);
    //
    card.setAttribute("class", "card");
    if (i == rand) {
      // i index rand tentsej baiwal uur ungu ugch bn
      card.style.backgroundColor = `rgb(${red}, ${green - 50}, ${blue})`;
    } else {
      // i index rand tentsehgui baiwal ijil ungu ugch bn
      card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    card.addEventListener("click", (e) => {
      e.target.style.backgroundColor !== `rgb(${red}, ${green}, ${blue})`;

      if (i != rand) {
        chances--;
        chance.innerHTML = chances;
        if (chances == 0) {
          chance.innerHTML = "game over";
          gamebody.innerHTML = "";
        }
      } else if (i == rand) {
        scores++;
        score.innerHTML = scores;
        if (scores == 3) {
          score.innerHTML = "congrats";
          gamebody.innerHTML = "";
        }
      }
    });

    box.appendChild(card);
  }
  gamebody.innerHTML = "";
  gamebody.appendChild(box);
  const correctBox = document.getElementById(`qwer${rand}`);
  correctBox.addEventListener("click", () => {
    if (scores < 3) {
      startgame();
    } else {
      gamebody.innerHTML = "";
    }
  });
}
reset.addEventListener("click", scoreReset);
function scoreReset() {
  scores = 0;
  score.innerHTML = 0;
  chances = 3;
  chance.innerHTML = chances;
  gamebody.innerHTML = "";
}
