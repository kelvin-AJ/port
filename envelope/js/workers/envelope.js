export default class Envelope{
    constructor(name, allocatedFund, increMentSteps, decrementSteps, color, icon, key = null){
        this.name = name;
        this.allocatedFund = allocatedFund;
        this.incrementSteps = increMentSteps;
        this.decrementSteps = decrementSteps;
        this.icon = icon
        this.color = color;
        this.key = key || Math.floor(new Date().getTime()/99999 * Math.random())
    }
}