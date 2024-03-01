import createModal from "../../objects/project/project_modal/createModal";

export default function loadAddButton() {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("add-button-container");

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "+ add project"
    buttonDiv.appendChild(addButton);

    addButton.addEventListener("click", () => {
        const modal = createModal();
        console.log(modal);
        modal.style.display = "block"
        document.body.appendChild(modal);
    })

    return buttonDiv;
}