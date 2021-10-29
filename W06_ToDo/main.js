//Global variables
let todoArray = [];
const todoForm = document.querySelector('#add_task');
const todoList = document.querySelector('#listOfToDos');
const todoToBeAdded = document.querySelector('#new_task');

//Event listioners
  todoForm.addEventListener('submit', function(event){
      console.log('litoning for button click');
      event.preventDefault();
      addToDoItem(todoToBeAdded.value);
    
  });

  todoList.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        checkTheBox(event.target.parentElement.getAttribute('data-key'));
 }
    if (event.target.classList.contains('delete')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});

//Functions 
function addToDoItem(task){
    //make sure task is not empty and build todo object
    console.log(task + " added to list");
    if(task !='' && task != null){
        const todoItem = {
            id: Date.now(),
            content: task,
            completed: false
        }

        //save new todo item to the todo array.
        todoArray.push(todoItem);
        addToLocalStorage(todoArray);

         //clear the textbox
         todoToBeAdded.value = '';
         console.log(todoArray);
    }
}
//writes the list to the html
function renderItems(todoArray){
    //first clear all items from list
    todoList.innerHTML = '';

    //for every item in list put it in a li element
    todoArray.forEach(item => {
        const checked = item.completed ? 'checked': null;
 
        //put all completed list items into the html list
        const li = document.createElement('li');
        li.setAttribute('id', 'item');
        li.setAttribute('data-key', item.id);
             if(item.completed == true){
                 li.classList.add('checked');
                 li.style.textDecoration = "line-through";
             }

       // console.log(classList);

        li.innerHTML=`<input type="checkbox" class="checkbox" ${checked}>
        ${item.content} <button class="delete">X</button>`;

        //now add it all to the list
        todoList.append(li);
    });
    
}

function addToLocalStorage(todoArray){
    //convert and story the array of objects on local storage
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    renderItems(todoArray);
    console.log("I was stored locally");

}

function getFromLocalStorage(){
    console.log("I Got From Local Storage with onLoad");
    //find the todo list and store it
    const storedData = localStorage.getItem('todoArray');
    if(storedData != null && storedData !=''){
        //convert back to usible code
        todoArray = JSON.parse(storedData);
        //display to screen even on re-load
        renderItems(todoArray);
    }
}

function checkTheBox(id){
    todoArray.forEach(item =>{
        if(item.id == id){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todoArray);
}

function deleteTodo(id){
    todoArray = todoArray.filter(function(item){
        return item.id != id;
    });
    addToLocalStorage(todoArray);
    
}   

//function to sort the list
function showAll(){
    renderItems(todoArray);
}

function showActive(){
    let activeTodo = [];
    for(let i = 0; i<todoArray.length; i++){
        if(todoArray[i].completed == false){
            activeTodo.push(todoArray[i]);
        }
    }
    renderItems(activeTodo);
}
function showCompleted(){
    let completedTodo = [];
    for(let i = 0; i<todoArray.length; i++){
        if(todoArray[i].completed == true){
            completedTodo.push(todoArray[i]);
        }
    }
    renderItems(completedTodo);
}
 

