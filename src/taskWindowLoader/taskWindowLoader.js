import addTaskButton from "../objects/task/addTaskButton/addTaskButton";
import addTable from "../objects/task/addTable/addTable";

export default function taskWindowLoader(project) {
    document.body.innerHTML = "";

    // Extract the project's title and description from the provided 'project' element
    const projectTitle = project.querySelector(".title").textContent;
    const projectDescription = project.querySelector(".desc").nextSibling.textContent.trim();

    // Create the header elements
    const header = document.createElement("header");
    const headerHeading = document.createElement("h1");
    headerHeading.textContent = projectTitle;

    const headerPara = document.createElement("p");
    headerPara.textContent = projectDescription;

    // Append the header elements to the header
    header.appendChild(headerHeading);
    header.appendChild(headerPara);

    // Append the header to the document body
    document.body.appendChild(header);

    // Optionally append other elements if needed
    document.body.appendChild(addTaskButton());
    document.body.appendChild(addTable());
}

