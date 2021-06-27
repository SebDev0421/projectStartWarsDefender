import React from "react";
import useMethods from "use-methods";
import _ from "lodash";

import { useBattleList } from "../../services/battle/use-battle";

import { ITableListPageState } from "../table-list/table-list";
import { getTableListMethods } from "../table-list/table-list";
import BattleTableTemplate from "../table-list/table-list";
import BattleTable from "../table-list/components/battle-list-table";

export interface IBattleListStateFilters {
  page?: string;
  limit?: number;
}

export type IBattleListState = ITableListPageState<IBattleListStateFilters>

const initialState: IBattleListState = {
  filters: {
    page: "",
    limit: 0,
  },
  count: 0,
  currentPage: 0,
  perPage: 25,
  perPageOptions: [25, 50, 100],
}

const methods = (state: IBattleListState) => ({
  ...getTableListMethods(state),
})

const PanelControl = () => {
  const [ state, stateMethods ] = useMethods(methods, initialState);
  const battleListQuery = useBattleList({
    limit: state.perPage,
    page: state.currentPage
  });
  
  const { data, isLoading } = battleListQuery;

  return (
    <div className="flex justify-around h-full">
      <BattleTableTemplate 
        title={"Analisis de datos"}
        isLoading={isLoading}
        isEmpty={_.isEmpty(data)}
        table={<BattleTable data={data} />}
        tableListMethods={stateMethods}
        tableListState={state}
      />
    </div>
  )
};

export default PanelControl;