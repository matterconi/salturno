// src/components/DailyTaskGrid.jsx
import React from 'react';
import Employee, { allTasks } from '../../data/tasks'; // Adjust the import path based on your file structure
import Table from './Table';

// Get the current day of the week abbreviation
const getCurrentDay = () => {
  const today = new Date();
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  return daysOfWeek[dayIndex];
};

const currentDay = getCurrentDay();

// Find an employee assigned to a specific task on the current day
const findEmployeeForTask = (section, task) => {
  return Employee.find(employee =>
    employee.assignments[currentDay][section].includes(task)
  );
};

const DailyTaskGrid = () => {
  const { apertura, servizio, chiusura } = allTasks;

  return (
    <div className="p-4 flex flex-col space-y-6 py-8">
      <Table
        title="Apertura"
        tasks={apertura}
        findEmployeeForTask={(task) => findEmployeeForTask('apertura', task)}
        color="bg-green-500"
      />
      <Table
        title="Servizio"
        tasks={servizio}
        findEmployeeForTask={(task) => findEmployeeForTask('servizio', task)}
        color="bg-yellow-500"
      />
      <Table
        title="Chiusura"
        tasks={chiusura}
        findEmployeeForTask={(task) => findEmployeeForTask('chiusura', task)}
        color="bg-red-500"
      />
    </div>
  );
};

export default DailyTaskGrid;
