import loadHeader from "../utils/header/loadHeader";
import loadAddButton from "../utils/addButton/addButtonLoader";
import createModal from "../objects/project/project_modal/createModal";

export default class Loader {
    static load() {
        document.body.appendChild(loadHeader());
        document.body.appendChild(loadAddButton());
        document.body.appendChild(createModal());
    }
}