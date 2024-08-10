import React from 'react';
import Employee from '../../data/tasks';

const MockEmployee = ({ name, role, image }) => {
    return (
        <div className="flex items-center">
            <img src={image} alt={name} className="w-10 h-10 rounded-full" />
            <div className="ml-2">
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-gray-600">{role}</p>
            </div>
        </div>
    );
};

const Table = ({ daysOfWeek, daysOfWeekAbbr }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-500 text-white rounded-tl-lg font-medium">Dipendente</th>
              {daysOfWeek.map((day, index) => (
                <th key={day} className="py-2 px-4 bg-blue-500 text-white font-medium">
                  {day}
                </th>
              ))}
              <th className="py-2 px-4 bg-blue-500 text-white rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody>
            {Employee.map((employee, idx) => (
              <tr key={idx} className="hover:bg-blue-100">
                <td className="py-2 px-4 border-t border-gray-200">
                  <div className='mr-8'>
                    <MockEmployee
                      name={employee.name}
                      image={employee.image}
                      role={employee.role}
                    />
                  </div>
                </td>
                {daysOfWeekAbbr.map((dayAbbr, index) => (
                  <td key={dayAbbr} className="py-2 px-4 border-t border-gray-200 text-center">
                    <div>
                      <strong>Apertura:</strong>
                      {employee.assignments[dayAbbr].apertura.map((task, idx) => (
                        <div key={idx} className="text-sm">
                          {task}
                        </div>
                      ))}
                    </div>
                    <div>
                      <strong>Servizio:</strong>
                      {employee.assignments[dayAbbr].servizio.map((task, idx) => (
                        <div key={idx} className="text-sm">
                          {task}
                        </div>
                      ))}
                    </div>
                    <div>
                      <strong>Chiusura:</strong>
                      {employee.assignments[dayAbbr].chiusura.map((task, idx) => (
                        <div key={idx} className="text-sm">
                          {task}
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default Table;
