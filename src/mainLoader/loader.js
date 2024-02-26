import loadHeader from "../utils/header/loadHeader";
import loadAddButton from "../utils/addButton/addButtonLoader";

export default class Loader {
    static load() {
        document.body.appendChild(loadHeader());
        document.body.appendChild(loadAddButton());
    }
}