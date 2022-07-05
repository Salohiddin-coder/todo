let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elButton = document.querySelector('.js-button');
let badgeAll = document.querySelector('.all-todos');
let badgeCompleted = document.querySelector('.completed-todos');
let badgeUncompelted = document.querySelector('.uncompleted-todos');
let elList = document.querySelector('.js-list');

let todos = [];

let demonstrateToDo = (array, node) => {
  
  array.forEach(element => {
    let newItem = document.createElement("li");
    let newSpan = document.createElement("span");
    let newButton = document.createElement("button");
    let newCheckbox = document.createElement("input");
    
    newSpan.textContent = element.name;
    newButton.textContent = "Delete"
    newButton.setAttribute("class", "delete-btn");
    newButton.dataset.todoId = element.id;
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("class", "todo-check");
    newCheckbox.dataset.todoId = element.id;
    let count = 0;
    
    if (element.isComplete) {
      newSpan.style.textDecoration = "line-through"
      newCheckbox.checked = true;
    }
    
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);
    node.appendChild(newItem);
  })
};

elList.addEventListener("click", function (evt) {
  if (evt.target.matches(".delete-btn")) {
    let deletedId = evt.target.dataset.todoId;
    elList.innerHTML = "";
    let findedIndex = todos.findIndex((todo) => todo.id == deletedId);
    
    todos.splice(findedIndex, 1);
    demonstrateToDo(todos, elList);
    badgeAll.textContent = todos.length;
    badgeUncompelted.textContent = todos.length;
  } else if (evt.target.matches(".todo-check")) {
    let checkedId = evt.target.dataset.todoId;
    elList.innerHTML = "";
    let findedElement = todos.find((todo) => todo.id == checkedId)
    const filteredTodos = todos.filter(item => item.isComplete === true).length + 1;
    badgeCompleted.textContent = filteredTodos;
    badgeUncompelted.textContent = todos.length - filteredTodos;
    
    findedElement.isComplete = !findedElement.isComplete;
    demonstrateToDo(todos, elList);
  }
})

elForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  elList.innerHTML = "";
  let elInputVal = elInput.value;
  
  let obj = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 0,
    name: elInputVal,
    isComplete: false
  }
  todos.push(obj)
  demonstrateToDo(todos, elList);
  elInput.value = "";
  badgeAll.textContent = todos.length;
  badgeUncompelted.textContent = todos.length;
  
})
