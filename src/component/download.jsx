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
        col1: "Item 1222",
        col2: "1",
        col3: "10000",
        col4: "10000",
    };

    const handleDelete = () => {
        datas.pop();
        setKey(key - 1);
    };

    const handleAdd = () => {
        datas.push(template);
        setKey(key + 1);
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
