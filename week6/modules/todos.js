import LocalStorage from "./ls.js";


class Todo{
    constructor(id, title){
        this.id = id;
        this.title = title;
        this.completed = false;
    }
}


export default class TodoList{
    constructor(){
        this.list = [];
        this.local = new LocalStorage();
        const savedTodos = this.local.getSavedTodos();
        if(savedTodos)this.list.push(...savedTodos);
        
    }

    addItem(title){
        const id = Date.now();
        const item = new Todo(id, title);
        this.list.push(item);
        this.local.updateTodos(this.list);
    }

    deleteItem(id){
        const index = this.list.findIndex(item => item.id == id);
        this.list.splice(index, 1);
        this.local.updateTodos(this.list);
    }

    updateLocal(){
        this.local.updateTodos(this.list);
    }

    getToDoList() {
        return this.list;
    }
    getTodoItemByTitle(title){
        return this.list.find(item => item.title === title)
    }
    getTodoItemById(id){
        return this.list.find(item => item.id == id);
    }
}