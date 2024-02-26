export default function loadAddButton() {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("add-button-container");

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "+ add project"
    buttonDiv.appendChild(addButton);

    return buttonDiv;
}