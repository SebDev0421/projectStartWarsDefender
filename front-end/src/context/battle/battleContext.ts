import { createContext } from "react";

const contextDefaultValues: ContextType = {
  sensors: []
}

const battleContext = createContext<ContextType>(contextDefaultValues);

export default battleContext;