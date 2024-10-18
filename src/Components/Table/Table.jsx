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
}) => {
  return (
    <table className={`table ${className}`} style={style}>
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                return <td key={index}>{row[column.field || column.name]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
