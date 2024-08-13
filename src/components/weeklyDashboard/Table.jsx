import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({ title, tasks, findEmployeeForTask, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const handleEmployeeClick = (employeeName) => {
    // Navigate to the employee's page
    navigate(`/employees/${employeeName}`);
  };

  return (
    <div className={`overflow-hidden rounded-lg border ${color.replace('bg-', 'border-')}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md">
          <thead>
            <tr>
              <th className={`py-2 px-4 ${color} text-white font-medium text-left w-1/2`}>{title}</th>
              <th className={`py-2 px-4 ${color} text-white font-medium text-left w-1/2`}>Dipendente</th>
              <th
                className={`py-2 px-4 ${color} text-white font-medium text-right cursor-pointer`}
                onClick={toggleTable}
              >
                {isOpen ? '▲' : '▼'}
              </th>
            </tr>
          </thead>
          {isOpen && (
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task, idx) => {
                  const employee = findEmployeeForTask(task);
                  return (
                    <tr key={idx} className={`hover:bg-gray-50 ${idx !== tasks.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <td className="py-2 px-4 w-1/2">{task}</td>
                      <td className="py-2 px-4 w-1/2">
                        {employee ? (
                          <p
                            className="cursor-pointer"
                            onClick={() => handleEmployeeClick(employee.name)}
                          >
                            {employee.name}
                          </p>
                        ) : (
                          <p>Nessun dipendente assegnato</p>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="py-2 px-4 border-t border-gray-200 w-1/2 rounded-bl-lg" colSpan="2">Nessun dipendente assegnato a questo compito.</td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
