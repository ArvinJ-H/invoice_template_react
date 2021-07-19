import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DueDate() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="invoice-Due">
            <p>Due Date:&nbsp;</p>
            <div className="invoice-Date-picker">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
        </div>
    );
}

export default DueDate;
