import deleteTask from "../deleteTasks/deleteTask";

export default function addTask(task) {
    const table = document.querySelector("table");
    const row = table.insertRow(-1);
    row.classList.add("added-row")

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = task.title;
    cell2.textContent = task.deadline;
    cell3.textContent = task.priority;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-task-button");
    deleteButton.textContent = "Delete Task";

    cell4.appendChild(deleteButton);

    deleteTask();
}