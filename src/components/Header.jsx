// src/components/Header.js
import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';

const Header = () => {
  const { isDaily, toggleDashboard } = useDashboard();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">SalTurno</h1>
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
