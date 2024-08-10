// src/components/EmployeeDailyTask.jsx
import React from 'react';
import EmployeeDailyTaskTable from './EmployeeDailyTaskTable';
import Employee from '../../data/tasks'; // Adjust the import path based on your file structure

// Get the current day of the week with abbreviation
const getCurrentDay = () => {
  const today = new Date();
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  return daysOfWeek[dayIndex];
};

const currentDay = getCurrentDay();

const EmployeeDailyTask = () => {
  return (
    <div className="p-4 space-y-6 py-8">
      {Employee.map((employee, idx) => {
        const tasksBySection = {
          apertura: employee.assignments[currentDay].apertura,
          servizio: employee.assignments[currentDay].servizio,
          chiusura: employee.assignments[currentDay].chiusura,
        };

        return (
          <EmployeeDailyTaskTable
            key={idx}
            employee={employee}
            tasksBySection={tasksBySection}
          />
        );
      })}
    </div>
  );
};

export default EmployeeDailyTask;
