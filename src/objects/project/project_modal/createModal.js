import createForm from "./modal_form/createForm";

export default function createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("display", "none");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalSpan = document.createElement("span");
    modalContent.classList.add("close");
    modalSpan.innerHTML = "&times;";

    modalSpan.onclick = function() { // Add a click event listener to the close button
        modal.style.display = "none";
    };

    modalContent.appendChild(modalSpan);

    modalContent.appendChild(createForm());

    modal.appendChild(modalContent);

    return modal;
}