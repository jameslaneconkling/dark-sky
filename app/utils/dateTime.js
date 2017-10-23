export const time2DateTime = ({ hours, minutes }, dateTime = Date.now()) =>
  +(new Date(dateTime).setHours(hours, minutes));

export const isToday = dateTime => new Date(dateTime).getDate() === new Date().getDate();

export const isMorning = (dateTime, morningStartTime, morningEndTime) =>
  dateTime >= time2DateTime(morningStartTime, dateTime) &&
  dateTime <= time2DateTime(morningEndTime, dateTime);
