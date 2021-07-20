import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function InvoiceDate() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="invoice-Date">
            <p>Invoice Date:&nbsp;</p>
            <div className="invoice-Date-picker">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
        </div>
    );
}

export default InvoiceDate;
