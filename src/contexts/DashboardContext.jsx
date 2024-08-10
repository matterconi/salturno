// src/contexts/DashboardContext.js
import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => {
  return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }) => {
  const [isDaily, setIsDaily] = useState(true);

  const toggleDashboard = () => {
    setIsDaily(prevIsDaily => !prevIsDaily);
  };

  return (
    <DashboardContext.Provider value={{ isDaily, toggleDashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};
