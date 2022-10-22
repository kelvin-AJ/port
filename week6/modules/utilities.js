import TodoList from "./todos.js";

export default class todoApp{

    constructor(){
        // SELECT ALL DOM ELEMENTS
        this.todoListObj = new TodoList();
        this.todosMain = document.querySelector(".todos-main");
        this.tasksNum = document.querySelector(".tasks-num");
        this.todoInput = document.querySelector("#todo-input")
        this.addBtn = document.querySelector("#add-btn");
        this.filterListBtns = document.querySelector(".filter-list");


        // RENDER LIST AND ATTACH EVENT LISTENERS
        this.renderList(this.todoListObj.getToDoList())
        this.addEventListeners()
    }

    addEventListeners(){
        // ADD EVENT LISTENERS TO DOM ELEMENTS
        this.filterListBtns.addEventListener("click", this.filterListAndRender);
        this.addBtn.addEventListener("click", this.addTodo.bind(this));
        this.todosMain.addEventListener("click", this.manageList.bind(this));
        this.filterListBtns.addEventListener("click", this.filteredListRender.bind(this));

        // non-critical events

        document.addEventListener("keypress", this.keyPressaddTodo.bind(this))
        this.todoInput.addEventListener("focus", () => {
            this.addBtn.classList.remove("hide");
        });
    }

    appendDOMListItem(listItem){
        this.todosMain.insertAdjacentHTML("afterbegin", 
                `
                <li class="${listItem.completed? "completed" : ""}" id="num-${listItem.id}">
                    <button class="checkbox" type="checkbox">&#10003</button>
                    <span class="title">
                            ${listItem.title}
                    </span>
                    <button class="close-btn">
                        &#10006;
                    </button>
                </li>
                `)
    }

    keyPressaddTodo(event){
        if(event.key == "Enter") this.addTodo();
    }

    addTodo(){
        const title = this.todoInput.value;
        
        if(title != ""){
            this.todoListObj.addItem(title);
            if(this.todoListObj.getToDoList().length == 1){
                this.renderList(this.todoListObj.getToDoList())
            }else{
                this.appendDOMListItem(this.todoListObj.getTodoItemByTitle(title));
            }
            this.todoInput.value = "";
        }

        this.renderTaskNumber();
        this.addBtn.classList.add("hide");
    }

    // List Rendering
    renderList(list){
        if(!list.length){
            this.todosMain.innerHTML =`<span class="empty">Nothing to see here</span>`
        }else{
            this.todosMain.innerHTML = "";
            list.forEach(listItem => this.appendDOMListItem(listItem))
        }

        this.renderTaskNumber();
    }

    filteredListRender(event){
        const todoList = this.todoListObj.getToDoList(); 

        const clicked = event.target;
        if(clicked.textContent === "All"){
            this.renderList(todoList);
        }else{
            const filteredList = todoList.filter(todo => clicked.textContent === "Completed" ? todo.completed : !todo.completed);
            this.renderList(filteredList)
        }

        this.filterListBtns.querySelectorAll("button").forEach(button => button.classList.remove("active"));

        clicked.classList.add("active");
    }

    rerenderListItem(listItem, completed=true){
      const itemDOM = document.querySelector(`#num-${listItem.id}`);
      itemDOM.className = completed ? "completed" : "not-completed"

      this.renderTaskNumber();
    }

    // LIST ITEM MANAGEMENT
    manageList(event) {
        const id = Number(event.target.closest("li")?.id.slice(4));
        const item = this.todoListObj.getTodoItemById(id);
        const clickedFunction = event.target.closest("button")?.className;
        if(clickedFunction === "close-btn"){
            this.todoListObj.deleteItem(id);
            this.renderList(this.todoListObj.getToDoList())
        }
        if(clickedFunction === "checkbox"){
            const isCompleted = this.todoListObj.getTodoItemById(id).completed;
            item.completed = !isCompleted;
            this.todoListObj.updateLocal();

            this.rerenderListItem(item, item.completed);
        }

    }

    renderTaskNumber() {
        const num = this.todoListObj.getToDoList().filter(item => !item.completed).length;

        this.tasksNum.textContent = `${num} ${num == 1? "task" : "tasks"} left`
    }
}
