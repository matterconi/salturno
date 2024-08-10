// src/data/tasks.js
const tasks = ['apertura', 'servizio', 'chiusura'];

const aperturaTasks = ['Spazzare', 'Dare il cencio', 'Pulire i tavoli', 'Apparecchiare sala', 'Pulire i piatti', 'Preparare i succhi', 'Apparecchiare staff', 'Carichi del vino', 'Prendere il ghiaccio', 'Prendere i vini al calice'];
const servizioTasks = ['Rango 1', 'Rango 2'];
const chiusuraTasks = ['Pulire le posate', 'Pulire i bicchieri', 'Sparecchiare', 'Rifornire posate', 'Svuotare panadore'];

const allTasks = {
    apertura: aperturaTasks,
    servizio: servizioTasks,
    chiusura: chiusuraTasks,
};

const Employee = [
    {
        name: 'Christian',
        image: 'https://via.placeholder.com/150',
        color: 'bg-green-500',
        assignments: {
            Lun: [],
            Mar: [],
            Mer: [],
            Gio: [],
            Ven: [],
            Sab: [],
            Dom: [],
        },
    },
    {
        name: 'Giacomo',
        image: 'https://via.placeholder.com/150',
        color: 'bg-yellow-500',
        assignments: {
            Lun: [],
            Mar: [],
            Mer: [],
            Gio: [],
            Ven: [],
            Sab: [],
            Dom: [],
        },
    },
    {
        name: 'Matteo',
        image: 'https://via.placeholder.com/150',
        color: 'bg-red-500',
        assignments: {
            Lun: [],
            Mar: [],
            Mer: [],
            Gio: [],
            Ven: [],
            Sab: [],
            Dom: [],
        },
    },
];

// Function to assign tasks to employees randomly
// Function to assign tasks to employees randomly, divided by sections
// Function to assign tasks to employees randomly, divided by sections
const assignTasks = (employees, allTasks) => {
    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

    // Initialize assignments for each day for each employee
    employees.forEach(employee => {
        daysOfWeek.forEach(day => {
            employee.assignments[day] = {
                apertura: [],
                servizio: [],
                chiusura: [],
            };
        });
    });

    // Assign tasks to a random employee for each section
    Object.keys(allTasks).forEach(section => {
        allTasks[section].forEach(task => {
            const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
            daysOfWeek.forEach(day => {
                randomEmployee.assignments[day][section].push(task);
            });
        });
    });
};

assignTasks(Employee, allTasks);

export { allTasks };
export default Employee;
