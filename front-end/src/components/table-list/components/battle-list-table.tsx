import React from "react";
import { Column } from "react-table";
import Table from "../../table/table";
import { IBattleListResData } from "../../../services/battle/battle-service.interface";



const BattleListTable = ({ data } : any) => {
  const columns: Array<Column<IBattleListResData>> = [
    { Header: "Fecha", accessor: "date"},
    { Header: "Nave", accessor: (row: any) => (
      <div className="text-left" >{row.data[0].name} </div>
    )},
    { Header: "Valor", accessor: (row: any) => (
      <div className="text-left" >{row.data[0].value} </div>
    )},
    { Header: "Sensor", accessor: (row: any) => (
      <div className="text-left" >{row.data[0].sensor} </div>
    )}
  ] 

  return (
    <Table 
      style={{ border: "0px" }}
      className={"text-xs"}
      stickyHeader={true}
      size={"small"}
      columns={columns}
      data={data}
    />
  )
}
export default BattleListTable;