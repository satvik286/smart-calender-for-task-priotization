
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, getDay } from 'date-fns';

export const formatDate = (date: Date, formatStr: string): string => {
  return format(date, formatStr);
};

export const getMonthDays = (date: Date): Date[] => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachDayOfInterval({ start, end });
};

export const isCurrentMonth = (date: Date, currentMonth: Date): boolean => {
  return isSameMonth(date, currentMonth);
};

export const isToday = (date: Date): boolean => {
  return isSameDay(date, new Date());
};

export const getNextMonth = (date: Date): Date => {
  return addMonths(date, 1);
};

export const getPreviousMonth = (date: Date): Date => {
  return addMonths(date, -1);
};

export const getWeekDays = (): string[] => {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};

export const getCalendarDays = (date: Date): Date[] => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const startDate = monthStart;
  const endDate = monthEnd;
  
  // Get days of the month
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  
  // Calculate days needed to fill the first row (previous month days)
  const firstDayOfMonth = getDay(monthStart);
  const prevMonthDays = Array.from({ length: firstDayOfMonth }).map((_, i) => {
    return new Date(monthStart.getFullYear(), monthStart.getMonth(), -i);
  }).reverse();
  
  // Calculate days needed to fill the last row (next month days)
  const lastDayOfMonth = getDay(monthEnd);
  const nextMonthDays = Array.from({ length: 6 - lastDayOfMonth }).map((_, i) => {
    return new Date(monthEnd.getFullYear(), monthEnd.getMonth() + 1, i + 1);
  });
  
  return [...prevMonthDays, ...days, ...nextMonthDays];
};

export const getTimeSlots = (start: number = 8, end: number = 20, interval: number = 30): string[] => {
  const slots: string[] = [];
  
  for (let hour = start; hour < end; hour++) {
    slots.push(`${hour}:00`);
    if (interval === 30) {
      slots.push(`${hour}:30`);
    }
  }
  
  return slots;
};

export const formatTimeSlot = (slot: string): string => {
  const [hour, minute] = slot.split(':');
  const hourNum = parseInt(hour, 10);
  const period = hourNum >= 12 ? 'PM' : 'AM';
  const hour12 = hourNum % 12 || 12;
  
  return `${hour12}:${minute} ${period}`;
};
