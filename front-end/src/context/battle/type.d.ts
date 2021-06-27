interface IBattle {
  id: number;
}

interface ISensor {
  data: string,
  value: string,
  index: number,
  ship: string,
  type: string,
}

type ContextType = {
  sensors: ISensor[],
  showDrawer: boolean,
  alarmEnemy: boolean,
  alarmSensor: boolean,
  openDrawer: () => void,
  closeDrawer: () => void,
  saveSensors: ( sensor: ISensor) => void,
}