// src/pages/Dashboard.js
import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';
import DailyDashboard from './dailyDasboard/DailyDashboard';
import TaskGrid from './weeklyDashboard/TaskGrid';

const Dashboard = () => {
  const { isDaily } = useDashboard();

  return (
    <div className="p-4">
      {isDaily ? <DailyDashboard /> : <TaskGrid />}
    </div>
  );
};

export default Dashboard;
