import { createContext } from "react";

const contextDefaultValues: ContextType = {
  sensors: [],
  showDrawer: false,
  alarmEnemy: false,
  alarmSensor: false,
  openDrawer: () => {},
  closeDrawer: () => {},
  saveSensors: () => {},
}

const battleContext = createContext<ContextType>(contextDefaultValues);

export default battleContext;