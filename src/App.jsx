import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Employee from './components/employee/Employee'; // Import the new component
import { DashboardProvider } from './contexts/DashboardContext';

const App = () => {
  return (
    <DashboardProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees/:employee" element={<Employee />} /> {/* New route */}
            </Routes>
          </main>
        </div>
      </Router>
    </DashboardProvider>
  );
};

export default App;
