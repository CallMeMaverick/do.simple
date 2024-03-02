import createModal from "../../project/project_modal/createModal";

export default function addTaskButton() {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("add-button-container");

    const addButton = document.createElement("button");
    addButton.classList.add("add-task-button");
    addButton.textContent = "+ add task"
    buttonDiv.appendChild(addButton);

    // addButton.addEventListener("click", () => {
    //     // const modal = createModal();
    //     console.log(modal);
    //     modal.style.display = "block"
    //     document.body.appendChild(modal);
    // })

    return buttonDiv;
}