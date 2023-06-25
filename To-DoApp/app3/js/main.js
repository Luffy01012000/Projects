const form = document.getElementById("todoform");
const todoInput = document.getElementById("newtodo");
const todoList = document.getElementById("todos-list");
const notification = document.querySelector(".notification");

//vars

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editTodoId = -1;

renderTodo();
form.addEventListener("submit", (e) => {
  e.preventDefault(); //stops the page from refreshing
  // alert("submitted");
  saveTodo();
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
});

//savetodo function
function saveTodo() {
  const todovalue = todoInput.value;

  //check if the todo is empty
  const isEmpty = todovalue === "";

  //check if duplicate todos
  const isDuplicate = todos.some(
    (todo) => todo.value.toUpperCase() === todovalue.toUpperCase()
  );

  if (isEmpty) {
    showNotification("please input some value");
  } else if (isDuplicate) {
    showNotification("duplicate value entered!");
  } else {
    if (editTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,
        value: index === editTodoId ? todovalue : todo.value,
      }));
      editTodoId = -1;
    } else {
      todos.push({
        value: todovalue,
        checked: false,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }
    todoInput.value = "";
    // console.log(todos);
  }
}

//rendertodo function
function renderTodo() {
    if(todos.length===0){
        todoList.innerHTML= '<center>Nothing to do...</center>';
        return;
    }
  todoList.innerHTML = "";
  //   console.log((todoList.innerHTML = ""));
  // console.log(todoList.innerHTML);
  todos.forEach((data, index) => {
    // console.log(data);
    todoList.innerHTML += `
         <div class="todo" id="${index}">
         <i 
         class="bi ${
           data.checked ? "bi-check-circle-fill" : "bi-circle"
         }" style="color: ${data.color}"
         data-action="check"
         ></i>
         <p class="${
            data.checked ? "checked" : ""
          }" data-action="check">${data.value}</p>
         <i class="bi bi-pencil-square" data-action="edit"></i>
         <i class="bi bi-trash" data-action="delete"></i>
 
     </div>
        `;
  });
}

//click eventlistener for all the todos

todoList.addEventListener("click", (e) => {
  const target = e.target;
  const parentElement = target.parentNode;

  if (parentElement.className !== "todo") return;
  console.log(parentElement);

  //   todo id
  const todo = parentElement;
  const todoId = Number(todo.id);

  //action target
  const action = target.dataset.action;
  // console.log(todoId,action);

  action === "check" && checkTodo(todoId);
  action === "edit" && editTodo(todoId);
  action === "delete" && deleteTodo(todoId);
});

function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));

  /*
       //optimize version of code
       return{
        ...todoId,
        checked: index===todoId ? !todo.checked:todo.checked
     }
*/
  /*   
    // let newArr =todos.map((todo,index)=>{
    if(index=== todoId){
            return{
                value : todo.value,
                color: todo.color,
                checked: !todo.checked
            }
        }else{
            return{
                value: todo.value,
                color: todo.color,
                checked: todo.checked
            }
        }
        */
  // todos = newArr;

  // });
}

function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  editTodoId = todoId;
}

function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  editTodoId = -1;
  //re-rendertodo
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showNotification(msg) {
  notification.innerHTML = msg;
  notification.classList.add("notif-enter");
  notification.style.display = "flex";
  console.log(notification.classList);
  setTimeout(() => {
    notification.classList.remove("notif-enter");
    // notification.style.display="none";
  }, 2000);
}
