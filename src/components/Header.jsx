import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDashboard } from '../contexts/DashboardContext';

const Header = () => {
  const { isDaily, toggleDashboard } = useDashboard();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl cursor-pointer" onClick={handleLogoClick}>
        SalTurno
      </h1>
      <div className="flex items-center space-x-4">
        <p>{isDaily ? 'Daily Dashboard' : 'Weekly Dashboard'}</p>
        <div
          className={`w-20 h-10 flex items-center bg-white rounded-full p-1 cursor-pointer ${isDaily ? 'justify-start' : 'justify-end'}`}
          onClick={toggleDashboard}
        >
          <div className="bg-blue-600 w-8 h-8 rounded-full shadow-md transform transition-transform duration-300"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
