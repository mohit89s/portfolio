import projects from "./data/projects.js";

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