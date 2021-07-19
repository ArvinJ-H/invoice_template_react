import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";

import SumaryTable from "./summaryTable";
import PaymentInfo from "./paymentInfo";
// Create an editable cell renderer
const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell,
};

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
    // For this example, we're using pagination to illustrate how to stop
    // the current page from resetting when our data changes
    // Otherwise, nothing is different here.
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
        useTable(
            {
                columns,
                data,
                defaultColumn,
                // use the skipPageReset option to disable page resetting temporarily
                autoResetPage: !skipPageReset,
                // updateMyData isn't part of the API, but
                // anything we put into these options will
                // automatically be available on the instance.
                // That way we can call this function from our
                // cell renderer!
                updateMyData,
            },
            usePagination
        );

    // Render the UI for your table
    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

function ETable(tableData) {
    const columns = React.useMemo(
        () => [
            {
                Header: "Item",
                accessor: "col1", // accessor is the "key" in the data
            },
            {
                Header: "Quantity",
                accessor: "col2",
            },
            {
                Header: "Unit Price (AUD)",
                accessor: "col3",
            },
            {
                Header: "Cost(AUD)",
                accessor: "col4",
            },
        ],
        []
    );
    const [amount, setAmount] = useState(0);
    var money = 0;

    const [data, setData] = React.useState(tableData.tableData);
    const [skipPageReset, setSkipPageReset] = React.useState(false);
    useEffect(() => {
        setSkipPageReset(true);
        setData(tableData.tableData);
        tableData.tableData.forEach(function (money) {
            money = money + parseInt(money.col4);
        });
        setAmount(money);
        updateMyData();
    }, [tableData]);
  
    console.log(money);
    console.log(amount + "moneyy");

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true);
        setData((old) =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    };
                }
                return row;
            })
        );
    };

    // After data chagnes, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    React.useEffect(() => {
        setSkipPageReset(false);
    }, [data]);

    // Let's add a data resetter/randomizer to help
    // illustrate that flow...

    return (
        <div>
            <div className="itemTable">
                <Table
                    columns={columns}
                    data={data}
                    updateMyData={updateMyData}
                    skipPageReset={skipPageReset}
                    pageSize={20}
                />
            </div>
            <div className="payment">
                <PaymentInfo amount={amount} />
                <SumaryTable amount={amount} />
            </div>
        </div>
    );
}

export default ETable;
