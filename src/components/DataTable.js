import { useTable } from "react-table";

function DataTable({ columns, data, heading }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <p className=" bg-[#353535] py-2 border-x-2 border-gray-500 text-white  flex p-5 font-medium">
        {heading}
      </p>
      <table
        {...getTableProps()}
        className=" bg-white-500"
        style={{ width: "100%", border: "2px solid gray" }}
      >
        <thead style={{ width: "100%", border: "2px solid gray" }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                style={{ border: "1px solid rgba(220,220,220 ,50)" }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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

export default DataTable;
