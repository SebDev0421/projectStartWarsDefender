import React from "react";
import { useReducer } from "react";
import BattleContext from "./battleContext";
import battleReducer from "./battleReducer";

import { 
  SHOW_DRAWER, 
  CLOSE_DRAWER, 
  SAVE_SENSORS, 
  SHOW_ALERT_ENEMY, 
  SHOW_ALERT_SENSOR, 
  HIDE_ALERT_ENEMY,
  HIDE_ALERT_SENSOR
} from "../../types/battle/types";

const BattleState = ({ children } : any) => {
  const initialState: ContextType = {
    sensors: [],
    alarmEnemy: false,
    alarmSensor: false,
    showDrawer: false,
    openDrawer: () => {},
    closeDrawer: () => {},
    saveSensors: () => {},
  }

  const [ state, dispatch ] = useReducer(battleReducer, initialState);
  
  const saveSensors = (sensor: ISensor ) => {
    if(sensor.type === '1'){
      dispatch({
        type: SHOW_ALERT_ENEMY
      })
    }else {
      dispatch({
        type: HIDE_ALERT_ENEMY
      })
    }
    if(sensor.type === '2'){
      dispatch({
        type: SHOW_ALERT_SENSOR
      })
    }else {
      dispatch({
        type: HIDE_ALERT_SENSOR
      })
    }
    dispatch({
      type: SAVE_SENSORS,
      payload: sensor
    })
  }

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
        alarmEnemy: state.alarmEnemy,
        alarmSensor: state.alarmSensor,
        openDrawer,
        closeDrawer,
        saveSensors,
      }}
    >
      {children}
    </BattleContext.Provider>
  )

}

export default BattleState;