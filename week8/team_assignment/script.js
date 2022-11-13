const listEl = document.querySelector(".main-container-list");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev")

const url = "https://swapi.dev/api/people/";

function populateList(url, people = true) {

    fetch(url)
    .then(response => response.json())
    .then(obj => {
        const results = obj.results;
        listEl.innerHTML = "";
        results.forEach(
            person => {
                const htmlString = 
                `
                    <li>
                        <h3>${person.name}</h3>
                        <p>Height: ${person.height}</p>
                        <p>Birth Year: ${person.birth_year}</p>
                        <p>Mass: ${person.mass}</p>
                    </li>
    
                `

        listEl.insertAdjacentHTML("beforeend", htmlString)
            }
        )

        nextBtn.addEventListener("click", () => populateList(obj.next));
        prevBtn.addEventListener("click", () => populateList(obj.previous))
    });


}

populateList(url)