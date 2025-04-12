
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatDate, getCalendarDays, getWeekDays, isCurrentMonth, isToday } from "@/utils/dateUtils";
import { cn } from "@/lib/utils";

interface CalendarProps {
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const weekDays = getWeekDays();
  const calendarDays = getCalendarDays(currentDate);
  
  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold">
          {formatDate(currentDate, "MMMM yyyy")}
        </h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePreviousMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="calendar-grid mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="flex justify-center items-center h-8 font-medium text-sm text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="calendar-grid">
        {calendarDays.map((day, i) => {
          const isCurrentMonthDay = isCurrentMonth(day, currentDate);
          const isTodayDay = isToday(day);
          const isSelected = isCurrentMonth(day, selectedDate) && day.getDate() === selectedDate.getDate();
          
          return (
            <div
              key={i}
              className={cn(
                "calendar-day",
                isCurrentMonthDay ? "calendar-day-current-month" : "calendar-day-other-month opacity-40",
                isTodayDay ? "calendar-day-today" : "",
                isSelected ? "calendar-day-selected rounded-full" : ""
              )}
              onClick={() => handleDateClick(day)}
            >
              <span>{formatDate(day, "d")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
