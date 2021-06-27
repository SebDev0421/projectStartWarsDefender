import { 
  SHOW_DRAWER, 
  CLOSE_DRAWER, 
  SAVE_SENSORS, 
  SHOW_ALERT_ENEMY, 
  SHOW_ALERT_SENSOR,
  HIDE_ALERT_ENEMY,
  HIDE_ALERT_SENSOR, 
} from "../../types/battle/types";

const battleReducer = ( state:any, action:any ) => {
  switch(action.type){
    case SHOW_ALERT_ENEMY:
      return {
        ...state,
        alarmEnemy: true,
      }
    case SHOW_ALERT_SENSOR:
      return {
        ...state,
        alarmSensor: true,
      }
    case SAVE_SENSORS:
      return {
        ...state,
        sensors: [...state.sensors, action.payload]
      }
    case SHOW_DRAWER:
      return {
        ...state,
        showDrawer: true,
      }
    case HIDE_ALERT_ENEMY:
      return {
        ...state,
        alarmEnemy: false
      }
    case HIDE_ALERT_SENSOR: 
      return {
        ...state,
        alarmSensor: false
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        showDrawer: false,
      }
    default:
      return state;
      
  }
}
export default battleReducer;