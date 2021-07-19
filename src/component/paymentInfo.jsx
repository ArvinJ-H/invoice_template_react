import React, { useRef } from "react";

import ContentEditable from "react-contenteditable";

function PaymentInfo() {
    const bsb = useRef("062181");
    const accountNo = useRef("10704326");

    const handleBSB = (evt) => {
        bsb.current = evt.target.value;
    };
    const handleAccountNo = (evt) => {
        accountNo.current = evt.target.value;
    };
    const handleBlur = () => {
        console.log(bsb.current);
        console.log(accountNo.current);
    };
    return (
        <div className="border">
            <p className="name">Payment Info</p>
            <br />
            <div className="invoice-payment">
                <p className="otherDetail">BSB:&nbsp;</p>
                <ContentEditable
                    className="paymentDetail"
                    html={bsb.current}
                    onBlur={handleBlur}
                    onChange={handleBSB}
                />
            </div>
            <div className="invoice-payment">
                <p className="otherDetail">Account No. :&nbsp;</p>
                <ContentEditable
                    className="paymentDetail"
                    html={accountNo.current}
                    onBlur={handleBlur}
                    onChange={handleAccountNo}
                />
            </div>

            <p className="name">TOTAL DUE</p>
            <p className="money"> AU$ 10,000</p>
        </div>
    );
}

export default PaymentInfo;
