import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardContext';
import employeesData from '../../data/tasks'; // Adjust the import path based on your file structure
import EmployeeDailyTask from './EmployeeDailyTask';
import Title from './Title';

// Function to get the current week's days with dates
const getCurrentWeekDays = () => {
  const today = new Date();
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  return daysOfWeek.map((day, index) => {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + index);
    const dayWithDate = `${day} ${currentDate.getDate()}/${currentDate.getMonth() + 1}`;
    return dayWithDate;
  });
};

const daysOfWeekWithDates = getCurrentWeekDays();

const Employee = () => {
  const { employee: employeeName } = useParams(); // Extract the employee name from the URL params
  const { isDaily, setToWeekly } = useDashboard(); // Access the context
  const navigate = useNavigate();

  // Set the dashboard to weekly on mount
  useEffect(() => {
    setToWeekly();
  }, [setToWeekly]);

  // Redirect to homepage if the user switches to daily
  useEffect(() => {
    if (isDaily) {
      navigate('/');
    }
  }, [isDaily, navigate]);

  // Check if employeeName is defined
  if (!employeeName) {
    return <div className="text-red-500 text-lg font-semibold">Error: No employee specified in the URL</div>;
  }

  // Find the specific employee by name (case-insensitive)
  const selectedEmployee = employeesData.find(emp =>
    emp.name && emp.name.toLowerCase() === employeeName.toLowerCase()
  );

  // If no employee is found, display a message
  if (!selectedEmployee) {
    return <div className="text-red-500 text-lg font-semibold">Employee not found</div>;
  }

  return (
    <div className="mt-6 space-y-8 p-4">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={selectedEmployee.image}
          alt={selectedEmployee.name}
          className="w-32 h-32 rounded-full shadow-md"
        />
        <h1 className="text-4xl font-semibold text-gray-800">{selectedEmployee.name}</h1>
      </div>
      {daysOfWeekWithDates.map((dayWithDate, index) => (
        <div key={index} className="border border-gray-300 rounded-md shadow-lg">
          <Title title={dayWithDate} />
          <EmployeeDailyTask employee={selectedEmployee} day={dayWithDate.split(' ')[0]} />
        </div>
      ))}
    </div>
  );
};

export default Employee;
