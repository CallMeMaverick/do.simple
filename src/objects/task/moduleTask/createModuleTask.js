import createForm from "./creatFormTaskModule";
import hideModal from "../../project/hideModal/hideModal";
import hideTaskModal from "./hideTaskModal/hideTaskModal";
import task__init__ from "../task_init_/task_init_";
import addTask from "../addTask/addTask";
import deleteTask from "../deleteTasks/deleteTask";

export default function createModuleTask() {
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", () => {
        let modalTask = document.querySelector(".modalTask");
        if (!modalTask) {
            modalTask = document.createElement("div");
            modalTask.classList.add("modalTask");
            modalTask.style.display = "none";

            const modalContent = document.createElement("div");
            modalContent.classList.add("modal-content-task");

            const modalSpan = document.createElement("span");
            modalSpan.classList.add("close");
            modalSpan.innerHTML = "&times;";

            modalContent.appendChild(modalSpan);

            modalContent.appendChild(createForm());

            modalTask.appendChild(modalContent);

            modalSpan.addEventListener("click", () => {
                const titleInput = document.getElementById('title');
                const deadlineInput = document.getElementById('deadline');
                const prioritySelect = document.getElementById('priority');

                const titleValue = titleInput.value;
                const deadlineValue = deadlineInput.value;
                const priorityValue = prioritySelect.value;

                hideTaskModal();

                titleInput.value = "";
                deadlineInput.value = "";
                prioritySelect.value = "high";
            });

            modalTask.style.display = "block";
            document.body.appendChild(modalTask)
        }
        modalTask.style.display = "block";
        document.body.appendChild(modalTask)
    })
}