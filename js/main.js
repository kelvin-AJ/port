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
        progress : 100
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
        label: "Objects, the DOM and Events",
        url: "week3/index.html"
    },
    {
        label: "Forms, Object-Oriented Programming and Modular Javascript",
        url: "week4/index.html"
    },
    {
        label: "Testing and Debugging",
        url: "week5/index.html"
    },
    {
        label: "To-do App",
        url: "week6/index.html"
    },
    {
        label: "Advanced Functions, AJAX",
        url: "week7/index.html"
    },
    {
        label: "Transforms and Transitions, Canvas, SVG and Drag and Drop",
        url: "week8/index.html"
    },
    {
        label: "The window Object, HTML5 APIs",
        url: "week9/"
    },
    {
        label: "Form Validation, Fetch API",
        url: "week10/"
    },
    {
        label: "Envelope: Book Keeping system [Final Project]",
        url: "envelope/"
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
        </li>
        ${i==links.length - 1 ? "" : "<hr>"}
        `)
    })
}
const toggleTheme = function(){
    const curTheme = window.localStorage.getItem('theme');

    if(curTheme == "dark-mode"){
        window.localStorage.setItem('theme', 'light-mode')
        documentBody.classList.remove(curTheme);
    }else{
        window.localStorage.setItem('theme', 'dark-mode')
        documentBody.classList.add("dark-mode")
    }
    
};
const activateTheme = function(){
    const curTheme = window.localStorage.getItem('theme');
    documentBody.classList.add(curTheme)
}

activateTheme()
// toggleThemeBtn.addEventListener("click", toggleTheme);


renderSkills(skills);
renderLinks(links);