import task__init__ from "../task_init_/task_init_";
import addTask from "../addTask/addTask";
import hideTaskModal from "./hideTaskModal/hideTaskModal";
import clearInput from "../../project/clearInputs/clearInputs";
import deleteTask from "../deleteTasks/deleteTask";

function createInputWithLabel(type, name, id, labelText, value = '') {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    let input;
    if (type === "textarea") {
        input = document.createElement("textarea");
    } else {
        input = document.createElement("input");
        input.setAttribute("type", type);
    }

    input.setAttribute("name", name);
    input.setAttribute("id", id);
    input.setAttribute("required", "");
    if (value) input.value = value;

    wrapper.appendChild(label);
    wrapper.appendChild(input);

    return wrapper;
}

function createSelectWithLabel(name, id, labelText, options) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("select-wrapper");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    const select = document.createElement("select");
    select.setAttribute("name", name);
    select.setAttribute("id", id);

    options.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        select.appendChild(option);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);

    return wrapper;
}

export default function createForm() {
    const modalForm = document.createElement("form");

    const titleInput = createInputWithLabel("text", "title", "title", "Title:");
    const deadlineInput = createInputWithLabel("date", "deadline", "deadline", "Deadline:");
    const prioritySelect = createSelectWithLabel("priority", "priority", "Priority:", ["High", "Medium", "Low"]);

    modalForm.appendChild(titleInput);
    modalForm.appendChild(deadlineInput);
    modalForm.appendChild(prioritySelect);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Add task";

    const submitButtonContainer = document.createElement("div");
    submitButtonContainer.classList.add("submit-button-container");
    submitButtonContainer.appendChild(submitButton);

    modalForm.appendChild(submitButtonContainer);

    modalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const titleInput = document.getElementById('title');
        const deadlineInput = document.getElementById('deadline');
        const prioritySelect = document.getElementById('priority');

        const titleValue = titleInput.value;
        const deadlineValue = deadlineInput.value;
        const priorityValue = prioritySelect.value;

        const task = task__init__(titleValue, deadlineValue, priorityValue);

        addTask(task);
        hideTaskModal();

        titleInput.value = "";
        deadlineInput.value = "";
        prioritySelect.value = "high";
    })


    return modalForm;
}