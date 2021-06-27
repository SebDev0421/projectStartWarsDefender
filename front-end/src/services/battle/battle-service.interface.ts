

export interface IBattleListReqQuery {
  page?: number;
  limit?: number;
}

export interface IBattleListResData {
  date: string;
  data: [IBattle]
}

type IBattle = {
  name: string;
  value: string;
  sensor: number
}