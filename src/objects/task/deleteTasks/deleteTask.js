export default function deleteTask() {
    const deleteButtons = document.getElementsByClassName("delete-task-button");
    console.log(deleteButtons);
    for (let button of deleteButtons) {
        button.addEventListener("click", function() {
            const row = this.closest("tr");

            if (row) {
                row.remove();
            }
        })
    }
}