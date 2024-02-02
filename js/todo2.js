const weeklyForm = document.getElementById("weekly-form");
const weeklyInput = weeklyForm.querySelector("input");
const weeklyDoList = document.getElementById("weekly-list");

const WEEKLYTODOS_KEY = "weeklytodos";
let weeklyToDos = [];
function saveWeeklyToDos() {
  localStorage.setItem(WEEKLYTODOS_KEY, JSON.stringify(weeklyToDos));
}

function deleteWeeklyToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  weeklyToDos = weeklyToDos.filter(
    (weeklyToDos) => weeklyToDos.id !== parseInt(li.id)
  );
  saveWeeklyToDos();
}

function paintWeeklyToDo(weeklyNewTodo) {
  const li = document.createElement("li");
  li.id = weeklyNewTodo.id;
  const span = document.createElement("span");
  span.innerText = weeklyNewTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.className = "deleteButton";
  button.addEventListener("click", deleteWeeklyToDo);
  li.appendChild(span);
  li.appendChild(button);
  weeklyDoList.appendChild(li);
}

function handleWeeklySubmit(event) {
  console.log("Event:", event);

  event.preventDefault();
  const weeklyNewTodo = weeklyInput.value;
  weeklyInput.value = "";
  const weeklyNewTodoObj = {
    text: weeklyNewTodo,
    id: Date.now(),
  };
  weeklyToDos.push(weeklyNewTodoObj);
  paintWeeklyToDo(weeklyNewTodoObj);
  saveWeeklyToDos();
}

weeklyForm.addEventListener("submit", handleWeeklySubmit);

const savedWeeklyToDos = localStorage.getItem(WEEKLYTODOS_KEY);

if (savedWeeklyToDos !== null) {
  const parsedweeklyToDos = JSON.parse(savedWeeklyToDos);
  weeklyToDos = parsedweeklyToDos;
  parsedweeklyToDos.forEach(paintWeeklyToDo);
}
