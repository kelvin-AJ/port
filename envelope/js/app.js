import Storage from "./workers/storage.js";
import Interface from "./workers/interface.js";
import Envelope from "./workers/envelope.js";
import EnvelopeWorker from "./workers/envelopeWorker.js";
import CurrencyStatus from "./workers/currencyStatus.js";


class App {
    currency = {
        USD : ["USD", "$"],
        NGN : ["NGN", "₦"],
        EUR : ["EUR", "€"],
        GBP : ["GBP", "₤"]
    }

    constructor(){
        this.storage = new Storage(this.currency.GBP);
        this.interface = new Interface();
        this.envelopeWorker = new EnvelopeWorker();
        this.currencyStatus = new CurrencyStatus();

        this.tempEnvelope = {};
        

        this._initialize();

        if(this.storage.initialized){
            this._renderGreetingAndBalance();
            this._renderMiscelleneous();
            this.handleMessage();
        }
        this._allowSidebarInteraction()
        this._renderAllEnvelopes();
        this._allowFormHandling();
        this._handleEnvelopeInteraction();
        this.interface.updateCurrency(this.storage.getCurrency()[1]);
    }

    _initialize() {
        if(!this.storage.initialized){
            this.interface.showSetupForm(true)

            this.interface.handleSetupForm(() => {
                const formData  = this.interface.getFormData(true);

                this.storage.setBalance(Number(formData.allocation));
                this.storage.setCurrency(this.currency[formData.currency]);
                this.interface.updateCurrency(this.currency[formData.currency][1]);
                this.storage.setFirstName(formData.firstName);
                
                this.interface.hideSetupForm();

                this.storage.initialize();
                this._renderGreetingAndBalance();
                this._renderMiscelleneous();
                this.handleMessage();
            }, true)
        }

        
        
    }

    _allowSidebarInteraction() {
        this.interface.fundWalletBtn.addEventListener("click", () => {
            this.interface.showSetupForm();

            this.interface.handleSetupForm(() => {
                const allocation = Number(this.interface.getFormData(true).allocation);

                if(allocation < this.storage.getPlannedFunds()) {
                    this.interface.showDialogueMessage("Funding your wallet with any amount less than your planned funds would delete all envelopes. Are you sure you want to proceed? " ,
                    () => {

                        
                        this.storage.setBalance(allocation);
                        this.storage.deleteAllEnvelopes();
                        this.interface.deleteAllEnvelopes();
                        this._renderGreetingAndBalance();
                        
                        this._renderMiscelleneous();

                    })
                }else {
                    this.interface.showDialogueMessage("Are you sure you want to proceed? " ,
                    () => {
                        this.storage.setBalance(allocation);
                        this.interface.deleteAllEnvelopes();
                        this._renderGreetingAndBalance();
                        this._renderMiscelleneous();

                        this.storage.getBasket().forEach(envlope => this.interface.renderEnvelope(this.storage.getCurrency()[1], envlope))
                    })
                }
                

            })
        })


        this.interface.preferencesBtn.addEventListener("click", () => {
            this.interface.showSetupForm(true, true, {firstName: this.storage.getFirstName(), currency: this.storage.getCurrency()});


            this.interface.handleSetupForm(() => {

                this.interface.showDialogueMessage("Changing currency would not make currency conversion. Are you sure you want to proceed?", () => {
                    const formData = this.interface.getFormData(true);
                   
                    this.storage.setCurrency(this.currency[formData.currency]);
                    this.storage.setFirstName(formData.firstName);

                    this.interface.updateCurrency(this.storage.getCurrency()[1]);
                    this._renderGreetingAndBalance();
                    this.interface.deleteAllEnvelopes();
                    this.interface.currency = this.storage.getCurrency();
                    this._renderMiscelleneous();

                    this.storage.getBasket().forEach(envlope => this.interface.renderEnvelope(this.storage.getCurrency()[1], envlope))
                })
            })


        })
    }

    _renderGreetingAndBalance(){

        const greetingMessage = `Good ${this.getTimeofDay()}, ${this.storage.getFirstName()}`;
        this.interface.renderAlocatedTotal(this.storage.getCurrency()[1], this.storage.getBalance())
        this.interface.renderGreeting(greetingMessage);
    }

    _renderMiscelleneous(){
        this.interface.renderEnvelope(this.storage.getCurrency()[1], null ,this.storage.getMiscelleousBalance());
    }
    
    _renderAllEnvelopes(){

        this.storage.getBasket().forEach(envlope => this.interface.renderEnvelope(this.storage.getCurrency()[1], envlope))
    }
    _constructEnvelope(formData, key=null){
        return new Envelope(formData.name, formData.allocation, formData.increment, formData.decrement, formData.color, formData.icon, key);
    }

