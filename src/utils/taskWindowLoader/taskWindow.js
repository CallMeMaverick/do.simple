function addTask() {
    // Query and hide "add-project" button
    const addButton = document.querySelector(".add-button");
    addButton.style.display = "none";

    // Query button container
    const addButtonContainer = document.querySelector(".add-button-container");

    // Create a new button
    let addTaskButton = document.createElement("button");
    addButton.classList.add("add-task-button");
    addTaskButton.textContent = "+ add task"

    addButtonContainer.appendChild(addTaskButton);
}

export default function taskWindow(projectObject) {
    let headerHeading = document.querySelector("header > h1");
    headerHeading.textContent = projectObject.title;

    let headerPar = document.querySelector("header > p");
    headerPar.textContent = projectObject.description;

    const content = document.querySelector(".content");
    content.style.display = "none";


    const table = document.createElement("table");
    const headerRow = table.insertRow(0);

    headerRow.id = "heads";

    let headers = ["Task", "Deadline", "Status", ""];
    headers.forEach((header) => {
        let headerCell = document.createElement("th");
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    })

    addTask();
    document.body.appendChild(table);
}