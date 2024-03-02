import taskWindowLoader from "../../../taskWindowLoader/taskWindowLoader";

export default function processProject() {
    let projects = document.getElementsByClassName("project-container");
    console.log(projects);

    for (let project of projects) {
        console.log(project);
        project.addEventListener("click", () => {
            taskWindowLoader(project);
        })
    }
}