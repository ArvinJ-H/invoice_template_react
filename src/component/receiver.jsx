import React, { useRef } from "react";

import ContentEditable from "react-contenteditable";

function Receiver() {
  const companyName = useRef("Jintao Han");
  const abn = useRef("31 981 973 365");
  const email = useRef("arvin.hjt@gmail.com");

  const handleCompany = (evt) => {
    companyName.current = evt.target.value;
  };
  const handleAbn = (evt) => {
    abn.current = evt.target.value;
  };
  const handleEmail = (evt) => {
    email.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(companyName.current);
    console.log(abn.current);
    console.log(email.current);
  };
  return (
    <div className="border">
      <p className="name">To</p>
      <ContentEditable
        className="name"
        html={companyName.current}
        onBlur={handleBlur}
        onChange={handleCompany}
      />
      <br />
      <ContentEditable
        className="otherDetail"
        html={abn.current}
        onBlur={handleBlur}
        onChange={handleAbn}
      />
      <ContentEditable
        className="otherDetail"
        html={email.current}
        onBlur={handleBlur}
        onChange={handleEmail}
      />
    </div>
  );
}

export default Receiver;
