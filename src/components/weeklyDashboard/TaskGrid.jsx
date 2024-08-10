import React from 'react';
import { allTasks } from '../../data/tasks';
import Table from './Table';

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

const getCurrentWeekDaysAbbr = () => {
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
  return daysOfWeek; // Just return the abbreviations, no date
};

const daysOfWeekAbbr = getCurrentWeekDaysAbbr();


const TaskGrid = () => {
  const tasks = allTasks; // assuming allTasks contains the tasks data

  return (
    <Table daysOfWeek={daysOfWeek} daysOfWeekAbbr = {daysOfWeekAbbr}/>
  );
};

export default TaskGrid;
