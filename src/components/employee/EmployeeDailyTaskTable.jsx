import React, { useState } from 'react';

const EmployeeDailyTaskTable = ({ employee, tasksBySection, day }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`overflow-hidden rounded-lg border ${employee.color.replace('bg-', 'border-')}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md">
          <thead>
            <tr>
              <th className={`py-2 px-4 ${employee.color} text-white font-medium text-left`} colSpan="3">
                {day} {/* Display the day as the table title */}
              </th>
              <th
                className={`py-2 px-4 ${employee.color} text-white font-medium text-right cursor-pointer`}
                onClick={toggleTable}
              >
                {isOpen ? '▲' : '▼'}
              </th>
            </tr>
          </thead>
          {isOpen && (
            <tbody>
              {Object.entries(tasksBySection).map(([section, tasks], idx) => (
                <React.Fragment key={idx}>
                  <tr>
                    <td className={`py-2 px-4 bg-gray-100 text-black font-semibold`} colSpan="3">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </td>
                  </tr>
                  {tasks.length > 0 ? (
                    tasks.map((task, taskIdx) => (
                      <tr key={taskIdx} className={`hover:bg-gray-50 ${taskIdx !== tasks.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <td className="py-2 px-4 w-full">{task}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-2 px-4 border-t border-gray-200 w-full" colSpan="3">
                        Nessun compito assegnato.
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeDailyTaskTable;
