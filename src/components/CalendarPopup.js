// src/components/CalendarPopup.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/CalendarPopup.css";

const CalendarPopup = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!isOpen) return null;

  return (
    <div className="calendar-overlay" onClick={onClose}>
      <div className="calendar-popup" onClick={(e) => e.stopPropagation()}>
        <h3>Select a Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
        />
        <button className="calendar-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CalendarPopup;
