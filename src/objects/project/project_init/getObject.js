import { parse } from "date-fns"

export default function project__init__(title, description, dueDateString, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;

    const dateFormat = dueDateString && dueDateString[2] === '/' ? 'dd/MM/yyyy' : 'yyyy-MM-dd';
    this.dueDate = parse(dueDateString, dateFormat, new Date());

    return { title, description, dueDate: this.dueDate, priority };
}