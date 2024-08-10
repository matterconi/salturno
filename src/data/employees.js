// src/data/tasks.js
const tasks = ['apertura', 'servizio', 'chiusura'];

const employees = [
    {
        name: 'Christian',
        image: 'https://via.placeholder.com/150',
        assignments: {
            Lun: tasks[0],
            Mar: tasks[0],
            Mer: tasks[0],
            Gio: tasks[0],
            Ven: tasks[0],
            Sab: tasks[0],
            Dom: tasks[0],
        },
    },
    {
        name: 'Giacomo',
        image: 'https://via.placeholder.com/150',
        assignments: {
            Lun: tasks[1],
            Mar: tasks[1],
            Mer: tasks[1],
            Gio: tasks[1],
            Ven: tasks[1],
            Sab: tasks[1],
            Dom: tasks[1],
        },
    },
    {
        name: 'Matteo',
        image: 'https://via.placeholder.com/150',
        assignments: {
            Lun: tasks[2],
            Mar: tasks[2],
            Mer: tasks[2],
            Gio: tasks[2],
            Ven: tasks[2],
            Sab: tasks[2],
            Dom: tasks[2],
        },
    },
];

export default employees;
