import { useState } from "react";
import "./Table.css";

const Table = ({
  columns = [{ name: "", field: "" }],
  rows = [{ columnName: "value" }],
  className = "",
  style = {},
  isPagination = false,
  pageSize = 10,
  pageMenuPlacement = "center",
  isSerialized = false,
}) => {
  const [pagination, setPagination] = useState([0, pageSize - 1]);

  const handlePagination = (direction) => {
    const [start, end] = pagination;
    if (direction === "next" && end < rows.length - 1) {
      setPagination([start + pageSize, end + pageSize]);
    } else if (direction === "previous" && start > 0) {
      setPagination([start - pageSize, end - pageSize]);
    }
  };

  return (
    <div className={`simplicity-table ${className}`} style={style}>
      <div className="simplicity-table-container">
        <table>
          <thead>
            <tr>
              {isSerialized && <th>S.No</th>}
              {columns.map((column, index) => (
                <th key={index}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(pagination[0], pagination[1] + 1).map((row, index) => (
              <tr key={index}>
                {isSerialized && <td>{pagination[0] + index + 1}</td>}
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column.field || column.name]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPagination && (
        <div
          className="simplicity-table-pagination"
          style={{ justifyContent: pageMenuPlacement }}
        >
          <button
            onClick={() => setPagination([0, pageSize - 1])}
            disabled={pagination[0] === 0}
          >
            {"<<"}
          </button>
          <button
            onClick={() => handlePagination("previous")}
            disabled={pagination[0] === 0}
          >
            {"<"}
          </button>
          <p>
            {pagination[0] + 1} - {Math.min(pagination[1] + 1, rows.length)} of{" "}
            {rows.length}
          </p>
          <button
            onClick={() => handlePagination("next")}
            disabled={pagination[1] >= rows.length - 1}
          >
            {">"}
          </button>
          <button
            onClick={() =>
              setPagination([rows.length - pageSize, rows.length - 1])
            }
            disabled={pagination[1] >= rows.length - 1}
          >
            {">>"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
