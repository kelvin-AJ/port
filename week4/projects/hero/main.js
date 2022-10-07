const form = document.forms['hero-form'];
form.addEventListener('submit', makeHero, false);
form.addEventListener('keyup',validateInline,false);
form.heroName.addEventListener('keyup',disableSubmit,false);
const label = form.querySelector('label');

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}


function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this[0].value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}


function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; 
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    
    // create a name property based on the input field's value

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
};


// We use the name property on radio buttons to group them together.
// Information in hidden input fields are not secret so they shouldn't be used for sensitive data. They can ve viewed in the HTML
// It is also possible to find out the index of the option that has been selected, using the 'selectedIndex' property.
// It is advisable to use both client-side and server-side validation