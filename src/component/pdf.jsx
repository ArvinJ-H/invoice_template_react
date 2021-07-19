import React from "react";

import Title from "./title";
import InvoiceNo from "./invoiceNo";
import InvoiceDate from "./invoiceDate";
import DueDate from "./dueDate";
import Sender from "./sender";
import Receiver from "./receiver";

import ETable from "./editableTable";

import "../style/style.scss";

class Document extends React.Component {
    render() {
        var amount = 0;
        this.props.tableData.forEach(function (money) {
            amount = amount + parseInt(money.col4);
        });


        return (
            <div>
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
                <ETable tableData={this.props.tableData}/>
               
            </div>
        );
    }
}

export default Document;
