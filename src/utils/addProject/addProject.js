import definePriority from "../../objects/project/setPriority/setPriority";

export default function addProject(projectObject) {
    // Select the content div or create a new one if it doesn't exist
    let contentDiv = document.querySelector(".content");
    if (!contentDiv) {
        contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        document.body.appendChild(contentDiv);
    }

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = projectObject.title;
    console.log(projectObject.title);

    const projectDescription = document.createElement("p");
    projectDescription.innerHTML = `<span class="this-span">Description:</span> ${projectObject.description}`;

    const projectDueDate = document.createElement("p");
    projectDueDate.innerHTML = `<span class="this-span">Due Date:</span> ${projectObject.dueDate.toLocaleDateString()}`;

    const projectPriority = document.createElement("p");
    projectPriority.innerHTML = `<span class="this-span">Priority:</span> ${projectObject.priority}`;

    projectContainer = definePriority(projectContainer, projectObject.priority);

    // Append project details to the project container
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectDueDate);
    projectContainer.appendChild(projectPriority);

    // Append the project container to the content div
    contentDiv.appendChild(projectContainer);
    return contentDiv;
}
