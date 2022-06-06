import React from 'react';
import { Calendar } from 'tdesign-react';

export default function CalendarExample() {
  const getWeekText = React.useCallback((calendarWeek) => {
    const output = `星期${calendarWeek.day}`;
    return output;
  }, []);

  return (
    <div className="tdesign-demo-block-column-large">
      <Calendar week={(calendarWeek) => <div>{getWeekText(calendarWeek)}</div>} />;
    </div>
  );
}