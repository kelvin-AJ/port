'use strict'
const skillsListEl = document.querySelector("#skills__list");
const projectsList = document.querySelector(".project__list--main");

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
        label: "Week1 notes",
        url: "week1/index.html"
    },

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

renderSkills(skills);
renderLinks(links);