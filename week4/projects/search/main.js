console.log(document.forms["search"])


const form = document.forms["search"]

const [input, button] = form.elements;
console.log(input,  button)



console.log(form.searchInput);


input.value = 'Search Here';

input.addEventListener('focus', function(){
    console.log("focused")
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    console.log("blurred")
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

input.addEventListener('change', () => console.log('changed'), false);

form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

// common form controls include "input, select, textarea, button"