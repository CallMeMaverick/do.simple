import "../../css/style.css"

export default function loadHeader() {
    const header = document.createElement("header");

    const headerHeading = document.createElement("h1");
    headerHeading.textContent = "Do.";
    const headerSpan = document.createElement("span");
    headerSpan.textContent = "Simple";
    headerHeading.appendChild(headerSpan);

    const headerPara = document.createElement("p");
    headerPara.textContent = "Minimalistic to-do app to manage your daily chores";

    header.appendChild(headerHeading);
    header.appendChild(headerPara);

    return header;
}