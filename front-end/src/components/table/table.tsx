import { Table, TableHead } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { Size } from "@material-ui/core/Table/Table";
import { Padding } from "@material-ui/core/Table/Table";
import React from "react";
import { Column } from "react-table";
import { useTable } from "react-table";


interface IStandardTable {
  columns: Array<Column<any>>;
  data: Array<any>;
  padding?: Padding;
  size?: Size;
  stickyHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const TableStandard = (props: IStandardTable) => {
  const { columns, data, ...tableProps } = props;
  const table = useTable({ columns, data });
  const { getTableProps, headerGroups, rows, prepareRow } = table;
  return (
    <Table {...tableProps} {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup:any) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column:any) => (
              <TableCell {...column.getHeaderProps()}>
                <div className={"text-xs"}>{column.render("Header")}</div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row:any) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell:any) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    <div className={"text-xs"}>{cell.render("Cell")}</div>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableStandard;