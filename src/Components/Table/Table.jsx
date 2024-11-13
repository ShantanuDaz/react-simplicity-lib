import { useState } from "react";
import "./Table.css";
const Table = ({
  columns = [
    {
      name: "",
      field: "",
    },
  ],
  rows = [
    {
      columnName: "value",
    },
  ],
  className = "",
  style = {},
  isPagination = false,
  pageSize = 10,
  pageMenuPlacement = "center" || "start",
  isSerialized = false,
}) => {
  const pageSizeIndex = pageSize - 1;
  const [pagination, setPagination] = useState([0, pageSizeIndex]);

  const handlePagination = (direction) => {
    if (direction === "next") {
      setPagination([pagination[0] + pageSize, pagination[1] + pageSize]);
    } else {
      setPagination([pagination[0] - pageSize, pagination[1] - pageSize]);
    }
  };
  return (
    <div className={`simplicity-table ${className}`} style={style}>
      <div className="simplicity-table-container">
        <table>
          <thead>
            <tr>
              {isSerialized && <th>S.no</th>}
              {columns.map((column, index) => {
                return <th key={index}>{column.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              return (
                index >= pagination[0] &&
                index <= pagination[1] && (
                  <tr key={index}>
                    {isSerialized && <td>{index + 1}</td>}
                    {columns.map((column, index) => {
                      return (
                        <td key={index}>{row[column.field || column.name]}</td>
                      );
                    })}
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
      {isPagination && (
        <div
          className="simplicity-table-pagination"
          style={{ justifyContent: pageMenuPlacement }}
        >
          <button
            onClick={() =>
              pagination[0] !== 0 && setPagination([0, pageSizeIndex])
            }
            disabled={pagination[0] === 0}
          >
            {"<<"}
          </button>
          <button
            onClick={() => pagination[0] !== 0 && handlePagination("previous")}
            disabled={pagination[0] === 0}
          >
            {"<"}
          </button>
          <p>
            {pagination[0] + 1} - {pagination[1] + 1} of {rows.length}
          </p>
          <button
            onClick={() =>
              pagination[1] < rows.length - 1 && handlePagination("next")
            }
            disabled={pagination[1] === rows.length - 1}
          >
            {">"}
          </button>
          <button
            onClick={() =>
              pagination[1] < rows.length - 1 &&
              setPagination([rows.length - pageSize, rows.length - 1])
            }
            disabled={pagination[1] === rows.length - 1}
          >
            {">>"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
