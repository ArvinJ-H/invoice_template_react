import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import PDF from "./pdf";
import tableData from "../assets/data.json";

function App() {
    const [key, setKey] = useState(0);
    const componentRef = useRef();
    const originalData = tableData;
    const datas = tableData;
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const template = {
        name: "Item 1222",
        quantity: "1",
        price: "10000",
        cost: "",
    };

    const handleDelete = () => {
        datas.pop();
        setKey(key - 1);
        console.log(datas)
    };

    const handleAdd = () => {
        datas.push(template);
        setKey(key + 1);
        console.log(datas)

    };

    return (
        <div>
            <button onClick={handlePrint}>Print this out!</button>
            <button onClick={handleDelete}>Delete one</button>
            <button onClick={handleAdd}>add one</button>

            <div className="page">
                <PDF
                    keys={key}
                    tableData={datas}
                    originalData={originalData}
                    ref={componentRef}
                />
            </div>
        </div>
    );
}

export default App;
