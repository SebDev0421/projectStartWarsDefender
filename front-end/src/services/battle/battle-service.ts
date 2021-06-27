import { apiAxios } from "../api.axios";
import { apiRoutes } from "../api.routes";
import { IBattleListReqQuery } from "./battle-service.interface";
import { IBattleListResData } from "./battle-service.interface";


export const battleList = (
  params: IBattleListReqQuery
) => (): Promise<IBattleListResData> => {
  const url = apiRoutes.battle.list()
  return apiAxios
    .get(url, {params})
    .then((res) => res.data)
}