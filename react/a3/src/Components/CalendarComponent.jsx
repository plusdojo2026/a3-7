import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ onDateSelect }) {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {

    setSelectedDate(date);

    const formatDate =
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0");

    onDateSelect(formatDate);

  };

  return (

    <div className="calendar-area">

      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
      />

    </div>

  );

}

export default CalendarComponent;