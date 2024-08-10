// src/utils/dateUtils.js
export const getCurrentDay = () => {
    const today = new Date();
    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
    const day = daysOfWeek[today.getDay() - 1];
    const currentDate = `${day} ${today.getDate()}/${today.getMonth() + 1}`;
    return currentDate;
  };
  