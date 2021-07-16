import React, { useMemo } from "react";

import { useTable } from "react-table";

function SumaryTable() {
  const data = React.useMemo(
    () => [
      {
        col1: "Subtotal (AUD)",
        col2: "10,000"
      },
      {
        col1: "GST",
        col2: "0"
      },
      {
        col1: "Total (AUD)",
        col2: "10,000"
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Invoice Summary",
        columns: [
            {
              accessor: 'col1',
            },
            {
              accessor: 'col2',
            },
          ],// accessor is the "key" in the data
      },
     
     
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className='summaryTable'>
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
    </div>
  );
}
export default SumaryTable;
