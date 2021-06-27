import { useQuery } from "react-query";
import { UseQueryOptions } from "react-query/types/react/types";
import { IBattleListReqQuery } from "./battle-service.interface";
import { IBattleListResData } from "./battle-service.interface";
import { battleList } from "./battle-service";
export const useBattleList = (
  query: IBattleListReqQuery,
  options?: UseQueryOptions<any>
) => {
  return useQuery<IBattleListResData>(
    ["battle/list", query],
    battleList(query),
    options
  )
}