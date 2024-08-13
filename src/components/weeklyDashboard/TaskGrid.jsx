import React from 'react';
import { allTasks } from '../../data/tasks';
import DailyTaskGrid from './DailyTaskGrid';
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

const daysOfWeek = getCurrentWeekDays();

const TaskGrid = () => {
  return (
    <div className="mt-6 space-y-8">
      <h1 className="text-3xl font-semibold text-gray-800 ml-2">Programma settimanale</h1>
      {daysOfWeek.map((day, index) => (
        <div key={index} className="border border-gray-300 rounded-md shadow-lg">
          <Title title={day} />
          <DailyTaskGrid day={day.split(' ')[0]} />      
        </div>
      ))}
    </div>
  );
};

export default TaskGrid;
