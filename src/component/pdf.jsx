import React from "react";

import Title from "./title";
import InvoiceNo from "./invoiceNo";
import InvoiceDate from "./invoiceDate";
import DueDate from "./dueDate";
import Sender from "./sender";
import Receiver from "./receiver";
import ItemTable from "./itemTable";
import SumaryTable from "./summaryTable";

import "../style/style.scss";
class Document extends React.Component {
  render() {
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
        <ItemTable />
        <SumaryTable />
      </div>
    );
  }
}

export default Document;
