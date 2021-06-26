import { SHOW_DRAWER, CLOSE_DRAWER } from "../../types/battle/types";

const battleReducer = ( state:any, action:any ) => {
  switch(action.type){
    case SHOW_DRAWER:
      return {
        ...state,
        showDrawer: true,
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