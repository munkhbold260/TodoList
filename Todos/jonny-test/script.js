const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);
let cardList = [];
const boardTitle = [
  { title: "Todo", id: "todo" },
  { title: "In Progress", id: "inprogress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];
{
  ////board uusgeh

  boardTitle.map((title, index) => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    boards.appendChild(board);

    const head = document.createElement("div");
    head.setAttribute("class", "head");
    head.innerText = title.title;
    board.appendChild(head);

    const cardCount = document.createElement("p");
    cardCount.innerText = 0;
    head.appendChild(cardCount);

    const cards = document.createElement("div");
    cards.setAttribute("class", "cards");
    cards.setAttribute("id", `${title.id}`);

    board.appendChild(cards);

    const addCardBtn = document.createElement("button");
    addCardBtn.setAttribute("class", "addCardBtn");
    addCardBtn.setAttribute("id", "addCardBtn");
    addCardBtn.innerText = "+  Add card";

    addCardBtn.addEventListener("click", () => {
      addCardDiv.style.display = "block";
    });
    board.appendChild(addCardBtn);
  });
}
{
  //////////addCardDIv/////////

  const addCardDiv = document.createElement("div");
  addCardDiv.setAttribute("class", "addCardDiv");
  addCardDiv.setAttribute("id", "addCardDiv");
  let addCardDIv = document.getElementById("addCardDiv");
  root.appendChild(addCardDiv);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  addCardDiv.appendChild(modal);

  const modalHEader = document.createElement("h1");
  modalHEader.innerText = "Add Task";
  modal.appendChild(modalHEader);

  const title = document.createElement("input");
  title.setAttribute("class", "title");
  title.setAttribute("id", "title");
  title.placeholder = "Title";
  modal.appendChild(title);

  const description = document.createElement("input");
  description.setAttribute("class", "description");
  description.setAttribute("id", "description");
  description.placeholder = "Description";
  modal.appendChild(description);

  const status = document.createElement("select");
  status.setAttribute("id", "status");
  const statusTodo = document.createElement("option");
  statusTodo.innerText = "To do";
  status.appendChild(statusTodo);
  const statusInprogress = document.createElement("option");
  statusInprogress.innerText = "In progress";
  status.appendChild(statusInprogress);
  const statusStuck = document.createElement("option");
  statusStuck.innerText = "Stuck";
  status.appendChild(statusStuck);
  const statusDone = document.createElement("option");
  statusDone.innerText = "Done";
  status.appendChild(statusDone);
  modal.appendChild(status);

  const priority = document.createElement("select");
  priority.setAttribute("id", "priority");
  const priorityLow = document.createElement("option");
  priorityLow.innerText = "Low";
  priority.appendChild(priorityLow);

  const priorityMedium = document.createElement("option");
  priorityMedium.innerText = "Medium";
  priority.appendChild(priorityMedium);

  const priorityHigh = document.createElement("option");
  priorityHigh.innerText = "High";
  priority.appendChild(priorityHigh);
  modal.appendChild(priority);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("class", "addTaskBtn");
  addTaskBtn.innerText = "Add Task";

  addTaskBtn.setAttribute("id", "addTaskBtn");
  modal.appendChild(addTaskBtn);

  addTaskBtn.addEventListener("click", pushToCardList);
}

function pushToCardList() {
  cardList.push({
    title: title.value,
    description: description.value,
    status: status.value,
    priority: priority.value,
  });

  let cards = document.getElementById("todo");
  cards.innerHTML = "";
  // todoRender(cardList);
  console.log(cardList);
}
////\\\\\//////////\\\\\\\\\\\////////\\\\\\\\\\\//////////

// function todoRender(cardList) {
//   let cards = document.getElementById("todo");
//   let sth = cardList.map((object) => {
//     let sthp = document.createElement("p");
//     sthp.innerText = object.title + object.status;
//     cards.appendChild(sthp);
//   });
//   console.log(cardList);
//   console.log(cards);
// }

// function render() {
//   console.log(cardList);
//   cardList.map((item) => {
//     let card = document.createElement("div");
//     card.innerText = "hugbytfv";
//     let cards = document.getElementById("todo");
//     cards.appendChild(card);
//   });
// }
///////////////\\\\\\\\\\\\\\\\/////////////////\\\\\\\\\\\\\\\\\\////////
////////
////////
////////
////////
// //neg card uusgeh code item = 1 cartnii buh informatsn
