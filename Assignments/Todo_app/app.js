// Define an array to store todo items
let todos = [];

// Function to add a new todo item
function addTodo() {
    // Get the input field value
    const newTodoText = document.getElementById('newTodo').value;

    // Check if the input is not empty
    if (newTodoText.trim() !== '') {
        // Create a new todo object
        const newTodo = {
            id: Date.now(),
            text: newTodoText,
        };

        // Add the new todo to the array
        todos.push(newTodo);

        // Clear the input field
        document.getElementById('newTodo').value = '';

        // Update the todo list
        updateTodoList();
    }
}

// Function to remove a todo item
function removeTodo(id) {
    // Filter out the todo with the specified id
    todos = todos.filter(todo => todo.id !== id);

    // Update the todo list
    updateTodoList();
}

// Function to update the todo list in the HTML
function updateTodoList() {
    // Get the todo list element
    const todoList = document.getElementById('todoList');

    // Clear the existing list items
    todoList.innerHTML = '';

    // Loop through the todos and create list items
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${todo.text}
            <button onclick="removeTodo(${todo.id})">Remove</button>
        `;
        todoList.appendChild(listItem);
    });
}
