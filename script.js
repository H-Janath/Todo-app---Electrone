const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function() {
    if (todoInput.value.trim() !== '') {
        const li = document.createElement("li");
        const text = document.createTextNode(todoInput.value);

        const doneBtn = document.createElement('button'); // Create a new button element
        doneBtn.textContent = "Done";
        doneBtn.classList.add("doneBtn");

        doneBtn.addEventListener('click', function() {
            li.classList.toggle("completed");
        });

        li.appendChild(text);
        li.appendChild(doneBtn);
        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        alert("Please enter a todo item!"); // Alert the user if input is empty
    }
});
