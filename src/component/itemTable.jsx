import React, { useEffect } from "react";

import { useTable } from "react-table";

function ItemTable({data, keys}) {

  console.log("sfafafadfa")
  console.log(keys)
  console.log(data)
  // useEffect(() => {
  //   data = tableData.data
  //   // console.log("wokkk")
  // },[data]);

  // console.log("jananananan")
  // console.log(tableData.data)
  // console.log("jananananan")

  const handlethis =()=>{
    console.log("ppopopopopopopoppo")
    // console.log(data)
    console.log(keys)
  }

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className='itemTable' key={keys}>
      <table {...getTableProps()} style={{ border: "solid 1px black" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handlethis}>ssss</button>
    </div>
  );
}
export default ItemTable;
