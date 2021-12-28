//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Attach a Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);



//Functions

function addTodo(event) {
    //prevent from submiting
    event.preventDefault();
    //create TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check-mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check trash-mark button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append TO LIST
    todoList.appendChild(todoDiv);
    //Clear todo INPUT VALUE
    todoInput.value = "";

}

function deleteCheck(event) {
    
    const item = event.target;
    //DELETE todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add = ("fall");
        todo.addEventListener("transitioned", function() {
            item.remove();   
        });
        
    }

    //CHECK BUTTON
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        //console.log(todo);

    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
       switch(event.target.value) {
           case "all":
               todo.style.display = "flex";
               break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

       }
    });

}