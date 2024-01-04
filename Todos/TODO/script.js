let todos = [
  {
    title: "learn javascript1",
    description: "Learn JAvascript basics",
    status: "todo",
    priority: "high",
  },
  {
    title: "learn javascript2",
    description: "Learn JAvascript basics",
    status: "inProgress",
    priority: "high",
  },
  {
    title: "learn javascript3",
    description: "Learn JAvascript basics",
    status: "stuck",
    priority: "high",
  },
  {
    title: "learn javascript4",
    description: "Learn JAvascript basics",
    status: "done",
    priority: "high",
  },
  {
    title: "learn javascript6",
    description: "Learn JAvascript basics",
    status: "todo",
    priority: "high",
  },
  {
    title: "learn javascript7",
    description: "Learn JAvascript basics",
    status: "inProgress",
    priority: "high",
  },
  {
    title: "learn javascript8",
    description: "Learn JAvascript basics",
    status: "stuck",
    priority: "high",
  },
  {
    title: "learn javascript9",
    description: "Learn JAvascript basics",
    status: "done",
    priority: "high",
  },
  {
    title: "learn javascript10",
    description: "Learn JAvascript basics",
    status: "todo",
    priority: "high",
  },
  {
    title: "learn javascript2",
    description: "Learn JAvascript basics",
    status: "inProgress",
    priority: "high",
  },
  {
    title: "learn javascript3",
    description: "Learn JAvascript basics",
    status: "stuck",
    priority: "high",
  },
  {
    title: "learn javascript4",
    description: "Learn JAvascript basics",
    status: "done",
    priority: "high",
  },
];

const container = document.getElementById("container");

function drawTodos(todosToRender) {
  container.innerHTML = "";
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todoList");

  todoDiv.setAttribute("id", "todoDiv");

  const inProgressDiv = document.createElement("div");
  inProgressDiv.setAttribute("class", "todoList");
  inProgressDiv.setAttribute("id", "inProgressDiv");

  const stuckDiv = document.createElement("div");
  stuckDiv.setAttribute("class", "todoList");
  stuckDiv.setAttribute("id", "stuckDiv");

  const doneDiv = document.createElement("div");
  doneDiv.setAttribute("class", "todoList");
  doneDiv.setAttribute("id", "doneDiv");

  const futureTodo = todosToRender.filter((todo) => {
    return todo.status == "todo";
  });
  const todoHeader = document.createElement("h2");
  todoHeader.innerText = "To Do";
  todoDiv.appendChild(todoHeader);
  const cards = document.createElement("div");

  todoDiv.appendChild(cards);
  const addTaskBtn = document.createElement("button");
  todoDiv.appendChild(addTaskBtn);

  futureTodo.map((task) => {});

  const inProgress = todosToRender.filter((todo) => {
    return todo.status == "inProgress";
  });
  const inProgressHeader = document.createElement("h2");
  inProgressHeader.innerText = "In progress";
  inProgressDiv.appendChild(inProgressHeader);

  inProgress.map((task) => {});

  const stuck = todosToRender.filter((todo) => {
    return todo.status == "stuck";
  });
  const stuckHeader = document.createElement("h2");
  stuckHeader.innerText = "Stuck";
  stuckDiv.appendChild(stuckHeader);
  stuck.map((task) => {});

  const done = todosToRender.filter((todo) => {
    return todo.status == "done";
  });
  const doneHeader = document.createElement("h2");
  doneHeader.innerText = "Done";
  doneDiv.appendChild(doneHeader);
  done.map((task) => {});

  container.appendChild(todoDiv);
  container.appendChild(inProgressDiv);
  container.appendChild(stuckDiv);
  container.appendChild(doneDiv);
}
drawTodos(todos);

// function editFunction() {
//   todos[1].title = "im learning";
//   drawTodos(todos);
// }
// editFunction();

// function addTodo() {
//   const newTitle = document.getElementById("titleInput").value;
//   const newDescription = document.getElementById("descriptionInput").value;
//   const newStatus = document.getElementById("statusSelect").value;
//   const newPriority = document.getElementById("priorityPriority").value;
//   todos.push({
//     title: newTitle,
//     description: newDescription,
//     status: newStatus,
//     priority: newPriority,
//   });
// }
