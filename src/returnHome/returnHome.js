import Loader from "../mainLoader/loader";
import { loadProjects } from "../objects/project/project_modal/modal_form/createForm";

export default function returnHome() {
    // Clear the content of the page
    document.body.innerHTML = "";

    Loader.load();

    loadProjects();
}