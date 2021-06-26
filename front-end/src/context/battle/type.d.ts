interface IBattle {
  id: number;
}

interface ISensor {
  id: number
}

type ContextType = {
  sensors: ISensor[],
  showDrawer: boolean,
  openDrawer: () => void,
  closeDrawer: () => void,
}