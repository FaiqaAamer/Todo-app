const input = document.querySelector('.todo-input input');
const addBtn = document.querySelector('.todo-input button');
const list = document.querySelector('ul');
//you can add task by pressing enter key also
input.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
//add task by pressing add button
addBtn.addEventListener('click', addTask);

// Function to update counter
function updateCounter() {
  const total = list.querySelectorAll('li').length;
  const completed = list.querySelectorAll('input[type="checkbox"]:checked').length;
  const remaining = total - completed;

  document.getElementById('total').textContent = total;
  document.getElementById('completed').textContent = completed;
  document.getElementById('remaining').textContent = remaining;
}

// Function to add a task
function addTask() {
  const taskText = input.value.trim(); 
  if (taskText === "") return; 
//make three elements li,checkbox and span
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  const span = document.createElement('span');
  span.textContent = taskText;

  //Complete toggle
  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed', checkbox.checked);
    updateCounter();
  });

  //for creating a delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  delBtn.className = "delete";

  // Delete functionality
  delBtn.addEventListener('click', () => {
    li.remove();
    updateCounter();
  });

  //add all these in list and tell hoe they should be displayed like first checkbox then span and delete button
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  //add everything in list what you make
  list.appendChild(li);

  input.value = "";
  updateCounter();
}