import loadHeader from "../utils/header/loadHeader";

export default class Loader {
    static load() {
        document.body.appendChild(loadHeader());
    }
}