    _allowFormHandling(){
        this.interface.addBtn.addEventListener("click", () => {
            this.interface.validateForm({
                miscFund : this.storage.getMiscelleousBalance(),
                envelopeNames: this.storage.getEnvelopeNames()
            })
        });

        this.interface.formMain.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = this.interface.getFormData();

            const envelope = this._constructEnvelope(formData);

            // ADD ENVELOPE STORAGE
            this.storage.addEnvelope(envelope);

            // Render new envelope
            this.interface.renderEnvelope(this.storage.getCurrency()[1],envelope);

            // Update Misc
            this.interface.updateMiscelleneous(this.storage.getCurrency()[1], this.storage.getMiscelleousBalance());

            // Hide Form
            this.interface.hideForm();
            this.interface.clearForm();
        })
    }


    _allowEnvelopeEditing() {

        const self = this

        function formEditHandler() {
            const formData = self.interface.getFormData();
            if(formData.name == "") return;
            const newEnvelope = self._constructEnvelope(formData, self.tempEnvelope.key);

    
            self.interface.reRenderEnvelope(newEnvelope, self.storage.getCurrency()[1]);
            self.storage.updateEnvelope(newEnvelope);
    
            // Update Miscelleneaus Balance
            self.storage.updateMiscelleneousBalance();
            self.interface.updateMiscelleneous(self.storage.getCurrency()[1], self.storage.getMiscelleousBalance());
    
            // Hide Form
            self.interface.hideForm();
            self.interface.clearForm();
        }


        
        // Save
        this.interface.formSaveBtn.addEventListener("click", formEditHandler);
        

        this.interface.executeOncloseForm(() => {
            this.interface.formSaveBtn.removeEventListener("click", formEditHandler);
        })
  
    }

    _handleEnvelopeInteraction() {

        this.interface.basketElement.addEventListener("click", (e) => {


            const eventOutput = this.interface.handleEnvelopeClick(e);
            if(!eventOutput) return;
            const [clickedFunction, envelopeKey] = eventOutput;

            this.tempEnvelope = this.storage.getEnvelope(envelopeKey);
            

            if(clickedFunction == "decrement") {
                const deductedEnvelope = this.envelopeWorker.makeDeduction(this.tempEnvelope)
                this.interface.reRenderEnvelope(deductedEnvelope, this.storage.getCurrency()[1]);
                this.storage.updateEnvelope(deductedEnvelope);
                this.storage.updateBalance();

                this.interface.renderAlocatedTotal(this.storage.getCurrency()[1], this.storage.getBalance());

                this.tempEnvelope = {}
            }

            if(clickedFunction == "increment") {
                const incrementEnvelope = this.envelopeWorker.madeIncrementation(this.tempEnvelope)
                this.interface.reRenderEnvelope(incrementEnvelope, this.storage.getCurrency()[1]);
                this.storage.updateEnvelope(incrementEnvelope);


                this.storage.updateMiscelleneousBalance();


                this.interface.updateMiscelleneous(this.storage.getCurrency()[1], this.storage.getMiscelleousBalance());


                this.tempEnvelope = {}
            }

            if(clickedFunction == "edit") {

                this.interface.showForm(null, true, this.tempEnvelope);

                // VALIDATE EDIT FORM
                this.interface.validateForm({
                    miscFund: this.storage.getMiscelleousBalance(),
                    edit: true,
                    allocated: this.tempEnvelope.allocatedFund,
                    envelopeName: this.tempEnvelope.name,
                    envelopeNames: this.storage.getEnvelopeNames()
                });

                this._allowEnvelopeEditing();
            }

            if(clickedFunction == "delete") {
                this.interface.showDialogueMessage(`Are you sure you want to delete ${this.tempEnvelope.name} envelope?`, () => {
                    this.storage.deleteEnvelope(this.tempEnvelope.key);
        
                    this.interface.deleteEnvelope(this.tempEnvelope.key);
        
                    this.interface.updateMiscelleneous(this.storage.getCurrency()[1], this.storage.getMiscelleousBalance());
                }, () => {

                })
            }

            return

        });
    }


    // HANDLING TIME
    getTimeofDay() {
        const curTime = new Date().getHours();
        let timeOfDay = "Morning"

        if(curTime > 0 && curTime < 12)timeOfDay = "Morning"
        if(curTime > 12)timeOfDay = "Afternoon"
        if(curTime > 16)timeOfDay = "Evening"

        return timeOfDay;
    }

    handleMessage() {
        
        this.currencyStatus.getCurrencyStatus(this.storage.getCurrency()[0]).then(message => {
            setTimeout(() => {
                this.interface.renderGreeting(message)
            }
            ,3000);

            setTimeout(() => {
                this._renderGreetingAndBalance();
            }, 15000)

        })
    }

    
}

new App()