import LocalStorage from "./ls.js";

export default class Storage{
    constructor(currency){
        this.LocalInit = new LocalStorage("init")
        this.localPreferences = new LocalStorage("preferences");
        this.localBasket = new LocalStorage("basket");
        this.localBalance = new LocalStorage("balance");
        this.plannedFunds = 0;
        this.miscelleneousBalance = 0;
        this.initialized = this.LocalInit.getSaved() || false;
        
        this.preferences = this.localPreferences.getSaved() || {
            firstName : "",
            darkMode : false,
            currency : currency
        };

        this.basket = this.localBasket.getSaved() || [];
        this.balanceTotal = this.localBalance.getSaved() || 0;


        this._updateLocalBasket();
        this._updateLocalBalance();
        this._updateLocalPreferences();
        
        this.updatePlannedFunds();
        this.updateMiscelleneousBalance();
    }

    initialize() {
        this.initialized = true;
        this.LocalInit.updateStorage("true");
    }


    setBalance(balance){
        this.balanceTotal = balance;
        this._updateLocalBalance();
        this.updateMiscelleneousBalance();
    }

    setFirstName(firstName){
        this.preferences.firstName = firstName;
        this._updateLocalPreferences();
    }

    updateBalance(){
        this.updatePlannedFunds();
        this.setBalance(this.miscelleneousBalance + this.plannedFunds);
        this.updateMiscelleneousBalance();
    }

    getCurrency(){
        return this.preferences.currency;
    }

    setCurrency(currency){
        this.preferences.currency= currency
    }
    // ENVELOPEs AND BASKET
    getMiscelleousBalance(){
        return this.miscelleneousBalance;
    }

    updateMiscelleneousBalance(){
        this.updatePlannedFunds()
        this.miscelleneousBalance = this.balanceTotal - this.plannedFunds;
    }

    updatePlannedFunds(){
        this.plannedFunds = 0;
        this.getBasket().forEach(envelope => {
            this.plannedFunds += Number(envelope.allocatedFund);
        })
    }

    getBasket(){
        return this.basket;
    }

    addEnvelope(envelope){
        this.basket.push(envelope);
        this._updateLocalBasket();
        this.updatePlannedFunds();
        this.updateMiscelleneousBalance()
    }

    deleteEnvelope(key){
        this.basket.splice(this._getEnvelopeIndex(key), 1);
        this.updateMiscelleneousBalance();

        this._updateLocalBasket();
        return this.basket;
    }
    deleteAllEnvelopes() {
        this.basket = [];
        this._updateLocalBasket();


        this.updatePlannedFunds();
        this.updateMiscelleneousBalance();
    }

    updateEnvelope(envelope){
        const envelopeIndex = this._getEnvelopeIndex(envelope.key);
        this.basket.splice(envelopeIndex, 1 , envelope);
        this._updateLocalBasket();

        return envelope;
    }
        
    _getEnvelopeIndex(key){
        return this.basket.findIndex(env => env.key == key);
    }

    getEnvelope(key){
        return this.basket[this._getEnvelopeIndex(key)];
    }

    getEnvelopeNames(){
        return this.basket.map(envelope => envelope.name);
    }

    getBalance(){
        return this.balanceTotal;
    }

    getPlannedFunds() {
        return this.plannedFunds
    }


    // USER PREFERENCES
    setDarkMode(boolean){
        this.preferences.darkMode = boolean;
    }

    getDarkMode(){
        return this.preferences.darkMode;
    }

    getFirstName(){
        return this.preferences.firstName;
    }
    getFormat(){
        return new Intl.NumberFormat(navigator.language);
    }

    // Update Local
    _updateLocalPreferences(){
        this.localPreferences.updateStorage(this.preferences);
    }

    _updateLocalBasket(){
        this.localBasket.updateStorage(this.basket);
    }

    _updateLocalBalance(){
        this.localBalance.updateStorage(this.balanceTotal);
    }
}