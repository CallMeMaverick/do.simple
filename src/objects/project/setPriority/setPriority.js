export default function definePriority(container, priority) {
    switch (priority) {
        case "low":
            container.style.border = "2px solid green"
            break;
        case "medium":
            container.style.border = "2px solid orange";
            break;
        case "high":
            container.style.border = "2px solid red";
            break;
    }

    console.log(`THIS: ${container}`);

    return container;
}