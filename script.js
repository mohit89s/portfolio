import projects from "./data/projects.js";
import personal from "./data/personal.js";
import education from "./data/education.js";
import experience from "./data/experience.js";
import skills from "./data/skills.js";

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

    const links = document.createElement("div");
    links.className = "project-links";

    if (project.github) {
        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.textContent = "View Code";
        githubLink.target = "_blank";
        githubLink.rel = "noopener noreferrer";
        links.appendChild(githubLink);
    }

    if (project.liveDemo) {
        const demoLink = document.createElement("a");
        demoLink.href = project.liveDemo; 
        demoLink.textContent = "Live Demo";
        demoLink.target = "_blank";
        demoLink.rel = "noopener noreferrer";
        links.appendChild(demoLink);
    }

    card.append(title, description, technology);

    if (links.children.length > 0) {
        card.appendChild(links);
    }
    
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

const experienceContainer = document.getElementById("experience-container");

experience.forEach(function(job) {

    const card = document.createElement("article");
    card.className = "experience-card";

    const role = document.createElement("h3");
    role.textContent = job.role;

    const company = document.createElement("p");
    company.textContent = job.company;

    const type = document.createElement("span");
    type.className = "experience-type";
    type.textContent = job.type;

    const dates = document.createElement("p");
    dates.textContent = `${job.startDate} - ${job.current ? "Present" : job.endDate}`;

    const description = document.createElement("p");
    description.textContent = job.description;

    card.append(role, company, type, dates, description);
    experienceContainer.appendChild(card);
});

const skillsContainer = document.getElementById("skills-container");

skills.forEach(function(group){
    const card = document.createElement("article");
    card.className = "skill-card";

    const heading = document.createElement("h3");
    heading.textContent = group.category;

    const skillList = document.createElement("span");
    skillList.className = "skill-list";

    group.items.forEach(function(skill){
        const badge = document.createElement("span");
        badge.className = "skill-badge";
        badge.textContent = skill;

        skillList.appendChild(badge);
    });

    card.append(heading, skillList);
    skillsContainer.appendChild(card);

});
