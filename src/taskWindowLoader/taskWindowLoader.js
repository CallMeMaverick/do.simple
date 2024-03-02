import addTaskButton from "../objects/task/addTaskButton/addTaskButton";
import addTable from "../objects/task/addTable/addTable";
import createModuleTask from "../objects/task/moduleTask/createModuleTask";

export default function taskWindowLoader(project) {
    document.body.innerHTML = "";

    const projectTitle = project.querySelector(".title").textContent;
    const projectDescription = project.querySelector(".desc").nextSibling.textContent.trim();

    const header = document.createElement("header");
    const headerHeading = document.createElement("h1");
    headerHeading.textContent = projectTitle;

    const headerPara = document.createElement("p");
    headerPara.textContent = projectDescription;

    header.appendChild(headerHeading);
    header.appendChild(headerPara);

    document.body.appendChild(header);

    document.body.appendChild(addTaskButton());
    document.body.appendChild(addTable());
    document.body.appendChild(createModuleTask());
}

