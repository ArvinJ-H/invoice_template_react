import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";

function InvoiceNo() {
  const text = useRef("2021001");

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(text.current);
  };
  return (
    <div className="invoice-No">
      <p>Invoice No. :&nbsp;</p>
      <div className="invoice-No-more">
        <ContentEditable
          html={text.current}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default InvoiceNo;
