import React, { useMemo } from "react";

import { useTable } from "react-table";

function ItemTable() {
  const data = React.useMemo(
    () => [
      {
        col1: "Item 1",
        col2: "1",
        col3: "10,000",
        col4: "10,000",
      },
      {
        col1: "Item 1",
        col2: "1",
        col3: "10,000",
        col4: "10,000",
      },
      {
        col1: "Item 1",
        col2: "1",
        col3: "10,000",
        col4: "10,000",
      },
    ],
    []
  );

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
    <div className='itemTable'>
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
export default ItemTable;
