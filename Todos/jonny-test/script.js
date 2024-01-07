const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);
////board uusgeh
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
  cards.setAttribute("id", `${title.id + "Cards"}`);

  board.appendChild(cards);

  const addCardBtn = document.createElement("button");
  addCardBtn.setAttribute("class", "addCardBtn");
  addCardBtn.setAttribute("id", "addCardBtn");
  addCardBtn.innerText = "+  Add card";

  addCardBtn.addEventListener("click", addCardDIvCall);
  board.appendChild(addCardBtn);
});

function addCardDIvCall() {
  document.getElementById("root");
  const addCardDiv = document.createElement("div");
  addCardDiv.setAttribute("class", "addCardDiv");
  addCardDiv.setAttribute("id", "addCardDiv");
  root.appendChild(addCardDiv);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  addCardDiv.appendChild(modal);

  const modalHEader = document.createElement("h1");
  modalHEader.innerText = "Add Task";
  modal.appendChild(modalHEader);

  const title = document.createElement("input");
  title.setAttribute("class", "title");
  title.setAttribute("id", "inputTitle");
  title.placeholder = "Title";
  modal.appendChild(title);

  const description = document.createElement("input");
  description.setAttribute("class", "description");
  description.setAttribute("id", "inputDescription");
  description.placeholder = "Description";
  modal.appendChild(description);

  const status = document.createElement("select");
  status.setAttribute("id", "selectStatus");
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
  priority.setAttribute("id", "selectPriority");
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
////////
function pushToCardList() {
  cardList.push({
    title: inputTitle.value,
    description: inputDescription.value,
    status: selectStatus.value,
    priority: selectPriority.value,
  });
  console.log(cardList);
  document.getElementById("addCardDiv").remove();
  filterleh();
}
/////////// statusaar filterdeh

function filterleh() {
  const todoCard = document.createElement("div");
  todoCard.setAttribute("class", "card");
  todoCard.setAttribute("id", "todoCard");
  todoCards.appendChild(todoCard);

  const cardTitle = document.createElement("h2");
  cardTitle.innerText = "title";
  todoCard.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.innerText = "description";
  todoCard.appendChild(cardDescription);

  const cardPriotity = document.createElement("p");
  cardPriotity.innerText = "priority";
  todoCard.appendChild(cardPriotity);

  const cardButtons = document.createElement("div");
  cardButtons.setAttribute("class", "cardButtons");
  todoCard.appendChild(cardButtons);

  const doneBtn = document.createElement("button");
  doneBtn.setAttribute("class", "deleteBtn");
  doneBtn.innerText = "done";
  cardButtons.appendChild(doneBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.innerText = "delete";
  cardButtons.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "deleteBtn");
  editBtn.innerText = "edit";
  cardButtons.appendChild(editBtn);
}
