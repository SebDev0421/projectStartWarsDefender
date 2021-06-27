import { TablePagination } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import clsx from "clsx";
import { ReactNode } from "react";
import { Fragment } from "react";
import React from "react";
import { Default } from "react-if";
import { Case } from "react-if";
import { Switch } from "react-if";
import Panel from "./components/panel";
import FixedScrollSectionTemplate from "./components/fixed-scroll-section.tamplate";

export interface ITableListPageState<F> {
  filters: F;
  perPage: number;
  count: number;
  currentPage: number;
  perPageOptions: number[];
}

export interface ITableListPageMethods {
  updateFilters: (params: any) => void;
  updateCurrentPage: (currentPage: number) => void;
  updatePerPage: (perPage: number) => void;
  updateCount: (perPage: number) => void;
}

interface ITableListPageTemplate {
  tableListMethods: ITableListPageMethods;
  tableListState: ITableListPageState<any>;
  isLoading: boolean;
  isEmpty: boolean;
  title: ReactNode;
  table: ReactNode;
}

export const getTableListMethods = (state: ITableListPageState<any>) => ({
  updateFilters(filters: any) {
    state.filters = filters;
  },
  updateCurrentPage(currentPage: number) {
    state.currentPage = currentPage;
  },
  updatePerPage(perPage: number) {
    state.perPage = perPage;
  },
  updateCount(count: number) {
    state.count = count;
  },
});

const TableListPageTemplate = (params: ITableListPageTemplate) => {
  const { title, isLoading  } = params;
  const { table, tableListMethods, tableListState } = params;
  return (
    <FixedScrollSectionTemplate classname={"flex h-full"}>
      <div className={"flex-grow"}>
        <Panel title={title}>
          <Switch>
            <Case condition={isLoading}>
              <Skeleton height={"100%"} width={"100%"} variant={"rect"} />
            </Case>
            <Default
              children={() => (
                <Fragment>
                  <div
                    className={clsx(
                      "h-full overflow-y-auto border"
                    )}
                  >
                    {table}
                  </div>
                  <div className={clsx("border border-t-0")}>
                    <TablePagination
                      variant={"head"}
                      component={"div"}
                      count={tableListState.count}
                      page={tableListState.currentPage}
                      rowsPerPage={tableListState.perPage}
                      rowsPerPageOptions={tableListState.perPageOptions}
                      onChangeRowsPerPage={(e) => {
                        const perPage = Number(e.target.value);
                        tableListMethods.updatePerPage(perPage);
                      }}
                      onChangePage={(event, page) => {
                        tableListMethods.updateCurrentPage(page);
                      }}
                    />
                  </div>
                </Fragment>
              )}
            />
          </Switch>
        </Panel>
      </div>
    </FixedScrollSectionTemplate>
  );
};

export default TableListPageTemplate;