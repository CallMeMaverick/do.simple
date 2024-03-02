import { parse } from "date-fns"

export default function task__init__(title, deadline, priority) {
    const parsedDeadline = parse(deadline, 'dd/MM/yyyy', new Date());

    return {
        title: title,
        deadline: deadline,
        priority: priority
    }
}