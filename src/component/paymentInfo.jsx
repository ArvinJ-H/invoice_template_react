import React from "react";

function paymentInfo() {
  return (
    <div className="border">
      <p className="name">Payment Info</p>
      <br />
      <p className="otherDetail">BSB: 062181</p>
      <p className="otherDetail">Account No. :10704326</p>
      <br />
      <p className='name'>TOTAL DUE</p>
      <p className='money'> AU$ 10,000</p>
    </div>
  );
}

export default paymentInfo;