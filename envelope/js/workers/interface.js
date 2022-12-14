export default class Interface{
    _svgs = {
        envelope : `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M7.875 31.125q-.958 0-1.625-.687-.667-.688-.667-1.605V11.167q0-.917.667-1.605.667-.687 1.625-.687h24.25q.958 0 1.625.687.667.688.667 1.605v17.666q0 .917-.667 1.605-.667.687-1.625.687ZM33.458 10.5l-12.75 8.583q-.166.084-.375.146-.208.063-.333.063-.125 0-.312-.063-.188-.062-.313-.146L6.542 10.5v18.292q0 .583.375.958t.958.375h24.25q.583 0 .958-.375t.375-.958ZM20 18.292l12.75-8.417H7.25ZM6.542 10.5v.333V10.021v.062-.208.167-.063.854-.291 19.583-1.333Z"/>
        </svg>`,
        commute : `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M8 29.417v3q0 .125-.104.25t-.271.125q-.208 0-.313-.125-.104-.125-.104-.292V20.417l3.25-9.375q.084-.209.313-.354.229-.146.479-.146h17.667q.208 0 .375.125.166.125.25.375l3.25 9.375v12q0 .125-.104.25-.105.125-.313.125-.167 0-.271-.125-.104-.125-.104-.292v-2.958Zm.583-10h22.834l-2.792-7.875h-17.25Zm-.375 1v8.041Zm4 5.625q.709 0 1.167-.48.458-.479.458-1.145 0-.709-.479-1.146-.479-.438-1.146-.438-.666 0-1.125.438-.458.437-.458 1.146 0 .708.458 1.166.459.459 1.125.459Zm15.584 0q.708 0 1.146-.48.437-.479.437-1.145 0-.709-.458-1.146-.459-.438-1.125-.438-.667 0-1.146.438-.479.437-.479 1.146 0 .708.5 1.166.5.459 1.125.459ZM8.208 28.458h23.584v-8.041H8.208Z"/>
        </svg>`,
        bills : `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M22.083 20.542q-1.166 0-1.979-.813-.812-.812-.812-1.979t.791-1.958q.792-.792 2-.792 1.167 0 1.959.792.791.791.791 1.958 0 1.208-.771 2-.77.792-1.979.792Zm-10.208 5.583q-.958 0-1.646-.687-.687-.688-.687-1.605V11.708q0-.958.687-1.646.688-.687 1.646-.687h20.417q.916 0 1.604.687.687.688.687 1.646v12.125q0 .917-.687 1.605-.688.687-1.604.687Zm1.292-.958H31q0-1.084.792-1.875.791-.792 1.833-.792V13q-1.083 0-1.854-.792Q31 11.417 31 10.375H13.167q0 1.042-.792 1.833-.792.792-1.833.792v9.5q1.041 0 1.833.792.792.791.792 1.875Zm-5.459 5.125q-.916 0-1.604-.688-.687-.687-.687-1.646V14.75q0-.167.145-.312.146-.146.355-.146.166 0 .312.146.146.145.146.312v13.208q0 .5.417.917.416.417.916.417h21.5q.209 0 .354.146.146.145.146.354 0 .208-.146.354-.145.146-.354.146Zm4.167-5.125h-1.333V10.375h1.333q-.542 0-.937.396-.396.396-.396.937v12.125q0 .542.396.938.395.396.937.396Z"/></svg>`,
        food: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M28.375 35.542q-.208 0-.354-.146t-.146-.354V22.208h-1.417q-.958 0-1.646-.687-.687-.688-.687-1.604v-8.459q0-2.5 1.208-4.479Q26.542 5 28.875 4.542v30.5q0 .208-.146.354t-.354.146Zm-15.042 0q-.208 0-.354-.146t-.146-.354v-14.5Q10.917 20.417 9.604 19q-1.312-1.417-1.312-3.5V4.917q0-.167.146-.313.145-.146.354-.146.208 0 .333.146.125.146.125.313V15.5h3.583V4.917q0-.167.146-.313t.354-.146q.167 0 .313.146t.146.313V15.5h3.541V4.917q0-.167.146-.313t.354-.146q.209 0 .334.146.125.146.125.313V15.5q0 2.083-1.313 3.5-1.312 1.417-3.187 1.542v14.5q0 .208-.146.354t-.313.146Z"/>
        </svg>`,
        shopping: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="M12.417 34.667q-.917 0-1.521-.625-.604-.625-.604-1.542t.604-1.542q.604-.625 1.521-.625.916 0 1.541.625.625.625.625 1.542t-.625 1.542q-.625.625-1.541.625Zm15.25 0q-.875 0-1.5-.625t-.625-1.542q0-.917.604-1.542t1.521-.625q.916 0 1.562.625t.646 1.542q0 .917-.625 1.542t-1.583.625ZM9.583 8.75l4.709 9.917H26l4.792-8.75q.25-.459.041-.813-.208-.354-.708-.354Zm2.75 17.542q-1.291 0-1.875-1-.583-1-.041-2.084l2.666-4.75L6.875 5.417H4.458q-.208 0-.333-.125Q4 5.167 4 4.958q0-.208.125-.354t.375-.146h2.292q.375 0 .646.188.27.187.395.479l1.25 2.667h20.75q1.209 0 1.771.854.563.854-.021 1.896l-4.333 7.916q-.333.542-.854.854-.521.313-1.104.313H13.5l-2.208 4.042q-.292.5 0 1.083.291.583.916.583h17.25q.167 0 .292.146.125.146.125.313 0 .208-.146.354t-.312.146Zm1.959-7.625H26Z"/>
        </svg>`,
        edit: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M8.875 31.792h1.5l17.958-17.959-1.5-1.541-17.958 18Zm21.542-18.625L27.5 10.25l1.833-1.792q.292-.291.688-.291.396 0 .729.291l1.5 1.5q.25.292.25.688 0 .396-.292.687ZM9.083 32.75q-.541 0-.854-.312-.312-.313-.312-.855v-1.25q0-.208.083-.416.083-.209.25-.417l18.625-18.542 2.833 2.834-18.583 18.625q-.167.125-.375.229-.208.104-.417.104Zm18.5-19.708-.75-.75 1.5 1.541Z"/></svg>`,
        delete: `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M12.833 32.833q-.958 0-1.645-.687-.688-.688-.688-1.646V9.75H8.833v-1h6.042V7.667h10.25V8.75h6.042v1H29.5V30.5q0 1-.667 1.667-.666.666-1.666.666ZM28.5 9.75h-17V30.5q0 .583.396.958t.937.375h14.334q.5 0 .916-.416.417-.417.417-.917ZM16.792 28.458h1V13.125h-1Zm5.416 0h1V13.125h-1ZM11.5 9.75v22.083V30.5Z"/></svg>`

    }

    constructor(){
        this.interfaceCurrency = "";

        // Booleans
        this.formIsOpen = false;
        this.formEditing = false;

        // SETUP FORM
        this.setupForm = document.querySelector("#setup-form");
        this.setupDiv = document.querySelector(".allocation-form")
        this.username = document.querySelector("#firstname");
        this.currencyInput = document.querySelector("#currency");
        this.mainAllocation = document.querySelector("#main-allocation");
        this.cancelBtn = document.querySelector("#setup-cancel-btn")

        // OVERLAY AND DIALOGUE
        this.overlay = document.querySelector(".overlay");
        this.dialogBox = document.querySelector(".dialogue-box");
        this.dialogMessage = document.querySelector(".dialogue-message");
        this.dialogYes = document.querySelector("#dialogue-btn-yes");
        this.dialogNo = document.querySelector("#dialogue-btn-no");

        // SIDEBAR AND NAVIGATION
        this.fundWalletBtn = document.querySelector("#addFund-btn");
        this.preferencesBtn = document.querySelector("#preference-btn")

        this.sideBarElement = document.querySelector(".header__side-bar");
        this.infoGreetingElement = document.querySelector(".info-bar__greeting");
        this.navBtnElement = document.querySelector(".info-bar__nav-btn");
        this.infoAlloctedElement = document.querySelector(".info-bar__allocated");

        // BASKET, ENVELOPES AND ENVELOPE CREATION
        this.currencyIcons = [...document.querySelectorAll(".currency-icon")];

        this.basketElement = document.querySelector(".basket");
        this.formAreaElement = document.querySelector(".form-area");
        this.formMain = document.querySelector(".evelope-creation-form");
        this.addBtn = document.querySelector(".envelope-add-btn");
        this.inputElements = [...document.querySelectorAll("input[type='number']")];
        this.allocationEl = this.formMain.querySelector(`input[name="allocation"]`);
        this.envelopeNameEl = this.formMain.querySelector(`input[name="name"]`);
        this.decrementEl = this.formMain.querySelector(`input[name="decrement"]`);
        this.incrementEl = this.formMain.querySelector(`input[name="increment"]`);
        this.formSaveBtn = this.formMain.querySelector(".save-btn");
        this.formAddBtn = this.formMain.querySelector(".add-btn");
        this.format = new Intl.NumberFormat(navigator.language);


       
        this.addDefaultListeners();
    }

    showSetupForm(newSetup=false,preferences=false, setupInfo) {
        this.overlay.classList.remove("hidden");
        this.setupDiv.classList.remove("hidden");

        if(newSetup) {
            this.username.classList?.remove("hidden");
            this.currencyInput.classList?.remove("hidden");

            
            this.setupForm.elements.firstname.setAttribute("required", "true");
            this.setupForm.elements.currency.setAttribute("required", "true");

        }else {
            this.username.classList.add("hidden");
            this.currencyInput.classList.add("hidden");
            this.mainAllocation.classList.remove("hidden");
            

            this.setupForm.elements.firstname.removeAttribute("required");
            this.setupForm.elements.currency.removeAttribute("required");

            this._toggleSideBar();
        }

        if(preferences){
            this.setupForm.elements.firstname.value = setupInfo.firstName;
            this.setupForm.elements.currency.value = setupInfo.currency[0];

            this.currencyInput.classList?.remove("hidden");
            this.mainAllocation.classList.add("hidden");
            this.setupForm.elements.allocation.removeAttribute("required");

            this._toggleSideBar();
        }

       
    }

    allowClickableOverlay(callbackOne) {
        const self = this;

        function callback(e) {
            callbackOne();
            self.hideSetupForm();
            self.cancelBtn.removeEventListener("click", callback)
        }

        this.cancelBtn.addEventListener("click", callback)
    }

    hideSetupForm() {
        this.overlay.classList.add("hidden");
        this.setupDiv.classList.add("hidden");

        this.setupForm.elements.firstname.value = "";
        this.setupForm.elements.currency.value = "";
    }

    handleSetupForm(callback, newSetup=false) {
        if(!newSetup) {
            this.allowClickableOverlay(() => {
                this.setupForm.removeEventListener("submit", completeCallback)
            })
        }
        

        function completeCallback(e) {
            e.preventDefault()
            callback()
        }

        this.setupForm.addEventListener("submit", completeCallback)
    }

    getFormData(setup=false){
        let formData = {
            icon : this.formMain.elements.icon.value,
            name : this.formMain.elements.name.value,
            allocation : this.formMain.elements.allocation.value,
            increment : this.formMain.elements.increment.value,
            decrement : this.formMain.elements.decrement.value,
            color : this.formMain.elements.color.value
        }

        if(setup) {
            formData = {
                firstName : this.setupForm.elements.firstname.value,
                currency : this.setupForm.elements.currency.value,
                allocation : this.setupForm.elements.allocation.value
            }
        }

        return formData;
    }

    updateCurrency(currency) {
        this.interfaceCurrency = currency;

        this.currencyIcons.forEach(icon => {
            icon.textContent = currency;
        })
    }

    validateForm(parameters={miscFund:500}){
        this.allocationEl.setAttribute("max", `${parameters.edit? Number(parameters.miscFund)+ Number(parameters.allocated) :parameters.miscFund}`);


        this.formMain.addEventListener("keyup", () => {
            // ENVELOPE NAME VALIDATION
            if(this.envelopeNameEl.value.trim() != parameters.envelopeName){
                if(parameters.envelopeNames.find(envName => envName == this.envelopeNameEl.value.trim())){
                    this.envelopeNameEl.setAttribute("pattern", "[0-9]")
                    this.createFormError("name","Envelope Already exists")
                }else{
                    this.envelopeNameEl.removeAttribute("pattern")
                    this.removeFormError("name");
                }
                
            }else if(this.envelopeNameEl.validity.tooLong){
                this.createFormError("name","Name is too long")
            }
            else{
                this.envelopeNameEl.removeAttribute("pattern")
                this.removeFormError("name");
            }
            // ALLOCATION VALIDATION
            if(this.allocationEl.validity.rangeOverflow){
                this.createFormError("allocation","Insufficient Funds")
            }else if(this.allocationEl.validity.rangeUnderflow){
                this.createFormError("allocation","Allocation too little")
            }
            else{
                this.removeFormError("allocation")
            }

            if(this.decrementEl.value < 1 && (!this.decrementEl.validity.valueMissing)){
                this.createFormError("decrement","Rate can't be less than 1");
                this.decrementEl.value = 1
            }else{
                this.removeFormError("decrement");
            }

            if(this.incrementEl.value < 0 && (!this.incrementEl.validity.valueMissing)){
                this.createFormError("increment","Rate can't be less than 0");
                this.incrementEl.value = 0
            }else{
                this.removeFormError("increment");
            }
        })
      
    }

    _toggleSideBar(){
        this.sideBarElement.classList.toggle("in-view");
        this.navBtnElement.classList.toggle("change");
    }

    showDialogueMessage(message, callback, callBackOnclose=null) {
        self = this;

        self.setupDiv.classList.add("hidden")
        self.overlay.classList.remove("hidden");
        self.dialogBox.classList.remove("hidden");
        self.dialogMessage.innerHTML = message;
        
        const completeCallBack = function () {
            callback();
            self.overlay.classList.add("hidden");
            self.dialogBox.classList.add("hidden");


            self.dialogYes.removeEventListener("click", completeCallBack)
            self.dialogNo.removeEventListener("click", completeNocallBack)
        }

        const completeNocallBack = function () {
            self.overlay.classList.add("hidden")
            self.dialogBox.classList.add("hidden");


            self.dialogYes.removeEventListener("click", completeCallBack)
            self.dialogNo.removeEventListener("click", completeNocallBack)


            callBackOnclose ? callBackOnclose() : true
        }

        self.dialogYes.addEventListener("click", completeCallBack)
        self.dialogNo.addEventListener("click", completeNocallBack)


    }
    showForm(event, edit=false, envelope=null){
        this.formIsOpen = true;
        this.formMain.classList.remove("hidden");
        this.formMain.scrollIntoView({behavior:"smooth"});
        setTimeout(() => this.formIsOpen = false, 410);

        // Fill Form
        if(envelope){
            this.formEditing = true;
            this.formMain.querySelector(`input[value="${envelope.icon}"]`).setAttribute("checked", "true");

            this.formMain.elements.name.value = envelope.name;
            this.formMain.elements.allocation.value = envelope.allocatedFund;
            this.formMain.elements.increment.value = envelope.incrementSteps;
            this.formMain.elements.decrement.value = envelope.decrementSteps;

            this.formMain.querySelector(`input[value="${envelope.color}"]`).setAttribute("checked", "true");
        }

        if(edit){
            this.formAddBtn.classList.add("hidden");
            this.formSaveBtn.classList.remove("hidden");
            // FORM EDIT VALIDATION
        }else{
            
            this.formAddBtn.classList.remove("hidden");
            this.formSaveBtn.classList.add("hidden");
        }
    }

    clearForm(){
        this.envelopeNameEl.value = "";
        this.allocationEl.value = "";
    }

    // WORK
    hideForm(){
        this.formMain.classList.add("hidden");
        this.formIsOpen = false;
        this.formEditing = false;
        this.clearForm();
    }


    _handleFormScroll(){
        if(this.formIsOpen) return;
        if(this.formMain.getBoundingClientRect().top > 450){
            this.hideForm();
        }
    }

    handleEnvelopeClick(event) {
        const envelopeEl = event.target.closest(".basket-envelope");
        
        if(!envelopeEl) return;
        if(envelopeEl.dataset.key == "misc") return;


        const clickedBtn = event.target.closest("button")
        if(!clickedBtn) return;


        const envelopeKey = Number(envelopeEl.dataset.key);
        const envelopeAction = clickedBtn.dataset.function;

        return [envelopeAction, envelopeKey]
    }

    addDefaultListeners(){
        this.navBtnElement.addEventListener("click", this._toggleSideBar.bind(this));
        this.addBtn.addEventListener("click", this.showForm.bind(this));

        document.addEventListener("scroll", this._handleFormScroll.bind(this));
    }

    renderGreeting(greeting){
        this.infoGreetingElement.textContent = greeting;
    }

    renderAlocatedTotal(currency, allocatedTotal){
        this.infoAlloctedElement.textContent = `${currency}${this.format.format(allocatedTotal)}`;
    }


    createFormError(element, message) {
        document.querySelector(`div.${element}-error`).innerHTML = message;
    }
    removeFormError(element) {
        document.querySelector(`div.${element}-error`).innerHTML = "";
    }

    updateMiscelleneous(currency, miscBalance){
        document.querySelector("div[data-key='misc']").querySelector(".envelope__balance").innerHTML= `${currency}${this.format.format(miscBalance)}`
    }

    renderEnvelope(currency, envelope=null, miscBalance=null){
        this.basketElement.insertAdjacentHTML("afterbegin", 
        `
        <div class="basket-envelope ${envelope?.color || "red"}-envelope" data-key="${envelope?.key || "misc"}">
                    ${this._svgs[envelope?.icon] || this._svgs.envelope}

                    ${
                        miscBalance? `
                        `:
                        `
                        <button class="btn delete-btn" data-function="delete">
                        ${this._svgs.delete}
                        </button>
                        <button class="btn edit-btn" data-function="edit">
                        ${this._svgs.edit}
                        </button>`
                    }

                    
                    <span class="envelope__name">${envelope?.name || "Miscelleneous"}</span>
                        <span class="envelope__balance">${currency}${this.format.format(envelope?.allocatedFund || miscBalance)}</span>
                    ${
                        envelope ?
                        `<button class="btn increment-btn" data-function="increment">+${currency}${envelope?.incrementSteps}</button>
                        <button class="btn decrement-btn" data-function="decrement">Deduct(-${currency}${envelope?.decrementSteps})</button>`
                        : ""
                    }
                        
                    
                </div>`)
    }

    reRenderEnvelope(envelope, currency) {
        const key = envelope.key;
        const envelopeEl = this.basketElement.querySelector(`div[data-key='${key}']`)

        envelopeEl.className = ""
        envelopeEl.classList.add("basket-envelope");
        envelopeEl.classList.add(`${envelope.color}-envelope`) 
        
        envelopeEl.innerHTML = `
        
        ${this._svgs[envelope.icon] || this._svgs.envelope}

        <button class="btn delete-btn" data-function="delete">
        ${this._svgs.delete}
        </button>
        <button class="btn edit-btn" data-function="edit">
        ${this._svgs.edit}
        </button>

        
        <span class="envelope__name">${envelope.name || "Miscelleneous"}</span>
            <span class="envelope__balance">${currency}${this.format.format(envelope.allocatedFund)}</span>
      
            
            <button class="btn increment-btn" data-function="increment">+${currency}${envelope.incrementSteps}</button>
            <button class="btn decrement-btn" data-function="decrement">Deduct(-${currency}${envelope.decrementSteps})</button>
            `
    }

    executeOncloseForm(callback) {
        document.addEventListener("scroll", () => {
            if(!this.formEditing)
                callback();
            }
        )  
    }

    deleteEnvelope(key) {
        const DOMEnvelope = this.basketElement.querySelector(`div[data-key='${key}']`);
        DOMEnvelope.remove();
    }

    deleteAllEnvelopes() {
        this.basketElement.innerHTML = "";
    }
}
