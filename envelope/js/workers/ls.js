export default class LocalStorage{
    constructor(name){
        this.storagePocket = name;
    }

    updateStorage(object) {
        const savableObject = JSON.stringify(object)
        localStorage.setItem(this.storagePocket, savableObject);
    }

    getSaved(){
        const savableObject = localStorage.getItem(this.storagePocket);
        return JSON.parse(savableObject);
    }
}