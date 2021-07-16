import React from "react";

import CompanyName from "./companyName";
import Title from './title'

import '../style/style.scss';
class Document extends React.Component {
  render() {

    const page ={
      borderStyle: "dotted",
      aspectRatio : "9/16",
      width : "70%"
    }

    const test ={
      color : "red"
    }

    return (
      <div style ={page}>
        <Title />
        <CompanyName />
      </div>
    );
  }
}

export default Document;
