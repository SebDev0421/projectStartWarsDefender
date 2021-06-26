import React from "react";
import { useReducer } from "react";
import BattleContext from "./battleContext";
import battleReducer from "./battleReducer";

import { SHOW_DRAWER, CLOSE_DRAWER } from "../../types/battle/types";

const BattleState = ({ children } : any) => {
  const initialState: ContextType = {
    sensors: [],
    showDrawer: false,
    openDrawer: () => {},
    closeDrawer: () => {}
  }

  const [ state, dispatch ] = useReducer(battleReducer, initialState);
  
  const openDrawer = () => {
    dispatch({
      type: SHOW_DRAWER
    })
  }

  const closeDrawer = () => {
    dispatch({
      type: CLOSE_DRAWER
    })
  }

  return (
    <BattleContext.Provider
      value={{
        sensors: state.sensors,
        showDrawer: state.showDrawer,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </BattleContext.Provider>
  )

}

export default BattleState;