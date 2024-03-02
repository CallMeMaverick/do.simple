import addTaskButton from "../objects/task/addTaskButton/addTaskButton";
import addTable from "../objects/task/addTable/addTable";
import createModuleTask from "../objects/task/moduleTask/createModuleTask";
import returnHome from "../returnHome/returnHome";
import Loader from "../mainLoader/loader";

export default function taskWindowLoader(project) {
    document.body.innerHTML = "";

    const projectTitle = project.querySelector(".title").textContent;
    const projectDescription = project.querySelector(".desc").nextSibling.textContent.trim();

    const header = document.createElement("header");
    header.classList.add("while-task");

    const returnButtonContainer = document.createElement("div");
    returnButtonContainer.classList.add("return-button-container");

    const returnButton = document.createElement("button");
    returnButton.classList.add("return-button");
    returnButton.textContent = "←";

    returnButton.addEventListener("click", () => {
        returnHome();
    })

    returnButtonContainer.appendChild(returnButton);


    const textContainerTask = document.createElement("div");
    textContainerTask.classList.add("text-container");

    const headerHeading = document.createElement("h1");
    headerHeading.textContent = projectTitle;

    const headerPara = document.createElement("p");
    headerPara.textContent = projectDescription;

    textContainerTask.appendChild(headerHeading);
    textContainerTask.appendChild(headerPara);

    header.appendChild(returnButtonContainer);
    header.appendChild(textContainerTask);

    document.body.appendChild(header);

    document.body.appendChild(addTaskButton());
    document.body.appendChild(addTable());
    document.body.appendChild(createModuleTask());
}

