import createForm from "./modal_form/createForm";
import hideModal from "../hideModal/hideModal";

export default function createModal() {
    let modal = document.querySelector(".modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.classList.add("modal");
        modal.style.display = "none";

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const modalSpan = document.createElement("span");
        modalSpan.classList.add("close");
        modalSpan.innerHTML = "&times;";

        modalContent.appendChild(modalSpan);

        modalContent.appendChild(createForm());

        modal.appendChild(modalContent);

        modalSpan.addEventListener("click", () => {
            hideModal();
        });

        document.body.appendChild(modal);
    }

    return modal;
}