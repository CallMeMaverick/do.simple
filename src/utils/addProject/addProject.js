export default function addProject(projectObject) {
    // Select the content div or create a new one if it doesn't exist
    let contentDiv = document.querySelector(".content");
    if (!contentDiv) {
        contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        document.body.appendChild(contentDiv);
    }

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = projectObject.title;
    console.log(projectObject.title);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = projectObject.description;

    const projectDueDate = document.createElement("p");
    projectDueDate.textContent = `Due Date: ${projectObject.dueDate.toLocaleDateString()}`;

    const projectPriority = document.createElement("p");
    projectPriority.textContent = `Priority: ${projectObject.priority}`;

    // Append project details to the project container
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectDueDate);
    projectContainer.appendChild(projectPriority);

    // Append the project container to the content div
    contentDiv.appendChild(projectContainer);
    return contentDiv;
}
