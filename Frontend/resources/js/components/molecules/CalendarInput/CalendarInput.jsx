import React from "react";
import { Calendar } from "primereact/calendar";

import "./CalendarInput.scss";
import { useState } from "react";

const CalendarInput = ({ className, onChange }) => {
    const [date, setDate] = useState(null);
    return (
        <Calendar
            className={className}
            value={date}
            onChange={(e) => {setDate(e.value); onChange(e.value);}}
            inline
        />
    );
};

export default CalendarInput;
