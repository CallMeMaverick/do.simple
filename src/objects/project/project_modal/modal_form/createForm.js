import project__init__ from "../../project_init/getObject"

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
    const descriptionInput = createInputWithLabel("textarea", "description", "description", "Description:");
    const dueDateInput = createInputWithLabel("date", "dueDate", "dueDate", "Due Date:");
    const prioritySelect = createSelectWithLabel("priority", "priority", "Priority:", ["High", "Medium", "Low"]);

    modalForm.appendChild(titleInput);
    modalForm.appendChild(descriptionInput);
    modalForm.appendChild(dueDateInput);
    modalForm.appendChild(prioritySelect);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    const submitButtonContainer = document.createElement("div");
    submitButtonContainer.classList.add("submit-button-container");
    submitButtonContainer.appendChild(submitButton);

    modalForm.appendChild(submitButtonContainer);

    submitButton.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;

        console.log(title, description, dueDate, priority);

        const object = new project__init__(title, description, dueDate, priority);
    })

    return modalForm;
}

