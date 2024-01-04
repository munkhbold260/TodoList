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
  // addCardBtn.setAttribute("onclick", "addTask()");
  addCardBtn.innerText = "+  Add card";
  board.appendChild(addCardBtn);
});
let addCardBtn = document.getElementById("addCardBtn");
function pushTask() {
  cardList.push({ title: "title" });
}
addCardBtn.addEventListener("click", pushTask);

function render() {
  console.log(cardList);
  cardList.map((item) => {
    let card = document.createElement("div");
    card.innerText = item.tit121;
    let cards = document.getElementById("todo");
    cards.appendChild(card);
  });
}
render();
// //neg card uusgeh code item = 1 cartnii buh informatsn
// function createTodoItem(item) {
//   const card = document.createElement("div");
//   card.setAttribute("class", "card");

//   const cardTitle = document.createElement("h2");
//   cardTitle.innerText = item[2];
//   card.appendChild(cardTitle);

//   const deleteBtn = document.createElement("button");
//   deleteBtn.setAttribute("class", "deleteBtn");
//   deleteBtn.setAttribute("id", item[4]);
//   let id = item[4];
//   // id itemiin hamgiin suuld  bga .teriig delete button daragdhad tsug yawuulj cardList ees arilgana
//   deleteBtn.setAttribute("onclick", "deleteTask(id)");
//   deleteBtn.innerText = "delete";
//   card.appendChild(deleteBtn);

//   const cardDescription = document.createElement("p");
//   cardDescription.innerText = item[0];
//   card.appendChild(cardDescription);

//   const cardPriotity = document.createElement("p");
//   cardPriotity.innerText = item[1];
//   card.appendChild(cardPriotity);
//   //item[3] = status bolhoor statusaas hamaarch zuw board ruu append hiij bga
//   if (item[3] == "To do") {
//     todo.appendChild(card);
//   } else if (item[3] == "In progress") {
//     inprogress.appendChild(card);
//   } else if (item[3] == "Stuck") {
//     stuck.appendChild(card);
//   } else if (item[3] == "Done") {
//     done.appendChild(card);
//   }
//   //Add card tsonhiig arilgah
//   document.getElementsByClassName("addCardDiv").item(0).remove();
// }

// /*
// duudah button deeree darahad id gaa tsug yawuulaad duudah yostoi yag delete shig adilhan
// function editTask(id){
//   id elementnii 3 dah element = status oorcilhod hereglene
//  cardList[id][3] = "shinestatus";
//  listMake();
// }*/
// function deleteTask(id) {
//   //id = cardList iin id dah element bolhoor splice(id tah element,heden element arilgah too)
//   cardList.splice(id, 1);
//   //arilagasanii daraa listees buh uldsen cartiig shineer hiine
//   listMake();
// }

// //undsen card shineer nemeh tsonh neegdej bga
// function addTask() {
//   const addCardDiv = document.createElement("div");
//   addCardDiv.setAttribute("class", "addCardDiv");
//   root.appendChild(addCardDiv);

//   const modal = document.createElement("div");
//   modal.setAttribute("class", "modal");
//   addCardDiv.appendChild(modal);

//   const modalHEader = document.createElement("h1");
//   modalHEader.innerText = "Add Task";
//   modal.appendChild(modalHEader);

//   const title = document.createElement("input");
//   title.setAttribute("class", "title");
//   title.setAttribute("id", "title");
//   title.placeholder = "Title";
//   modal.appendChild(title);

//   const description = document.createElement("input");
//   description.setAttribute("class", "description");
//   description.setAttribute("id", "description");
//   description.placeholder = "Description";
//   modal.appendChild(description);

//   const status = document.createElement("select");
//   status.setAttribute("id", "status");
//   const statusTodo = document.createElement("option");
//   statusTodo.innerText = "To do";
//   status.appendChild(statusTodo);
//   const statusInprogress = document.createElement("option");
//   statusInprogress.innerText = "In progress";
//   status.appendChild(statusInprogress);
//   const statusStuck = document.createElement("option");
//   statusStuck.innerText = "Stuck";
//   status.appendChild(statusStuck);
//   const statusDone = document.createElement("option");
//   statusDone.innerText = "Done";
//   status.appendChild(statusDone);
//   modal.appendChild(status);

//   const priority = document.createElement("select");
//   priority.setAttribute("id", "priority");
//   const priorityLow = document.createElement("option");
//   priorityLow.innerText = "Low";
//   priority.appendChild(priorityLow);

//   const priorityMedium = document.createElement("option");
//   priorityMedium.innerText = "Medium";
//   priority.appendChild(priorityMedium);

//   const priorityHigh = document.createElement("option");
//   priorityHigh.innerText = "High";
//   priority.appendChild(priorityHigh);
//   modal.appendChild(priority);

//   const addTaskBtn = document.createElement("button");
//   addTaskBtn.setAttribute("class", "addTaskBtn");
//   addTaskBtn.innerText = "Add Task";
//   // add task button deer darahad ene tsonhon dotor bga buh informatsiig createTask function ruu yawuulna
//   addTaskBtn.setAttribute(
//     "onclick",
//     "createTask([document.getElementById('description').value, document.getElementById('priority').value,document.getElementById('title').value,document.getElementById('status').value])"
//   );
//   modal.appendChild(addTaskBtn);
// }

// // buh cartiig shineer hiij bga
// function listMake() {
//   //undsen 4 board dotor bga buh cardiig arilgaj bga
//   //cards class tai buh elementiig array bolgood shirheg bologonii dotorh elementuudiig ustgaj bga
//   let cards = document.getElementsByClassName("cards");
//   Array.from(cards).forEach(function (card) {
//     card.innerHTML = "";
//   });

//   if (cardList.length > 0) {
//     //cardList dotor bga buh element bolgond creatTodoItem iig duudaj bga
//     cardList.forEach(createTodoItem);
//   }
// }
// //tsonhon dotroh buh informats todoItem dotor bga
// function createTask(todoItem) {
//   //todoItem deer id iig nemj bga
//   todoItem.push(cardList.length);
//   //cardList deer item iig nemj bga
//   cardList.push(todoItem);

//   //nemsnii daraa cardList ees buh cardiig shineer uusgej bga
//   listMake();
// }
