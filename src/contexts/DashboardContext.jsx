import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [isDaily, setIsDaily] = useState(false);

  const toggleDashboard = () => setIsDaily(!isDaily);
  
  const setToWeekly = () => setIsDaily(false); // Ensure it's set to Weekly

  return (
    <DashboardContext.Provider value={{ isDaily, toggleDashboard, setToWeekly }}>
      {children}
    </DashboardContext.Provider>
  );
};
