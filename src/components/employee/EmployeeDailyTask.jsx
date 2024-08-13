import React from 'react';
import Table from './Table';

const EmployeeDailyTask = ({ employee, day }) => {
  const tasksBySection = {
    apertura: employee.assignments[day].apertura,
    servizio: employee.assignments[day].servizio,
    chiusura: employee.assignments[day].chiusura,
  };

  const findEmployeeForTask = (section, task) => {
    // Since this is specific to a single employee, we just return the employee if they are assigned the task
    return tasksBySection[section].includes(task) ? employee : null;
  };

  return (
    <div className="p-4 space-y-6">
      <Table
        title="Apertura"
        tasks={tasksBySection.apertura}
        findEmployeeForTask={(task) => findEmployeeForTask('apertura', task)}
        color="bg-green-500"
      />
      <Table
        title="Servizio"
        tasks={tasksBySection.servizio}
        findEmployeeForTask={(task) => findEmployeeForTask('servizio', task)}
        color="bg-yellow-500"
      />
      <Table
        title="Chiusura"
        tasks={tasksBySection.chiusura}
        findEmployeeForTask={(task) => findEmployeeForTask('chiusura', task)}
        color="bg-red-500"
      />
    </div>
  );
};

export default EmployeeDailyTask;
