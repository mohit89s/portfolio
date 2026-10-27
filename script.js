import projects from "./data/projects.js";
import personal from "./data/personal.js";
import education from "./data/education.js";

//personal details
document.getElementById("personal-name").textContent = `Hi, i'm ${personal.name}.`;

document.getElementById("personal-title").textContent = personal.title;

document.getElementById("personal-intro").textContent = personal.introduction;

//find the empty container in our HTML 
const container = document.getElementById("projects-container");

//card for every project
projects.forEach(function(project) {
    
    const card = document.createElement("article");

    card.className = "project-card";

    const title = document.createElement("h3")
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const technology = document.createElement("span");
    technology.className = "project-tech";
    technology.textContent = project.technology;

    card.append(title, description, technology);
    container.appendChild(card);

});

const educationContainer = document.getElementById("education-container");

education.forEach(function(item) {

    const card = document.createElement("article");
    card.className = "education-card";

    const degree = document.createElement("h3");
    degree.textContent = item.degree;

    const institution = document.createElement("p");
    institution.textContent = item.institution;

    const years = document.createElement("p");
    years.textContent = `${item.startYear} - ${item.endYear}`;

    const  status = document.createElement("span");
    status.className = "education-status";
    status.textContent = item.status;

    card.append(degree, institution, years, status);
    educationContainer.appendChild(card);
});