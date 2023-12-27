// add
function addTodo() {
  const inputElement = document.getElementById('todoInput');
  const inputValue = inputElement.value;

  if (inputValue.trim() !== '') {
    const todoList = document.getElementById('todoList');

    const li = document.createElement('li');
    li.innerHTML = `
          <span>${inputValue}</span>
          <button onclick="removeTodo(this)">Remove</button>
      `;

    todoList.appendChild(li);

    // Clear input
    inputElement.value = '';
  }
}

//remove
function removeTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();
}


