// src/pages/DailyDashboard.js
import React from 'react';
import DailyTaskGrid from './DailyTaskGrid';
import EmployeeDailyTask from './EmployeeDailyTask';
import Title from './Title';
import { getCurrentDay } from '../../utils/dateUtils';

const DailyDashboard = () => {
  const currentDay = getCurrentDay();

  return (
    <div className="mt-6 space-y-8">
      <div className="border border-gray-300 rounded-md shadow-lg">
        <Title title="Tasks" bgColor="bg-green-600" />
        <DailyTaskGrid />
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg">
        <Title title="Dipendenti" bgColor="bg-green-600" />
        <EmployeeDailyTask />
      </div>
    </div>
  );
};

export default DailyDashboard;
