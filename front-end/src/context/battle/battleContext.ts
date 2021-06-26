import { createContext } from "react";

const contextDefaultValues: ContextType = {
  sensors: [],
  showDrawer: false,
  openDrawer: () => {},
  closeDrawer: () => {}
}

const battleContext = createContext<ContextType>(contextDefaultValues);

export default battleContext;