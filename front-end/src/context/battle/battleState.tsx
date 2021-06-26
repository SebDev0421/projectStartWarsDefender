import React from "react";
import { useReducer } from "react";
import BattleContext from "./battleContext";
import battleReducer from "./battleReducer";

import {} from "../../types/battle/types";

const BattleState = ({ children } : any) => {
  const initialState: ContextType = {
    sensors: []
  }

  const [ state, dispatch ] = useReducer(battleReducer, initialState);
  
  return (
    <BattleContext.Provider
      value={{
        sensors: state.sensors
      }}
    >
      {children}
    </BattleContext.Provider>
  )

}

export default BattleState;