import { generateId, saveToStorage, getFromStorage } from './utils.js';
import { fetchQuote } from './quotes.js';

class Task {
  constructor(text) {
    this.id = generateId();
    this.text = text;
    this.createdAt = new Date();
  }
}

let tasks = getFromStorage("tasks");

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
const quoteEl = document.getElementById("quote");

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach(({ id, text }) => {
    const li = document.createElement("li");
    li.innerHTML = `${text}
      <button onclick="deleteTask('${id}')">Delete</button>`;
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    const task = new Task(text);
    tasks.push(task);
    saveToStorage("tasks", tasks);
    renderTasks();
    input.value = "";
  }
});

window.deleteTask = function(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveToStorage("tasks", tasks);
  renderTasks();
};

async function showQuote() {
  const quote = await fetchQuote();
  quoteEl.textContent = quote;
}

renderTasks();
showQuote();
