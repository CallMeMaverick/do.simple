export default function addTable() {
    // Create table and table row
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    tr.id = 'heads';

    const headers = ['Task', 'Deadline', 'Priority', ' '];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        tr.appendChild(th);
    });

    table.appendChild(tr);

    return table;
}