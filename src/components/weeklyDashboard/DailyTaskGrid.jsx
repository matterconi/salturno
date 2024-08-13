import React from 'react';
import Employee, { allTasks } from '../../data/tasks'; // Adjust the import path based on your file structure
import Table from './Table';

// Get the index for a specific day of the week abbreviation
const getDayIndex = (dayAbbr) => {
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  return daysOfWeek.indexOf(dayAbbr);
};

// Find an employee assigned to a specific task on the provided day
const findEmployeeForTask = (day, section, task) => {
  return Employee.find(employee =>
    employee.assignments[day][section].includes(task)
  );
};

const DailyTaskGrid = ({ day }) => {
  const { apertura, servizio, chiusura } = allTasks;

  return (
    <div className="p-4 flex flex-col space-y-6 py-8">
      <Table
        title={`Apertura`}
        tasks={apertura}
        findEmployeeForTask={(task) => findEmployeeForTask(day, 'apertura', task)}
        color="bg-green-500"
      />
      <Table
        title={`Servizio`}
        tasks={servizio}
        findEmployeeForTask={(task) => findEmployeeForTask(day, 'servizio', task)}
        color="bg-yellow-500"
      />
      <Table
        title={`Chiusura`}
        tasks={chiusura}
        findEmployeeForTask={(task) => findEmployeeForTask(day, 'chiusura', task)}
        color="bg-red-500"
      />
    </div>
  );
};

export default DailyTaskGrid;
