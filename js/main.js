'use strict'
const skillsListEl = document.querySelector("#skills__list");
const projectsList = document.querySelector(".project__list--main");
const documentBody = document.querySelector("body")
const toggleThemeBtn = document.querySelector(".theme-switch");

const skills = [
    {
        skillName : "Web Fundamentals",
        progress : 100
    },
    {
        skillName : "Web Frontend I",
        progress : 100
    },
    {
        skillName : "Web Frontend II",
        progress : 7
    }
]

const links = [
    {
        label: "Building for mobile and local storage",
        url: "week1/index.html"
    },
    {
        label: "Arrays, Logic, Loops and Functions",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week4 notes",
        url: "week1/index.html"
    },
    {
        label: "Week5 notes",
        url: "week1/index.html"
    },
    {
        label: "Week6 notes",
        url: "week1/index.html"
    },
    {
        label: "Week7 notes",
        url: "week1/index.html"
    },
    {
        label: "Week8 notes",
        url: "week1/index.html"
    }

]

const renderSkills = function(skills) {
    skills.forEach(skill => {
        skillsListEl.insertAdjacentHTML("beforeend", `
        <li>
            ${skill.skillName}
            <div class="progress-bar"><div style="width: ${skill.progress}%" class="progress"></div></div>
        </li>`)
    });
}

const renderLinks = function(links) {
    links.forEach((link, i) => {
        projectsList.insertAdjacentHTML("beforeend", 
        `
        <li>
            <span class="bold">Week ${i + 1}: </span> <a href="${link.url}">${link.label}</a>
        </li>`)
    })
}
const toggleTheme = function(){
    documentBody.classList.toggle("dark-mode");
};
toggleThemeBtn.addEventListener("click", toggleTheme);


renderSkills(skills);
renderLinks(links);

