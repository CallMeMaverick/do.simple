import addTaskButton from "../objects/task/addTaskButton/addTaskButton";
import addTable from "../objects/task/addTable/addTable";

export default function taskWindowLoader(project) {
    document.body.innerHTML = "";

    const projectTitle = project.querySelector("h3");
    const projectDesc = project.querySelector(".desc");

    const header = document.createElement("header");

    const headerHeading = document.createElement("h1");
    headerHeading.textContent = projectTitle.textContent;

    const headerPara = document.createElement("p");
    headerPara.textContent = projectDesc.textContent;

    header.appendChild(headerHeading);
    header.appendChild(headerPara);

    document.body.appendChild(header);
    document.body.appendChild(addTaskButton());
    document.body.appendChild(addTable());
}