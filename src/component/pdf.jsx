import React from "react";

import Title from "./title";
import InvoiceNo from "./invoiceNo";
import InvoiceDate from "./invoiceDate";
import DueDate from "./dueDate";
import Sender from "./sender";
import Receiver from "./receiver";
import ItemTable from "./itemTable";
import SumaryTable from "./summaryTable";
import PaymentInfo from "./paymentInfo";

import "../style/style.scss";

class Document extends React.Component {
    render() {
        var keys = this.props.keys;
        var amount = 0;
        // console.log("lllllll");
        // console.log(origianlData);
        // console.log("lllllll");

        this.props.tableData.forEach(function (money) {
            amount = amount + parseInt(money.col4);
        });

        const handlethis = () => {
            console.log("ppopopopopopopoppo");
            console.log(keys);
            console.log(this.props.keys);
            console.log(this.props.tableData);
        };
        return (
            <div>
                <button onClick={handlethis}>aaaaaa</button>

                <Title />
                <div className="invoice">
                    <InvoiceNo />
                    <InvoiceDate />
                    <DueDate />
                </div>
                <div className="companyInfo">
                    <Sender />
                    <Receiver />
                </div>
                <ItemTable data={this.props.tableData} keys={this.props.keys} />
                <div className="payment">
                    <PaymentInfo amount={amount} />
                    <SumaryTable amount={amount} />
                </div>
            </div>
        );
    }
}

export default Document;
