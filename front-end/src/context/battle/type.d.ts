interface IBattle {
  id: number;
}

interface ISensor {
  id: number
}

type ContextType = {
  sensors: ISensor[],
}