'use strict'

const input = document.querySelector("input");
const errorMsg = document.querySelector(".error")

input.addEventListener("input", () => {
    showError()
})

function showError() {
    if(input.validity.patternMismatch) {
        errorMsg.textContent = "Input has to be 'cherry' or 'banana'"
        errorMsg.classList.remove("hidden")
    }else{
        input.setCustomValidity("")
        errorMsg.classList.add("hidden")
    }
}