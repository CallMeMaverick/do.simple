import taskWindow from "../../utils/taskWindowLoader/taskWindow";
import project__init__ from "../project/project_init/getObject";

export default function triggerTask() {
    const projectContainers = document.getElementsByClassName("project-container");

    for (let project of projectContainers) {
        project.addEventListener("click", () => {
            const projectTitleElement = project.querySelector(".title");
            const projectTitle = projectTitleElement ? projectTitleElement.innerText : 'Default Title';

            const projectDescElement = project.querySelector(".desc");
            const projectDescription = projectDescElement ? projectDescElement.nextSibling.textContent.trim() : 'Default Description';

            const projectDueDateElement = project.querySelector(".duedate");
            const projectDueDate = projectDueDateElement ? projectDueDateElement.nextSibling.textContent.trim() : 'No Due Date';

            const projectPriorElement = project.querySelector(".prior");
            const projectPriority = projectPriorElement ? projectPriorElement.nextSibling.textContent.trim() : 'No Priority';

            console.log(projectTitle, projectDescription, projectDueDate, projectPriority);

            let currentProject = new project__init__(projectTitle, projectDescription, projectDueDate, projectPriority);

            taskWindow(currentProject);
        })
    }
}