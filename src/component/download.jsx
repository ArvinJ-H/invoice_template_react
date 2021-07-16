import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';

import PDF from "./pdf";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <button onClick={handlePrint}>Print this out!</button>
        <div className="page">
        <PDF ref={componentRef} />
        </div>
    </div>
  );
}

export default App;
