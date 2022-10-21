export default class LocalStorage{
    constructor(){
        this.storagePocket = "todosls";
    }

    updateTodos(object) {
        const savableObject = JSON.stringify(object)
        localStorage.setItem(this.storagePocket, savableObject);
    }

    getSavedTodos(){
        const savableObject = localStorage.getItem(this.storagePocket);
        return JSON.parse(savableObject);
    }
}